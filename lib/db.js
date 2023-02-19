import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://root:1234@cluster0.fnaqe5y.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}
