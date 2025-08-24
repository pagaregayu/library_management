function ArrObj(){
    const users=[
        {
            id:1,name:"gayatri",age:21
        },
        {
            id:2,name:"sangita",age:44

        },
        {
            id:3,name:"sharad",age:55
        }
    ]
    return (
        <dev>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id}>ID:{user.id},Name:{user.name},Age:{user.age}</li>
                    ))
                }
            </ul>

            <ul>
                {users.filter(user=>user.age>23)
                .map(user=>(
                        <li key={user.id}>ID:{user.id},Name:{user.name},Age:{user.age}</li>
                    ))}
            </ul>
        </dev>
    )

}
export default ArrObj;