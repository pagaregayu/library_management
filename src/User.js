import { useNavigate } from "react-router-dom";

function User(){
    const users=[
        {id:1,name:"gayatri",role:"admin",city:"nashik"},
        {id:2,name:"punam",role:"account",city:"pune"},
        {id:3,name:"ankita",role:"developer",city:"mumbai"}
        
    ];

    

    const navigate=useNavigate();
    const handler=()=>{
        navigate("/Home");
    }
    return(
        <div>
            <div className="container mt-4">
      <h2 className="mb-3">User Details</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>ROLE</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        <button className="btn btn-primary" onClick={()=>handler()}>Home</button>
        </div>
    )
}
export default User;