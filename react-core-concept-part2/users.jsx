import { use } from "react"

export default function Users({fetchUsers}){
    const user= use(fetchUsers);
    return (
        <div className="card">
            <h3>User:</h3>
        </div>
    )
}