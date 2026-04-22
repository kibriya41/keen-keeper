import React, { useEffect, useState } from 'react';

const useFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const friendsData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            
            setFriends(data);
            setLoading(false);
        };
        friendsData()
    }, []);
    return {friends, loading};
};

export default useFriends;