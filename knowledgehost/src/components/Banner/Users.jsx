import UserRow from "./UserRow.jsx";
import Banner from "./Banner.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Users = () => {
    const [user, setUser] = useState ([]);
    useEffect(() =>{
        const fetchUsers = async () =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const user = await response.json();
        setUser(user);
    };
    fetchUsers();
    },[]);
    
    const AddUser = () => {
        setUser([...user,{
            id: 11,
            name: "jason",
            username: "jason123",
            email:   "jason@example.com",
            address: {
                street: "123 Main St",
                city: "Anytown",
                zipcode: "12345"
            }          
        }]);
    }
    return (
    <>
        <Banner headerText="Users List"></Banner>
        <div className = "row mb-4">Users</div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th >street</th>
                    <th>city</th>
                    <th> zipcode</th>
                </tr>
            </thead>
            <tbody>
                {user.map(user => <UserRow key={user.id} user={user}></UserRow>)}
            </tbody>
        </table>
        <div className = "btn btn-primary  " onClick={AddUser}>
            Add
        </div>
    </>
    )
}
export default Users;