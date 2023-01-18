import Links from "../Models/linkModel";

//GET: https://localhost:3000/api/link
export async function getLinks(req, res) {
  try {
    res.status(200).send({ name: "shivang" });
    const links = await Links.find();
    return res.status(200).json({ us: links });
  } catch (error) {
    res.status(404).json({ error: "error while fetching fata" });
  }
}
//POST: https://localhost:3000/api/link
export async function postLink(req, res) {
  const data = req.body;
  console.log(data);
  const link = new Links({
    ...req.body,
  });
  try {
    Links.create(data, function (err, dataa) {
      return res.status(200).json(dataa);
    });
    console.log("yoyo");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log({ error: error.message });
  }
}
