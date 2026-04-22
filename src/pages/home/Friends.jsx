import React from 'react';

const Friends = ({friend}) => {
    return (
        <div  className='bg-white p-6 text-center rounded-lg mt-4 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(148,68,251,0.2)] hover:-translate-y-1 flex flex-col items-center'>
            <img src={friend.picture} alt="picture" className='w-20 h-20 rounded-full' />
            <h5 className='font-semibold text-xl text-[#1F2937] mt-3 '>{friend.name}</h5>
            <p className='text-xs text-[#64748B]'>{friend.days_since_contact} day ago</p>
            <ul>
                {
                    friend.tags.map((tag, index) => (
                        <li key={index} className="">{tag}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Friends;