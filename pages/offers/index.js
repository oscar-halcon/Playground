import Link from "next/link";
import { useState } from "react";
import Offer from "../../JSONS/OfferSkeleton.json";

export const getStaticProps = async () => {
  const data = Offer;
  return {
    props: { offer: data },
  };
};

const Offers = ({ offer }) => {
  const [offers, setOffers] = useState([]);
  const [offers2, setOffers2] = useState("");
  const [answer, setAnswers] = useState("");
  const FetchApi2 = async () => {
    const response = await fetch("/api/goodbye");
    const data = await response.json();
    setOffers2(data);
  };
  const FetchApi = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    setOffers(data);
  };
  const SubmitApi2 = async () => {
    const response = await fetch("/api/goodbye", {
      method: "POST",
      body: offers2,
      headers: {'Content-Type': 'application/text'}
    });
    const data = await response.json();
    setAnswers(data);
  };
  return (
    <div>
      <h1>All Offers</h1>
      {offer.map((a) => (
        <Link href={"/offers/" + a.id} key={a.id}>
          <a>
            <h3>Offer {a.id}</h3>
          </a>
        </Link>
      ))}
      <Link href={"/offers/comparison"}>
        <a>Compare</a>
      </Link>
      <button onClick={FetchApi}>Get API</button>
      {offers.map((a) => {
        return (
          <Link href={"/offers/" + a.id} key={a.id}>
            <a>
              <h3>Offer {a.id}</h3>
            </a>
          </Link>
        );
      })}
      <button onClick={FetchApi2}>Get API 2</button>
      <h3>{offers2}</h3>
      <input
        type="text"
        value={offers2}
        onChange={(e) => setOffers2(e.target.value)}
      />
      <button onClick={SubmitApi2}>Change API 2</button>
      <h3>{answer}</h3>
    </div>
  );
};

export default Offers;
