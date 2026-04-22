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
        return <div className="flex items-center justify-center m-10"><PacmanLoader color='#244D3F'/></div>;
    }

    if (!expectedFriend) {
        return <div className="text-center mt-10">No Friend Found</div>;
    }
    return (
        <div className='bg-[#F8FAFC] my-20'>
            <h1>{expectedFriend.name}</h1>

        </div>
    );
};

export default FriendsDetails;