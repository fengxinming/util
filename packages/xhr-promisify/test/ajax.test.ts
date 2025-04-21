import { delay, http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest';

import { ajax } from '../src/ajax';
import {
  ABORT_ERR,
  // ERR_HTTP_REQUEST_TIMEOUT,
  // ERR_NETWORK,
  AjaxError,
  ERR_BAD_REQUEST,
  ERR_BAD_RESPONSE
} from '../src/error';

const server = setupServer(
  http.get('/api/get', () => {
    return HttpResponse.json({ data: 'test' });
  }),
  http.post('/api/post', () => {
    return HttpResponse.json({ message: 'ok' });
  }),
  http.get('/api/cancel', () => {
    return HttpResponse.json({ data: 'test' });
  }),
  http.get('/api/timeout', async () => {
    await delay(1000);
    return new HttpResponse(null, { status: 404 });
  }),
  http.get('/api/bad-request', () => {
    return new HttpResponse(null, { status: 400 });
  }),
  http.get('/api/bad-response', () => {
    return new HttpResponse(null, { status: 500 });
  }),
  http.get('/api/custom-status', () => {
    return new HttpResponse(null, { status: 401 });
  }),
  http.get('/video', async () => {
    // Request the original video stream.
    const videoResponse = await fetch(
      'https://nickdesaulniers.github.io/netfix/demo/frag_bunny.mp4'
    );
    const videoStream = videoResponse.body;

    // Implement a custom transform stream that
    // takes any stream and inserts a random latency
    // between its chunks.
    const latencyStream = new TransformStream({
      start() {},
      async transform(chunk, controller) {
        await delay();
        controller.enqueue(chunk);
      }
    });

    return new HttpResponse(
      // Respond with the original video stream
      // piped through the latency transform stream.
      videoStream!.pipeThrough(latencyStream),
      // Inherit the rest of the original video
      // response data, like "headers".
      videoResponse
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Basic GET request', async () => {
  const response = await ajax({
    url: '/api/get',
    method: 'GET',
    responseType: 'json'
  });

  expect(response.status).toBe(200);
  expect(response.data).toEqual({ data: 'test' });
});

test('POST request with body', async () => {
  const response = await ajax({
    url: '/api/post',
    method: 'POST',
    responseType: 'json',
    body: JSON.stringify({ key: 'value' })
  });

  expect(response.status).toBe(200);
  expect(response.data).toEqual({ message: 'ok' });
});

test('Request cancellation', async () => {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = ajax({
    url: '/api/cancel',
    signal
  });

  controller.abort();

  await expect(promise).rejects.toThrow(AjaxError);
  expect((await promise.catch((e) => e)).code).toBe(ABORT_ERR);
});

test('Timeout error', async () => {
  const promise = ajax({
    url: '/api/timeout',
    responseType: 'json',
    timeout: 100
  });
  await expect(promise).rejects.toThrow(AjaxError);
});

// test('Network error', async () => {
//   const promise = ajax({
//     url: '/api/network-error'
//   });

//   await expect(promise).rejects.toThrowError();
//   expect((await promise.catch((e) => e)).code).toBe(ERR_NETWORK);
// });

test('400 error handling', async () => {
  const promise = ajax({
    url: '/api/bad-request'
  });

  await expect(promise).rejects.toThrowError();
  expect((await promise.catch((e) => e)).code).toBe(ERR_BAD_REQUEST);
});

test('500 error handling', async () => {
  const promise = ajax({
    url: '/api/bad-response'
  });

  await expect(promise).rejects.toThrow(AjaxError);
  expect((await promise.catch((e) => e)).code).toBe(ERR_BAD_RESPONSE);
});

test('Custom validateStatus', async () => {
  const promise = ajax({
    url: '/api/custom-status',
    validateStatus: (status) => status === 401
  });

  await expect(promise).resolves.toBeDefined();
});

// test('Progress events', async () => {
//   const onProgress = vi.fn();
//   await ajax({
//     url: '/video',
//     onDownloadProgress: onProgress
//   });
//   onProgress.mock.calls.forEach(([event]) => {
//     expect(event.loaded).toBeGreaterThan(0);
//     expect(event.total).toBeGreaterThan(0);
//   });
// });
