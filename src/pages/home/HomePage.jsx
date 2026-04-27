import { BarLoader, PacmanLoader } from 'react-spinners';
import Friends from './Friends';
import useFriends from '../../hooks/useFriends';
import { BlinkBlur } from 'react-loading-indicators';

const HomePage = () => {

    const { friends, loading } = useFriends();

    return (
       <div className='bg-[#F8FAFC]'>
  <div className='container mx-auto px-4 py-12 md:py-20'>

    {/* Header */}
    <div className='text-center max-w-3xl mx-auto'>
      <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937]'>
        Friends to keep close in your life
      </h2>

      <p className='text-[#64748B] mt-4 text-sm sm:text-base leading-relaxed'>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className='mt-5 px-6 py-2 md:px-8 md:py-3 bg-[#244D3F] text-white rounded-lg'>
        + Add
      </button>
    </div>

    {/* Stats */}
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
      
      <div className='p-6 md:p-8 text-center rounded-lg bg-white shadow-sm'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#244D3F]'>
          {friends.length}
        </h4>
        <p className='text-sm md:text-lg mt-2 text-[#64748B]'>
          Total Friends
        </p>
      </div>

      <div className='p-6 md:p-8 text-center rounded-lg bg-white shadow-sm'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#244D3F]'>
          5
        </h4>
        <p className='text-sm md:text-lg mt-2 text-[#64748B]'>
          Active
        </p>
      </div>

      <div className='p-6 md:p-8 text-center rounded-lg bg-white shadow-sm'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#244D3F]'>
          3
        </h4>
        <p className='text-sm md:text-lg mt-2 text-[#64748B]'>
          Need Attention
        </p>
      </div>

      <div className='p-6 md:p-8 text-center rounded-lg bg-white shadow-sm'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#244D3F]'>
          3
        </h4>
        <p className='text-sm md:text-lg mt-2 text-[#64748B]'>
          Interactions This Month
        </p>
      </div>
    </div>

    {/* Friends List */}
    <div className='mt-12'>
      <p className='text-xl md:text-2xl font-semibold text-[#1F2937] border-t border-gray-200 pt-6 md:pt-10'>
        Your Friends
      </p>

      {loading ? (
        <div className='py-10 flex justify-center items-center'>
       <BlinkBlur color="#244D3F" size="medium"/>
        </div>
      ) : (
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {friends.map((friend, index) => (
            <Friends friend={friend} key={index} />
          ))}
        </div>
      )}
    </div>

  </div>
</div>
    );
};

export default HomePage;