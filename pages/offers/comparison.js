import Offer from '../../JSONS/OfferSkeleton.json';

export const getStaticProps = async () => {
  const data = Offer;
  return{
    props: { offer1: data.at(data.length-data.length),offer2: data.at((data.length-data.length)+1) }
  }
}

const comparison = ({offer1, offer2}) => {
    return ( 
        <div>
            <table className='comparetab'>
                <tr>
                    <th>ID</th><th>{offer1.id}</th>
                    <th>{offer2.id}</th>
                </tr>
                <tr>
                    <th>Annual Salary</th><th>{offer1.Annual_salary}</th>
                    <th>{Number(offer2.Annual_salary)}</th>
                </tr>
            </table>
        </div>//<th>{Number(offer1.Annual_salary)-Number(offer2.Annual_salary)}</th>
     );
}
 
export default comparison;