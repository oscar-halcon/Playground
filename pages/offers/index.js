import Link from "next/link";
import { useState } from "react";

var i = 0;
const Offers = () => {
  const [offers, setOffers] = useState([]);
  const FetchApi = async () => {
    const response = await fetch("../api/offersAPI");
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
  return (
    <div>
      <h1>All Offers</h1>
      {offers.map((a) => {
        return (
          <Link href={"/offers/" + a.id} key={a.id}>
            <a>
              <h3>Offer {a.id}</h3>
            </a>
          </Link>
        );
      })}
      <Link href={"/offers/Compare"}>
        <a>
          <h3>Compare</h3>
        </a>
      </Link>
      <Link href={"/offers/ChangeOffer"}>
        <a>
          <h3>Change Offer</h3>
        </a>
      </Link>
    </div>
  );
};

export default Offers;
