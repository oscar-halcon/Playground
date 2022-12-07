import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-end m-10 p-1 border-b-2 border-solid border-black">
      <div className="logo">
        <h1>Secfi List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/offers/">
        <a>Offer Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
