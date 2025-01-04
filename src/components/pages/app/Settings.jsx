import { useNavigate } from "react-router-dom"
import { SwitchInput } from "../../ui/SwitchInput"
import PageHeadingBack from "../../ui/PageHeadingBack"

export default function Settings() {
    const navigate = useNavigate()

    return (
        <div className='flex flex-wrap w-full items-center h-full bg-nig-80 overflow-y-scroll px-6'>

            <div className="flex flex-col justify-between py-4 items-center w-full min-h-[35%]">

                <PageHeadingBack title='Settings' />

                <div className="flex flex-col items-center gap-3 mt-6">
                    <div className="bg-[#1ED760] w-[72px] h-[72px] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>
                    </div>

                    <div className="text-center">
                        <p className="text-white font-bold text-h4">Joe Doe</p>
                        <p className="text-sm font-medium text-nig-30">j.doe@gmail.com</p>
                    </div>

                    <button className='bg-white/10 flex items-center justify-center mt-1 rounded-3xl py-3 h-[32px] w-[87px] border-[1px] border-b-0 border-nig-0/20 text-nig-0 hover:bg-white/20 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='text-sm font-medium'>Edit profile</span>
                    </button>
                </div>

            </div>

            <div className=" w-full flex flex-col gap-3 items-center pb-3">

                <div className="w-full">
                    <p className="text-white  text-h2 py-2">General</p>
                    <div className="w-full h-[112px] bg-nig-70/20 opacity-50 py-4 px-5 flex flex-col justify-between rounded-2xl border-[1px] border-r-[0px] border-b-[0px] border-service-0/15">
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><path strokeLinecap="round" d="M8 10V7a4 4 0 1 1 8 0v3"></path><path strokeLinejoin="round" d="M5 10h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path><path strokeLinejoin="round" strokeWidth={1.5} d="M14.5 15.5h.01v.01h-.01z"></path></g></svg>
                                Security</span>
                            <span className="flex items-center font-light text-sm text-nig-30">FaceID <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span>
                        </p>
                        <div className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M2 14.5A4.5 4.5 0 0 0 6.5 19h12a3.5 3.5 0 0 0 .5-6.965a7 7 0 0 0-13.76-1.857A4.5 4.5 0 0 0 2 14.5Z"></path></svg>
                                iCloud Sync
                            </span>
                            <span className="flex items-center font-light text-sm text-nig-30">
                                <SwitchInput />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-white text-h2 py-2">My subscriptions</p>
                    <div className="w-full h-[160px] bg-nig-70/20 opacity-50 py-4 px-5 flex flex-col justify-between rounded-2xl border-[1px] border-r-[0px] border-b-[0px] border-service-0/15">
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M20 4H4l5.6 7.467a2 2 0 0 1 .4 1.2V20l4-2v-5.333a2 2 0 0 1 .4-1.2z"></path></svg>
                                Sorting
                            </span>
                            <span className="flex items-center font-light text-sm text-nig-30">Date <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 3h14v18l-1.032-.884a2 2 0 0 0-2.603 0L14.333 21l-1.031-.884a2 2 0 0 0-2.604 0L9.667 21l-1.032-.884a2 2 0 0 0-2.603 0L5 21zm10 4H9m6 4H9m6 4h-4"></path></svg>
                                Summary
                            </span>
                            <span className="flex items-center font-light text-sm text-nig-30">Average <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 8h3"></path></svg>
                                Default currency
                            </span>
                            <span className="flex items-center font-light text-sm text-nig-30">USD {`($)`} <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-white  text-h2 py-2">Appearance</p>
                    <div className="w-full h-[160px] bg-nig-60/20 py-4 px-5 flex flex-col justify-between rounded-2xl border-[1px] border-r-[0px] border-b-[0px] border-service-0/15">
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m12 3l3 3l-3 3l-3-3zm0 12l3 3l-3 3l-3-3zm6-6l3 3l-3 3l-3-3zM6 9l3 3l-3 3l-3-3z"></path></svg>
                                App icon
                            </span>
                            <span className="flex items-center font-light text-sm text-nig-30">Default <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span>
                        </p>
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx={12} cy={12} r={4} strokeLinejoin="round"></circle><path strokeLinecap="round" d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"></path></g></svg>
                                Theme
                            </span>
                            <span className="flex items-center text-sm font-light text-nig-30">Dark <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">
                            <span className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 7V6a2 2 0 0 1 2-2h5m7 3V6a2 2 0 0 0-2-2h-5m0 0v16m0 0H9m3 0h3"></path></svg>
                                Font
                            </span>
                            <span className="flex items-center font-light text-sm text-nig-30">Inter <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}