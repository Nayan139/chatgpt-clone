interface Message {
  id: string;
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string | null | undefined;
    name: string | null | undefined;
    avatar: string | null | undefined;
  };
}
