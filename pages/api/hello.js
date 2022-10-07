// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Offers from "../../JSONS/OfferSkeleton.json"

export default function handler(req, res) {
  res.status(200).json(Offers)
}
