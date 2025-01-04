import PageHeading from '@components/ui/PageHeading'
import masterCard from '@assets/MasterCardLogo.png'
import Chip from '@assets/Chip.png'

export default function CreditCard() {

    return (
        <div className='flex flex-col gap-3 border-0 w-full items-center h-screen bg-nig-80 overflow-hidden justify-between'>

            <PageHeading title='Credit Cards' />

            <div className='absolute mt-[45px] 3xs:mt-[90px] scale-75 3xs:scale-100'>
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

            <p className='font-semibold text-lg pt-[40px] 3xs:pt-[390px]'>Subscriptions</p>
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

            <div className='w-full rounded-3xl rounded-b-none h-[200px] bg-nig-70/50 flex justify-center '>

                <div className='w-[328px] h-[52px] border-dashed border-1 rounded-2xl flex items-center justify-center border-nig-60 mt-6'>
                    <p className='text-nig-30 flex gap-2 justify-center'>
                        <span className='text-md font-semibold'>Add new card</span>
                        <svg className='mt-[1px]' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={11.999} r={9}></circle><path d="M12 9v6m-3-3h6"></path></g></svg>
                    </p>
                </div>

            </div>

        </div>
    )
}