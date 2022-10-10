// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import offers from "./Objects/Offer";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(offers);
  } else if (req.method === "POST") {
    var id= req.body[0]-1;
    var inputTry = req.body[1];
    var inputTry2 = req.body[2];
    offers[id].Bonus=inputTry;
    offers[id].Vacation_days =inputTry2;
    res.status(201).json([id, offers[id].Bonus,offers[id].Vacation_days]);
  }
}
