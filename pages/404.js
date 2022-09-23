import Link from "next/link";

const NoAdres = () => {
    return ( 
        <div className="404">
            <h4>404</h4>
            <h1>Strange this page doesn't exist</h1>
            <h2>You can go back to <Link href='/'><a>Home</a></Link></h2>
        </div>
     );
}

export default NoAdres