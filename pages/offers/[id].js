
export const getStaticPaths = async () => {
    const res = await fetch('/JSONS/OfferSkeleton');
    const data = await res.json();

    const paths = data.map(offer =>{
        params: {id: offer.id.toString()}
    })
    return {
        paths,
        fallback: false
    }
}

const Details = () => {
    return ( 
        <div>
            <h1>Details</h1>
        </div>
     );
}
 
export default Details;