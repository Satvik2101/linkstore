import { connectToDatabase } from "../../Utils/connectDB";
import { getLinks, postLink } from "../../controllers/link";
import Link from "../../Models/linkModel";

export default async function handler(req, res) {
  await connectToDatabase();

  const { method } = req;
  console.log(method);

  switch (method) {
    case "GET": {
      //   getLinks(req, res);
      try {
        const links = await Link.find({});
        return res.status(200).json({ us: links });
      } catch (error) {
        return res.status(404).json({ error: error });
      }
    }
    case "POST":
      postLink(req, res);
      break;
    case "DELETE":
      res.status(200).json({ method, name: "Delete request" });
      break;
    default:
      res.seetHeaderr("Allow"[("GET", "POST", "DELETE")]);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
