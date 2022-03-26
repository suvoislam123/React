import React from 'react';

const  Blog = (props) => {
    return (
        <div>
            <article>
                <h1>Heading : {props.heading}</h1>
                <h1>Author: {props.author}</h1>
            </article>
        </div>
    );
};

export default Blog;