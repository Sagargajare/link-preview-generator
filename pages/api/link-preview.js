import getMetaData from "../../api/utils/linkpreview";
export default async function (req, res) {
  try {
    if (req.method === "POST") {
      console.log(req.body);
      const data = await getMetaData(req?.body?.url);
      console.log(data);
      return res.json({
        message: "success",
        data: data,
      });
    } else {
      return res.status(404).json({ error: "Request Invalid" });
    }
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}
