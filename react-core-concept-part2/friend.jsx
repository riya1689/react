export default function Friend({friend}){
    console.log(friend);
    const {name, email} = friend;
    return(
        <div>
            <h4>
                Name: {name}
                <p>Email:{email}</p>
            </h4>
        </div>

    )
}