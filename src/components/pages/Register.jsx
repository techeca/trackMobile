import { useNavigate } from "react-router-dom"
import Button from "@components/ui/Button"

export default function Register() {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-between items-center h-screen bg-nig-80 overflow-hidden'>

            <h1 className='font-semibold text-h4 flex gap-1 items-center py-16'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.425 0 .713.288T13 3v7.275q.45.275.725.713T14 12q0 .825-.587 1.413T12 14t-1.412-.587T10 12q0-.575.275-1.025t.725-.7v-2.15q-1.3.35-2.15 1.413T8 12q0 1.65 1.175 2.825T12 16t2.825-1.175T16 12q0-.65-.187-1.2T15.3 9.75q-.25-.35-.225-.775t.3-.7q.3-.3.713-.3t.662.35q.575.775.913 1.7T18 12q0 2.5-1.75 4.25T12 18t-4.25-1.75T6 12q0-2.25 1.425-3.912T11 6.075V4.05q-2.975.375-4.988 2.625T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.45-.475-2.738t-1.35-2.337q-.275-.325-.275-.75t.3-.725t.713-.287t.687.337q1.125 1.325 1.763 2.975T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>
                </span>
                TRACKIZER
            </h1>

            <div className="flex flex-col gap-3 items-center py-6">

                <Button onClick={() => console.log('click en sign up with apple')} width={324} height={48} text={`Sign up with Apple`} type="apple" />
                <Button onClick={() => console.log('click en sign up with google')} width={324} height={48} text={`Sign up with Google`} type="google" />

                {/*Tiene el ellipse de ejemplo para utilizar en otros botones
                <button className='bg-[#1771E6] rounded-3xl px-3 py-3  h-12 w-80  border-[1px] border-b-0 border-nig-0/50 text-nig-0 drop-shadow-facebook-shadow hover:bg-[#1771E6]/70 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className="absolute flex flex-row top-0 left-0 bg-radial-[ellipse_105%_130%_at_50%_110%] from-transparent from-[43%] via-white/10 to-[#1771E6]/50 w-80 h-12 rounded-3xl"></div>

                    <span className='text-h2 font-medium flex items-center justify-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} viewBox="0 0 24 24"><g fill="none"><g clipPath="url(#grommetIconsFacebook0)"><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.207 11.852V15.18h-2.97v-3.155h2.97V9.927c0-3.475 1.693-5 4.58-5c1.384 0 2.115.102 2.462.149v2.753h-1.97c-1.226 0-1.655 1.163-1.655 2.473v1.724h3.594l-.488 3.155h-3.106v8.696C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12"></path></g><defs><clipPath id="grommetIconsFacebook0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></g></svg>
                        Sign up with Facebook
                    </span>
                </button>
                */}
                <Button onClick={() => console.log('click en sign up with facebook')} width={324} height={48} text={`Sign up with Facebook`} type="facebook" />

                <p className="w-full text-center py-6">or</p>

                <Button onClick={() => navigate('/signUpWithEmail')} width={324} height={48} text={`Sign up with E-mail`} type="simple" />
                <p className='text-md w-full px-9 text-center text-sm font-medium py-3 text-nig-50'>By registering, you agree to our Terms of Use. Learn how we collect, use and share your data.</p>
            </div>

        </div>
    )
}