// cookie.ts
import Cookies from 'js-cookie'
import crypto from 'crypto';

const ENCRYPTION_KEY = 'your-encryption-key'; // Replace with your encryption key

// Function to encrypt data
const encrypt = (data: string): string => {
    const cipher = crypto.createCipher('aes-256-cbc', ENCRYPTION_KEY);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

// Function to decrypt data
const decrypt = (encryptedData: string): string => {
    const decipher = crypto.createDecipher('aes-256-cbc', ENCRYPTION_KEY);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

// Function to set a cookie with encrypted value
export const setEncryptedCookie = (key: string, value: string, options: Cookies.CookieAttributes = {}): void => {
    const encryptedValue = encrypt(value);
    Cookies.set(key, encryptedValue, options);
};

// Function to get and decrypt cookie value
export const getDecryptedCookie = (key: string): string | undefined => {
    const encryptedValue = Cookies.get(key);
    if (encryptedValue) {
        return decrypt(encryptedValue);
    }
    return undefined;
};

// Function to remove a cookie
export const removeCookie = (key: string): void => {
    Cookies.remove(key);
};
