import Offer from "../api/Objects/Offer";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useState } from "react";

var operation1 = 0;
var operation2 = 0;
var operation3 = 0;
var i = 0;

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

export const Comparative = (a, b, c, query) => {
  var answerExtras = [];
  if (query === "betterPaid") {
    if (a > b && a > c) {
      return "Offer 1 is the one with better pay";
    } else if (b > a && b > c) {
      return "Offer 2 is the one with better pay";
    } else if (c > a && c > b) {
      return "Offer 3 is the one with better pay";
    } else if (a == b && a > c) {
      return "Offers 1&2 are the ones with better pay";
    } else if (a == c && a > b) {
      return "Offers 1&3 are the ones with better pay";
    } else if (b == c && b > a) {
      return "Offers 2&3 are the ones with better pay";
    } else {
      return "The offers have the same pay";
    }
  } else if (query === "BetterExtras") {
    if (a[0] === "Yes" && b[0] === "No" && c[0] === "No") {
      answerExtras.push("Offer 1 has better retirement plans");
    } else if (a[0] === "No" && b[0] === "Yes" && c[0] === "No") {
      answerExtras.push("Offer 2 has better retirement plans");
    } else if (a[0] === "No" && b[0] === "No" && c[0] === "Yes") {
      answerExtras.push("Offer 3 has better retirement plans");
    } else if (a[0] === "Yes" && b[0] === "Yes" && c[0] === "No") {
      answerExtras.push("Offer 1&2 have better retirement");
    } else if (a[0] === "Yes" && b[0] === "No" && c[0] === "Yes") {
      answerExtras.push("Offer 1&3 have better retirement");
    } else if (a[0] === "No" && b[0] === "Yes" && c[0] === "Yes") {
      answerExtras.push("Offer 2&3 have better retirement");
    } else {
      answerExtras.push("The offers have the same retirement");
    }
    if (a[1] === "Yes" && b[1] === "No" && c[1] === "No") {
      answerExtras.push("Offer 1 has better Health insurance");
    } else if (a[1] === "No" && b[1] === "Yes" && c[1] === "No") {
      answerExtras.push("Offer 2 has better Health insurance");
    } else if (a[1] === "No" && b[1] === "No" && c[1] === "Yes") {
      answerExtras.push("Offer 3 has better Health insurance");
    } else if (a[1] === "Yes" && b[1] === "Yes" && c[1] === "No") {
      answerExtras.push("Offer 1&2 has better Health insurance");
    } else if (a[1] === "Yes" && b[1] === "No" && c[1] === "Yes") {
      answerExtras.push("Offer 1&3 has better Health insurance");
    } else if (a[1] === "No" && b[1] === "Yes" && c[1] === "Yes") {
      answerExtras.push("Offer 2&3 has better Health insurance");
    } else {
      answerExtras.push("The offers have the same Health insurance");
    }
    if (a[2] > b[2] && a[2] > c[2]) {
      answerExtras.push("Offer 1 has more vacation days");
    } else if (b[2] > a[2] && b[2] > c[2]) {
      answerExtras.push("Offer 2 has more vacation days");
    } else if (c[2] > b[2] && c[2] > a[2]) {
      answerExtras.push("Offer 3 has more vacation days");
    } else if (a[2] == b[2] && a[2] > c[2]) {
      answerExtras.push("Offer 1&2 have more vacation days");
    } else if (a[2] > b[2] && a[2] == c[2]) {
      answerExtras.push("Offer 1&3 have more vacation days");
    } else if (c[2] == b[2] && c[2] > a[2]) {
      answerExtras.push("Offer 2&3 have more vacation days");
    } else {
      answerExtras.push("The offers have the same amount of vacation days");
    }
    if (a[3] > b[3] && a[3] > c[3]) {
      answerExtras.push("Offer 1 has better Parental leave");
    } else if (b[3] > a[3] && b[3] > c[3]) {
      answerExtras.push("Offer 2 has better Parental leave");
    } else if (c[3] > b[3] && c[3] > a[3]) {
      answerExtras.push("Offer 3 has better Parental leave");
    } else if (a[3] == b[3] && a[3] > c[3]) {
      answerExtras.push("Offer 1&2 have better Parental leave");
    } else if (a[3] == c[3] && a[3] > b[3]) {
      answerExtras.push("Offer 1&3 have better Parental leave");
    } else if (c[3] == b[3] && b[3] > a[3]) {
      answerExtras.push("Offer 2&3 have better Parental leave");
    } else {
      answerExtras.push("The offers have the same days of Parental leave");
    }
    if (a[4] > b[4] && a[4] > c[4]) {
      answerExtras.push("Offer 1 has better training budget");
    } else if (b[4] > a[4] && b[4] > c[4]) {
      answerExtras.push("Offer 2 has better training budget");
    } else if (c[4] > b[4] && c[4] > a[4]) {
      answerExtras.push("Offer 3 has better training budget");
    } else if (a[4] == b[4] && a[4] > c[4]) {
      answerExtras.push("Offer 1&2 have better training budget");
    } else if (a[4] == c[4] && a[4] > b[4]) {
      answerExtras.push("Offer 1&3 have better training budget");
    } else if (c[4] == b[4] && b[4] > a[4]) {
      answerExtras.push("Offer 2&3 have better training budget");
    } else {
      answerExtras.push("The offers have the same training budget");
    }
    return answerExtras;
  } else if (query === "BetterProspects") {
    if (a > b && a > c) {
      return "Offer 1 has better prospects";
    } else if (b > a && b > c) {
      return "Offer 2 has better prospects";
    } else if (c > a && c > b) {
      return "Offer 3 has better prospects";
    } else if (a == b && a > c) {
      return "Offer 1&2 have better prospects";
    } else if (a == c && a > b) {
      return "Offer 1&3 have better prospects";
    } else if (b == c && b > a) {
      return "Offer 2&3 have better prospects";
    } else {
      return "The offers have the same prospects";
    }
  } else if (query === "LeastLoses") {
    if (a < b && a < c) {
      return "Offer 1 has the least money loses";
    } else if (b < a && b < c) {
      return "Offer 2 has the least money loses";
    } else if (c < a && c < b) {
      return "Offer 3 has the least money loses";
    } else if (a == b && a < c) {
      return "Offer 1&2 have the least money loses";
    } else if (a == c && a < b) {
      return "Offer 1&3 have the least money loses";
    } else if (b == c && b < a) {
      return "Offer 2&3 have the least money loses";
    } else {
      return "The offers have the same amount of money loses";
    }
  }
};
Chart.register(CategoryScale);

