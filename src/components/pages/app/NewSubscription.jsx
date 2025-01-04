import { useState } from 'react'
import PageHeadingBack from '../../ui/PageHeadingBack'
import SnapCenterWithList from '../../ui/SnapCenterWithList'
import DatePicker from '../../ui/DatePicker'
const CALENDAR = 'calendar'
import Input from '@components/ui/Input'
import { useAppFn } from '@context/AppContext'

export default function NewSubscription() {
    const [price, setPrice] = useState(0)
    const { subscription, category } = useAppFn();
    const [descValue, setDescValue] = useState('')
    const [selectedDay, setSelectedDay] = useState('1');
    const [selectedMonth, setSelectedMonth] = useState('Jan');
    const [selectedSub, setSelectedSub] = useState(null);
    const [selectedCat, setSelectedCat] = useState('')

    const handleInputChange = (e, fnSet) => {
        fnSet(e)
    }

    const handlePriceControl = (control, fnSet, actualPrice) => {
        let value = actualPrice
        if (control === 'plus') {
            value = value + Number(1)
        }
        if (control === 'minus' && value > 0) {
            value = value - Number(1)
        }
        fnSet(value)
    }

    const handleSubmitNewSub = (e) => {
        e.preventDefault()
        let newSubData = {
            name: descValue,
            price: price.toLocaleString('en-US'),
            icon: selectedSub,
            payDay: selectedDay,
            payMonth: selectedMonth.slice(0, 3),
            currency: "en-US",
            description: descValue,
            category: selectedCat,
            reminder: "Never",
            status: "Active",
        }
        subscription.add(newSubData)
    }

    return (
        <div className='flex flex-col gap-3 border-0 w-full items-center h-screen bg-nig-80 overflow-hidden'>
            <div className="bg-nig-70/50 w-full rounded-b-3xl  flex flex-col items-center">
                <PageHeadingBack title={'New'} className={`pt-6 pl-6 mr-6 absolute`} />

                <div className='my-[10%] pt-3 w-full justify-center items-center text-center'>
                    <p className='text-h7 mt-6 font-bold'>Add new</p>
                    <p className='text-h7 -mt-5 font-bold'>Subscription</p>
                </div>
            </div>

            <form onSubmit={handleSubmitNewSub} className="w-96 flex flex-col h-full gap-2 font-semibold text-md px-2 py-3 justify-start overflow-y-scroll border-0 border-white ">

                <div className="w-80 flex flex-col ml-6 gap-1 text-nig-50 ">
                    <Input text='Description' name='description' value={descValue} onChange={(e) => setDescValue(e.target.value)} required />
                </div>

                <div className="text-nig-50">
                    <label htmlFor="payday" className="text-sm text-start px-6 -mb-[20px]">Pay Day</label>
                    <DatePicker required selectedDay={selectedDay} selectedMonth={selectedMonth} setSelectedDay={setSelectedDay} setSelectedMonth={setSelectedMonth} />
                </div>

                <div className='flex w-full px-6 justify-between items-center py-3'>
                    <div onClick={() => handlePriceControl('minus', setPrice, price)} className='p-6 bg-nig-60/20 rounded-2xl border-l-[1px] border-service-0/15 h-[48px] w-[48px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='text-nig-60 -ml-[23px] -mt-[23px]' width={46} height={46} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 12h12"></path></svg>
                    </div>
                    <div className='text-xs font-semibold text-nig-40'>
                        <div className='flex flex-col items-center gap-1'>
                            <p className='text-sm'>Monthly price</p>
                            <input value={`${price}`} type='text' inputMode='decimal' min={0} onChange={(e) => handleInputChange(e.target.value, setPrice)} className='focus:outline-none border-b-[1px] border-nig-70 p-2 text-xl w-[162px] text-center text-white' />
                        </div>
                    </div>
                    <div onClick={() => handlePriceControl('plus', setPrice, price)} className='p-6 bg-nig-60/20 rounded-2xl border-l-[1px] border-service-0/15 h-[48px] w-[48px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='text-nig-60 -ml-[23px] -mt-[23px]' width={46} height={46} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12"></path></svg>
                    </div>
                </div>

                <div className='flex gap-3 px-6 flex-wrap justify-center'>
                    {category.all.map(c => 
                        <div key={c.id} onClick={() => setSelectedCat({id: c.id, name: c.name})} className={`shadow border-1 rounded-full py-1 px-4 text-center text-sm font-normal ${selectedCat.id === c.id ? `opacity-50` : ``} border-nig-50/30 bg-nig-60/20 border-b-0 border-l-0 border-r-0 transition-opacity duration-300 ease-in`}>
                            <p>{c.name}</p>
                        </div>
                    )}
                </div>

                <SnapCenterWithList selectedSub={selectedSub} setSelectedSub={setSelectedSub} />

                {/*submit button*/}
                <div className='w-full h-full flex flex-col justify-end items-center py-6'>
                    <button className='bg-peach-0 rounded-3xl h-12 w-[85%] border-[1px] border-b-0 border-nig-0/50 text-nig-0 drop-shadow-text-shadow hover:bg-peach-50 transition-colors duration-300 ease-in-out hover:cursor-pointer'>
                        <div className="absolute top-0 left-0 bg-radial-[ellipse_105%_130%_at_50%_110%] from-transparent from-[43%] via-white/10 to-skin-0/50 w-[85%] h-12 rounded-3xl"></div>
                        <span className='text-h2 font-medium'>
                            Add this platform
                        </span>
                    </button>
                </div>
            </form>


        </div>
    )
}