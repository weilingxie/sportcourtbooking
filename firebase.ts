import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIRESTORE_PROJECT_ID,
  private_key_id: process.env.FIRESTORE_PRIVATE_KEY_ID,
  private_key: process.env.FIRESTORE_PRIVATE_KEY,
  client_email: process.env.FIRESTORE_CLIENT_EMAIL,
  client_id: process.env.FIRESTORE_CLIENT_ID,
  auth_uri: process.env.FIRESTORE_AUTH_URI,
  token_uri: process.env.FIRESTORE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIRESTORE_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FIRESTORE_CLIENT_CERT_URL,
  universe_domain: process.env.FIRESTORE_UNIVERSE_DOMAIN
}

console.log("serviceAccount: ", serviceAccount)

if (!getApps().length) {
  initializeApp({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    credential: cert(serviceAccount as any),
  });
}

const db = getFirestore();

export { db };
