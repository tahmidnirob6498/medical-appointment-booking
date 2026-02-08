import React from 'react';

const Blog = ({blog}) => {
    const {question,answer,addedDate}=blog
    return (
        <div className='border border-gray-200 bg-gray-200 p-5 rounded-xl my-4'>
           <h1 className='font-semibold text-start'>{question}</h1>
           <div className='my-2 border border-dotted'></div>
           <div>
            <p className='font-semibold text-start'>Answer</p>
            <p className='text-start'>{answer}</p>
           </div>
           <div className='my-2 border border-dotted'></div>
           <p className='text-start font-semibold'>Added Date:{addedDate}</p> 
        </div>
    );
};

export default Blog;