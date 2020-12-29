import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props) => {
    const redirectuser = () => {
        props.history.push("/")
    }
    return(
        <>
            <button onClick={()=>redirectuser()}>Redirect to Home</button> <br/>
            <Link to={{
                pathname: `${props.match.url}/post`
            }}>go to Posts</Link><br/>
            <p>Profile page</p>
        </>
    )
}
export default Profile;
  