import currencyFormatter from "../helpers/currencyFormatter";
const HouseRow = ({house}) => {
    return (
                    <tr key={house.id}>
                        <td>{house.name}</td>
                        <td>{house.address}</td>
                        <td>{house.region}</td>
                        <td>{currencyFormatter.format(house.price)}</td>
                    </tr>
           
       /* const HouseMemo = React.memo(HouseRow);*/
                    
    )
}
export default HouseRow;