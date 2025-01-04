import { useNavigate } from "react-router-dom";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        navigate('/app/home')
    }

    return (
        <div className='flex flex-col gap-3 justify-between w-full h-screen items-center bg-nig-80 overflow-hidden'>

            <h1 className='font-semibold text-h4 flex gap-1 items-center py-16'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.425 0 .713.288T13 3v7.275q.45.275.725.713T14 12q0 .825-.587 1.413T12 14t-1.412-.587T10 12q0-.575.275-1.025t.725-.7v-2.15q-1.3.35-2.15 1.413T8 12q0 1.65 1.175 2.825T12 16t2.825-1.175T16 12q0-.65-.187-1.2T15.3 9.75q-.25-.35-.225-.775t.3-.7q.3-.3.713-.3t.662.35q.575.775.913 1.7T18 12q0 2.5-1.75 4.25T12 18t-4.25-1.75T6 12q0-2.25 1.425-3.912T11 6.075V4.05q-2.975.375-4.988 2.625T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.45-.475-2.738t-1.35-2.337q-.275-.325-.275-.75t.3-.725t.713-.287t.687.337q1.125 1.325 1.763 2.975T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>
                </span>
                TRACKIZER
            </h1>

            <form onSubmit={handleSignIn}>
                <div className="flex flex-col gap-3">
                    <Input className={`w-80`} text={`Email`} name={'email'} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input className={`w-80`} text={`Password`} name={'password'} type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="w-80 flex gap-2 text-nig-50 items-center pb-6 pt-3 justify-between">
                        <label className="flex items-center space-x-2">
                            {/* Checkbox oculto */}
                            <input name="remember" type="checkbox" className="hidden peer" />

                            {/* Checkbox personalizado */}
                            <span className="h-[24px] w-[24px] border-nig-70 border-[1px] rounded-lg focus:outline-none focus:border-2 focus:border-nig-70 bg-transparent peer-checked:bg-nig-70 peer-checked:border-nig-70 flex items-center justify-center">
                                {/* Icono opcional para el estado seleccionado */}
                                <svg className="w-4 h-4 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>

                            {/* Etiqueta de texto opcional */}
                            <span className="text-md">Remember me</span>
                        </label>
                        <p className="text-md">Forgot password</p>
                    </div>
                </div>

                <button className='bg-peach-0 rounded-3xl px-3 h-12 w-80 border-[1px] border-b-0 border-nig-0/50 text-nig-0 drop-shadow-text-shadow hover:bg-peach-50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                    <div className="absolute  top-0 left-0 bg-radial-[ellipse_105%_130%_at_50%_110%] from-transparent from-[43%] via-white/10 to-skin-0/50 w-80 h-12 rounded-3xl"></div>
                    <span className='text-h2 font-medium'>
                        Sign In
                    </span>
                </button>
            </form>

            <div className="py-9">
                <p className='w-full text-center text-md font-light py-6 text-nig-0'>If you don't have an account yet?</p>
                <Button onClick={() => navigate('/signUp')} width={324} height={48} text={`Sign Up`} type="simple" />
            </div>

        </div>
    )
}