const labels = ["2022", "2024", "2026", "2028", "2030"];

const Compare = () => {
  const [offers, setOffers] = useState(Offer);

  const FetchApi = async () => {
    const response = await fetch(
      "/Users/Oscar/Documents/Playground/pages/api/hello"
    );
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
  const offer1 = offers.at(0);
  const offer2 = offers.at(1);
  const offer3 = offers.at(2);

  operation1 = offer1.Number_options * offer1.Current_FMV_company;
  operation2 = offer2.Number_options * offer2.Current_FMV_company;
  operation3 = offer3.Number_options * offer3.Current_FMV_company;

  var IncrNum1 = 2;
  var IncrNum2 = 4;
  var IncrNum3 = 6;
  var IncrNum4 = 7;
  var DecrNum1 = 3;
  var DecrNum2 = 4;
  var DecrNum3 = 6;
  var DecrNum4 = 8;

  var bestOfeach = Comparative(
    [
      offer1.matching_401k,
      offer1.Health_insurance,
      offer1.Vacation_days,
      offer1.Parental_leave,
      offer1.Training_budget,
    ],
    [
      offer2.matching_401k,
      offer2.Health_insurance,
      offer2.Vacation_days,
      offer2.Parental_leave,
      offer2.Training_budget,
    ],
    [
      offer3.matching_401k,
      offer3.Health_insurance,
      offer3.Vacation_days,
      offer3.Parental_leave,
      offer3.Training_budget,
    ],
    "BetterExtras"
  );
  const dataInc = {
    labels,
    datasets: [
      {
        label: "Offer 1",
        data: [
          operation1,
          Math.round(operation1 * IncrNum1),
          Math.round(operation1 * IncrNum2),
          Math.round(operation1 * IncrNum3),
          Math.round(operation1 * IncrNum4),
        ],
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Offer 2",
        data: [
          operation2,
          Math.round(operation2 * IncrNum1),
          Math.round(operation2 * IncrNum2),
          Math.round(operation2 * IncrNum3),
          Math.round(operation2 * IncrNum4),
        ],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Offer 3",
        data: [
          operation3,
          Math.round(operation3 * IncrNum1),
          Math.round(operation3 * IncrNum2),
          Math.round(operation3 * IncrNum3),
          Math.round(operation3 * IncrNum4),
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
          Math.round(operation1 / DecrNum1),
          Math.round(operation1 / DecrNum2),
          Math.round(operation1 / DecrNum3),
          Math.round(operation1 / DecrNum4),
        ],
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Offer 2",
        data: [
          operation2,
          Math.round(operation2 / DecrNum1),
          Math.round(operation2 / DecrNum2),
          Math.round(operation2 / DecrNum3),
          Math.round(operation2 / DecrNum4),
        ],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Offer 3",
        data: [
          operation3,
          Math.round(operation3 / DecrNum1),
          Math.round(operation3 / DecrNum2),
          Math.round(operation3 / DecrNum3),
          Math.round(operation3 / DecrNum4),
        ],
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };
  return (
    <div>
      {/*
      <h5>Multiplier chart Increase</h5>
        <input
          type="number"
          onChange={(e) => M_D(e.target.value,IncrNum1)}
          the taxes for selling stocks is from the diference of 
          granting to selling
          and the exercising changes between the now and 1year with cost
          ex: 5€FMV-0,2€=4,8€ * 50.000=240.000€ as tax
          in Increment of company: 1.000.000-250.000=750.000 gains
          and then if long term 1.000.000*20%=200.000€ to pay as tax
          if short term 1.000.000* 37%=370.000€ to pay as tax
        />*/}
      <Line options={optionsIncr} data={dataInc} width="750" />
      <Line options={optionsDrop} data={dataDecr} width="750" />
      <table id="comparetab">
        <tbody>
          <tr>
            <th>ID</th>
            <th>{offer1.id}</th>
            <th>{offer2.id}</th>
            <th>{offer3.id}</th>
          </tr>
          <tr>
            <th>Total Annual</th>
            <th>
              {parseFloat(offer1.Annual_salary) + parseFloat(offer1.Bonus)}
            </th>
            <th>
              {parseFloat(offer2.Annual_salary) + parseFloat(offer2.Bonus)}
            </th>
            <th>
              {parseFloat(offer3.Annual_salary) + parseFloat(offer3.Bonus)}
            </th>
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
      <table id="tBestParts">
        <tbody>
          <tr>
            <th>
              <h4>The Offer with more pay</h4>
            </th>
            <th>
              {Comparative(
                offer1.Annual_salary + offer1.Bonus,
                offer2.Annual_salary + offer2.Bonus,
                offer3.Annual_salary + offer3.Bonus,
                "betterPaid"
              )}
            </th>
          </tr>
          <tr>
            <th>
              <h4>The Offers with better extras</h4>
            </th>
            {/*bestOfeach.map((a) => {
              return (
                <tr>
                  <th></th> <th>{a}</th>
                </tr>
              );
            })*/}
          </tr>
          <tr>
            <th>
              <h4>The offer with higher increment</h4>
            </th>
            <th>
              {Comparative(
                operation1 * 5,
                operation2 * 5,
                operation3 * 5,
                "BetterProspects"
              )}
            </th>
          </tr>
          <tr>
            <th>
              <h4>The offer with the least loses</h4>
            </th>
            <th>
              {Comparative(
                operation1 - operation1 / 5,
                operation2 - operation2 / 5,
                operation3 - operation3 / 5,
                "LeastLoses"
              )}
            </th>
          </tr>
        </tbody>
      </table>
      <div>
        <h3></h3>
      </div>
    </div>
  );
};

export default Compare;
