import crypto from "crypto";
import { AppError } from "./errors";

const getKey = (): Buffer => {
  const raw = process.env.ENCRYPTION_KEY;
  if (!raw) {
    throw new AppError(500, "Encryption key not configured", "config_error");
  }
  if (raw.length !== 64) {
    throw new AppError(
      500,
      "Encryption key must be 64 hex characters",
      "config_error",
    );
  }
  return Buffer.from(raw, "hex");
};

export const encryptText = (plainText: string) => {
  const key = getKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(plainText, "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();

  return {
    cipherText: encrypted.toString("base64"),
    iv: iv.toString("base64"),
    tag: tag.toString("base64"),
  };
};

export const decryptText = (cipherText: string, iv: string, tag: string) => {
  const key = getKey();
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(iv, "base64"),
  );
  decipher.setAuthTag(Buffer.from(tag, "base64"));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(cipherText, "base64")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
};
