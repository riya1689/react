//1.create component
//2.import this component in App.jsx

import { useEffect, useState } from "react"

//3.component tag
export default function Players(){
    /**old time data loading
     * 1.data j asbe seta rakhar jonno ekta state declare korte hoto
     */
    //useState declare
    const [players, setPlayers/**setPlayers name e state declare*/] = useState([])//data asbe, ekta array asbe
    useEffect(() =>{
        fetch('')//url
        .then(res=>res.json())
        .then(data => setPlayers(data))
    } ,[]) // 1. effect() call back function 2.dependecies
    return(
        <div>
            <h3>
                players: {players.length}
            </h3>
            
                <ol>
                    {
                    players.map(player => <li>{players.name}</li>)
                    }
                </ol>
            
        </div>
    )
}