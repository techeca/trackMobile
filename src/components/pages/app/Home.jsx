import dots from '@assets/Ellipse.png'
import { useState } from 'react'
import AnimatedNumber from '@components/ui/AnimatedNumber'
import { useLocation, useNavigate } from 'react-router-dom'
import CircularProgress from '@components/ui/CircularProgress'
import PageHeading from '@components/ui/PageHeading'
import { services } from '@utils/icons'
import { useAppFn } from '@context/AppContext'

const LISTSUBS = 'subs'
const LISTBILLS = 'bills'

export default function Home() {
    const [listSelected, setListSelected] = useState(LISTSUBS);
    const { subscription } = useAppFn();
    const navigate = useNavigate()
    
    const highestSub = subscription.all.reduce((max, current) => parseFloat(current.price) > parseFloat(max.price) ? current : max, { price: "0" });
    const lowestSubs = subscription.all.reduce((min, current) => parseFloat(current.price) < parseFloat(min.price) ? current : min, { price: subscription.all.length > 0 ? "999999" : "0" }); 
    const totalSubs = subscription.all.reduce((acc, current) => acc + parseFloat(current.price), 0);
    
    const userSettings = {
        limit: 300,
        name: 'Joe Doe',
        email: 'j.doe@gmail.com',
    }

    console.log(new Date().getDate());

    return (
        <div className='flex flex-col gap-3 w-full h-full items-center bg-nig-80 overflow-hidden'>

            <div className="bg-nig-70/50 w-full h-[60%] 3xs:h-[50%] pb-3 -mt-[30px] rounded-b-4xl flex flex-col items-center">

                {/*config*/}
                <PageHeading title='' className={`pt-6`} />

                {/*circulo exterior*/}
                <div className='absolute overflow-hidden w-[125%] flex'>
                    <div className='relative -mt-6 2xs:-mt-6.5 xs:-mt-5 xs:ml-[5px] w-full h-[420px] rounded-full border-4 border-dotted border-nig-70/60 flex justify-center items-center z-0'></div>
                </div>

                {/*circulo exterior de progress*/}
                <div className='absolute mt-4 xs:mt-5 w-[340px] h-[340px] rounded-full border-4 border-dotted border-nig-70 flex justify-center items-center z-0'></div>

                {/*progress bar */}
                <div className="absolute z-20 overflow-hidden scale-110 3xs:scale-125 mt-[50px] 3xs:mt-[60px]">
                    <CircularProgress currentValue={totalSubs} totalValue={300} />
                </div>

                {/*text logo, total, etc*/}
                <div className="w-[286px] h-[286px] border-0 flex flex-col justify-center items-center z-20">
                    <h1 className='absolute font-semibold text-h3 items-center py-6 top-[30px] 3xs:top-[35px]'>
                        <span className='flex gap-1 mt-9'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.425 0 .713.288T13 3v7.275q.45.275.725.713T14 12q0 .825-.587 1.413T12 14t-1.412-.587T10 12q0-.575.275-1.025t.725-.7v-2.15q-1.3.35-2.15 1.413T8 12q0 1.65 1.175 2.825T12 16t2.825-1.175T16 12q0-.65-.187-1.2T15.3 9.75q-.25-.35-.225-.775t.3-.7q.3-.3.713-.3t.662.35q.575.775.913 1.7T18 12q0 2.5-1.75 4.25T12 18t-4.25-1.75T6 12q0-2.25 1.425-3.912T11 6.075V4.05q-2.975.375-4.988 2.625T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.45-.475-2.738t-1.35-2.337q-.275-.325-.275-.75t.3-.725t.713-.287t.687.337q1.125 1.325 1.763 2.975T22 12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path></svg>
                            TRACKIZER
                        </span>
                    </h1>
                    <div className='absolute top-[130px] 3xs:top-[140px]'>
                        <h2 className='font-bold text-4xl flex justify-center'>
                            <span>
                                $<AnimatedNumber target={totalSubs} duration={1000} />
                            </span>
                        </h2>
                        <h3 className='text-sm text-center text-nig-40 font-semibold'>This month bills</h3>
                    </div>
                    {/*<div className="absolute border-4 rounded-full h-[200px] w-[200px] border-dotted border-nig-60/50 z-0"></div>*/}
                    <img className='absolute top-[5px] 3xs:top-[13px] w-[300px] scale-60' src={dots} alt='dot points' />
                    <button className='bg-nig-60/20 rounded-2xl mt-40 justify-center flex items-center px-1 py-3 h-[32px] w-[120px] border-[1px] border-b-0 border-service-0/15 text-nig-0 hover:bg-nig-60/50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <span className='text-sm font-medium'>
                            See your budget
                        </span>
                    </button>
                </div>

                {/*resume*/}
                <div className="flex gap-2 scale-100 2xs:scale-110 xs:scale-110">
                    <button className='z-10 bg-[#31313b] rounded-3xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[68px] w-[104px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className='absolute h-[1px] w-[46px] bg-peach-50 -mt-[68px]'></div>
                        <span className='font-semibold text-nig-40'>
                            Active subs
                        </span>
                        <span className="text-md"><AnimatedNumber target={subscription.all.length} duration={500} /></span>
                    </button>

                    <button className='z-20 bg-[#31313b] rounded-3xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[68px] w-[104px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className='absolute h-[1px] w-[46px] bg-purplehaz-10 -mt-[68px]'></div>
                        <span className='font-semibold text-nig-40'>
                            Highest subs
                        </span>
                        <span className="text-md">$<AnimatedNumber target={highestSub.price} duration={1000} /></span>
                    </button>

                    <button className='z-10 bg-[#31313b] rounded-3xl text-sm justify-center flex flex-col items-center px-3 py-3 h-[68px] w-[104px] border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className='absolute h-[1px] w-[46px] bg-watergreen-50 -mt-[68px]'></div>
                        <span className='font-semibold text-nig-40'>
                            Lowest subs
                        </span>
                        <span className="text-md">$<AnimatedNumber target={lowestSubs.price} duration={1000} /></span>
                    </button>
                </div>
            </div>

            {/*subs list */}
            <div className="w-full flex flex-col h-[33%] 3xs:h-[42%] gap-3 font-semibold text-md px-6 3xs:px-9 overflow-y-scroll ">

                <div className="bg-nig-100 max-h-[80px] py-3 rounded-2xl flex items-center px-2 justify-between relative">
                    {/* Botón deslizante */}
                    <div className={`absolute h-[30px] w-[50%] rounded-2xl bg-nig-60/20 border-[1px] border-b-0 border-r-0 border-service-0/15 transition-transform duration-300 ease-in-out ${listSelected === LISTBILLS ? "translate-x-[90%] " : "translate-x-0"}`}></div>

                    {/* subscription btn */}
                    <button onClick={() => setListSelected(LISTSUBS)} className={`z-10 w-[50%] text-sm font-semibold transition-colors duration-300 ${listSelected === LISTSUBS ? "text-nig-0" : "text-nig-30"}`}>
                        Your subscriptions
                    </button>

                    {/* bills btn */}
                    <button onClick={() => setListSelected(LISTBILLS)} className={`z-10 w-[50%] text-sm  font-semibold transition-colors duration-300 ${listSelected === LISTBILLS ? "text-nig-0" : "text-nig-30"}`}>
                        Upcoming bills
                    </button>
                </div>

                {/*lista de servicios*/}
                <div className="space-y-3 h-[100%]">
                    {subscription.all.length > 0 && subscription.all.map((item, index) => (
                        <div key={index} onClick={() => navigate(`/app/subscription/${item.id}`)} className="flex justify-between rounded-3xl h-[64px] border-nig-70 border-[1px] items-center px-3">
                            <div className="flex items-center gap-3">
                                {/* Icono con transición */}
                                <div className="relative h-[40px] w-[40px] rounded-xl">
                                    {/* Ícono para LISTSUBS */}
                                    <div className={`absolute inset-0 flex items-center justify-center transform transition duration-300 ease-in-out ${listSelected === LISTSUBS ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                                        {services[item.icon]}
                                    </div>
                                    {/* Ícono alternativo */}
                                    <div className={`absolute inset-0 flex items-center justify-center transform transition duration-300 ease-in-out ${listSelected !== LISTSUBS ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                                        <div className="h-[40px] w-[40px] bg-nig-70 rounded-xl flex flex-col items-center justify-center">
                                            <span className="text-xs font-light text-nig-30">{item.payMonth}</span>
                                            <span className="-mt-[5px] text-md text-nig-30">{item.payDay}</span>
                                        </div>
                                    </div>
                                </div>
                                <p>{item.name}</p>
                            </div>
                            <p>${item.price}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}