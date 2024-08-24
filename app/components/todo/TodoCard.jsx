
import React from 'react';

const TodoCard = ({item}) => {
    const { id, title, decription, isCompleted } = item
    return (
        <div className='flex items-center justify-between bg-white rounded-md p-4'>
            <p>{title}</p>
            <p>{decription}</p>
           <div className='flex items-center justify-between gap-4'>
           <button className='btn bg-red-500 px-2  text-white rounded-md '>delete</button>
           <button className='btn bg-blue-500 px-2  text-white rounded-md '>Update</button>
           </div>
        </div>
    );
};

export default TodoCard;