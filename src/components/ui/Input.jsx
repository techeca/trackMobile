export default function Input({text, name, type = 'text', className, ...props}) {

    return (
        <div className={`${className} flex flex-col gap-1 text-nig-50`}>
            <label htmlFor={name} className="text-sm">{text}</label>
            <input {...props} name={name} type={type} className=" w-full border-nig-50/30 border-[1px] rounded-2xl h-[48px] px-2 focus:outline-none focus:border-2 focus:border-nig-50" />
        </div>
    )
}