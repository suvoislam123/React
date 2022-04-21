import React from 'react';

const Blog = ({blog}) => {
    const {name,by,body} = blog;
    return (
        <div className='w-full mb-12'>
            <h1 className='text-3xl font-bold'>{name}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Blog;