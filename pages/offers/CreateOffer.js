import { useState } from "react";

const CreateOffer = () => {
  const [offers2, setOffers2] = useState("");
  const [offers, setOffers] = useState([]);
  const [offers3, setOffers3] = useState([]);
  const [offers4, setOffers4] = useState([]);
  const [answer, setAnswers] = useState("");
  const [answer2, setAnswers2] = useState([]);
  const FetchApi2 = async () => {
    const response = await fetch("/api/goodbye");
    const data = await response.json();
    setOffers2(data);
  };
  const SubmitApi2 = async () => {
    const response = await fetch("/api/goodbye", {
      method: "POST",
      body: offers2,
      headers: { "Content-Type": "application/text" },
    });
    const data = await response.json();
    setAnswers(data);
  };
  const SubmitApi = async () => {
    const response = await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify([offers4,offers,offers3]),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setAnswers2(data);
  };
  return (
    <div>
      <button onClick={FetchApi2}>Get API 2</button>
      <h3>{offers2}</h3>
      <input
        type="text"
        value={offers2}
        onChange={(e) => setOffers2(e.target.value)}
      />
      <button onClick={SubmitApi2}>Change API 2</button>
      <h3>{answer}</h3>
      <h3>ID-Bonus-Health insurance</h3>
      <input
        type="number"
        value={offers4}
        onChange={(e) => setOffers4(e.target.value)}
      />
      <input
        type="number"
        value={offers}
        onChange={(e) => setOffers(e.target.value)}
      />
      <input
        type="text"
        value={offers3}
        onChange={(e) => setOffers3(e.target.value)}
      />
      <button onClick={SubmitApi}>Change API 1</button>
      <h3>{answer2}</h3>
    </div>
  );
};

export default CreateOffer;
