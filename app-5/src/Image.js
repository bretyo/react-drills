import React from 'react'

function Image(props){
    return(
        <div>
            <img src={props.source} />
        </div>
    );
}

export default Image