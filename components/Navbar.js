import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Secfi List</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/offers/"><a>Offer Listing</a></Link>
    </nav>
);
}
 
export default Navbar;