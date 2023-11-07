import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const seviceAccount = JSON.parse(process.env.NEXT_PUBLIC_ACCOUNT_KEY as string);

if (!getApps().length) {
  admin.initializeApp({ credential: admin.credential.cert(seviceAccount) });
}

const adminDb = admin.firestore();

export { adminDb };