import Link from "next/link";

const Offers = () => {
    return (
      <div>
        <h1>All Offers</h1>
        <Link href={'/offers/' + '2'} key="2">
          <a>Offer 1</a>
        </Link>
      </div>
    );
  }
   
  export default Offers;