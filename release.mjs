import { readdir, readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { spawn } from 'cross-spawn';
import createDebug from 'debug';
import { request } from 'undici';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function getLatestVersion(pkgName) {
  const { body } = await request(`https://registry.npmjs.org/${pkgName}`);

  const pkg = await body.json();
  if (pkg.error) {
    return null;
  }
  const { latest } = pkg['dist-tags'];
  return latest;
}

function release(name, currentDir) {
  return new Promise((resolve, reject) => {
    const tag = /\d+\.\d+\.\d+-([a-z]+)\.\d+/.exec(name);
    const args = [
      'publish',
      '--no-git-checks',
      '--tag',
      tag ? tag[1] : 'latest'
    ];
    const child = spawn('pnpm', args, { cwd: currentDir, stdio: 'inherit' });
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      }
      else {
        reject(new Error(`'${name}' release failed! ${code}`));
      }
    });
  });
}
async function run() {
  const packagesDir = join(__dirname, 'packages');
  return Promise.all(
    (await readdir(packagesDir)).map((dirName) =>
      (async () => {
        const packageDir = join(packagesDir, dirName);
        const pkgPath = join(packageDir, 'package.json');
        const { name: pkgName, version } = JSON.parse(await readFile(pkgPath, 'utf-8'));

        const debug = createDebug(pkgName);
        debug.enabled = true;

        const latestVersion = await getLatestVersion(pkgName);
        if (latestVersion === null) {
          debug(`Package '${pkgName}' not found!`);
        }
        else {
          debug(`Latest version is '${latestVersion}'.`);
        }

        return { name: pkgName, dir: packageDir, version, latestVersion, debug };
      })()
    )
  ).then(async (arr) => {
    const messages = [];
    for (const { name, dir, version, latestVersion, debug } of arr) {
      if (version !== latestVersion) {
        debug(`Start to release '${name}'...`);
        await release(name, dir);
        messages.push(`'${name}@${version}' released successfully!`);
      }
      else {
        messages.push(`'${name}@${version}' is up to date!`);
      }
    }
    return messages;
  });
}

run().then(
  (messages) => {
    console.info(EOL + messages.join(EOL) + EOL);
  },
  (err) => {
    console.error(err);
    throw err;
  }
);
