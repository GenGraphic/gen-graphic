import { Client, Functions } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://gengraphic.de/v1')
    .setProject('67d659be0017039ccb59');

export const functions = new Functions(client);

//Functions ID
export const SEND_EMAIL_FUCNTION_ID = "67d6674d000503c7a2c2";