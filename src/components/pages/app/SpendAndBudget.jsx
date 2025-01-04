import PageHeading from '../../ui/PageHeading'
import { selectables } from '../../../utils/icons'
import { useNavigate } from 'react-router-dom'
import { useAppFn } from '../../../context/AppContext'
import AnimatedNumber from '../../ui/AnimatedNumber'

export default function SpendAndBudget() {
    const navigate = useNavigate()
    const { category, subscription } = useAppFn()
    const totalBudget = category.all.reduce((acc, current) => acc + parseFloat(current.budget), 0);
    const totalSpend = subscription.all.reduce((acc, current) => acc + parseFloat(current.price), 0)

    const getTotalSpend = (categoryID) => {
        return subscription.all.filter(stf => stf.category.id === categoryID).reduce((acc, current) => acc + parseFloat(current.price), 0)
    }

    console.log(getTotalSpend(3));

    const listCategories = [
        {
            id: 1,
            name: 'Auto & Transport',
            spent: 25.99,
            budget: 400,
            color: 'watergreen',
            icon: 'CAR'
        },
        {
            id: 2,
            name: 'Entertainment',
            spent: 50.99,
            budget: 600,
            color: 'peach',
            icon: 'MOVIE'
        },
        {
            id: 3,
            name: 'Groceries',
            spent: 75.99,
            budget: 800,
            color: 'purplehaz',
            icon: 'SHOPPING_CART'
        },
        {
            id: 4,
            name: 'Groceries',
            spent: 75.99,
            budget: 800,
            color: 'purplehaz',
            icon: 'SHOPPING_CART'
        },
        {
            id: 5,
            name: 'Groceries',
            spent: 75.99,
            budget: 800,
            color: 'purplehaz',
            icon: 'SHOPPING_CART'
        },
        {
            id: 6,
            name: 'Groceries',
            spent: 75.99,
            budget: 800,
            color: 'purplehaz',
            icon: 'SHOPPING_CART'
        },
    ]

    return (
        <div className='flex flex-col border-0 rounded-3xl w-full items-center h-full bg-nig-80'>
            <PageHeading title='Spending & Budgets' className={``} />
            <div className="w-full h-[33%] 3xs:h-[26%] flex flex-col items-center">
                <div className='mt-5'>
                    <h1 className='font-bold text-h5 mb-0 mt-15 text-center'>$<AnimatedNumber target={totalSpend} duration={300}/></h1>
                    <h3 className='text-xs text-center text-nig-40 font-semibold'>of ${totalBudget} budget</h3>
                </div>

                {/*progress bar*/}
                <div className="absolute rotate-272 mt-[240px] mr-[240px] z-20">
                    <svg className="circular-progress absolute" width="230" height="230" viewBox="0 0 120 120">
                        <circle className="background absolute" cx="60" cy="60" r="50" stroke="#e6e6e6" strokeWidth="4" fill="none" strokeDasharray="314" strokeDashoffset="160" />
                        {/*colores*/}
                        <circle className="foreground2 absolute" cx="60" cy="60" r="50" strokeWidth="4.5" fill="none" strokeDasharray="316" strokeDashoffset="290" />
                        <circle className="foreground absolute" cx="60" cy="60" r="50" strokeWidth="4.5" fill="none" strokeDasharray="360" strokeDashoffset="310" transform="rotate(30, 60, 60)" />
                        <circle className="foreground3 absolute" cx="60" cy="60" r="50" strokeWidth="4.5" fill="none" strokeDasharray="360" strokeDashoffset="310" transform="rotate(87, 60, 60)" />
                    </svg>
                </div>

                <div className='w-full my-6'>
                    <p className='flex justify-center items-center mx-9 text-md font-semibold border-[1px] min-h-[60px] rounded-xl border-nig-60'>Your budgets are on track
                    <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 36 36"><path fill="#ffdb5e" d="M34.956 17.916c0-.503-.12-.975-.321-1.404c-1.341-4.326-7.619-4.01-16.549-4.221c-1.493-.035-.639-1.798-.115-5.668c.341-2.517-1.282-6.382-4.01-6.382c-4.498 0-.171 3.548-4.148 12.322c-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885C8.195 34.219 7.633 36 11.238 36h18.044a3.337 3.337 0 0 0 3.333-3.334c0-.762-.267-1.456-.698-2.018c1.02-.571 1.72-1.649 1.72-2.899c0-.76-.266-1.454-.696-2.015c1.023-.57 1.725-1.649 1.725-2.901c0-.909-.368-1.733-.961-2.336a3.31 3.31 0 0 0 1.251-2.581"></path><path fill="#ee9547" d="M23.02 21.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 0 0-1.506-.892a1.59 1.59 0 0 1-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H28.7a.875.875 0 0 0 0-1.75h-5.888a3.337 3.337 0 0 0-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 0 0-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 0 0 .419 5.08a3.3 3.3 0 0 0-.852 2.204a3.337 3.337 0 0 0 3.333 3.333h5.484a3.35 3.35 0 0 0 2.867-1.632a.875.875 0 0 0-1.504-.894a1.6 1.6 0 0 1-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 0 0 2.867-1.633a.875.875 0 1 0-1.504-.894a1.57 1.57 0 0 1-1.363.777h-7.063a1.585 1.585 0 0 1 0-3.167h8.091a3.35 3.35 0 0 0 2.867-1.632a.875.875 0 0 0-1.504-.894a1.57 1.57 0 0 1-1.363.776H23.02a1.585 1.585 0 0 1 0-3.167"></path></svg>
                    </p>
                </div>

            </div>

            <div className='flex flex-col items-center w-full mt-3 h-[45%] 3xs:h-[55%] 3xs:top-[60%] gap-3 overflow-y-scroll'>

                {category.all.length > 0 && category.all.map((c) => (
                    <div key={c.id} className='w-full px-8'>
                        <button className='z-10 bg-nig-60/20 rounded-3xl text-sm flex flex-col px-4 py-4 h-[84px] w-full border-[1px] border-b-0 border-r-0 border-service-0/10 text-nig-0 hover:bg-[#3b3b49] transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                            <div className='flex flex-row w-full justify-between'>
                                <div className='flex items-center'>
                                    <div className='px-1'>
                                    {selectables[c.icon]}
                                    </div>
                                    <div className='flex flex-col ml-2 mr-16 self-start'>
                                        <span className='font-semibold text-sm 3xs:text-md text-white text-start'>
                                            {c.name}
                                        </span>
                                        <span className="text-sm text-nig-40 text-start">${c.budget - getTotalSpend(c.id).toFixed()} left to spend</span>
                                    </div>
                                </div>

                                <div className='flex flex-col self-end'>
                                    <span className='font-semibold text-md text-white'>
                                        ${getTotalSpend(c.id)}
                                    </span>
                                    <span className="text-sm text-nig-40 text-end">of ${c.budget}</span>
                                </div>

                            </div>

                            <div className='flex w-full'>
                                <div className='h-[2px] w-full bg-nig-60 mt-3'>
                                    <div className={`h-[2px] w-[155px] ${c.color.value} `}></div>
                                </div>
                            </div>

                        </button>
                    </div>
                ))}

                <div className="w-full px-8 flex flex-col gap-3 font-semibold text-md">
                    <div onClick={() => navigate('/app/newCategory')} className="hover:cursor-pointer flex justify-around rounded-3xl h-[84px] border-nig-70 border-[1px] items-center px-3 border-dashed">
                        <div className="flex items-center gap-3">
                            <p>Add new category </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx={12} cy={11.999} r={9}></circle><path d="M12 9v6m-3-3h6"></path></g></svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}