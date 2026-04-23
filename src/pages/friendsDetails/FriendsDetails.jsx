import React from 'react';
import { useParams } from 'react-router';
import { Phone, MessageSquare, Video, Lock, Archive, Trash2 } from "lucide-react";
import useFriends from '../../hooks/useFriends';
import { PacmanLoader } from 'react-spinners';

const FriendsDetails = () => {

    // const { id } = useParams();
    // const {friends,loading} = useFriends();

    // const expectedFriend = friends.find((friend) => String(friend.id) === id);
    // console.log(expectedFriend, "ex");
    // console.log(loading);

    const { id } = useParams();
    const { friends, loading } = useFriends();

    const expectedFriend = friends.find(
        (friend) => String(friend.id) === id
    );

    if (loading) {
        return <div className="flex items-center justify-center m-10"><PacmanLoader color='#244D3F' /></div>;
    }

    if (!expectedFriend) {
        return <div className="text-center mt-10">No Friend Found</div>;
    }
    return (
        <div className='bg-[#F8FAFC] my-20'>
            <div className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="grid grid-cols-12 gap-6">

                    {/* LEFT PANEL */}
                    <div className="col-span-4 border-r border-gray-100 pr-6 flex flex-col items-center text-center">
                        <div className='bg-white w-full p-6 text-center rounded-lg transition-all duration-500 hover:shadow-[0_10px_30px_rgba(148,68,251,0.2)] hover:-translate-y-1 flex flex-col items-center'>
                            <img src={expectedFriend.picture} alt="picture" className='w-20 h-20 rounded-full' />
                            <h5 className='font-semibold text-xl text-[#1F2937] mt-3 '>{expectedFriend.name}</h5>
                            <ul className='mt-2'>
                                {
                                    expectedFriend.tags.map((tag, index) => (
                                        <li key={index} className="">{tag}</li>
                                    ))
                                }
                            </ul>
                                <p className='text-xs text-[#64748B] font-medium italic mt-3'>"{expectedFriend.bio}"</p>
                                <p className='text-xs text-[#64748B] font-medium mt-3 '>{expectedFriend.email}</p>
                        </div>
                        {/* BUTTONS */}
                        <div className="w-full mt-5 space-y-2">
                            <button className="w-full bg-white flex items-center justify-center gap-2 text-sm border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition">
                                <Lock size={14} /> Snooze 2 Weeks
                            </button>

                            <button className="w-full bg-white flex items-center justify-center gap-2 text-sm border border-gray-200 py-2 rounded-lg hover:bg-gray-50 transition">
                                <Archive size={14} /> Archive
                            </button>

                            <button className="w-full bg-white flex items-center justify-center gap-2 text-sm border border-gray-200 text-red-500 py-2 rounded-lg hover:bg-red-50 transition">
                                <Trash2 size={14} /> Delete
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="col-span-8 space-y-5">

                        {/* TOP STATS */}
                        <div className="grid grid-cols-3 gap-4">

                            <div
                                className="bg-white border border-gray-100 rounded-xl py-4 text-center"
                            >
                                <h3 className="text-3xl font-semibold text-[#244D3F]">
                                    {expectedFriend.days_since_contact}
                                </h3>
                                <p className=" text-[#64748B] mt-2">
                                   Days Since Contact
                                </p>
                            </div>

                            <div
                                className="bg-white border border-gray-100 rounded-xl py-4 text-center"
                            >
                                <h3 className="text-3xl font-semibold text-[#244D3F]">
                                    {expectedFriend.goal}
                                </h3>
                                <p className="text-[#64748B] mt-2">
                                   Goal (Days)    
                                </p>
                            </div>
                            
                            <div
                                className="bg-white border border-gray-100 rounded-xl py-4 text-center"
                            >
                                <h3 className="text-3xl font-semibold text-[#244D3F]">
                                    {expectedFriend.next_due_date}
                                </h3>
                                <p className="text-[#64748B] mt-2">
                                   Next Due
                                </p>
                            </div>
                        </div>

                        {/* RELATIONSHIP GOAL */}
                        <div className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xl font-medium text-[#244D3F]">
                                    Relationship Goal
                                </p>
                                <p className="text-lg text-[#64748B] mt-4">
                                    Connect every <span className="font-bold text-lg text-[#1F2937]">
                                        30 days
                                    </span>
                                </p>
                            </div>

                            <button className="text-xs border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-100 transition">
                                Edit
                            </button>
                        </div>

                        {/* QUICK ACTION */}
                        <div className='bg-white p-6 rounded-xl'>
                            <p className="text-xl font-medium text-[#244D3F] mx-4 mb-4">
                                Quick Check-In
                            </p>

                            <div className=" grid grid-cols-3 gap-4">
                                {[
                                    { icon: <Phone size={18} />, label: "Call" },
                                    { icon: <MessageSquare size={18} />, label: "Text" },
                                    { icon: <Video size={18} />, label: "Video" },
                                ].map((item, i) => (
                                    <button
                                        key={i}
                                        className="bg-[#E9E9E9] border border-gray-100 rounded-xl py-5 mx-3 flex flex-col items-center hover:bg-gray-100 transition"
                                    >
                                        <div className="text-gray-600">{item.icon}</div>
                                        <span className="text-xs mt-2 text-gray-600">
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;