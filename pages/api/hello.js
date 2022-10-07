// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import offers from "./Objects/Offer";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(offers);
  } else if (req.method === "POST") {
    var id= req.body[0];
    var inputTry = req.body[1];
    var inputTry2 = req.body[2];
    offers[id].Bonus=inputTry;
    offers[id].Health_insurance=inputTry2;
    res.status(201).json([offers[id].Bonus,offers[id].Health_insurance]);
  }
}
