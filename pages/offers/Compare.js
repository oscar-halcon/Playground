import Offer from "../api/JSONS/OfferSkeleton.json";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";

var operation1 = 0;
var operation2 = 0;
var operation3 = 0;
var i=0;


export const optionsIncr = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Company Increases",
    },
  },
};
export const optionsDrop = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Company Drops",
    },
  },
};

Chart.register(CategoryScale);

const labels = ["2022", "2024", "2026", "2028", "2030"];

const Compare = () => {
  const [offers, setOffers] = useState(Offer);

  const FetchApi = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    setOffers(data);
  };
  

  if (i == 0) {
    i = i + 1;
    FetchApi();
  } else {
    i = i - 1;
    //FetchApi();
  }
  const offer1=offers.at(0);
  const offer2=offers.at(1);
  const offer3=offers.at(2);
  
  operation1 = offer1.Number_options * offer1.Current_FMV_company;
  operation2 = offer2.Number_options * offer2.Current_FMV_company;
  operation3 = offer3.Number_options * offer3.Current_FMV_company;

  var betterPaid = "";
  var betterExtras = "";
  var betterPosiProspec = "";
  var betterOverallOffer = "";
  var leastLosesIncur = "";

  const dataInc = {
    labels,
    datasets: [
      {
        label: "Offer 1",
        data: [
          operation1,
          Math.round(operation1 * 2),
            Math.round(operation1 * 4),
            Math.round(operation1 * 6),
          Math.round(operation1 * 7),
        ],
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Offer 2",
        data: [
          operation2,
          Math.round(operation2 * 3),
          Math.round(operation2 * 5),
          Math.round(operation2 * 7),
          Math.round(operation2 * 10),
        ],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Offer 3",
        data: [
          operation3,
          Math.round(operation3 * 3),
          Math.round(operation3 * 5),
          Math.round(operation3 * 7),
          Math.round(operation3 * 10),
        ],
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };
  const dataDecr = {
    labels,
    datasets: [
      {
        label: "Offer 1",
        data: [
          operation1,
          Math.round(operation1 / 3),
          Math.round(operation1 / 5),
          Math.round(operation1 / 7),
          Math.round(operation1 / 10),
        ],
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Offer 2",
        data: [
          operation2,
          Math.round(operation2 / 2),
          Math.round(operation2 / 4),
          Math.round(operation2 / 5),
          Math.round(operation2 / 6),
        ],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Offer 3",
        data: [
          operation3,
          Math.round(operation3 / 3),
          Math.round(operation3 / 4),
          Math.round(operation3 / 6),
          Math.round(operation3 / 8),
        ],
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };
  return (
    <div>
      <Line options={optionsIncr} data={dataInc} width="750" />
      <Line options={optionsDrop} data={dataDecr} width="750" />
      <table className="comparetab">
        <tbody>
          <tr>
            <th>ID</th>
            <th>{offer1.id}</th>
            <th>{offer2.id}</th>
            <th>{offer3.id}</th>
          </tr>
          <tr>
            <th>Total Annual</th>
            <th>{parseFloat(offer1.Annual_salary) + parseFloat( offer1.Bonus)}</th>
            <th>{parseFloat(offer2.Annual_salary) + parseFloat(offer2.Bonus)}</th>
            <th>{parseFloat(offer3.Annual_salary) + parseFloat(offer3.Bonus)}</th>
          </tr>
          <tr>
            <th>Number Options</th>
            <th>{offer1.Number_options}</th>
            <th>{offer2.Number_options}</th>
            <th>{offer3.Number_options}</th>
          </tr>
          <tr>
            <th>Cost Exercising</th>
            <th>{Math.round(offer1.Number_options * offer1.Strike_price)}</th>
            <th>{Math.round(offer2.Number_options * offer2.Strike_price)}</th>
            <th>{Math.round(offer3.Number_options * offer3.Strike_price)}</th>
          </tr>
          <tr>
            <th>Value of equity</th>
            <th>{operation1}</th>
            <th>{operation2}</th>
            <th>{operation3}</th>
          </tr>
          <tr>
            <th>Increase value of the company</th>
          </tr>
          <tr>
            <th>Increment of company X3</th>
            <th>{Math.round(operation1 * 3)}</th>
            <th>{Math.round(operation2 * 3)}</th>
            <th>{Math.round(operation3 * 3)}</th>
          </tr>
          <tr>
            <th>Increment of company X5</th>
            <th>{Math.round(operation1 * 5)}</th>
            <th>{Math.round(operation2 * 5)}</th>
            <th>{Math.round(operation3 * 5)}</th>
          </tr>
          <tr>
            <th>Increment of company X7</th>
            <th>{Math.round(operation1 * 7)}</th>
            <th>{Math.round(operation2 * 7)}</th>
            <th>{Math.round(operation3 * 7)}</th>
          </tr>
          <tr>
            <th>Fall of the company</th>
          </tr>
          <tr>
            <th>Decrement of company X5</th>
            <th>{Math.round(operation1 / 5)}</th>
            <th>{Math.round(operation2 / 5)}</th>
            <th>{Math.round(operation3 / 5)}</th>
          </tr>
          <tr>
            <th>Decrement of company X7</th>
            <th>{Math.round(operation1 / 7)}</th>
            <th>{Math.round(operation2 / 7)}</th>
            <th>{Math.round(operation3 / 7)}</th>
          </tr>
          <tr>
            <th>Decrement of company X10</th>
            <th>{Math.round(operation1 / 10)}</th>
            <th>{Math.round(operation2 / 10)}</th>
            <th>{Math.round(operation3 / 10)}</th>
          </tr>
          <tr>
            <th>Extra Benefits</th>
          </tr>
          <tr>
            <th>Vacation days</th>
            <th>{offer1.Vacation_days}</th>
            <th>{offer2.Vacation_days}</th>
            <th>{offer3.Vacation_days}</th>
          </tr>
          <tr>
            <th>Parental Leave days</th>
            <th>{offer1.Parental_leave}</th>
            <th>{offer2.Parental_leave}</th>
            <th>{offer3.Parental_leave}</th>
          </tr>
        </tbody>
      </table>
      <div></div>
    </div>
  );
};

export default Compare;
