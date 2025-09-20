import { Suspense } from 'react';
import User from './users';
import Friends from './friends';
import Posts from './posts';//3

//4.promise create async/ await
const fetchPosts = async()=>{
    const res = await fetch('');
    return res.json();  // res.json() one kind of promise
}
const fetchUsers =fetch('')
    .then(res => res.json());

/**
 * 1.just write a simple fetch with json conversion
 * 2.wrap the data loading under suspense
 */

const fetchFriends =async() =>{
    const res = await fetch('');
    return res.json();
}
function App(){
    /*5. call promise in a variable*/
    const postsPromise = fetchPosts();
    return (
    <>
    {/*2*/}<Suspense fallback ={<h4>Posts are coming....</h4>}>
        {/*6.Send props,set promise, set dynamically in component*/}
     <Posts postsPromise={postsPromise}> </Posts>
    </Suspense>
    
    <Suspense fallback ={<h3>Loading ... </h3> }>
        <User fetchUsers ={fetchUsers}> </User> 
    </Suspense>

    <Suspense fallback={<h3>Friends Loading ...</h3>}>
    <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
    </>
    )
}
