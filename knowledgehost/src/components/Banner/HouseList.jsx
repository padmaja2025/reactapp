import HouseRow from './HouseRow.jsx';
import { useState } from 'react';

const houseArray = [
    {
        id:1,
        name:"House Stark",
        address:"Winterfell",
        region:"The North",
        price: 500
    },
    {
        id:2,
        name:"House Lannister",
        address:"Casterly Rock",
        region:"The Westerlands",
        price: 700
    },
    {
        id:3,
        name:"House Targaryen",
        address:"Dragonstone",
        region:"Dragonstone",
        price: 900
    }
]

const HouseList = () => {
   const [house,setHouse]= useState(houseArray);
 

    const AddHouse = () => {
     setHouse([...house,{
        id:4,
        name:"House Baratheon",
        address:"Storm's End",
        region:"The Stormlands",
        price: 800
     }]);
   }

    return (
        <>

        <div className = "row mb-4">
            <h1>Available house in the Market</h1>
        </div>
      
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Region</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {house.map(h => <HouseRow key = {h.id} house= {h}></HouseRow>
                    
                    )}
                    </tbody>
            </table>
          <button className="btn btn-primary" onClick={AddHouse}>   
            Add 
          </button>
        </>
     )
}

export default HouseList;