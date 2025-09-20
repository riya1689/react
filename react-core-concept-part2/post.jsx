export default function Post({post}){
    return(
        <div className="card">
            <h3>
                body :{post.body}; 
            </h3>
        </div>
    )
}