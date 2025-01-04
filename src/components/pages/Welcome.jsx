import Button from '@components/ui/Button'
import { LOGO } from "@utils/icons"
import { COLORS_PRESENTATION, SERVICES_PRESENTATION } from '@utils/presentation'
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate()

    return (
        <div className='w-full flex flex-col border-0 items-center justify-around h-screen bg-nig-80 overflow-hidden'>

            <h1 className='flex font-semibold text-h5 py-6 3xspy-0 3xstext-h6 gap-1 items-center'>
                <>
                    <LOGO width={30} height={30} />
                </>
                <span>TRACKIZER</span>
            </h1>

            <div className="flex justify-center w-full">
                {/*Apps images (netflix, yotube, onedrive y spotify)*/}
                <SERVICES_PRESENTATION className={``} />

                {/*Background colors*/}
                <COLORS_PRESENTATION className={`top-20 ml-20`} />
            </div>

            <p className='text-md text-center font-light px-10 3xspx-14 pt-9'>Congue malesuada in ac justo, a tristique leo massa. Arcu leo leo urna risus.</p>

            <div className="flex flex-col gap-3">
                <Button onClick={() => navigate('/signUp')} width={324} height={48} text="Get started" />
                <Button onClick={() => navigate('/signIn')} width={324} height={48} text={`I have an account`} type="simple" />
            </div>

        </div>
    )
}