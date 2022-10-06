import Link from "next/link";

import Offer from "../../JSONS/OfferSkeleton.json";

export const getStaticProps = async () => {
  const data = Offer;
  return {
    props: { offer: data },
  };
};

const Offers = ({ offer }) => {
  return (
    <div>
      <h1>All Offers</h1>
      {offer.map((a) => (
        <Link href={"/offers/" + a.id} key={a.id}>
          <a><h3>Offer {a.id}</h3></a>
        </Link>
      ))}
      <Link href={"/offers/comparison"}>
        <a>Compare</a>
      </Link>
    </div>
  );
};

export default Offers;
