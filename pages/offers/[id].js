import offers from "../api/Objects/Offer";
import { useState } from "react";

export const getStaticPaths = async () => {
  const data = offers;
  const paths = data.map((offer) => {
    return {
      params: { id: offer.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  return {
    props: { where: id - 1 },
  };
};
var i = 0;

const Details = ({ where }) => {
  const [offerso, setOffers] = useState([]);

  const FetchApi = async (id) => {
    const response = await fetch("../api/hello");
    const data = await response.json();
    setOffers(data.at(id));
  };

  if (i == 0) {
    i = i + 1;
    FetchApi(where);
  } else {
    i = i - 1;
    //FetchApi();
  }
  return (
    <div>
      <h4>ID: {offerso.id}</h4>
      <h4>Annual Salary: {offerso.Annual_salary}</h4>
      <h4>Bonus: {offerso.Bonus}</h4>
      {}
      <h4>
        Total Annual:{" "}
        {parseFloat(offerso.Annual_salary) + parseFloat(offerso.Bonus)}
      </h4>
      <h4>Strike Price: {offerso.Strike_price}</h4>
      <h4>Number Options: {offerso.Number_options}</h4>
      <h4>Current FMV: {offerso.Current_FMV_company}</h4>
      <h4>
        Cost of exercising:{" "}
        {parseFloat(offerso.Strike_price) * parseFloat(offerso.Number_options)}
      </h4>
      <h4>
        Value equity in offer:{" "}
        {parseFloat(offerso.Number_options) *
          parseFloat(offerso.Current_FMV_company)}
      </h4>
      <h4>401k matching: {offerso.matching_401k}</h4>
      <h4>Office food: {offerso.Office_food}</h4>
      <h4>Covers tranport costs: {offerso.Cover_Transport_costs}</h4>
      <h4>Health insurance: {offerso.Health_insurance}</h4>
      <h4>Vacation days: {offerso.Vacation_days}</h4>
      <h4>Parental leave days: {offerso.Parental_leave}</h4>
      <h4>Training budget: {offerso.Training_budget}</h4>
      <h4>Home office budget: {offerso.Home_office_budget}</h4>
      <h4>Remote working: {offerso.Remote_working}</h4>
      <h4>Growth plan: {offerso.Growth_plan}</h4>
    </div>
  );
  //<input type="checkbox"></input> for when I need the user to put the data
};

export default Details;
