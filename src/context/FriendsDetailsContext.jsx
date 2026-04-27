import React, { useState } from 'react';
import { FriendsContext } from './FriendsContext';


const FriendsDetailsContext = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const data = {
        timeline, setTimeline
    };

    return (
        <FriendsContext value={data} >{children}</FriendsContext>
    );
};

export default FriendsDetailsContext;