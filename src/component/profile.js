import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {
    console.log(props)
    return(
        <div>
            <Link to={{
                pathname: `${props.match.url}/post`
            }}>go to Posts</Link><br/>
            <p>Profile page</p>
        </div>
    )
}
export default Profile;
  