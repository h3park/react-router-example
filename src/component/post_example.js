import React from "react";
import {withRouter} from 'react-router';

const PostExample = (props) => {
    return(
        <div>
            <p>
                Example for with router. <br/>
                By default with react-router the only ones who get access to props and params etc -> direct chilren of route. <br/>
                Post example is child of Posts, so it does not get access to props.<br/><br/>

                If we pass props from Posts, we get props from Posts not from PostExample and sometimes we might not get
                correct information.<br/><br/>

                That is why we need to use withRouter<br/>
            </p>
        </div>
    )
}
export default withRouter(PostExample);