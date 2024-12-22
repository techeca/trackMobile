import { useState } from 'react'

const HOME = 'home'

export default function SpendAndBudget() {
    const [navActive, setNavActive] = useState('home')

    return (
        <div className='flex flex-col gap-3 border-0 rounded-3xl w-96 items-center h-[812px] bg-nig-80 overflow-hidden'>
            <div className="w-full rounded-b-4xl flex flex-col items-center mb-2">

                {/*config*/}
                <div className="flex w-full justify-end pr-6 mt-6 z-10">
                    <div className='flex'>
                        <svg className='hover:stroke-nig-10' xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><g fill="none"><circle cx={12} cy={12} r={2} stroke="currentColor"></circle><path fill="currentColor" d="m5.399 5.88l.25-.434a.5.5 0 0 0-.617.093zM3.4 9.344l-.478-.148a.5.5 0 0 0 .228.58zm-.002 5.311l-.25-.433a.5.5 0 0 0-.228.581zm2 3.464l-.367.34a.5.5 0 0 0 .617.093zm4.6 2.655h-.5a.5.5 0 0 0 .39.488zm4.001.002l.111.488a.5.5 0 0 0 .389-.488zM18.6 18.12l-.25.433a.5.5 0 0 0 .617-.093zm1.998-3.466l.478.148a.5.5 0 0 0-.228-.58zm.002-5.311l.25.433a.5.5 0 0 0 .228-.581zm-2-3.465l.367-.34a.5.5 0 0 0-.617-.093zM14 3.225h.5a.5.5 0 0 0-.389-.487zm-4-.002l-.111-.488a.5.5 0 0 0-.39.488zm4 1.849h-.5zm5 8.66l-.25.433zm-2 3.464l-.25.433zM5 13.732l.25.433zm2-6.928l-.25.433zM3.878 9.492a8.5 8.5 0 0 1 1.887-3.273l-.733-.68a9.5 9.5 0 0 0-2.11 3.658zm.76 6.758a8.5 8.5 0 0 1-.761-1.742l-.956.296a9.5 9.5 0 0 0 .852 1.946zm1.128 1.53a8.5 8.5 0 0 1-1.127-1.53l-.866.5a9.5 9.5 0 0 0 1.259 1.71zm8.123 2.51a8.5 8.5 0 0 1-3.778-.002l-.222.974a9.5 9.5 0 0 0 4.222.003zm6.233-5.782a8.5 8.5 0 0 1-1.887 3.273l.733.68a9.5 9.5 0 0 0 2.11-3.658zm-.76-6.758c.324.563.577 1.147.762 1.742l.955-.296a9.5 9.5 0 0 0-.852-1.946zm-1.128-1.53a8.5 8.5 0 0 1 1.127 1.53l.866-.5a9.5 9.5 0 0 0-1.259-1.71zm-8.123-2.51a8.5 8.5 0 0 1 3.778.002l.222-.974a9.5 9.5 0 0 0-4.222-.003zm.389 1.362v-1.85h-1v1.85zM7.25 6.37l-1.601-.925l-.5.866l1.6.925zm-2.5 6.928l-1.601.924l.5.866l1.6-.924zm.5-3.464l-1.6-.923l-.5.866l1.6.923zm5.25 10.94v-1.847h-1v1.847zm-3.75-4.012l-1.601.924l.5.866l1.6-.924zm12.101.925l-1.601-.925l-.5.866l1.601.925zm-4.351 3.09v-1.85h-1v1.85zM20.351 8.91l-1.601.924l.5.866l1.601-.924zm.498 5.311L19.25 13.3l-.5.866l1.6.923zM14.5 5.072V3.225h-1v1.847zm3.851.374l-1.601.925l.5.866l1.601-.925zM13.5 5.072c0 1.924 2.083 3.127 3.75 2.165l-.5-.866a1.5 1.5 0 0 1-2.25-1.3zm5.25 4.763c-1.667.962-1.667 3.368 0 4.33l.5-.866a1.5 1.5 0 0 1 0-2.598zm-1.5 6.928c-1.667-.962-3.75.24-3.75 2.165h1a1.5 1.5 0 0 1 2.25-1.299zm-6.75 2.165c0-1.924-2.083-3.127-3.75-2.165l.5.866a1.5 1.5 0 0 1 2.25 1.3zm-5.25-4.763c1.667-.962 1.667-3.368 0-4.33l-.5.866c1 .577 1 2.02 0 2.598zM9.5 5.072A1.5 1.5 0 0 1 7.25 6.37l-.5.866c1.667.962 3.75-.24 3.75-2.165z"></path></g></svg>
                    </div>
                </div>

                <p className='absolute mt-[28px] font-light text-lg text-nig-30'>Spending & Budgets</p>

                <div className='mt-5'>
                    <h1 className='font-bold text-h5 mb-0 mt-15'>$82,97</h1>
                    <h3 className='text-xs text-center text-nig-40 font-semibold'>of $2,000 budget</h3>
                </div>

                {/*progress bar*/}
                <div className="absolute rotate-272 mt-[300px] mr-[240px] z-20">
                    <svg className="circular-progress absolute" width="230" height="230" viewBox="0 0 120 120">
                        <circle className="background absolute" cx="60" cy="60" r="50" stroke="#e6e6e6" strokeWidth="4" fill="none" strokeDasharray="314" strokeDashoffset="160" />
                        {/*colores*/}
                        <circle className="foreground2 absolute" cx="60" cy="60" r="50" strokeWidth="4.5" fill="none" strokeDasharray="316" strokeDashoffset="290" />
                        <circle className="foreground absolute" cx="60" cy="60" r="50" strokeWidth="4.5" fill="none" strokeDasharray="360" strokeDashoffset="310" transform="rotate(30, 60, 60)" />
                        <circle className="foreground3 absolute" cx="60" cy="60" r="50" strokeWidth="4.5" fill="none" strokeDasharray="360" strokeDashoffset="310" transform="rotate(87, 60, 60)" />
                    </svg>
                </div>

                <div className='border-[1px] w-80 h-[60px] mt-10 rounded-xl border-nig-60 flex justify-center items-center'>
                    <p className='text-md font-semibold'>Your budgets are on track</p>
                </div>

            </div>

            <div className='w-80'>
                <button className='z-10 bg-nig-60/20 rounded-3xl text-sm flex flex-col px-4 py-4 h-[84px] w-full border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-row'>
                        <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 3v-.5a.5.5 0 0 0-.5.5zm11 0h.5a.5.5 0 0 0-.5-.5zm0 6v-.5a.5.5 0 0 0-.5.5zM2 3.5h11v-1H2zM12.5 3v16h1V3zm-10 14V3h-1v14zM13 9.5h5v-1h-5zm8.5 3.5v4h1v-4zm-8 6V9h-1v10zm5.56 1.06a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm-9.88 2.12a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm14.12 0c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM19.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 20.5 19zm-3.5-.5h-3v1h3zm.94 1.56A1.5 1.5 0 0 1 16.5 19h-1c0 .639.244 1.28.732 1.768zM16.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 15.5 19zM4.94 20.06A1.5 1.5 0 0 1 4.5 19h-1c0 .639.244 1.28.732 1.768zM4.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 3.5 19zm8.5-.5H8v1h5zm-5.94-.56c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM7.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 8.5 19zm14-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 18 8.5zM1.5 17A2.5 2.5 0 0 0 4 19.5v-1A1.5 1.5 0 0 1 2.5 17z"></path></svg>
                        <div className='flex ml-2 mr-16 flex-col self-start'>
                            <span className='font-semibold text-md text-white text-start'>
                                Auto & Transport
                            </span>
                            <span className="text-sm text-nig-40 text-start">$375 left to spend</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-md text-white'>
                                $25.99
                            </span>
                            <span className="text-sm text-nig-40 text-start">of $400</span>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-[2px] w-[285px] bg-nig-60 mt-3'>
                            <div className='h-[2px] w-[85px] bg-watergreen-100'></div>
                        </div>
                    </div>

                </button>
            </div>

            <div className='w-80'>
                <button className='z-10 bg-nig-60/20 rounded-3xl text-sm flex flex-col px-4 py-4 h-[84px] w-full border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-row'>
                        <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 3v-.5a.5.5 0 0 0-.5.5zm11 0h.5a.5.5 0 0 0-.5-.5zm0 6v-.5a.5.5 0 0 0-.5.5zM2 3.5h11v-1H2zM12.5 3v16h1V3zm-10 14V3h-1v14zM13 9.5h5v-1h-5zm8.5 3.5v4h1v-4zm-8 6V9h-1v10zm5.56 1.06a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm-9.88 2.12a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm14.12 0c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM19.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 20.5 19zm-3.5-.5h-3v1h3zm.94 1.56A1.5 1.5 0 0 1 16.5 19h-1c0 .639.244 1.28.732 1.768zM16.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 15.5 19zM4.94 20.06A1.5 1.5 0 0 1 4.5 19h-1c0 .639.244 1.28.732 1.768zM4.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 3.5 19zm8.5-.5H8v1h5zm-5.94-.56c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM7.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 8.5 19zm14-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 18 8.5zM1.5 17A2.5 2.5 0 0 0 4 19.5v-1A1.5 1.5 0 0 1 2.5 17z"></path></svg>
                        <div className='flex ml-2 mr-16 flex-col self-start'>
                            <span className='font-semibold text-md text-white text-start'>
                                Entertainment
                            </span>
                            <span className="text-sm text-nig-40 text-start">$375 left to spend</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-md text-white'>
                                $50.99
                            </span>
                            <span className="text-sm text-nig-40 text-start">of $600</span>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-[2px] w-[285px] bg-nig-60 mt-3'>
                            <div className='h-[2px] w-[155px] bg-peach-50'></div>
                        </div>
                    </div>

                </button>
            </div>

            <div className='w-80'>
                <button className='z-10 bg-nig-60/20 rounded-3xl text-sm flex flex-col px-4 py-4 h-[84px] w-full border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-row'>
                        <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 3v-.5a.5.5 0 0 0-.5.5zm11 0h.5a.5.5 0 0 0-.5-.5zm0 6v-.5a.5.5 0 0 0-.5.5zM2 3.5h11v-1H2zM12.5 3v16h1V3zm-10 14V3h-1v14zM13 9.5h5v-1h-5zm8.5 3.5v4h1v-4zm-8 6V9h-1v10zm5.56 1.06a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm-9.88 2.12a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm14.12 0c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM19.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 20.5 19zm-3.5-.5h-3v1h3zm.94 1.56A1.5 1.5 0 0 1 16.5 19h-1c0 .639.244 1.28.732 1.768zM16.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 15.5 19zM4.94 20.06A1.5 1.5 0 0 1 4.5 19h-1c0 .639.244 1.28.732 1.768zM4.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 3.5 19zm8.5-.5H8v1h5zm-5.94-.56c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM7.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 8.5 19zm14-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 18 8.5zM1.5 17A2.5 2.5 0 0 0 4 19.5v-1A1.5 1.5 0 0 1 2.5 17z"></path></svg>
                        <div className='flex ml-2 mr-16 flex-col self-start'>
                            <span className='font-semibold text-md text-white text-start'>
                                Security
                            </span>
                            <span className="text-sm text-nig-40 text-start">$375 left to spend</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold text-md text-white'>
                                $5.99
                            </span>
                            <span className="text-sm text-nig-40 text-start">of $600</span>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='h-[2px] w-[285px] bg-nig-60 mt-3'>
                            <div className='h-[2px] w-[250px] bg-purplehaz-10'></div>
                        </div>
                    </div>

                </button>
            </div>

            <div className="w-80 flex flex-col gap-3 font-semibold text-md">
                <div className="flex justify-around rounded-3xl h-[84px] border-nig-70 border-[1px] items-center px-3 border-dashed">
                    <div className="flex items-center gap-3">
                        <p>Add new category </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={11.999} r={9}></circle><path d="M12 9v6m-3-3h6"></path></g></svg>
                    </div>
                </div>
            </div>

            {/*bottom menu*/}
            <div className="w-80 h-[64px] flex mt-11">
                <button className='bg-nig-60/20 rounded-3xl rounded-r-none text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 10a.5.5 0 0 0-1 0zm-14 0a.5.5 0 0 0-1 0zm15.146 2.354a.5.5 0 0 0 .708-.708zM12 3l.354-.354a.5.5 0 0 0-.708 0zm-9.354 8.646a.5.5 0 0 0 .708.708zM7 21.5h10v-1H7zM19.5 19v-9h-1v9zm-14 0v-9h-1v9zm15.854-7.354l-9-9l-.708.708l9 9zm-9.708-9l-9 9l.708.708l9-9zM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5z"></path></svg>
                    </span>
                </button>
                <button className='bg-nig-60/20 rounded-3xl rounded-l-none rounded-br-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg className={`${navActive === HOME && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={17} cy={7} r={3}></circle><circle cx={7} cy={17} r={3}></circle><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></g></svg>
                    </span>
                </button>

                <div>
                    <div className='border-8 border-nig-80 w-[66px] h-[66px] ml-[0px] -mt-[10px] rounded-full absolute z-0'></div>
                    <button className='z-10 bg-peach-0 rounded-full px-3 py-3 h-12 mx-2 border-[1px] border-b-0 border-nig-0/50 text-nig-0 drop-shadow-text-shadow hover:bg-peach-50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className="absolute  top-0 left-0 bg-radial-[ellipse_105%_130%_at_50%_110%] from-transparent from-[43%] via-white/10 to-skin-0/50 h-12 rounded-3xl"></div>
                        <span className='text-h2 font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12"></path></svg>
                        </span>
                    </button>

                    <div className='bg-nig-60/20 h-[44px] -mt-[28px]'></div>
                </div>

                <button className='bg-nig-60/20 rounded-3xl rounded-r-none rounded-bl-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></path></svg>
                    </span>
                </button>
                <button className='bg-nig-60/20 rounded-3xl rounded-l-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 8h3"></path></svg>
                    </span>
                </button>
            </div>

        </div>
    )
}