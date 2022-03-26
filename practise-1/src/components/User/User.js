import React from 'react';

const User = (props) => {
    const {id,title,completed} = props.obj;
    console.log(props.obj);
    return (
        <div>
            <h2>Title : {title}</h2>
            <p>Id : {id}</p>
            <p>Completed : {completed.toString()}</p>
        </div>
    );
};

export default User;