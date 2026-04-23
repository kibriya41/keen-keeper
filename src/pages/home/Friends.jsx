import React from 'react';


const Friends = ({ friend }) => {

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

    const statusStyles = {
        active: "bg-green-100 text-green-700",
        overdue: "bg-red-100 text-red-700",
        due: "bg-yellow-100 text-yellow-700",
    };

    return (
        <div className="bg-white p-6 text-center rounded-xl mt-4 shadow-sm hover:shadow-lg transition flex flex-col items-center">

            {/* Image */}
            <img
                src={friend.picture}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
            />

            {/* Name */}
            <h5 className="font-semibold text-lg mt-3">{friend.name}</h5>

            {/* Time */}
            <p className="text-xs text-gray-400">
                {friend.days_since_contact}d ago
            </p>

            {/* TAGS */}
            <div className="flex gap-2 flex-wrap justify-center mt-2">
                {friend.tags.map((tag, i) => (
                    <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full capitalize ${tagStyles[tag] || "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* STATUS */}
            <p
                className={`text-xs px-3 py-1 rounded-full capitalize mt-3 ${statusStyles[friend.status] || "bg-gray-100 text-gray-600"
                    }`}
            >
                {friend.status}
            </p>
        </div>
    );
};

export default Friends;