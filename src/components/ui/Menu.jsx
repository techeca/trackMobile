import { useNavigate } from "react-router-dom"
import ROUTES from "../../utils/constants/routes"
import { home, spendAndBudget, calendar, creditCard, plus } from "../../utils/icons"

export default function Menu({ active }) {
    const navigate = useNavigate()

    const checkRoute = (route, actualLocation) => {
        return route === actualLocation
    }

    return (
        <div className="flex w-full h-full justify-center items-center">
            <button onClick={() => navigate(ROUTES.HOME)} className='z-50 bg-nig-60/20 rounded-2xl rounded-r-none text-sm justify-center flex flex-col items-center my-2 px-3 py-3 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                <span className='font-semibold text-nig-40 px-2'>
                    {home(checkRoute(ROUTES.HOME, active))}
                </span>
            </button>
            <button onClick={() => navigate(ROUTES.SPENDBUDGET)} className='z-50 bg-nig-60/20 rounded-3xl rounded-l-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 my-2 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                <span className='font-semibold text-nig-40 px-2'>
                    {spendAndBudget(checkRoute(ROUTES.SPENDBUDGET, active))}
                </span>
            </button>

            <button onClick={() => navigate(ROUTES.NEW_SUBSCRIPTION)} className='z-50 bg-peach-0 rounded-full px-3 py-3 h-12 mx-2 border-[1px] border-b-0 border-nig-0/50 text-nig-0 drop-shadow-text-shadow hover:bg-peach-50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                <div className="absolute  top-0 left-0 bg-radial-[ellipse_105%_130%_at_50%_110%] from-transparent from-[43%] via-white/10 to-skin-0/50 h-12 rounded-3xl"></div>
                <span className='text-h2 font-medium'>
                    {plus()}
                </span>
            </button>

            <button onClick={() => navigate(ROUTES.CALENDAR)} className='z-50 bg-nig-60/20 rounded-3xl rounded-r-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 my-2 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                <span className='font-semibold text-nig-40 px-2'>
                    {calendar(checkRoute(ROUTES.CALENDAR, active))}
                </span>
            </button>
            <button onClick={() => navigate(ROUTES.CREDITCARD)} className='z-50 bg-nig-60/20 rounded-2xl rounded-l-none border-l-0 text-sm justify-center flex flex-col items-center px-3 py-3 my-2 border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                <span className='font-semibold text-nig-40 px-2'>
                    {creditCard(checkRoute(ROUTES.CREDITCARD, active))}
                </span>
            </button>
        </div>
    )
}