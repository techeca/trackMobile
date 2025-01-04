import { useNavigate } from "react-router-dom"

export default function PageHeadingBack({ title = '', className }) {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(-1)} className={`${className} flex justify-start items-center w-full text-nig-30 z-20`}>
            <svg  xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:text-nig-20" width={48} height={48} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5"></path></svg>
            <p className="text-center w-full mr-[40px]">{title}</p>
        </div>
    )
}