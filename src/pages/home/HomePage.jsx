import React from 'react';

const HomePage = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className=' mx-auto container py-20'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold text-[#1F2937] '>Friends to keep close in your life</h2>
                    <p className='text-[#64748B] mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                    <button className='btn py-3 px-8 bg-[#244D3F] mt-4 text-white'>+ Add</button>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-3'>
                    <div className='p-8 text-center rounded-lg bg-white'>
                        <h4 className='text-4xl font-semibold text-[#244D3F] '>3</h4>
                        <p className='text-lg mt-2 text-[#64748B] '>Total Friends</p>
                    </div>

                    <div className='p-8 text-center rounded-lg bg-white'>
                        <h4 className='text-4xl font-semibold text-[#244D3F] '>3</h4>
                        <p className='text-lg mt-2 text-[#64748B] '>On Track</p>
                    </div>

                    <div className='p-8 text-center rounded-lg bg-white'>
                        <h4 className='text-4xl font-semibold text-[#244D3F] '>3</h4>
                        <p className='text-lg mt-2 text-[#64748B] '>Need Attention</p>
                    </div>

                    <div className='p-8 text-center rounded-lg bg-white'>
                        <h4 className='text-4xl font-semibold text-[#244D3F] '>3</h4>
                        <p className='text-lg mt-2 text-[#64748B] '>Interactions This Month</p>
                    </div>
                </div>
                <div>
                    <p className='text-2xl font-semibold text-[#1F2937] border-t border-gray-200 mt-10 pt-10'>Your Friends</p>
                    <div>
                        <div className='bg-white p-6 border border-amber-500 rounded-lg mt-4 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(148,68,251,0.2)] hover:-translate-y-1'>
                            <img src="" alt="" />
                            <h5>david kim</h5>
                            <p></p>
                            <ul>
                                <li></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;