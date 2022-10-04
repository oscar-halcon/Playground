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
                {//offer.map(a=>(<tr> <th>a.id</th></tr> <tr> <th>a.id</th></tr>))
                }
                <tr>
                    <th>ID</th><th>{offer1.id}</th>
                    <th>{offer2.id}</th>
                </tr>
                <tr>
                    <th>Total Annual</th>
                    <th>{offer1.Annual_salary+offer1.Bonus}</th>
                    <th>{offer2.Annual_salary+offer2.Bonus}</th>
                </tr>
                <tr>
                    <th>Number Options</th><th>{offer1.Number_options}</th>
                    <th>{offer2.Number_options}</th>
                </tr>
                <tr>
                    <th>Cost Exercising</th>
                    <th>{offer1.Number_options * offer1.Strike_price}</th>
                    <th>{offer2.Number_options * offer2.Strike_price}</th>
                </tr>
                <tr>
                    <th>Value of equity</th>
                    <th>{offer1.Number_options * offer1.Current_FMV_company}</th>
                    <th>{offer2.Number_options*offer2.Current_FMV_company}</th>
                </tr>
                <tr>
                    <th>Increase value of the company</th>
                </tr>
                <tr>
                    <th>Increment of company X3</th>
                    <th>{(offer1.Number_options * offer1.Current_FMV_company)*3}</th>
                    <th>{(offer2.Number_options*offer2.Current_FMV_company)*3}</th>
                </tr>
                <tr>
                    <th>Increment of company X5</th>
                    <th>{(offer1.Number_options * offer1.Current_FMV_company)*5}</th>
                    <th>{(offer2.Number_options*offer2.Current_FMV_company)*5}</th>
                </tr>
                <tr>
                    <th>Increment of company X7</th>
                    <th>{(offer1.Number_options * offer1.Current_FMV_company)*7}</th>
                    <th>{(offer2.Number_options*offer2.Current_FMV_company)*7}</th>
                </tr>
                <tr>
                    <th>Fall of the company</th>
                </tr>
                <tr>
                    <th>Decrement of company X7</th>
                    <th>{Math.round((offer1.Number_options * offer1.Current_FMV_company)/7)}</th>
                    <th>{Math.round((offer2.Number_options*offer2.Current_FMV_company)/7)}</th>
                </tr>
                <tr>
                    <th>Decrement of company X5</th>
                    <th>{(offer1.Number_options * offer1.Current_FMV_company)/5}</th>
                    <th>{(offer2.Number_options*offer2.Current_FMV_company)/5}</th>
                </tr>
                <tr>
                    <th>Decrement of company X10</th>
                    <th>{(offer1.Number_options * offer1.Current_FMV_company)/10}</th>
                    <th>{(offer2.Number_options*offer2.Current_FMV_company)/10}</th>
                </tr>
                <tr>
                    <th>Extra Benefits</th>
                </tr>
                <tr>
                    <th>Vacation days</th>
                    <th>{offer1.Vacation_days}</th>
                    <th>{offer2.Vacation_days}</th>
                </tr>
                <tr>
                    <th>Parental Leave days</th>
                    <th>{offer1.Parental_leave}</th>
                    <th>{offer2.Parental_leave}</th>
                </tr>
            </table>
        </div>
     );
}
 
export default comparison;