import { apple, facebook, google } from "../../utils/icons"

export default function Button({ text = '', type = 'default', width = 44, height = 44, ...props }) {

    const SIMPLE = 'simple'
    const DEFAULT = 'default'
    const APPLE = 'apple'
    const GOOGLE = 'google'

    const BUTTON_TYPE = {
        default: `bg-peach-0 border-nig-0/50 drop-shadow-text-shadow hover:bg-peach-50/80`,
        simple: `bg-white/10 border-nig-0/20 hover:bg-white/20`,
        apple: `bg-black border-nig-0/15 hover:bg-white/5`,
        google: `bg-white border-nig-0/20 hover:bg-white/80`,
        facebook: `bg-[#1771E6] border-nig-0/50 drop-shadow-facebook-shadow hover:bg-[#1771E6]/70`
    }

    const icons = {
        apple: apple(),
        google: google(),
        facebook: facebook(),
        default: '',
        simple: ''
    }

    return (
        <button {...props}
            className={`rounded-3xl px-3 py-3 text-nig-0 border-[1px] border-b-0 border-r-0 hover:cursor-pointer transition-colors duration-300 ease-in-out
                ${BUTTON_TYPE[type]}`}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
        >
            {type === DEFAULT &&
                <div className={`absolute top-0 left-0 bg-radial-[ellipse_105%_130%_at_50%_110%] from-transparent from-[43%] via-white/10 to-skin-0/50 rounded-3xl`}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`
                    }}
                ></div>
            }

            <span className={`text-h2 font-semibold flex items-center justify-center gap-2 ${type === GOOGLE && `text-black`}`}>
                {icons[type]}
                {text}
            </span>
        </button>
    )
}