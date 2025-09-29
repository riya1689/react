//load dynamic data, API call using Use
import { use } from "react"
import Friend from "./friend";

export default function Friends({friendsPromise}){//promise koralam
    const friends = use(friendsPromise); // fetch/async/await er kaj "use" korbe
    console.log(friends);
    return(
        <div className="card">
            <h3>Friends: {friends.length}</h3>
            {
               friends.map(friend =><Friend key={friend.id} friend ={friend}> </Friend>) 
            }
        </div>
    )
}