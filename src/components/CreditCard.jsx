import masterCard from '../assets/MasterCardLogo.png'
import Chip from '../assets/Chip.png'
import { useState } from 'react'

const LISTSUBS = 'subs'
const LISTBILLS = 'bills'

const HOME = 'home'
const CARDS = 'cards'

export default function CreditCard() {
    const [listSelected, setListSelected] = useState('subs');
    const [navActive, setNavActive] = useState(CARDS)

    return (
        <div className='flex flex-col gap-3 border-0 rounded-3xl w-96 items-center h-[812px] bg-nig-80 overflow-hidden'>

            <div className="h-[430px] w-full rounded-b-4xl flex flex-col items-center">
                {/*config*/}
                <div className="flex w-full justify-end pr-6 mt-6 z-10">
                    <div className=''>
                        <svg className='hover:stroke-nig-10' xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><g fill="none"><circle cx={12} cy={12} r={2} stroke="currentColor"></circle><path fill="currentColor" d="m5.399 5.88l.25-.434a.5.5 0 0 0-.617.093zM3.4 9.344l-.478-.148a.5.5 0 0 0 .228.58zm-.002 5.311l-.25-.433a.5.5 0 0 0-.228.581zm2 3.464l-.367.34a.5.5 0 0 0 .617.093zm4.6 2.655h-.5a.5.5 0 0 0 .39.488zm4.001.002l.111.488a.5.5 0 0 0 .389-.488zM18.6 18.12l-.25.433a.5.5 0 0 0 .617-.093zm1.998-3.466l.478.148a.5.5 0 0 0-.228-.58zm.002-5.311l.25.433a.5.5 0 0 0 .228-.581zm-2-3.465l.367-.34a.5.5 0 0 0-.617-.093zM14 3.225h.5a.5.5 0 0 0-.389-.487zm-4-.002l-.111-.488a.5.5 0 0 0-.39.488zm4 1.849h-.5zm5 8.66l-.25.433zm-2 3.464l-.25.433zM5 13.732l.25.433zm2-6.928l-.25.433zM3.878 9.492a8.5 8.5 0 0 1 1.887-3.273l-.733-.68a9.5 9.5 0 0 0-2.11 3.658zm.76 6.758a8.5 8.5 0 0 1-.761-1.742l-.956.296a9.5 9.5 0 0 0 .852 1.946zm1.128 1.53a8.5 8.5 0 0 1-1.127-1.53l-.866.5a9.5 9.5 0 0 0 1.259 1.71zm8.123 2.51a8.5 8.5 0 0 1-3.778-.002l-.222.974a9.5 9.5 0 0 0 4.222.003zm6.233-5.782a8.5 8.5 0 0 1-1.887 3.273l.733.68a9.5 9.5 0 0 0 2.11-3.658zm-.76-6.758c.324.563.577 1.147.762 1.742l.955-.296a9.5 9.5 0 0 0-.852-1.946zm-1.128-1.53a8.5 8.5 0 0 1 1.127 1.53l.866-.5a9.5 9.5 0 0 0-1.259-1.71zm-8.123-2.51a8.5 8.5 0 0 1 3.778.002l.222-.974a9.5 9.5 0 0 0-4.222-.003zm.389 1.362v-1.85h-1v1.85zM7.25 6.37l-1.601-.925l-.5.866l1.6.925zm-2.5 6.928l-1.601.924l.5.866l1.6-.924zm.5-3.464l-1.6-.923l-.5.866l1.6.923zm5.25 10.94v-1.847h-1v1.847zm-3.75-4.012l-1.601.924l.5.866l1.6-.924zm12.101.925l-1.601-.925l-.5.866l1.601.925zm-4.351 3.09v-1.85h-1v1.85zM20.351 8.91l-1.601.924l.5.866l1.601-.924zm.498 5.311L19.25 13.3l-.5.866l1.6.923zM14.5 5.072V3.225h-1v1.847zm3.851.374l-1.601.925l.5.866l1.601-.925zM13.5 5.072c0 1.924 2.083 3.127 3.75 2.165l-.5-.866a1.5 1.5 0 0 1-2.25-1.3zm5.25 4.763c-1.667.962-1.667 3.368 0 4.33l.5-.866a1.5 1.5 0 0 1 0-2.598zm-1.5 6.928c-1.667-.962-3.75.24-3.75 2.165h1a1.5 1.5 0 0 1 2.25-1.299zm-6.75 2.165c0-1.924-2.083-3.127-3.75-2.165l.5.866a1.5 1.5 0 0 1 2.25 1.3zm-5.25-4.763c1.667-.962 1.667-3.368 0-4.33l-.5.866c1 .577 1 2.02 0 2.598zM9.5 5.072A1.5 1.5 0 0 1 7.25 6.37l-.5.866c1.667.962 3.75-.24 3.75-2.165z"></path></g></svg>
                    </div>
                </div>
                <p className='absolute mt-[28px] font-light text-lg text-nig-30'>Credit Cards</p>
            </div>

            <div className='absolute mt-[20%]'>
                <div className='z-30 relative border-l-[1px] border-service-0/15 border-0 w-[232px] h-[349px] rounded-2xl bg-[#252530] overflow-hidden'>
                    <div className='w-[260px] h-[260px] rounded-full bg-service-0/10 ml-[90px] -mt-[90px] opacity-50'></div>
                    <div className='w-[379px] h-[379px] rounded-full bg-service-0/10 -ml-[70px] -mt-[50px] opacity-50'></div>
                    <div className='absolute top-[10%] flex ml-[37%]'>
                        <img src={masterCard} alt='MasterCard Logo' />
                    </div>
                    <p className='absolute z-30 w-12 h-12 top-[50%] ml-[40%] text-sm text-nig-20'>Joe Doe</p>
                    <p className='absolute z-30 h-12 top-[57%] font-semibold ml-[20%] text-md text-white w-full'>**** **** **** 2197</p>
                    <p className='absolute z-30 h-12 top-[67%] font-semibold ml-[40%] text-md text-white w-full'>08/28</p>
                    <img src={Chip} alt='chip card' className='absolute top-[80%] ml-[40%]' />
                </div>

                <div className='z-20 absolute top-2 rotate-[4deg] ml-3 border-l-[1px] border-service-0/15 border-0 w-[232px] h-[349px] rounded-2xl bg-gradient-to-t from-nig-70/50 to-nig-70/35 overflow-hidden'>
                    <div className='w-[260px] h-[260px] rounded-full bg-service-0/10 ml-[90px] -mt-[90px] opacity-50'></div>
                    <div className='w-[379px] h-[379px] rounded-full bg-service-0/10 -ml-[70px] -mt-[50px] opacity-50'></div>
                </div>

                <div className='absolute top-2 rotate-[8deg] ml-6 border-l-[1px] border-service-0/15 border-0 w-[232px] h-[349px] rounded-2xl bg-gradient-to-t from-nig-80 to-nig-80 overflow-hidden'>
                    <div className='w-[260px] h-[260px] rounded-full bg-service-0/10 ml-[90px] -mt-[90px] opacity-50'></div>
                    <div className='w-[379px] h-[379px] rounded-full bg-service-0/10 -ml-[70px] -mt-[50px] opacity-50'></div>
                </div>
            </div>

            <p className='font-semibold text-lg pt-[40px]'>Subscriptions</p>
            <div className="w-80 flex gap-3 font-semibold text-md justify-center py-2 pt-2">
                <div className="h-[40px] w-[40px] bg-[#1ED760] rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>
                </div>
                <div className="h-[40px] w-[40px] bg-[#FF0000] rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path></svg>
                </div>
                <div className="h-[40px] w-[40px] bg-[#ACDCF5] rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-[6px]" width={100} height={100} viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"></path><path fill="#0078d4" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"></path><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"></path><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"></path></svg>
                </div>
                <div className="h-[40px] w-[40px] bg-black rounded-xl flex items-center justify-center">
                    <svg className='rounded-xl' xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 256 256"><defs><path id="logosNetflixIcon0" fill="#b1060f" stroke="#000" d="m141.676 41.275l-.067 38.361l-.068 38.361l-3.156-8.905l-.006-.017l-4.078 85.402c4.01 11.324 6.158 17.369 6.182 17.393c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.821.226 3.388.342 3.483.257c.094-.084.145-39.143.114-86.797l-.058-86.644zm-61.538-.115v86.732c0 47.703.047 86.779.104 86.836s3.011-.222 6.565-.62c3.553-.398 8.465-.893 10.914-1.1c3.756-.317 14.97-1.038 16.268-1.046c.378-.002.402-1.95.457-36.735l.058-36.734l2.713 7.677l.96 2.713l4.077-85.381l-1.401-3.96a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path id="logosNetflixIcon1" fill="url(#logosNetflixIcon3)" d="M80.138 41.16v48.685l34.296 90.976c.004-2.085.008-3.211.012-5.594l.058-36.734l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.821.226 3.388.342 3.483.257c.064-.058.107-19.21.118-46.227l-34.136-98.14l-.016 9.287l-.068 38.361l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path id="logosNetflixIcon2" fill="#e50914" d="m80.139 41.16l34.365 97.377v-.044l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.812.225 3.37.34 3.48.258l-34.1-96.737v.017l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55c-3.332-9.42-6.159-17.408-6.283-17.754l-.225-.628z"></path><radialGradient id="logosNetflixIcon3" cx="48.34%" cy="49.419%" r="70.438%" fx="48.34%" fy="49.419%" gradientTransform="matrix(1 0 0 .55088 0 .222)"><stop offset="0%"></stop><stop offset="100%" stopOpacity={0}></stop></radialGradient></defs><path d="M0 0h255.904v255.904H0z"></path><use href="#logosNetflixIcon0" strokeWidth={2.956}></use><use href="#logosNetflixIcon1"></use><use href="#logosNetflixIcon2"></use><use href="#logosNetflixIcon0" strokeWidth={2.956}></use><use href="#logosNetflixIcon1"></use><use href="#logosNetflixIcon2"></use></svg>
                </div>
            </div>

            <div className='absolute w-[384px] rounded-3xl mt-[627px] h-[185px] bg-nig-70/50 flex justify-center'>

                <div className='w-[328px] h-[52px] border-dashed border-1 rounded-2xl flex items-center justify-center border-nig-60 mt-6'>
                    <p className='text-nig-30 flex gap-2 justify-center'>
                        <span className='text-md font-semibold'>Add new card</span>
                        <svg className='mt-[1px]' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={11.999} r={9}></circle><path d="M12 9v6m-3-3h6"></path></g></svg>
                    </p>
                </div>

            </div>
            {/*bottom menu*/}
            <div className="w-80 h-[64px] flex mt-36 z-0">
                <button className='bg-nig-60/20 rounded-3xl rounded-r-none text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 10a.5.5 0 0 0-1 0zm-14 0a.5.5 0 0 0-1 0zm15.146 2.354a.5.5 0 0 0 .708-.708zM12 3l.354-.354a.5.5 0 0 0-.708 0zm-9.354 8.646a.5.5 0 0 0 .708.708zM7 21.5h10v-1H7zM19.5 19v-9h-1v9zm-14 0v-9h-1v9zm15.854-7.354l-9-9l-.708.708l9 9zm-9.708-9l-9 9l.708.708l9-9zM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5z"></path></svg>
                    </span>
                </button>
                <button className='bg-nig-60/20 rounded-3xl rounded-l-none rounded-br-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <span className='font-semibold text-nig-40 px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={17} cy={7} r={3}></circle><circle cx={7} cy={17} r={3}></circle><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></g></svg>
                    </span>
                </button>

                <div>
                    <div className='border-8 border-[#292932] w-[66px] h-[66px] ml-[0px] -mt-[10px] rounded-full absolute z-0'></div>
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
                        <svg className={`${navActive === CARDS && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 8h3"></path></svg>
                    </span>
                </button>
            </div>

        </div>
    )
}