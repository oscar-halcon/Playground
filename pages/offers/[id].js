import Offers from "../../JSONS/OfferSkeleton.json";

export const getStaticPaths = async () => {
  const data = Offers;
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
  const data = Offers.at(id - 1);
  return {
    props: { offer: data },
  };
};

const Details = ({ offer }) => {
  return (
    <div>
      <h4>ID: {offer.id}</h4>
      <h4>Annual Salary: {offer.Annual_salary}</h4>
      <h4>Bonus: {offer.Bonus}</h4>
      <h4>Total Annual: {offer.Annual_salary + offer.Bonus}</h4>
      <h4>Strike Price: {offer.Strike_price}</h4>
      <h4>Number Options: {offer.Number_options}</h4>
      <h4>Current FMV: {offer.Current_FMV_company}</h4>
      <h4>Cost of exercising: {offer.Strike_price * offer.Number_options}</h4>
      <h4>
        Value equity in offer:{" "}
        {offer.Number_options * offer.Current_FMV_company}
      </h4>
      <h4>
        Company Increase x5:{" "}
        {offer.Number_options * offer.Current_FMV_company * 5}
      </h4>
      <h4>
        Company Falls x5:{" "}
        {(offer.Number_options * offer.Current_FMV_company) / 5}
      </h4>
      <h4>401k matching: {offer.matching_401k}</h4>
      <h4>Office food: {offer.Office_food}</h4>
      <h4>Covers tranport costs: {offer.Cover_Transport_costs}</h4>
      <h4>Health insurance: {offer.Health_insurance}</h4>
      <h4>Vacation days: {offer.Vacation_days}</h4>
      <h4>Parental leave days: {offer.Parental_leave}</h4>
      <h4>Training budget: {offer.Training_budget}</h4>
      <h4>Home office budget: {offer.Home_office_budget}</h4>
      <h4>Remote working: {offer.Remote_working}</h4>
      <h4>Growth plan: {offer.Growth_plan}</h4>
    </div>
  );
  //<input type="checkbox"></input> for when I need the user to put the data
};

export default Details;
