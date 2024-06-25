import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { CTData } from './CTData';

const HireCT = () => {
    const [selectedCaretaker, setSelectedCaretaker] = useState(CTData[0]);

    const handleCaretakerClick = (caretaker) => {
        setSelectedCaretaker(caretaker);
    };

    return (
        <div className='w-screen flex'>
            <Sidebar />
            <div className='w-3/4 p-4 ml-auto'>
                <h1 className='text-4xl font-semibold text-[#8883f0] mt-3'>Hire Caretaker</h1>
                <div className='bg-slate-50 rounded-[24px] p-2 mt-4 shadowboxer flex'>
                    <div className='w-[30%]'>
                        {CTData.map((val, key) => (
                            <div
                                key={key}
                                id='ctbackground'
                                className='hover:bg-slate-200 h-30 m-4 p-2 flex items-center rounded-4 cursor-pointer'
                                onClick={() => handleCaretakerClick(val)}
                            >
                                <img className='h-12 w-12 rounded-full mr-4' src={val.cticon} alt={val.ctname} />
                                <h1 className='text-[#1f2421]'>{val.ctname}</h1>
                            </div>
                        ))}
                    </div>
                    <div className='w-1 h-full bg-black'></div>
                    {selectedCaretaker && (
                        <div className='p-4 w-2/3'>
                            <div className='p-4 pl-2 rounded flex items-start'>
                                <img className='h-20 w-20 rounded-full mr-8' src={selectedCaretaker.cticon} alt={selectedCaretaker.ctname} />
                                <div className=''>
                                    <h3 className='text-2xl font-semibold text-[#8883f0]'>{selectedCaretaker.ctname}</h3>
                                    <p className=''>Age: {selectedCaretaker.ctage} years</p>
                                    <p className=''>Location: {selectedCaretaker.ctlocation}</p>
                                    <p className=''>Price: {selectedCaretaker.ctprice}</p>
                                </div>
                                <div className='flex flex-col gap-4 mr-4 ml-auto'>
                                    <button className='bg-blue-500 text-white p-2 px-4 rounded'>Hire Me</button>
                                    <button className='bg-green-500 text-white p-2 px-4 rounded'>Call Me</button>
                                </div>
                            </div>
                            <div className='mt-8 px-2 w-full flex flex-col'>
                                <div className='flex items-center my-2'>
                                    <h1 className='text-xl w-2/5'>Rates per Month</h1>
                                    <p className='text-xl'>{selectedCaretaker.ctprice}</p>
                                </div>
                                <div className='flex items-center my-2'>
                                    <h1 className='text-xl w-2/5'>Experience</h1>
                                    <p className='text-xl'>{selectedCaretaker.ctexperience}</p>
                                </div>
                                <div className='flex items-center my-2'>
                                    <h1 className='text-xl w-2/5'>Services</h1>
                                    <p className='text-xl'>{selectedCaretaker.ctservices}</p>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <h1 className='text-xl font-bold'>Reviews</h1>
                                <div className='grid grid-cols-2 gap-2'>
                                    {selectedCaretaker.ctreviews.map((review, index) => (
                                        <div key={index} className='mt-4 p-4 bg-gray-100 rounded'>
                                            <h3 className='text-lg font-semibold'>{review.name}</h3>
                                            <p className='mt-2'>{review.review}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default HireCT;
