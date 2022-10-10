// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import offers from "./Objects/Offer";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(offers);
  } else if (req.method === "POST") {
    var id= req.body[0]-1;
    offers[id].Annual_salary=req.body[1];
    offers[id].Bonus=req.body[2];
    offers[id].Strike_price=req.body[3];
    offers[id].Number_options=req.body[4];
    offers[id].Current_FMV_company=req.body[5];
    offers[id].matching_401k=req.body[6];
    offers[id].Office_food=req.body[7];
    offers[id].Cover_Transport_costs=req.body[8];
    offers[id].Health_insurance=req.body[9];
    offers[id].Vacation_days=req.body[10];
    offers[id].Parental_leave=req.body[11];
    offers[id].Training_budget=req.body[12];
    offers[id].Home_office_budget=req.body[13];
    offers[id].Remote_working=req.body[14];
    offers[id].Growth_plan=req.body[15];
    res.status(201).json("Done");
  }
}
