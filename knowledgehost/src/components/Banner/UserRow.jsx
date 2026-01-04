const UserRow = ({user}) => {
    return (
        <>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
            </tr>
        </>
    )
}
export default UserRow;