import { useContext, useState } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { FaAnglesDown } from "react-icons/fa6";

const Timeline = () => {
  const { timeline } = useContext(FriendsContext);

  //  state for filter
  const [filter, setFilter] = useState("all");

  // filter logic
  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) =>
        item.action.toLowerCase() === filter
      );

  return (
    <div className="bg-[#F8FAFC] py-12 md:py-20">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#1F2937]">
          Timeline
        </h2>

        {/* Dropdown */}
        <details className="dropdown">
          <summary className="btn m-1">
            Filter timeline <FaAnglesDown />
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">

            <li>
              <a onClick={() => setFilter("all")}>All</a>
            </li>

            <li>
              <a onClick={() => setFilter("call")}>Call</a>
            </li>

            <li>
              <a onClick={() => setFilter("text")}>Text</a>
            </li>

            <li>
              <a onClick={() => setFilter("video")}>Video</a>
            </li>
          </ul>
        </details>

        {/* Timeline List */}
        {/* Timeline List */}
        <div className="space-y-4 mt-4">
          {filteredTimeline.length === 0 ? (
            <div className="text-center py-10 md:text-4xl lg:text-5xl font-bold mb-6 text-[#244D3F]">
              No history here
            </div>
          ) : (
            filteredTimeline.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-4 md:p-5 rounded-lg border border-gray-200 hover:shadow-sm transition"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm md:text-lg text-[#64748B]">
                    <span className="font-medium text-xl text-[#244D3F]">
                      {item.action}
                    </span>{" "}
                    with <span className="text-gray-500">{item.name}</span>
                  </p>

                  <p className="text-sm md:text-lg text-[#64748B]">
                    {new Date(item.time).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;