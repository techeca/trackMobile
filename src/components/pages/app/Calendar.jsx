import PageHeading from '@components/ui/PageHeading'

export default function Calendar() {

    return (
        <div className='flex flex-col gap-3 border-0 w-full items-center h-full bg-nig-80 overflow-hidden'>
            <div className="bg-nig-70/50 h-[50%] 3xs:h-[43%] w-full rounded-b-3xl flex flex-col items-center">

                {/*config*/}
                <PageHeading title='Calendar' />

                <p className='text-h6 xs:text-h7 mt-6 pr-55 font-bold'>Subs</p>
                <p className='text-h6 xs:text-h7 -mt-5 mr-48 xs:mr-34 font-bold'>Schedule</p>
                <div className="w-80 border-0 flex justify-between items-center pb-4">
                    <h1 className='text-md text-start text-nig-40 font-semibold'>3 subscriptions for today</h1>
                    <button className='bg-nig-70/50 rounded-2xl justify-center flex items-center mt-1 px-1 py-3 h-[32px] w-[89px] border-[1px] border-b-0 border-service-0/15 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='text-sm font-medium'>
                            January
                        </span>
                    </button>
                </div>

                {/*resume*/}
                <div className="flex w-full flex-nowrap gap-2 mt-3 overflow-scroll ml-16">
                    
                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] min-w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>08</span>
                        <span className="text-sm font-extralight text-nig-30">Mo</span>

                        <span className='relative h-[6px] w-[6px] -mt-2 rounded-full bg-peach-0 top-[20px]'></span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] min-w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>09</span>
                        <span className="text-sm font-extralight text-nig-30">Tu</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] min-w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>10</span>
                        <span className="text-sm font-extralight text-nig-30">We</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] min-w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>11</span>
                        <span className="text-sm font-extralight text-nig-30">Th</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] min-w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>12</span>
                        <span className="text-sm font-extralight text-nig-30">Sa</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] min-w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>13</span>
                        <span className="text-sm font-extralight text-nig-30">Mo</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>14</span>
                        <span className="text-sm font-extralight text-nig-30">Tu</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>12</span>
                        <span className="text-sm font-extralight text-nig-30">Sa</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>13</span>
                        <span className="text-sm font-extralight text-nig-30">Mo</span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[103px] w-[48px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='font-bold text-xl text-white -mt-[40px]'>14</span>
                        <span className="text-sm font-extralight text-nig-30">Tu</span>
                    </button>

                    {/*espacio*/}
                    <div className='px-3 py-3 h-[103px] w-[48px]'>
                        <span className='font-bold text-xl text-white -mt-[40px]'></span>
                        <span className="text-sm font-extralight text-nig-30">Tu</span>
                    </div>
                </div>
            </div>

            <div className='w-full h-[4%] flex px-8 justify-between'>
                <div className=''>
                    <p className='font-bold text-xl'>January</p>
                    <p className='text-nig-30 text-sm'>01.08.2022</p>
                </div>

                <div className=''>
                    <p className='font-bold text-xl text-end'>$24.98</p>
                    <p className='text-nig-30 text-sm'>in upcoming bills</p>
                </div>
            </div>

            <div className="w-full h-[30%] 3xs:h-[39%] flex flex-wrap gap-2 font-semibold text-md px-6 justify-center items-center overflow-y-scroll border-0 border-white mt-3">

                <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center py-3 min-h-[100px] w-[48%] min-w-[100px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-col items-start w-full px-3'>
                        <div className="h-[40px] w-[40px] bg-[#1ED760] rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>
                        </div>
                        <span className='font-medium text-md text-white text-start mt-10'>Spotify</span>
                        <span className='font-bold text-xl text-white mt-2'>$5.99</span>
                    </div>
                </button>

                <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center py-3 min-h-[100px] w-[48%] min-w-[100px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-col items-start w-full px-3'>
                        <div className="h-[40px] w-[40px] bg-[#FF0000] rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path></svg>
                        </div>
                        <span className='font-medium text-md text-white text-start mt-10'>YouTube Premium</span>
                        <span className='font-bold text-xl text-white mt-2'>$18.99</span>
                    </div>
                </button>

                <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center py-3 min-h-[100px] w-[48%] min-w-[100px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-col items-start w-full px-3'>
                        <div className="h-[40px] w-[40px] bg-[#ACDCF5] rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-[6px]" width={100} height={100} viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"></path><path fill="#0078d4" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"></path><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"></path><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"></path></svg>
                        </div>
                        <span className='font-medium text-md text-white text-start mt-10'>Microsoft OneDrive</span>
                        <span className='font-bold text-xl text-white mt-2'>$29.99</span>
                    </div>
                </button>

                <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center py-3 min-h-[100px] w-[48%] min-w-[100px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-col items-start w-full px-3'>
                        <div className="h-[40px] w-[40px] bg-[#ACDCF5] rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-[6px]" width={100} height={100} viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"></path><path fill="#0078d4" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"></path><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"></path><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"></path></svg>
                        </div>
                        <span className='font-medium text-md text-white text-start mt-10'>Microsoft OneDrive</span>
                        <span className='font-bold text-xl text-white mt-2'>$29.99</span>
                    </div>
                </button>

                <button className='z-10 bg-[#31313b] rounded-2xl text-sm justify-center flex flex-col items-center py-3 min-h-[100px] w-[48%] min-w-[100px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className='flex flex-col items-start w-full px-3'>
                        <div className="h-[40px] w-[40px] bg-[#ACDCF5] rounded-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="p-[6px]" width={100} height={100} viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"></path><path fill="#0078d4" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"></path><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"></path><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"></path></svg>
                        </div>
                        <span className='font-medium text-md text-white text-start mt-10'>Microsoft OneDrive</span>
                        <span className='font-bold text-xl text-white mt-2'>$29.99</span>
                    </div>
                </button>

            </div>

        </div>
    )
}