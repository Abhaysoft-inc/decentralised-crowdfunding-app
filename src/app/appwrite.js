import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68166a8600078d7c085b'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
