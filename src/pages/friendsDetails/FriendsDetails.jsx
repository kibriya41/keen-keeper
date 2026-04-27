import React, { useContext, } from 'react';
import { Link, useParams } from 'react-router';
import { Phone, MessageSquare, Video, Lock, Archive, Trash2 } from "lucide-react";
import useFriends from '../../hooks/useFriends';
import { PacmanLoader } from 'react-spinners';
import NotFound from '../notFound/NotFound';
import { FriendsContext } from '../../context/FriendsContext';
import { toast } from 'react-toastify';

const FriendsDetails = () => {

    const tagStyles = {
        work: "bg-green-100 text-green-700",
        teammate: "bg-green-100 text-green-700",
        family: "bg-blue-100 text-blue-700",
        friend: "bg-purple-100 text-purple-700",
        travel: "bg-yellow-100 text-yellow-700",
        gym: "bg-pink-100 text-pink-700",
        buddy: "bg-pink-100 text-pink-700",
        client: "bg-indigo-100 text-indigo-700",
        school: "bg-orange-100 text-orange-700",
        mentor: "bg-teal-100 text-teal-700",
        colleague: "bg-cyan-100 text-cyan-700",
        close: "bg-red-100 text-red-700",
        startup: "bg-gray-200 text-gray-700",
    };

    const { id } = useParams();
    const { friends, loading } = useFriends();

    const expectedFriend = friends.find(
        (friend) => String(friend.id) === id
    );
    const { timeline, setTimeline } = useContext(FriendsContext);

    const handleFriendDetailsData = (type, icon, friend) => {

        const newData = {
            ...friend,
            action: type,
            icon: icon,
            time: new Date().toISOString(),
        }
        setTimeline([...timeline, newData]);
        toast.success(`Contact with ${expectedFriend.name}`, {
            position: "top-center"
        })
    };


    if (loading) {
        return <div className="flex items-center justify-center m-10"><PacmanLoader color='#244D3F' /></div>;
    }

    if (!expectedFriend) {
        return <NotFound />;
    }

    return (
        <div className='bg-[#F8FAFC] py-10 md:py-16 lg:py-20'>
            <div className="container mx-auto px-4">

                <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">

                    {/* LEFT PANEL */}
                    <div className="lg:col-span-4 lg:border-r border-gray-100 lg:pr-6 flex flex-col items-center text-center">

                        <div className='bg-white w-full p-5 md:p-6 rounded-lg transition-all duration-500 hover:shadow-[0_10px_30px_rgba(148,68,251,0.2)] hover:-translate-y-1 flex flex-col items-center'>

                            <img
                                src={expectedFriend.picture}
                                alt="picture"
                                className='w-16 h-16 md:w-20 md:h-20 rounded-full'
                            />

                            <h5 className='font-semibold text-lg md:text-xl text-[#1F2937] mt-3'>
                                {expectedFriend.name}
                            </h5>

                            <div className="flex gap-2 flex-wrap justify-center mt-2">
                                {expectedFriend.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={`text-xs px-3 py-1 rounded-full capitalize ${tagStyles[tag] || "bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className='text-xs md:text-sm text-[#64748B] italic mt-3 px-2'>
                                "{expectedFriend.bio}"
                            </p>

                            <p className='text-xs md:text-sm text-[#64748B] mt-2 break-all'>
                                {expectedFriend.email}
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="w-full mt-5 space-y-2 mb-4">
                            <button className="w-full bg-white flex items-center justify-center gap-2 text-sm border border-gray-200 py-2.5 rounded-lg hover:bg-gray-50 transition">
                                <Lock size={14} /> Snooze 2 Weeks
                            </button>

                            <button className="w-full bg-white flex items-center justify-center gap-2 text-sm border border-gray-200 py-2.5 rounded-lg hover:bg-gray-50 transition">
                                <Archive size={14} /> Archive
                            </button>

                            <button className="w-full bg-white flex items-center justify-center gap-2 text-sm border border-gray-200 text-red-500 py-2.5 rounded-lg hover:bg-red-50 transition">
                                <Trash2 size={14} /> Delete
                            </button>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="lg:col-span-8 space-y-5 mt-6 lg:mt-0">

                        {/* TOP STATS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white border border-gray-100 rounded-xl py-4 text-center">
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#244D3F]">
                                    {expectedFriend.days_since_contact}
                                </h3>
                                <p className="text-sm text-[#64748B] mt-2">
                                    Days Since Contact
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl py-4 text-center">
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#244D3F]">
                                    {expectedFriend.goal}
                                </h3>
                                <p className="text-sm text-[#64748B] mt-2">
                                    Goal (Days)
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-xl py-4 text-center">
                                <h3 className="text-2xl md:text-3xl font-semibold text-[#244D3F]">
                                    {expectedFriend.next_due_date}
                                </h3>
                                <p className="text-sm text-[#64748B] mt-2">
                                    Next Due
                                </p>
                            </div>
                        </div>

                        {/* RELATIONSHIP GOAL */}
                        <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-lg md:text-xl font-medium text-[#244D3F]">
                                    Relationship Goal
                                </p>
                                <p className="text-base md:text-lg text-[#64748B] mt-2">
                                    Connect every{" "}
                                    <span className="font-bold text-[#1F2937]">
                                        30 days
                                    </span>
                                </p>
                            </div>

                            <button className="text-xs border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-100 transition">
                                Edit
                            </button>
                        </div>

                        {/* QUICK ACTION */}
                        <div className='bg-white p-4 md:p-6 rounded-xl'>
                            <p className="text-lg md:text-xl font-medium text-[#244D3F] mb-4">
                                Quick Check-In
                            </p>

                            <div className="grid grid-cols-3 gap-3 md:gap-4">
                                <button
                                    onClick={() => handleFriendDetailsData("Call", <Phone />, expectedFriend)}
                                    className="bg-[#E9E9E9] rounded-xl py-4 md:py-5 flex flex-col items-center hover:bg-gray-100 transition"
                                >
                                    <Phone />
                                    <span className="text-xs mt-2">Call</span>
                                </button>

                                <button
                                    onClick={() => handleFriendDetailsData("Text", <MessageSquare />, expectedFriend)}
                                    className="bg-[#E9E9E9] rounded-xl py-4 md:py-5 flex flex-col items-center hover:bg-gray-100 transition"
                                >
                                    <MessageSquare />
                                    <span className="text-xs mt-2">Text</span>
                                </button>

                                <button
                                    onClick={() => handleFriendDetailsData("Video", <Video />, expectedFriend)}
                                    className="bg-[#E9E9E9] rounded-xl py-4 md:py-5 flex flex-col items-center hover:bg-gray-100 transition"
                                >
                                    <Video />
                                    <span className="text-xs mt-2">Video</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;