export const LOGO = ({ width = 24, height = 24, ...props }) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.425 0 .713.288T13 3v7.275q.45.275.725.713T14 12q0 .825-.587 1.413T12 14t-1.412-.587T10 12q0-.575.275-1.025t.725-.7v-2.15q-1.3.35-2.15 1.413T8 12q0 1.65 1.175 2.825T12 16t2.825-1.175T16 12q0-.65-.187-1.2T15.3 9.75q-.25-.35-.225-.775t.3-.7q.3-.3.713-.3t.662.35q.575.775.913 1.7T18 12q0 2.5-1.75 4.25T12 18t-4.25-1.75T6 12q0-2.25 1.425-3.912T11 6.075V4.05q-2.975.375-4.988 2.625T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.45-.475-2.738t-1.35-2.337q-.275-.325-.275-.75t.3-.725t.713-.287t.687.337q1.125 1.325 1.763 2.975T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>
export const apple = (width = 22, height = 22, ...props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"></path></svg>
export const google = (width = 18, height = 18, ...props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg>
export const facebook = (width = 18, height = 18, ...props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#grommetIconsFacebook0)"><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.207 11.852V15.18h-2.97v-3.155h2.97V9.927c0-3.475 1.693-5 4.58-5c1.384 0 2.115.102 2.462.149v2.753h-1.97c-1.226 0-1.655 1.163-1.655 2.473v1.724h3.594l-.488 3.155h-3.106v8.696C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12"></path></g><defs><clipPath id="grommetIconsFacebook0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg>

export const home = (isActive) => <svg className={`${isActive && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 10a.5.5 0 0 0-1 0zm-14 0a.5.5 0 0 0-1 0zm15.146 2.354a.5.5 0 0 0 .708-.708zM12 3l.354-.354a.5.5 0 0 0-.708 0zm-9.354 8.646a.5.5 0 0 0 .708.708zM7 21.5h10v-1H7zM19.5 19v-9h-1v9zm-14 0v-9h-1v9zm15.854-7.354l-9-9l-.708.708l9 9zm-9.708-9l-9 9l.708.708l9-9zM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5z"></path></svg>
export const spendAndBudget = (isActive) => <svg className={`${isActive && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={17} cy={7} r={3}></circle><circle cx={7} cy={17} r={3}></circle><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></g></svg>
export const calendar = (isActive) => <svg className={`${isActive && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 4h16m-4-5v2M8 3v2"></path></svg>
export const creditCard = (isActive) => <svg className={`${isActive && `text-white`}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 5h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 8h3"></path></svg>
export const plus = (width = 24, height = 24, className) => <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12"></path></svg>
export const minus = (width = 24, height = 24, className) => <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12h12"></path></svg>
export const arrowDown = (width = 24, height = 24, className) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 14l-5-5l-5 5"></path></svg>

export const selectables = {
    'CAR': <svg className='' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 3v-.5a.5.5 0 0 0-.5.5zm11 0h.5a.5.5 0 0 0-.5-.5zm0 6v-.5a.5.5 0 0 0-.5.5zM2 3.5h11v-1H2zM12.5 3v16h1V3zm-10 14V3h-1v14zM13 9.5h5v-1h-5zm8.5 3.5v4h1v-4zm-8 6V9h-1v10zm5.56 1.06a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm-9.88 2.12a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm14.12 0c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM19.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 20.5 19zm-3.5-.5h-3v1h3zm.94 1.56A1.5 1.5 0 0 1 16.5 19h-1c0 .639.244 1.28.732 1.768zM16.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 15.5 19zM4.94 20.06A1.5 1.5 0 0 1 4.5 19h-1c0 .639.244 1.28.732 1.768zM4.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 3.5 19zm8.5-.5H8v1h5zm-5.94-.56c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM7.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 8.5 19zm14-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 18 8.5zM1.5 17A2.5 2.5 0 0 0 4 19.5v-1A1.5 1.5 0 0 1 2.5 17z"></path></svg>,
    'MOVIE': <svg className='' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M3 10h-.5a.5.5 0 0 0 .5.5zm0 4v-.5a.5.5 0 0 0-.5.5zm18-4v.5a.5.5 0 0 0 .5-.5zm0 4h.5a.5.5 0 0 0-.5-.5zM5 5.5h5v-1H5zm5 0h9v-1h-9zm9 13h-9v1h9zm-9 0H5v1h5zM9.5 5v14h1V5zm-5.44 5.94a1.5 1.5 0 0 1 0 2.12l.708.708a2.5 2.5 0 0 0 0-3.536zm15.88 2.12a1.5 1.5 0 0 1 0-2.12l-.708-.708a2.5 2.5 0 0 0 0 3.536zM3 10.5c.385 0 .768.146 1.06.44l.708-.708A2.5 2.5 0 0 0 3 9.5zm.5-.5V7h-1v3zm0 7v-3h-1v3zm.56-3.94c-.292.294-.675.44-1.06.44v1c.639 0 1.28-.244 1.768-.732zm15.88-2.12c.292-.294.675-.44 1.06-.44v-1c-.639 0-1.28.244-1.768.732zM20.5 7v3h1V7zm0 7v3h1v-3zm.5-.5c-.385 0-.768-.146-1.06-.44l-.708.708A2.5 2.5 0 0 0 21 14.5zm-16 5A1.5 1.5 0 0 1 3.5 17h-1A2.5 2.5 0 0 0 5 19.5zm14 1a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5zm0-14A1.5 1.5 0 0 1 20.5 7h1A2.5 2.5 0 0 0 19 4.5zm-14-1A2.5 2.5 0 0 0 2.5 7h1A1.5 1.5 0 0 1 5 5.5z"></path></svg>,
    'SHOPPING_CART': <svg className='' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M3 2.5a.5.5 0 0 0 0 1zM5 3l.499-.038A.5.5 0 0 0 5 2.5zm16 3l.497.055A.5.5 0 0 0 21 5.5zM5.23 6l-.498.038zm13.109 9.119l.035.498zm-10.355.74l-.036-.5zM3 3.5h2v-1H3zm5.02 12.857l10.354-.74l-.071-.997l-10.355.74zM20.68 13.4l.817-7.345l-.994-.11l-.816 7.344zM4.502 3.038l.231 3l.997-.076l-.23-3zm.231 3l.617 8.017l.997-.077l-.617-8.016zM21 5.5H5.23v1H21zm-2.626 10.117a2.5 2.5 0 0 0 2.307-2.217l-.994-.11a1.5 1.5 0 0 1-1.384 1.33zM7.948 15.36a1.5 1.5 0 0 1-1.602-1.382l-.997.077a2.5 2.5 0 0 0 2.67 2.302z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 11h3"></path><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} d="M17.5 20.5h.01v.01h-.01zm-9 0h.01v.01H8.5z"></path></g></svg>,
    'SECURITY': <svg className='' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m12 3l.197-.46a.5.5 0 0 0-.394 0zm0 18l-.248.434a.5.5 0 0 0 .496 0zm6.394-15.26l-.197.46zM8.024 18.727l-.249.435zM11.802 2.54L5.409 5.28l.394.92l6.394-2.74zM4.5 6.66v6.858h1V6.66zm3.275 12.502l3.977 2.272l.496-.868l-3.977-2.273zm4.473 2.272l3.977-2.272l-.496-.869l-3.977 2.273zm7.252-7.916V6.66h-1v6.86zm-.91-8.237l-6.393-2.74l-.394.919l6.394 2.74zm.91 1.378a1.5 1.5 0 0 0-.91-1.378l-.393.919a.5.5 0 0 1 .303.46zm-3.275 12.503a6.5 6.5 0 0 0 3.275-5.644h-1a5.5 5.5 0 0 1-2.771 4.775zM4.5 13.518a6.5 6.5 0 0 0 3.275 5.644l.496-.869A5.5 5.5 0 0 1 5.5 13.518zm.91-8.237a1.5 1.5 0 0 0-.91 1.378h1c0-.2.12-.38.303-.46z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 10l-4 4l-2-2"></path></g></svg>,
    'GIFT': <svg className='' xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinejoin="round"><path strokeLinecap="round" d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M6 4.5A2.5 2.5 0 0 1 8.5 2A3.5 3.5 0 0 1 12 5.5V7H8.5A2.5 2.5 0 0 1 6 4.5Zm12 0A2.5 2.5 0 0 0 15.5 2A3.5 3.5 0 0 0 12 5.5V7h3.5A2.5 2.5 0 0 0 18 4.5Z"></path><path strokeLinecap="round" d="M3 7h18v4H3zm9 4v10"></path></g></svg>,
    'HEALTH': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.071 13.142L13.414 18.8a2 2 0 0 1-2.828 0l-5.657-5.657A5 5 0 1 1 12 6.072a5 5 0 0 1 7.071 7.07"></path></svg>,
    'ACCOUNTS': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 3h14v18l-1.032-.884a2 2 0 0 0-2.603 0L14.333 21l-1.031-.884a2 2 0 0 0-2.604 0L9.667 21l-1.032-.884a2 2 0 0 0-2.603 0L5 21zm10 4H9m6 4H9m6 4h-4"></path></svg>,
    'MUSIC': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round"><circle cx={6} cy={18} r={3} strokeLinejoin="round"></circle><path strokeLinejoin="round" d="M9 18V5"></path><path d="M21 3L9 5m12 2L9 9"></path><circle cx={18} cy={16} r={3} strokeLinejoin="round"></circle><path strokeLinejoin="round" d="M21 16V3"></path></g></svg>,
    'HAPPY': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={12} r={9}></circle><path d="M15.465 14A4 4 0 0 1 12 16a4 4 0 0 1-3.465-2M14 10l1-1l1 1m-6 0L9 9l-1 1"></path></g></svg>,
    'GOAL': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 3v2m0 16v-8m0-8h12l-2 4l2 4H8m0-8v8"></path></svg>,
    'HELP': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinejoin="round"><circle cx={12} cy={12} r={9} strokeLinecap="round"></circle><path strokeWidth={1.5} d="M12 16h.01v.01H12z"></path><path strokeLinecap="round" d="M10.586 7.586c.39-.39.9-.585 1.41-.586a2 2 0 0 1 1.418.586c.39.39.586.902.586 1.414s-.195 1.024-.586 1.414a2 2 0 0 1-1.418.586L12 12"></path></g></svg>,
    'PHONE': <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.506 7.96A16.03 16.03 0 0 1 7.96 19.506C5.819 20.051 4 18.21 4 16v-1c0-.552.449-.995.998-1.05a10 10 0 0 0 2.656-.639l1.52 1.52a12.05 12.05 0 0 0 5.657-5.657l-1.52-1.52a10 10 0 0 0 .64-2.656C14.005 4.448 14.448 4 15 4h1c2.21 0 4.051 1.819 3.506 3.96"></path></svg>
}

export const services = {
    'SPOTIFY':
        <div className="p-1 rounded-lg bg-[#1ED760]">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" /></svg>
        </div>,
    'YOUTUBE':
        <div className="p-1 rounded-lg bg-[#FF0000]">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="white" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" /></svg>
        </div>,
    'UBER':
        <div className="p-1 rounded-lg bg-[#000]">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M2.988 12.719V8.637H2v4.133c0 1.553 1.091 2.58 2.503 2.58c.693 0 1.297-.27 1.746-.731v.616h.976V8.637h-.989v4.082c0 1.053-.706 1.758-1.617 1.758c-.925-.012-1.63-.693-1.63-1.758M8.2 15.248h.937v-.604c.437.45 1.053.72 1.72.72a2.507 2.507 0 0 0 2.53-2.517a2.507 2.507 0 0 0-2.53-2.516c-.667 0-1.27.27-1.707.72V8.636H8.2zm.937-2.4a1.655 1.655 0 1 1 3.312 0c0 .923-.744 1.668-1.656 1.668a1.655 1.655 0 0 1-1.656-1.669m4.814-.014c0 1.438 1.117 2.517 2.555 2.517c.873 0 1.592-.386 2.08-1.028l-.694-.513c-.36.475-.834.706-1.386.706c-.809 0-1.464-.59-1.592-1.373h3.915v-.309c0-1.437-1.014-2.503-2.4-2.503c-1.412 0-2.478 1.143-2.478 2.503m2.452-1.668c.706 0 1.297.487 1.463 1.232h-2.94c.18-.745.771-1.232 1.477-1.232M22 11.28v-.886h-.334c-.526 0-.911.244-1.155.63v-.591h-.924v4.814h.95V12.5c0-.745.449-1.233 1.078-1.233H22z"></path></svg>
        </div>,
    'ONEDRIVE':
        <div className="p-1 rounded-lg bg-[#ACDCF5]">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 256 165"><path fill="#0364b8" d="m154.66 110.682l52.842-50.534c-10.976-42.8-54.57-68.597-97.37-57.62a80 80 0 0 0-46.952 33.51c.817-.02 91.48 74.644 91.48 74.644"></path><path fill="#0078d4" d="m97.618 45.552l-.002.009a63.7 63.7 0 0 0-33.619-9.543c-.274 0-.544.017-.818.02C27.852 36.476-.432 65.47.005 100.798a63.97 63.97 0 0 0 11.493 35.798l79.165-9.915l60.694-48.94z"></path><path fill="#1490df" d="M207.502 60.148a53 53 0 0 0-3.51-.131a51.8 51.8 0 0 0-20.61 4.254l-.002-.005l-32.022 13.475l35.302 43.607l63.11 15.341c13.62-25.283 4.164-56.82-21.12-70.44a52 52 0 0 0-21.148-6.1"></path><path fill="#28a8ea" d="M11.498 136.596a63.91 63.91 0 0 0 52.5 27.417h139.994a51.99 51.99 0 0 0 45.778-27.323l-98.413-58.95z"></path></svg>
        </div>,
    'HBO':
        <div className="p-1 rounded-lg bg-[#000]">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24"><path fill="currentColor" d="M7.042 16.896H4.414v-3.754H2.708v3.754H.01L0 7.22h2.708v3.6h1.706v-3.6h2.628zm12.043.046C21.795 16.94 24 14.689 24 11.978a4.89 4.89 0 0 0-4.915-4.92c-2.707-.002-4.09 1.991-4.432 2.795c.003-1.207-1.187-2.632-2.58-2.634H7.59v9.674l4.181.001c1.686 0 2.886-1.46 2.888-2.713c.385.788 1.72 2.762 4.427 2.76zm-7.665-3.936c.387 0 .692.382.692.817s-.305.817-.692.817h-1.33v-1.634zm.005-3.633c.387 0 .692.382.692.817c0 .436-.305.818-.692.818h-1.33V9.373zm1.77 2.607c.305-.039.813-.387.992-.61c-.063.276-.068 1.074.006 1.35c-.204-.314-.688-.701-.998-.74m3.43 0a2.462 2.462 0 1 1 4.924 0a2.462 2.462 0 0 1-4.925 0zm2.462 1.936a1.936 1.936 0 1 0 0-3.872a1.936 1.936 0 0 0 0 3.872"></path></svg>
        </div>,
    'AWS':
        <div className="p-1 rounded-lg bg-[#FFF] text-[#2c3644]">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 32 32"><path fill="currentColor" d="M9.016 13.38c0 .396.047.714.12.948c.083.234.193.49.339.766a.45.45 0 0 1 .078.245q0 .162-.203.323l-.672.443a.5.5 0 0 1-.276.099q-.163-.001-.318-.151a3 3 0 0 1-.385-.5a7 7 0 0 1-.328-.625q-1.248 1.469-3.13 1.469c-.896 0-1.609-.255-2.13-.766c-.521-.516-.786-1.193-.786-2.047c0-.901.318-1.641.969-2.193s1.51-.828 2.609-.828c.359 0 .734.031 1.125.083c.396.052.802.141 1.224.234v-.776q0-1.21-.5-1.703c-.339-.328-.911-.49-1.734-.49c-.37 0-.755.042-1.151.135a9 9 0 0 0-1.146.365c-.125.057-.25.099-.375.141a1 1 0 0 1-.167.031q-.225.001-.224-.333v-.521c0-.167.021-.297.073-.37a.74.74 0 0 1 .297-.224a6 6 0 0 1 1.339-.479a6.4 6.4 0 0 1 1.661-.203c1.271 0 2.193.286 2.792.865c.583.573.88 1.443.88 2.615v3.448zM4.698 15q.524.001 1.094-.193a2.3 2.3 0 0 0 1.01-.677c.172-.203.302-.427.365-.682s.104-.568.104-.927v-.448a9 9 0 0 0-.979-.182a8 8 0 0 0-1-.063c-.714 0-1.234.141-1.583.427c-.354.286-.521.693-.521 1.224c0 .5.125.87.391 1.125q.384.398 1.12.396zm8.547 1.151c-.193 0-.323-.031-.406-.109c-.083-.063-.161-.214-.224-.411l-2.5-8.229a1.8 1.8 0 0 1-.094-.427c0-.172.083-.266.25-.266h1.047c.203 0 .339.031.411.104c.089.063.151.214.214.417l1.792 7.047l1.661-7.047c.052-.214.115-.354.198-.417a.72.72 0 0 1 .427-.104h.849c.203 0 .344.031.427.104c.083.063.161.214.203.417l1.682 7.13l1.839-7.13q.103-.322.214-.417a.7.7 0 0 1 .417-.104h.99c.172 0 .266.083.266.266c0 .052-.01.104-.021.172a2 2 0 0 1-.073.266l-2.568 8.224q-.093.322-.224.417a.64.64 0 0 1-.401.104h-.917c-.203 0-.339-.031-.427-.104c-.083-.073-.156-.214-.198-.427l-1.651-6.865l-1.641 6.854c-.052.214-.115.354-.203.427c-.083.073-.234.104-.427.104zm13.672.287c-.552 0-1.104-.068-1.635-.193s-.948-.266-1.224-.427c-.172-.094-.286-.198-.328-.297a.7.7 0 0 1-.068-.297v-.542c0-.224.089-.333.245-.333q.096 0 .193.031c.063.026.161.068.266.109q.547.243 1.172.37c.427.089.839.13 1.266.13c.672 0 1.193-.12 1.552-.354c.354-.214.568-.599.557-1.01a1.07 1.07 0 0 0-.286-.745c-.193-.198-.557-.38-1.078-.552l-1.542-.479c-.776-.245-1.354-.604-1.703-1.083a2.55 2.55 0 0 1-.536-1.547c0-.448.099-.839.292-1.182c.193-.339.448-.635.766-.87a3.3 3.3 0 0 1 1.104-.552c.427-.13.875-.182 1.344-.182c.234 0 .479.01.714.042c.245.031.469.073.693.12c.208.052.411.104.604.167s.344.13.448.193a.9.9 0 0 1 .318.266a.57.57 0 0 1 .099.354v.5c0 .224-.089.339-.245.339a1.1 1.1 0 0 1-.406-.125a4.8 4.8 0 0 0-2.042-.417c-.609 0-1.089.094-1.417.297c-.333.203-.5.51-.5.948c0 .297.104.552.318.755s.609.406 1.172.589l1.51.474c.766.245 1.323.589 1.651 1.026c.328.432.49.932.49 1.49c0 .453-.099.87-.276 1.234a3 3 0 0 1-.776.938c-.333.266-.724.453-1.182.594a5.2 5.2 0 0 1-1.526.224zm2.015 5.171c-3.505 2.589-8.589 3.958-12.964 3.958c-6.13 0-11.656-2.266-15.828-6.036c-.328-.297-.031-.703.365-.464c4.51 2.615 10.078 4.203 15.833 4.203c3.885 0 8.151-.813 12.083-2.469c.583-.271 1.083.38.51.807zm1.459-1.661c-.448-.573-2.964-.276-4.099-.135c-.339.042-.396-.26-.083-.484c2-1.401 5.286-1 5.672-.531c.38.484-.109 3.771-1.979 5.344c-.286.245-.568.12-.438-.203c.427-1.052 1.375-3.422.927-3.99z"></path></svg>
        </div>,
    'AMAZON':
        <div className="p-1 rounded-lg bg-[#ACDCF5]">
            <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><path fill="currentColor" d="M14.408 13.7c-1.163.856-2.847 1.313-4.298 1.313a7.78 7.78 0 0 1-5.25-2.003c-.108-.098-.01-.232.12-.156c1.495.87 3.343 1.393 5.252 1.393c1.288 0 2.704-.266 4.007-.819c.196-.084.361.129.169.272"></path><path fill="currentColor" d="M14.89 13.147c.15.19-.165.975-.305 1.325c-.042.106.049.149.145.069c.624-.522.784-1.614.657-1.772s-1.217-.292-1.881.176c-.103.071-.086.17.028.157c.375-.045 1.209-.145 1.357.045M13.56 9.645V9.19c0-.069.053-.115.115-.115h2.035c.065 0 .117.047.117.115v.39c0 .065-.055.15-.153.285L14.62 11.37c.392-.01.805.049 1.16.249c.08.045.102.111.109.177v.485c0 .066-.074.143-.15.103a2.34 2.34 0 0 0-2.15.004c-.07.038-.144-.039-.144-.105v-.46c0-.074 0-.2.075-.313l1.22-1.75h-1.063c-.065 0-.118-.047-.118-.114m-7.42 2.834h-.62a.12.12 0 0 1-.11-.105V9.198c0-.064.053-.114.12-.114h.577c.06.002.108.049.112.106v.415h.011c.15-.401.434-.588.815-.588c.388 0 .63.187.804.588a.88.88 0 0 1 .855-.588a.88.88 0 0 1 .716.347c.196.267.156.656.156.996v2.005a.117.117 0 0 1-.12.115h-.618a.12.12 0 0 1-.112-.115v-1.684c0-.134.012-.468-.017-.595c-.046-.213-.185-.273-.364-.273c-.15 0-.306.1-.37.26s-.057.428-.057.608v1.684a.117.117 0 0 1-.12.115H7.18a.117.117 0 0 1-.111-.115l-.001-1.684c0-.354.058-.875-.381-.875c-.445 0-.428.508-.428.875v1.684a.117.117 0 0 1-.12.115M17.58 9.017c.918 0 1.415.789 1.415 1.792c0 .968-.55 1.737-1.416 1.737c-.902 0-1.393-.789-1.393-1.771c0-.99.497-1.758 1.393-1.758m.004.648c-.456 0-.485.622-.485 1.01s-.006 1.217.48 1.217c.48 0 .502-.67.502-1.077c0-.268-.01-.588-.092-.842c-.07-.221-.208-.308-.405-.308m2.603 2.815h-.617a.12.12 0 0 1-.111-.115l-.001-3.178a.117.117 0 0 1 .12-.103h.573a.12.12 0 0 1 .11.089v.485h.012c.173-.434.416-.641.844-.641c.277 0 .548.1.722.374c.162.254.162.682.162.99v1.999a.12.12 0 0 1-.12.1h-.62a.12.12 0 0 1-.11-.1v-1.726c0-.347.04-.855-.387-.855c-.15 0-.29.1-.358.254c-.087.194-.098.387-.098.601v1.711a.12.12 0 0 1-.121.115m-8.247-1.517v-.134c-.449 0-.921.095-.921.623c0 .267.139.448.377.448c.173 0 .33-.107.428-.281c.122-.214.116-.415.116-.656m.624 1.508a.13.13 0 0 1-.146.015c-.206-.17-.243-.25-.356-.413c-.34.347-.58.45-1.02.45c-.521 0-.926-.32-.926-.964c0-.502.271-.845.66-1.012c.336-.148.805-.174 1.164-.215v-.08c0-.147.01-.321-.076-.448c-.075-.114-.22-.161-.348-.161c-.235 0-.445.12-.497.371c-.01.056-.051.111-.108.114l-.6-.065c-.05-.011-.107-.052-.092-.13c.138-.727.796-.947 1.385-.947c.3 0 .694.08.932.309c.301.28.272.656.272 1.064v.965c0 .29.12.417.234.574c.039.055.048.122-.003.164c-.126.106-.35.301-.474.411zm-8.739-1.508v-.134c-.448 0-.92.095-.92.623c0 .267.138.448.376.448c.174 0 .33-.107.428-.281c.122-.214.116-.415.116-.656m.624 1.508a.13.13 0 0 1-.146.015c-.206-.17-.242-.25-.355-.413c-.34.347-.58.45-1.02.45c-.521 0-.927-.32-.927-.964c0-.502.272-.845.66-1.012c.336-.148.805-.174 1.164-.215v-.08c0-.147.011-.321-.075-.448c-.076-.114-.22-.161-.347-.161c-.236 0-.447.12-.498.371c-.01.056-.052.111-.107.114l-.601-.065c-.05-.011-.106-.052-.092-.13c.138-.727.795-.947 1.384-.947c.301 0 .695.08.932.309c.301.28.273.656.273 1.064v.965c0 .29.12.417.233.574c.04.055.049.122-.002.164c-.126.106-.35.301-.474.411z"></path></svg>
        </div>,
    'NETFLIX':
        <div className="p-1 rounded-lg bg-[#000]">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 256 256"><defs><path id="logosNetflixIcon0" fill="#b1060f" stroke="#000" d="m141.676 41.275l-.067 38.361l-.068 38.361l-3.156-8.905l-.006-.017l-4.078 85.402c4.01 11.324 6.158 17.369 6.182 17.393c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.821.226 3.388.342 3.483.257c.094-.084.145-39.143.114-86.797l-.058-86.644zm-61.538-.115v86.732c0 47.703.047 86.779.104 86.836s3.011-.222 6.565-.62c3.553-.398 8.465-.893 10.914-1.1c3.756-.317 14.97-1.038 16.268-1.046c.378-.002.402-1.95.457-36.735l.058-36.734l2.713 7.677l.96 2.713l4.077-85.381l-1.401-3.96a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path id="logosNetflixIcon1" fill="url(#logosNetflixIcon3)" d="M80.138 41.16v48.685l34.296 90.976c.004-2.085.008-3.211.012-5.594l.058-36.734l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.821.226 3.388.342 3.483.257c.064-.058.107-19.21.118-46.227l-34.136-98.14l-.016 9.287l-.068 38.361l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55a32066 32066 0 0 0-6.283-17.754l-.225-.628z"></path><path id="logosNetflixIcon2" fill="#e50914" d="m80.139 41.16l34.365 97.377v-.044l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.812.225 3.37.34 3.48.258l-34.1-96.737v.017l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55c-3.332-9.42-6.159-17.408-6.283-17.754l-.225-.628z"></path><radialGradient id="logosNetflixIcon3" cx="48.34%" cy="49.419%" r="70.438%" fx="48.34%" fy="49.419%" gradientTransform="matrix(1 0 0 .55088 0 .222)"><stop offset="0%"></stop><stop offset="100%" stopOpacity={0}></stop></radialGradient></defs><path d="M0 0h255.904v255.904H0z"></path><use href="#logosNetflixIcon0" strokeWidth={2.956}></use><use href="#logosNetflixIcon1"></use><use href="#logosNetflixIcon2"></use><use href="#logosNetflixIcon0" strokeWidth={2.956}></use><use href="#logosNetflixIcon1"></use><use href="#logosNetflixIcon2"></use></svg>
        </div>,
    'FOOD':
        <div className="p-1 rounded-lg bg-[#386075]">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 36 36"><path fill="#292f33" d="M13.037 34.816C.794 33.013 1 20.719 1 17h34c0 1.914.087 15.77-13.125 17.918c-2.042.332-6.458.249-8.838-.102"></path><path fill="#66757f" d="M33.388 13.247c2.467-5.574-8.331-5.254-11.035-4.382A38 38 0 0 0 18 8.611c-9.389 0-17 3.228-17 8.444c0 1.009.291 1.979.818 2.891c-4.327 5.712 4.246 6.786 9.184 5.71c2.136.537 4.5.844 6.998.844c9.389 0 17-4.229 17-9.444c0-1.43-.589-2.704-1.612-3.809"></path><ellipse cx={18} cy={18} fill="#ffcc4d" rx={15} ry={7}></ellipse><path fill="#77b255" d="M4 16c-.542-2.169 2-6 7-5c1-1 2.838-2 6-2c2 0 5.612 1.775 4 5c-1 2-5 5-10 3c-1 1-6 3-7-1"></path><path fill="#5c913b" d="M12 17c-.249.036-.471.073-.678.111C16.17 18.857 20.022 15.956 21 14c1.078-2.156-.181-3.66-1.731-4.423c.394 1.822-1.128 6.546-7.269 7.423"></path><path fill="#d99e82" d="M5 16c.525-1.313 5-3 10 3c1 1 4.586 1.586 6 3c1 1 0 2-4 2S3 21 5 16"></path><path fill="#b27962" d="M6.041 20.018C8.589 22.561 14.231 24 17 24c4 0 5-1 4-2c-.326-.326-.77-.607-1.268-.86c-3.204 1.733-11.68-.144-13.691-1.122"></path><path fill="#ffe8b6" d="M27 19.001c-.209 0-.423-.034-.633-.104l-3-1a2 2 0 0 1 1.265-3.795l3 1A2 2 0 0 1 27 19.001M26 22h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2"></path></svg>
        </div>,
    'POPCORN':
        <div className="p-1 rounded-lg bg-amber-100">
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 128 128"><path fill="#b40e1c" d="m20.71 44.56l-6.52-5.93s-.27-2.95 2.04-3.89c2.63-1.07 5.16.19 5.16.19l3.99 7.68zm85.99.2l-5.64-4.47l3.79-5.54s1.96-1.59 5.35.1c2.59 1.29 3.23 3.79 2.93 4.56c-.29.77-6.43 5.35-6.43 5.35"></path><path fill="#ffb91f" d="m22.75 43.49l-3.15-.85s-.36-1.49.32-2.81c.71-1.37 2.1-1.22 2.1-1.22s-3.35-1.63-1.89-5.62s5.93-3.11 5.93-3.11s-.1-2.53 1.95-4.09c2.04-1.56 3.6-.39 3.6-.39s-1.58-5.05 2.33-7.39c3.34-2 5.64-.1 5.64-.1s1.35-3.38 5.05-3.45c2.77-.05 3.61 1.02 3.61 1.02s.97-1.95 2.53-2.82c1.56-.88 2.49-.75 2.49-.75s-.71-2.42.04-4.4c1.32-3.5 4.96-4.28 7.68-3.6c3.73.93 3.27 3.51 3.27 3.51s1.89-1.27 3.64-1.07c1.75.19 2.67 1.35 2.67 1.35s1.22-3.58 5.3-3.58c4.09 0 5.25 2.43 5.45 4.28s-1.03 4.03-1.03 4.03s.59.23.77 1.63c.14 1.06-.27 2-.27 2s1.88-1.48 5.63 0c6.22 2.45 4.92 9.07 4.92 9.07s1.8-.21 3.16.37c1.56.67 2.28 1.77 2.28 1.77s.35-2.9 3.99-2.92c3.8-.02 6.91 7.1 6.23 9.14s-2.53 2.53-2.53 2.53s1.69.48 2.32 2.53c.75 2.42.13 4.99.13 4.99s-26.38 16.1-26.67 16s-32.98 2.43-32.98 2.43z"></path><path fill="#fce193" d="M34.84 48.47c0-.21.3-1.08.89-1.46c.73-.47 1.82-.52 1.82-.52s-1.2-.57-1.87-2.45c-.44-1.22.1-2.54.1-2.54s-3.17.15-3.9-2.25s.42-2.71.42-2.71s-1.27-6.81 4.06-6.93c7.29-.16 6.04 9.11 6.04 9.11s1.04 0 1.67.57c.62.57.83 1.15.83 1.15s1.36-2.05 4.58-1.56c7.6 1.15 4.06 8.59 4.06 8.59s-1.41-3.85-3.85-4.01c-2.45-.16-5.47 1.51-5.47 1.51s4.63.57 5.88 3.02s1.15 5.78 1.15 5.78s-9.27 2.71-9.48 2.4c-.22-.3-6.93-7.7-6.93-7.7"></path><path fill="#e17a2c" d="M40.61 40.35c-.67-.29-2.55 1.36-2.59 2.59s1 2.8 2.24 2.91c1.23.11 2.46-1.16 2.46-2.39c0-.62-1.28-2.75-2.11-3.11"></path><path fill="#fce193" d="M46.27 26.55s-4.99-.72-4.89 3.4c.13 5.46 6.28 4.65 6.33 4.94s.3 2.15.3 2.15s2.43-.28 4.78 1.11s3.36 3.02 3.36 3.02s.48-2.25 1.15-3.21s1.39-1.68 1.39-1.68s0-1.2-.34-2.16c-.24-.69-.81-1.05-.81-1.05s5.4-2.56 2.68-6.81c-3.07-4.79-7.96-.34-7.96-.34s-1.92-2.78-4.31-2.11c-2.4.67-1.68 2.74-1.68 2.74m12.27 17.97s-1.44-4.94 1.25-6.33s4.46.19 4.55-.1s4.27-4.75 7.86-4.65c5.32.14 6.54 3.52 6.66 3.88c.59 1.72-.19 4.51-.19 4.51s2.01-3.12 4.89-2.83s3.2 2.59 3.2 2.59s3.18 1.97 3.03 3.84c-.14 1.87-2.16 3.26-2.16 3.26l-4.89 4.79l-5.27-1.82s-.72-2.4-.72-3.88c0-1.49.14-2.68.14-2.68s-1.44.77-2.44 1.05c-1.01.29-3.12.34-3.12.34s-.08-1.21-2.11-2.59c-4.45-3.02-10.68.62-10.68.62"></path><path fill="#fce193" d="M60.65 51.18s-1.63-5.92 3.07-6.04c5.61-.14 6.42 4.84 6.62 7.62c.19 2.78-7.24 7.05-7.53 6.9c-.29-.14-7.25-4.42-7.25-4.42s-.53-1.54.64-2.91c1.22-1.45 4.45-1.15 4.45-1.15m31.21-2.73s-1.63-1.34-1.15-3.88s2.44-2.68 2.44-2.68s-1.49-2.3-.77-3.79s1.87-1.82 5.56-1.77s5.56 1.05 6.76 2.35c1.08 1.16.38 4.7.38 4.7s-5.46 6.57-6.09 6.42c-.62-.15-7.13-1.35-7.13-1.35m-15.3-17.11s1.92 1.2 2.54 2.11s1.44 2.64 1.44 2.64s.4-4.68 2.33-6.96c2.11-2.49 4.86-2.39 4.91-2.39c.52 0 1.39-3.88-.62-5.94c-2.52-2.58-6.85-1.68-6.81-1.29s1.58 2.25.58 6.57c-.93 3.94-4.37 5.26-4.37 5.26m-13.42.91c.77.39 2.14-.9 3.31-1.44c1.34-.62 3.07-.86 3.12-1.53s-1.87-3.07-4.65-1.73s-2.64 4.27-1.78 4.7m-41.32 2.32c-.24 2.44 2.25 3.2 2.25 3.2s-.31 2.25.58 3.55c.72 1.05 2.21 2.35 2.83 2.21s2.59-2.01 2.59-2.16c0-.14-.11-5.51-1.25-7.43c-1.58-2.7-6.57-3.7-7 .63m8.73-3.23c.67 0 1.34-1.53 1.73-2.11c.38-.58 1.82-1.53 1.82-1.53s-2.21-1.53-3.6-.14c-1.39 1.38-.96 3.78.05 3.78m5.36-4.36s1.34-.14 2.11-.1c.77.05 2.06.29 2.06.29s.19-1.25 1.58-2.16s2.68-.62 2.68-.62s.29-1.73 1.39-2.49c1.1-.77 1.77-.77 1.77-.77s1.02-2.62-.48-3.6c-4.27-2.78-6.46 2.8-7.19 2.92c-.54.09-2.42-1.78-4.48-.34c-3.5 2.46.56 6.87.56 6.87m13.52-6.28s1.15.29 2.01.81s2.16 1.44 2.16 1.44l6.33-.19s1.39-1.82 3.4-2.64c1.64-.67 3.55-.72 3.55-.72s.18-4.68-3.69-5.9c-4.89-1.53-6.52 3.45-6.52 3.45s-1.44-1.62-3.12-1.58c-3.73.1-4.12 5.33-4.12 5.33"></path><path fill="#e17a2c" d="M56.57 19.02c-.58 0-3.98 2.92-4.07 3.21c-.1.29.81.77.91 1.05c.1.29 6.23-.38 6.57-.62c.33-.24-2.11-3.64-3.41-3.64m-7.66 9.87c.03.57 2.83 4.31 3.69 4.46s3.7-3.02 2.88-3.74c-.38-.34-3.21.05-3.21.05s-.05-2.11-.29-2.44c-.25-.34-3.12.72-3.07 1.67"></path><path fill="#fce193" d="M55.86 12.5c.73.02 1.39-2.68 2.25-3.55s2.92-1.73 2.44-3.07s-4.17-.96-5.37 1.01c-1.33 2.19-.91 5.56.68 5.61m10.21-.72c.15.66 2.01 1.44 2.3 1.77c.29.34 1.63 1.53 1.63 1.53s3.07-.77 4.89-.29s2.68 1.77 3.21 1.44c.53-.34.24-1.77-.05-2.25s-.86-1.39-.86-1.39s2.76-4.28-.1-4.99c-4.07-1.01-4.89 3.12-5.42 3.21s-2.06-1.53-3.74-1.29c-1.67.25-2.06 1.4-1.86 2.26m2.3 12.32c.68 1.51 2.83 1.63 2.83 1.63s1.05 3.36 3.21 3.64c2.16.29 3.58-1.96 4.03-3.83c.58-2.4.59-7.59-4.75-7.53c-4.03.05-5.75 5.13-5.32 6.09m21.18 17.11c.67-.02.22-3.96 2.34-5.56c2.29-1.73 4.08-1.41 6.43-1.25c2.44.16 4.09.92 4.6.24c.64-.84 1.03-6.7-2.3-7.19c-1.97-.29-2.49 1.63-2.49 1.63s-2.01-.43-3.12 1.58c-.76 1.39-.81 2.3-1.15 2.4c-.15.04-5.29-7.9-9.3-3.07c-4.17 5.03 3.45 9.2 3.45 9.2s.25 2.07 1.54 2.02"></path><path fill="#e17a2c" d="M74.36 18.88c-.27.18-.38 4.84-.14 4.89s3.26 1.68 3.69 1.25s.43-2.64-.34-4.07c-.48-.92-2.25-2.7-3.21-2.07m-6.38-5.85c-.04.49.62 3.07 1.39 3.16c1.28.16 3.64-1.2 3.88-1.68s-.19-1.87-2.11-2.35c-1.9-.47-3.11.2-3.16.87m.48 29.19c.67.72 2.99-1.24 3.83-.86c.96.43 0 2.92 1.05 3.21s3.16-3.12 2.92-4.6c-.1-.62-1.34-1.44-2.68-1.92s-3.16-.81-3.98-.29s-2.34 3.17-1.14 4.46m28.04 3.45s-.1-3.07.72-4.6c.81-1.53 2.88-1.29 3.21-.91s1.49 3.16 1.49 3.16l-2.44 4.17z"></path><path fill="#dfdfdf" d="m63.35 61.35l-9.56-3.74l-.27-.42c-.48-.75-6.78-1.76-6.78-1.76l-.56-.11l-7.85-1.69l-.22-.38c-.49-.83-6.81-3.08-6.81-3.08l-5.94-2.4l-.16-.39c-.53-1.27-4.55-3.47-4.64-3.29l-1.79-.89c.47-.95 1.96-2.52 4.22-1.61c1.97.79 4.22 3.52 4.71 4.6l3.23 1.67c.79-.5 2.28-1 4.32-.29c2.96 1.04 3.74 3.33 4.35 4.28l6.5 1.4c.69-.56 2.15-1.5 4.1-1.18c3.41.56 4.24 2.53 4.95 3.53l7.49.64c.75-1.03 2.66-3.21 5.63-3.62c2.78-.39 4.81.57 5.63 1.53l7.16-2.41c.6-.93 2.67-3.56 5.91-4.15c3.02-.55 5.39.98 6.48 1.67l4.78-2.45c.51-.86 2.16-3.54 4.68-4.31c3.15-.95 5.17 1.04 5.26 1.11l-1.35 1.48c-.04-.04-6.61 3.69-6.63 3.72l-1.41 2.43l-5.52.36l-.5-.4c-.02-.02-10.13 1.81-10.15 1.84l-.19.35l-9.04 3.04l-.44-.47c-.06-.06-9.59 5.39-9.59 5.39"></path><path fill="#fff" d="M107.72 46.58c-.23.02-2.11-2.62-4.56-1.6c-2.45 1.03-4.79 5.24-4.79 5.24l-7.63 1.2s-1.03-2.08-3.88-1.28s-5.41 4.3-5.47 4.07s-8.4 1.9-8.4 1.9s-1.65-1.84-4.59-1.11c-3.04.76-4.69 4.49-4.69 4.49l-9.47-1.88s-1.62-2.72-4.07-3.06s-4.04 1.26-4.04 1.26l-7.07-1.72s-1.08-2.96-4.16-3.99s-4.56.28-4.56.28l-4.58-3.11s-1.35-2.22-3.92-3.42c-2.56-1.2-3.3.9-3.3.9L34.5 111.9l30.56 12.43l30.17-13.21c.02.01 13.18-64.61 12.49-64.54"></path><path fill="#ed3d23" d="m20.71 44.56l-.02-.07c-.28-1.31-1.01-4.28-2.74-5.63c-2.25-1.75-3.76-.24-3.76-.24l17.35 72.18l4.24 1.62zm11.25 5.42s-.27-4.51-3.83-5.58c-2.83-.85-2.95 2.06-2.95 2.06l14.07 67.39l5.37 2.16zm15.1 5.21s-1.45-4.85-5.14-5.26s-3.32 2.69-3.32 2.69l9.55 64.86l5.37 2.18zm11.73-1.37c-4.05-.51-4.61 3.56-4.61 3.56l4.19 64.26l6.72 2.7l-1.2-65.18s-.85-4.8-5.1-5.34m23.25.25s.21-5.1-4.35-3.81c-4.56 1.28-5.06 5.55-5.06 5.55l-1.14 65.75l5.66-2.51zm16.91-5.47s-.19-4-4.1-3.19c-4.1.84-4.14 4.97-4.14 4.97l-7.19 65.93l5.46-2.41zm10.44-9.58c-3.36 1.61-3.65 5.93-3.65 5.93l-11.45 66.62l5.37-2.38l13.51-69.84c-.01 0-.84-1.74-3.78-.33"></path></svg>
        </div>
}