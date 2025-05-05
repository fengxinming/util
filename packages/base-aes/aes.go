package main

import (
	"bytes"
	"crypto/aes"
	"crypto/cipher"
	"encoding/hex"
	"encoding/base64"
	"fmt"
)

func main() {
	// 测试向量 - AES-128-CBC 互操作性测试
	key := []byte("\x00\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0E\x0F")
	iv := []byte("\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !\"#$")
	text := "TextMustBe16Byte"
	ecbCipherText := "61e6335e9518e20fd16aa30871e211e6954f64f2e4e86e9eee82d20216684899"
	cbcCipherText := "0605fda3e80da8724d66811725a98f961bf3ca2e1fadf6af8f7223425c74bc69"

	// ECB 加密测试
	ecbCipher := ECBEncrypt([]byte(text), key)
	fmt.Printf("ECB 加密结果: %s\n", hex.EncodeToString(ecbCipher))
	fmt.Printf("ECB 加密测试结果 %v\n", hex.EncodeToString(ecbCipher) == ecbCipherText)
	fmt.Printf("\n")

	// CBC 加密测试
	cbcCipher := CBCEncrypt([]byte(text), key, iv)
	fmt.Printf("CBC 加密结果: %s\n", hex.EncodeToString(cbcCipher))
	fmt.Printf("CBC 加密测试结果 %v\n", hex.EncodeToString(cbcCipher) == cbcCipherText)
	fmt.Printf("\n")

	// 解密测试
	fmt.Printf("ECB 解密结果: %s\n", string(ECBDecrypt(ecbCipher, key)))
	fmt.Printf("CBC 解密结果: %s\n", string(CBCDecrypt(cbcCipher, key, iv)))
	fmt.Printf("\n")
	
	fmt.Println("base64编码密文", base64.StdEncoding.EncodeToString(cbcCipher))
  // BgX9o+gNqHJNZoEXJamPlhvzyi4frfavj3IjQlx0vGk=
}

// AESEncryptECB AES-ECB 加密
func ECBEncrypt(plaintext []byte, key []byte) []byte {
	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	// PKCS7 填充
	padded := padPKCS7Padding(plaintext, block.BlockSize())

	// 加密
	ciphertext := make([]byte, len(padded))
	for i := 0; i < len(padded); i += block.BlockSize() {
		block.Encrypt(ciphertext[i:i+block.BlockSize()], padded[i:i+block.BlockSize()])
	}

	return ciphertext
}

// AESDecryptECB AES-ECB 解密
func ECBDecrypt(ciphertext []byte, key []byte) []byte {
	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	if len(ciphertext)%block.BlockSize() != 0 {
		panic("ciphertext length is not a multiple of block size")
	}

	// 解密
	plaintext := make([]byte, len(ciphertext))
	for i := 0; i < len(ciphertext); i += block.BlockSize() {
		block.Decrypt(plaintext[i:i+block.BlockSize()], ciphertext[i:i+block.BlockSize()])
	}

	// 去除填充
	return stripPKCS7Padding(plaintext)
}

// CBCEncrypt AES-CBC 加密
func CBCEncrypt(plaintext []byte, key []byte, iv []byte) []byte {
	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	// PKCS7 填充
	padded := padPKCS7Padding(plaintext, block.BlockSize())

	// CBC 加密
	mode := cipher.NewCBCEncrypter(block, iv)
	ciphertext := make([]byte, len(padded))
	mode.CryptBlocks(ciphertext, padded)

	return ciphertext
}

// CBCDecrypt AES-CBC 解密
func CBCDecrypt(ciphertext []byte, key []byte, iv []byte) []byte {
	block, err := aes.NewCipher(key)
	if err != nil {
		panic(err)
	}

	if len(ciphertext)%block.BlockSize() != 0 {
		panic("ciphertext length is not a multiple of block size")
	}

	// CBC 解密
	mode := cipher.NewCBCDecrypter(block, iv)
	plaintext := make([]byte, len(ciphertext))
	mode.CryptBlocks(plaintext, ciphertext)

	// 去除填充
	return stripPKCS7Padding(plaintext)
}

// PKCS7Padding PKCS#7 填充
func padPKCS7Padding(data []byte, blockSize int) []byte {
	padding := blockSize - len(data)%blockSize
	if padding == 0 {
		padding = blockSize
	}
	pad := bytes.Repeat([]byte{byte(padding)}, padding)
	return append(data, pad...)
}

// stripPKCS7Padding 移除 PKCS#7 填充
func stripPKCS7Padding(data []byte) []byte {
	if len(data) == 0 {
		panic("empty data")
	}

	padding := int(data[len(data)-1])
	if padding > len(data) || padding > aes.BlockSize {
		panic("invalid padding")
	}

	return data[:len(data)-padding]
}