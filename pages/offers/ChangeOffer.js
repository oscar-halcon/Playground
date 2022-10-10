import { useState } from "react";

const ChangeOffer = () => {
  const [Salary, setSalary] = useState([]);
  const [Bonus, setBonus] = useState([]);
  const [Id, setId] = useState([]);
  const [StrikePr, setStrikePr] = useState([]);
  const [nOptions, setnOptions] = useState([]);
  const [FMV, setFMV] = useState([]);
  const [Match401k, setMatch401k] = useState([]);
  const [OfficeFood, setOfficeFood] = useState([]);
  const [TransportCost, setTransportCost] = useState([]);
  const [Health_Insur, setHealth_Insur] = useState([]);
  const [VacationDays, setVacationDays] = useState([]);
  const [ParentalLeave, setParentalLeave] = useState([]);
  const [TrainingBudget, setTrainingBudget] = useState([]);
  const [HomeOfficeBudget, setHomeOfficeBudget] = useState([]);
  const [RemoteWorking, setRemoteWorking] = useState([]);
  const [GrowthPlan, setGrowthPlan] = useState([]);
  //Need 16 different offers
  const [answer2, setAnswers2] = useState([]);
  //Only need 1 answer from backend

  const SubmitApi = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify([
        Id,
        Salary,
        Bonus,
        StrikePr,
        nOptions,
        FMV,
        Match401k,
        OfficeFood,
        TransportCost,
        Health_Insur,
        VacationDays,
        ParentalLeave,
        TrainingBudget,
        HomeOfficeBudget,
        RemoteWorking,
        GrowthPlan
      ]),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setAnswers2(data);
  };
  return (
    <div>
      <div>
        <h5>ID</h5>
        <input
          type="number"
          value={Id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <h5>Annual salary</h5>
        <input
          type="number"
          value={Salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <h5>Bonus</h5>
        <input
          type="number"
          value={Bonus}
          onChange={(e) => setBonus(e.target.value)}
        />
        <br />
        <h5>Strike Price</h5>
        <input
          type="number"
          value={StrikePr}
          onChange={(e) => setStrikePr(e.target.value)}
        />
        <br />
        <h5>Number Options</h5>
        <input
          type="number"
          value={nOptions}
          onChange={(e) => setnOptions(e.target.value)}
        />
        <br />
        <h5>Current FMV</h5>
        <input
          type="number"
          value={FMV}
          onChange={(e) => setFMV(e.target.value)}
        />
        <br />
        <h5>401k Matching</h5>
        <input
          type="text"
          value={Match401k}
          onChange={(e) => setMatch401k(e.target.value)}
        />
        <br />
        <h5>Office food</h5>
        <input
          type="text"
          value={OfficeFood}
          onChange={(e) => setOfficeFood(e.target.value)}
        />
        <br />
        <h5>Cover transportation costs</h5>
        <input
          type="text"
          value={TransportCost}
          onChange={(e) => setTransportCost(e.target.value)}
        />
        <br />
        <h5>Health insurance</h5>
        <input
          type="text"
          value={Health_Insur}
          onChange={(e) => setHealth_Insur(e.target.value)}
        />
        <br />
        <h5>Vacation days</h5>
        <input
          type="number"
          value={VacationDays}
          onChange={(e) => setVacationDays(e.target.value)}
        />
        <br />
        <h5>Parental leave(days)</h5>
        <input
          type="number"
          value={ParentalLeave}
          onChange={(e) => setParentalLeave(e.target.value)}
        />
        <br />
        <h5>Training budget</h5>
        <input
          type="number"
          value={TrainingBudget}
          onChange={(e) => setTrainingBudget(e.target.value)}
        />
        <br />
        <h5>Home office budget</h5>
        <input
          type="number"
          value={HomeOfficeBudget}
          onChange={(e) => setHomeOfficeBudget(e.target.value)}
        />
        <br />
        <h5>Remote working</h5>
        <input
          type="text"
          value={RemoteWorking}
          onChange={(e) => setRemoteWorking(e.target.value)}
        />
        <br />
        <h5>Growth plan</h5>
        <input
          type="text"
          value={GrowthPlan}
          onChange={(e) => setGrowthPlan(e.target.value)}
        />
        <button onClick={SubmitApi}>Change Offer</button>
        <h5>{answer2}</h5>
      </div>
    </div>
  );
};

export default ChangeOffer;
