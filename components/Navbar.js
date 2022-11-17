import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-end m-10 p-1 border-b-100 border-solid border-indigo-500 border-black">
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
