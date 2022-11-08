import Offer from "../api/Objects/Offer";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";

var i = 0;
var operations = [];

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

export const Comparative = (r, query) => {
  var i = 0;
  var q = 1;
  var fullAnswers = [];
  if (query === "betterPaid") {
    //insert here foreach r.forEach(q=>{})
    while (i < r.length) {
      while (q <= r.length) {
        if (r[i] > r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " is better paid than Offer" + (q + 1)
          );
        } else if (r[i] == r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has same pay as Offer" + (q + 1)
          );
        } else if (r[i] < r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " is worse paid than Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "BetterRetirement") {
    i = 0;
    while (i < r.length) {
      while (q < r.length) {
        if (r[i] === "Yes" && r[q] === "No") {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has better retirement plan than Offer" +
              (q + 1)
          );
        } else if (r[i] === "No" && r[q] === "Yes") {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has worse retirement plan than Offer" +
              (q + 1)
          );
        } else {
          fullAnswers.push(
            "Offer" + (i + 1) + " has same retirement plan as Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "BetterHealth") {
    i = 0;
    while (i < r.length) {
      while (q < r.length) {
        if (r[i] === "Yes" && r[q] === "No") {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has better Health insurance than Offer" +
              (q + 1)
          );
        } else if (r[i] === "No" && r[q] === "Yes") {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has worse Health insurance  than Offer" +
              (q + 1)
          );
        } else {
          fullAnswers.push(
            "Offer" + (i + 1) + " has same Health insurance as Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "BetterVacation") {
    while (i < r.length) {
      while (q <= r.length) {
        if (r[i] > r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has more vacation days than Offer" + (q + 1)
          );
        } else if (r[i] == r[q]) {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has the same amount of vacation days as Offer" +
              (q + 1)
          );
        } else if (r[i] < r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has less vacation days than Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "BetterParental") {
    while (i < r.length) {
      while (q <= r.length) {
        if (r[i] > r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has more parental leave than Offer" + (q + 1)
          );
        } else if (r[i] == r[q]) {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has the same amount of parental leave as Offer" +
              (q + 1)
          );
        } else if (r[i] < r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has less parental leave than Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "BetterTraining") {
    while (i < r.length) {
      while (q <= r.length) {
        if (r[i] > r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has more training budget than Offer" + (q + 1)
          );
        } else if (r[i] == r[q]) {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has the same amount of training budget as Offer" +
              (q + 1)
          );
        } else if (r[i] < r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has less training budget than Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "BetterProspects") {
    while (i < r.length) {
      while (q <= r.length) {
        if (r[i] > r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has better prospects than Offer" + (q + 1)
          );
        } else if (r[i] == r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has same prospects as Offer" + (q + 1)
          );
        } else if (r[i] < r[q]) {
          fullAnswers.push(
            "Offer" + (i + 1) + " has worse prospects than Offer" + (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  } else if (query === "LeastLoses") {
    while (i < r.length) {
      while (q <= r.length) {
        if (r[i] > r[q]) {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has more money lost in case of failure than Offer" +
              (q + 1)
          );
        } else if (r[i] == r[q]) {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has same money lost in case of failure as Offer" +
              (q + 1)
          );
        } else if (r[i] < r[q]) {
          fullAnswers.push(
            "Offer" +
              (i + 1) +
              " has less money lost in case of failure than Offer" +
              (q + 1)
          );
        }
        q++;
      }
      i++;
      q = i + 1;
    }
    return fullAnswers;
  }
};
Chart.register(CategoryScale);

const labels = ["2022", "2024", "2026", "2028", "2030"];

const Compare = () => {
  const [offers, setOffers] = useState(Offer);

  const FetchApi = async () => {
    const response = await fetch("../api/hello");
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

  operations = [
    offers.at(0).Number_options * offers.at(0).Current_FMV_company,
    offers.at(1).Number_options * offers.at(1).Current_FMV_company,
    offers.at(2).Number_options * offers.at(2).Current_FMV_company,
  ];

  var IncrNum1 = [2, 4, 6, 7];
  var DecrNum1 = [3, 4, 6, 8];

  var betterPaid = Comparative(
    [
      offers.at(0).Annual_salary + offers.at(0).Bonus,
      offers.at(1).Annual_salary + offers.at(1).Bonus,
      offers.at(2).Annual_salary + offers.at(2).Bonus,
    ],
    "betterPaid"
  );

  var entrada1 = [
    offers.at(0).matching_401k,
    offers.at(1).matching_401k,
    offers.at(2).matching_401k,
  ];
  var entrada2 = [
    offers.at(0).Health_insurance,
    offers.at(1).Health_insurance,
    offers.at(2).Health_insurance,
  ];
  var betterRetirement = Comparative(entrada1, "BetterRetirement");
  var betterHealth = Comparative(entrada2, "BetterHealth");
  var betterVacation = Comparative(
    [
      parseFloat(offers.at(0).Vacation_days),
      parseFloat(offers.at(1).Vacation_days),
      parseFloat(offers.at(2).Vacation_days),
    ],
    "BetterVacation"
  );
  var betterParental = Comparative(
    [
      parseFloat(offers.at(0).Parental_leave),
      parseFloat(offers.at(1).Parental_leave),
      parseFloat(offers.at(2).Parental_leave),
    ],
    "BetterParental"
  );
  var betterTraining = Comparative(
    [
      parseFloat(offers.at(0).Training_budget),
      parseFloat(offers.at(1).Training_budget),
      parseFloat(offers.at(2).Training_budget),
    ],
    "BetterTraining"
  );
  var betterProspects = Comparative(
    [operations[0] * 5, operations[1] * 5, operations[2] * 5],
    "BetterProspects"
  );
  var leastLoses = Comparative(
    [
      operations[0] - operations[0] / 5,
      operations[1] - operations[1] / 5,
      operations[2] - operations[2] / 5,
    ],
    "LeastLoses"
  );
  //useEffect(() => {
  //Runs only on the first render
  //}, []);

  const dataInc = {
    labels,
    datasets: [
      {
        label: "Offer 1",
        data: [
          operations[0],
          Math.round(operations[0] * IncrNum1[0]),
          Math.round(operations[0] * IncrNum1[1]),
          Math.round(operations[0] * IncrNum1[2]),
          Math.round(operations[0] * IncrNum1[3]),
        ],
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Offer 2",
        data: [
          operations[1],
          Math.round(operations[1] * IncrNum1[0]),
          Math.round(operations[1] * IncrNum1[1]),
          Math.round(operations[1] * IncrNum1[2]),
          Math.round(operations[1] * IncrNum1[3]),
        ],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Offer 3",
        data: [
          operations[2],
          Math.round(operations[2] * IncrNum1[0]),
          Math.round(operations[2] * IncrNum1[1]),
          Math.round(operations[2] * IncrNum1[2]),
          Math.round(operations[2] * IncrNum1[3]),
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
          operations[0],
          Math.round(operations[0] / DecrNum1[0]),
          Math.round(operations[0] / DecrNum1[1]),
          Math.round(operations[0] / DecrNum1[2]),
          Math.round(operations[0] / DecrNum1[3]),
        ],
        borderColor: "orange",
        backgroundColor: "orange",
      },
      {
        label: "Offer 2",
        data: [
          operations[1],
          Math.round(operations[1] / DecrNum1[0]),
          Math.round(operations[1] / DecrNum1[1]),
          Math.round(operations[1] / DecrNum1[2]),
          Math.round(operations[1] / DecrNum1[3]),
        ],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Offer 3",
        data: [
          operations[2],
          Math.round(operations[2] / DecrNum1[0]),
          Math.round(operations[2] / DecrNum1[1]),
          Math.round(operations[2] / DecrNum1[2]),
          Math.round(operations[2] / DecrNum1[3]),
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
      <table id="comparetab">
        <tbody>
          <tr>
            <th>ID</th>
            {offers.map((a) => {
              return <th key={a}>{a.id}</th>;
            })}
          </tr>
          <tr>
            <th>Total Annual</th>
            {offers.map((a) => {
              return (
                <th key={a}>
                  {parseFloat(a.Annual_salary) + parseFloat(a.Bonus)}
                </th>
              );
            })}
          </tr>
          <tr>
            <th>Number Options</th>
            {offers.map((a) => {
              return <th key={a}>{a.Number_options}</th>;
            })}
          </tr>
          <tr>
            <th>Cost Exercising</th>
            {offers.map((a) => {
              return (
                <th key={a}>{Math.round(a.Number_options * a.Strike_price)}</th>
              );
            })}
          </tr>
          <tr>
            <th>Value of equity</th>
            {operations.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>Increase value of the company</th>
          </tr>
          <tr>
            <th>Increment of company X5</th>
            {operations.map((a) => {
              return <th key={a}>{Math.round(a * 5)}</th>;
            })}
          </tr>
          <tr>
            <th>Taxes to pay if selling</th>
          </tr>
          <tr>
            <th>Long term</th>
            {operations.map((a) => {
              return <th key={a}>{Math.round(Math.round(a * 5) * 0.2)}</th>;
            })}
          </tr>
          <tr>
            <th>Short term</th>
            {operations.map((a) => {
              return <th key={a}>{Math.round(Math.round(a * 5) * 0.37)}</th>;
            })}
          </tr>
          <tr>
            <th>Fall of the company</th>
          </tr>
          <tr>
            <th>Decrement of company X5</th>
            {operations.map((a) => {
              return <th key={a}>{Math.round(a / 5)}</th>;
            })}
          </tr>
          <tr>
            <th>Extra Benefits</th>
          </tr>
          <tr>
            <th>Vacation days</th>
            {offers.map((a) => {
              return <th key={a}>{a.Vacation_days}</th>;
            })}
          </tr>
          <tr>
            <th>Parental Leave days</th>
            {offers.map((a) => {
              return <th key={a}>{a.Parental_leave}</th>;
            })}
          </tr>
        </tbody>
      </table>
      <table id="tBestParts">
        <tbody>
          <tr>
            <th>
              <h4>The Offer with more pay</h4>
            </th>
            {betterPaid.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The Offers with better retirement plan</h4>
            </th>
            {betterRetirement.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The Offers with better health insurance</h4>
            </th>
            {betterHealth.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The Offers with more vacation days</h4>
            </th>
            {betterVacation.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The Offers with better parental leave</h4>
            </th>
            {betterParental.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The Offers with better training budget</h4>
            </th>
            {betterTraining.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The offer with higher increment</h4>
            </th>
            {betterProspects.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
          <tr>
            <th>
              <h4>The offer with the least loses</h4>
            </th>
            {leastLoses.map((a) => {
              return <th key={a}>{a}</th>;
            })}
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default Compare;
