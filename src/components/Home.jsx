import dots from '../assets/Ellipse.png'
import { useState } from 'react'

const LISTSUBS = 'subs'
const LISTBILLS = 'bills'

const HOME = 'home' 

export default function Home() {
    const [listSelected, setListSelected] = useState('subs');
    const [navActive, setNavActive] = useState('home')

    return (
        <div className='flex flex-col gap-3 border-0 rounded-3xl w-96 items-center h-[812px] bg-nig-80 overflow-hidden'>
            <div className="bg-nig-70/50 h-[430px] w-full rounded-b-4xl flex flex-col items-center">

                {/*config*/}
                <div className="flex w-full justify-end pr-6 mt-6 z-10">
                    <div className=''>
                        <svg className='hover:stroke-nig-10' xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><g fill="none"><circle cx={12} cy={12} r={2} stroke="currentColor"></circle><path fill="currentColor" d="m5.399 5.88l.25-.434a.5.5 0 0 0-.617.093zM3.4 9.344l-.478-.148a.5.5 0 0 0 .228.58zm-.002 5.311l-.25-.433a.5.5 0 0 0-.228.581zm2 3.464l-.367.34a.5.5 0 0 0 .617.093zm4.6 2.655h-.5a.5.5 0 0 0 .39.488zm4.001.002l.111.488a.5.5 0 0 0 .389-.488zM18.6 18.12l-.25.433a.5.5 0 0 0 .617-.093zm1.998-3.466l.478.148a.5.5 0 0 0-.228-.58zm.002-5.311l.25.433a.5.5 0 0 0 .228-.581zm-2-3.465l.367-.34a.5.5 0 0 0-.617-.093zM14 3.225h.5a.5.5 0 0 0-.389-.487zm-4-.002l-.111-.488a.5.5 0 0 0-.39.488zm4 1.849h-.5zm5 8.66l-.25.433zm-2 3.464l-.25.433zM5 13.732l.25.433zm2-6.928l-.25.433zM3.878 9.492a8.5 8.5 0 0 1 1.887-3.273l-.733-.68a9.5 9.5 0 0 0-2.11 3.658zm.76 6.758a8.5 8.5 0 0 1-.761-1.742l-.956.296a9.5 9.5 0 0 0 .852 1.946zm1.128 1.53a8.5 8.5 0 0 1-1.127-1.53l-.866.5a9.5 9.5 0 0 0 1.259 1.71zm8.123 2.51a8.5 8.5 0 0 1-3.778-.002l-.222.974a9.5 9.5 0 0 0 4.222.003zm6.233-5.782a8.5 8.5 0 0 1-1.887 3.273l.733.68a9.5 9.5 0 0 0 2.11-3.658zm-.76-6.758c.324.563.577 1.147.762 1.742l.955-.296a9.5 9.5 0 0 0-.852-1.946zm-1.128-1.53a8.5 8.5 0 0 1 1.127 1.53l.866-.5a9.5 9.5 0 0 0-1.259-1.71zm-8.123-2.51a8.5 8.5 0 0 1 3.778.002l.222-.974a9.5 9.5 0 0 0-4.222-.003zm.389 1.362v-1.85h-1v1.85zM7.25 6.37l-1.601-.925l-.5.866l1.6.925zm-2.5 6.928l-1.601.924l.5.866l1.6-.924zm.5-3.464l-1.6-.923l-.5.866l1.6.923zm5.25 10.94v-1.847h-1v1.847zm-3.75-4.012l-1.601.924l.5.866l1.6-.924zm12.101.925l-1.601-.925l-.5.866l1.601.925zm-4.351 3.09v-1.85h-1v1.85zM20.351 8.91l-1.601.924l.5.866l1.601-.924zm.498 5.311L19.25 13.3l-.5.866l1.6.923zM14.5 5.072V3.225h-1v1.847zm3.851.374l-1.601.925l.5.866l1.601-.925zM13.5 5.072c0 1.924 2.083 3.127 3.75 2.165l-.5-.866a1.5 1.5 0 0 1-2.25-1.3zm5.25 4.763c-1.667.962-1.667 3.368 0 4.33l.5-.866a1.5 1.5 0 0 1 0-2.598zm-1.5 6.928c-1.667-.962-3.75.24-3.75 2.165h1a1.5 1.5 0 0 1 2.25-1.299zm-6.75 2.165c0-1.924-2.083-3.127-3.75-2.165l.5.866a1.5 1.5 0 0 1 2.25 1.3zm-5.25-4.763c1.667-.962 1.667-3.368 0-4.33l-.5.866c1 .577 1 2.02 0 2.598zM9.5 5.072A1.5 1.5 0 0 1 7.25 6.37l-.5.866c1.667.962 3.75-.24 3.75-2.165z"></path></g></svg>
                    </div>
                </div>

                <div></div>
                {/*<div className='absolute bg-gradient-to-b from-transparent to-nig-70 h-[430px] w-[384px] z-10 rounded-b-4xl'></div>*/}


                {/*circulo exterior*/}
                <div className='absolute overflow-hidden w-[384px]'>
                    <div className='relative -mt-6 -ml-[18px] w-[420px] h-[420px] rounded-full border-4 border-dotted border-nig-70/60 flex justify-center items-center z-0'></div>
                </div>

                {/*circulo exterior de progress*/}
                <div className='absolute mt-3 w-[340px] h-[340px] rounded-full border-4 border-dotted border-nig-70 flex justify-center items-center z-0'></div>

                {/*progress bar*/}
                <div className="rotate-223 absolute mt-[416px] ml-[15px] z-20">
                    <svg className="circular-progress absolute" width="330" height="330" viewBox="0 0 120 120">
                        <circle className="background absolute" cx="60" cy="60" r="50" stroke="#e6e6e6" strokeWidth="4" fill="none" strokeDasharray="314" strokeDashoffset="74" />
                        <circle className="foreground absolute" cx="60" cy="60" r="50" stroke="#4E4E61" strokeWidth="4.5" fill="none" strokeDasharray="314" strokeDashoffset="115" />
                    </svg>
                </div>

                {/*text logo, total, etc*/}
                <div className="w-[286px] h-[286px] border-0 flex flex-col justify-center items-center -mt-4 z-20">
                    <div className='absolute'>
                        <h1 className='font-semibold text-h3 flex gap-1 items-center py-6 -mt-10'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.425 0 .713.288T13 3v7.275q.45.275.725.713T14 12q0 .825-.587 1.413T12 14t-1.412-.587T10 12q0-.575.275-1.025t.725-.7v-2.15q-1.3.35-2.15 1.413T8 12q0 1.65 1.175 2.825T12 16t2.825-1.175T16 12q0-.65-.187-1.2T15.3 9.75q-.25-.35-.225-.775t.3-.7q.3-.3.713-.3t.662.35q.575.775.913 1.7T18 12q0 2.5-1.75 4.25T12 18t-4.25-1.75T6 12q0-2.25 1.425-3.912T11 6.075V4.05q-2.975.375-4.988 2.625T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.45-.475-2.738t-1.35-2.337q-.275-.325-.275-.75t.3-.725t.713-.287t.687.337q1.125 1.325 1.763 2.975T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg></span>
                            TRACKIZER
                        </h1>
                        <h2 className='font-bold text-4xl mb-4'>$1,235</h2>
                        <h3 className='text-sm text-center text-nig-40 font-semibold'>This month bills</h3>
                    </div>
                    {/*<div className="absolute border-4 rounded-full h-[200px] w-[200px] border-dotted border-nig-60/50 z-0"></div>*/}
                    <img src={dots} alt='dot points' />
                    <button className='bg-nig-60/20 rounded-2xl justify-center flex items-center px-1 py-3 h-[32px] w-[120px] border-[1px] border-b-0 border-service-0/15 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='text-sm font-medium'>
                            See your budget
                        </span>
                    </button>
                </div>

                {/*resume*/}
                <div className="flex gap-2 mt-3">
                    <button className='z-10 bg-[#31313b] rounded-3xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[68px] w-[104px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className='absolute h-[1px] w-[46px] bg-peach-50 -mt-[68px]'></div>
                        <span className='font-semibold text-nig-40'>
                            Active subs
                        </span>
                        <span className="text-md">12</span>
                    </button>

                    <button className='z-20 bg-[#31313b] rounded-3xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[68px] w-[104px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className='absolute h-[1px] w-[46px] bg-purplehaz-10 -mt-[68px]'></div>
                        <span className='font-semibold text-nig-40'>
                            Highest subs
                        </span>
                        <span className="text-md">$19.99</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-3xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[68px] w-[104px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className='absolute h-[1px] w-[46px] bg-watergreen-50 -mt-[68px]'></div>
                        <span className='font-semibold text-nig-40'>
                            Lowest subs
                        </span>
                        <span className="text-md">$5.99</span>
                    </button>
                </div>
            </div>

            <div className="w-80 flex flex-col gap-3 font-semibold text-md">
                <div className="bg-nig-100 h-[50px] rounded-2xl flex items-center px-2 justify-between">
                    {listSelected === LISTSUBS ?
                        <>
                            <button className='bg-nig-60/20 rounded-2xl justify-center flex items-center px-3 py-3 h-[36px] w-[155px] border-[1px] border-b-0 border-service-0/15 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                                <span className='text-sm font-medium'>
                                    Your subscriptions
                                </span>
                            </button>
                            <p onClick={() => setListSelected('bills')} className="text-sm px-6 text-nig-30 font-semibold hover:cursor-pointer">Upcoming bills</p>
                        </>
                        :
                        <>
                            <p onClick={() => setListSelected('subs')} className="text-sm px-3 text-nig-30 font-semibold hover:cursor-pointer">Your subscriptions</p>
                            <button className='bg-nig-60/20 rounded-2xl justify-center flex items-center px-2 py-3 h-[36px] w-[155px] border-[1px] border-b-0 border-service-0/15 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                                <span className='text-sm font-medium'>
                                    Upcoming bills
                                </span>
                            </button>
                        </>
                    }
                </div>

                {listSelected === LISTSUBS ?
                    <>
                        <div className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                <div className="h-[40px] w-[40px] bg-[#1ED760] rounded-xl flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>
                                </div>
                                <p>Spotify</p>
                            </div>

                            <p>$5.99</p>
                        </div>

                        <div className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                <div className="h-[40px] w-[40px] bg-[#FF0000] rounded-xl flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path></svg>
                                </div>
                                <p>Youtube Premium</p>
                            </div>

                            <p>$18.99</p>
                        </div>

                        <div className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                <div className="h-[40px] w-[40px] bg-[#ACDCF5] rounded-xl flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="p-[6px]" width={100} height={100} viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"></path><path fill="#0078d4" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"></path><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"></path><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"></path></svg>
                                </div>
                                <p>Microsoft OneDrive</p>
                            </div>

                            <p>$29.99</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                <div className="h-[40px] w-[40px] bg-nig-70 rounded-xl flex flex-col  items-center justify-center">
                                    <span className='text-xs font-light text-nig-30'>Jun</span>
                                    <span className='-mt-[5px] text-md text-nig-30'>25</span>
                                </div>
                                <p>Spotify</p>
                            </div>

                            <p>$5.99</p>
                        </div>

                        <div className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                <div className="h-[40px] w-[40px] bg-nig-70 rounded-xl flex flex-col items-center justify-center">
                                    <span className='text-xs font-light text-nig-30'>Jun</span>
                                    <span className='-mt-[5px] text-md text-nig-30'>25</span>
                                </div>
                                <p>Youtube Premium</p>
                            </div>

                            <p>$18.99</p>
                        </div>

                        <div className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                <div className="h-[40px] w-[40px] bg-nig-70 rounded-xl flex flex-col items-center justify-center">
                                    <span className='text-xs font-light text-nig-30'>Jun</span>
                                    <span className='-mt-[5px] text-md text-nig-30'>25</span>
                                </div>
                                <p>Microsoft OneDrive</p>
                            </div>

                            <p>$29.99</p>
                        </div>
                    </>
                }


            </div>

            {/*bottom menu*/}
            <div className="w-80 h-[64px] flex">
                <button className='bg-nig-60/20 rounded-3xl rounded-r-none text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg className={`${navActive === HOME && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 10a.5.5 0 0 0-1 0zm-14 0a.5.5 0 0 0-1 0zm15.146 2.354a.5.5 0 0 0 .708-.708zM12 3l.354-.354a.5.5 0 0 0-.708 0zm-9.354 8.646a.5.5 0 0 0 .708.708zM7 21.5h10v-1H7zM19.5 19v-9h-1v9zm-14 0v-9h-1v9zm15.854-7.354l-9-9l-.708.708l9 9zm-9.708-9l-9 9l.708.708l9-9zM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5z"></path></svg>
                    </span>
                </button>
                <button className='bg-nig-60/20 rounded-3xl rounded-l-none rounded-br-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={17} cy={7} r={3}></circle><circle cx={7} cy={17} r={3}></circle><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></g></svg>
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