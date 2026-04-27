import { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";


const Timeline = () => {

     const {timeline,} = useContext(FriendsContext);
     
    console.log(timeline);
    return (
        <div className='bg-[#F8FAFC] py-20'>
          <div className="container mx-auto bg-[#F8FAFC]">
            <h2 className="text-5xl font-bold mb-6">Timeline</h2>
            <div>
             
             {timeline.map((friend, index) =>
                        <h4 key={index}></h4>
                    )}
              
            </div>
          </div>
        </div>
    );
};

export default Timeline;