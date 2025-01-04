import { useState } from 'react'
import PageHeadingBack from '../../ui/PageHeadingBack'
import CustomSelectColor from '../../ui/CustomSelectColor'
import Button from '../../ui/Button'
import { minus, plus, selectables } from '../../../utils/icons'
import { useAppFn } from '../../../context/AppContext'
import { colors } from '../../../utils/colors'

export default function NewCategory() {
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState(0)
    const [selectIcon, setSelectIcon] = useState('CAR')
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const { category } = useAppFn()

    const handleInputChange = (e, fnSet) => {
        fnSet(e)
    }

    const handleBudgetControl = (control, fnSet) => {
        let value = budget
        if (control === 'plus') {
            value = value + Number(1)
        }
        if (control === 'minus' && budget > 0) {
            value = value - Number(1)
        }
        fnSet(value)
    }

    const handleSubmitNewCat = (e) => {
        e.preventDefault()
        let newCatData = {
            name: description,
            spent: 0,
            budget: budget,
            color: selectedColor,
            icon: selectIcon
        }
        category.add(newCatData)
    }

    return (
        <div className='flex flex-col gap-3 border-0 w-full items-center h-full bg-nig-80'>
            <div className="bg-nig-70/50 w-full rounded-b-3xl  flex flex-col items-center">
                <PageHeadingBack title={'New'} className={`pt-6 pl-6 mr-6 absolute`} />

                <div className='my-[10%] pt-3 w-full justify-center items-center text-center'>
                    <p className='text-h7 mt-6 font-bold'>Add new</p>
                    <p className='text-h7 -mt-5 font-bold'>Category</p>
                </div>

            </div>

            <form onSubmit={handleSubmitNewCat} className="w-full h-full flex flex-col gap-2 font-semibold text-md px-6 border-0 border-white overflow-scroll">

                <div className="w-full flex flex-col gap-1 text-nig-50">
                    <label htmlFor="description" className="text-sm text-center">Name</label>
                    <input name="description" type="text" value={description} onChange={(e) => handleInputChange(e.target.value, setDescription)} className=" w-full border-nig-70 border-[1px] rounded-2xl h-[48px] px-2 focus:outline-none focus:border-2 focus:border-nig-70" />
                </div>

                <div className='flex w-full justify-between items-center pt-3'>
                    <div onClick={() => handleBudgetControl('minus', setBudget)} className='p-6 bg-nig-60/20 rounded-2xl border-l-[1px] border-service-0/15 h-[48px] w-[48px]'>
                        {minus(46, 46, `text-nig-60 -ml-[23px] -mt-[23px]`)}
                    </div>
                    <div className='text-xs font-semibold text-nig-40'>
                        <div className='flex flex-col items-center gap-1'>
                            <p>Budget</p>
                            <input value={`${budget}`} type='number' min={0} onChange={(e) => handleInputChange(Number(e.target.value), setBudget)} className='focus:outline-none border-b-[1px] border-nig-70 p-2 text-xl w-[162px] text-center text-white' />
                        </div>
                    </div>
                    <div onClick={() => handleBudgetControl('plus', setBudget)} className='p-6 bg-nig-60/20 rounded-2xl border-l-[1px] border-service-0/15 h-[48px] w-[48px]'>
                        {plus(46, 46, `text-nig-60 -ml-[23px] -mt-[23px]`)}
                    </div>
                </div>

                <div className="w-full flex flex-col gap-1 text-nig-50 mt-4 z-50">
                    <CustomSelectColor selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                </div>

                <div className="w-full flex flex-col gap-1 text-nig-50 mt-4">
                    <label htmlFor="email" className="text-sm text-center">Icon</label>
                    <div className="w-full flex flex-wrap justify-center items-center border-nig-70 border-[1px] rounded-2xl h-[96px] px-3 focus:outline-none focus:border-2 focus:border-nig-70">
                        {Object.keys(selectables).map((icon, index) =>
                                <div key={icon} className={`${selectIcon === icon && `text-white`} mx-3 transition-colors duration-200 ease-in`} onClick={() => setSelectIcon(icon)} keys={index}>
                                    {selectables[icon]}
                                </div>
                                )
                            }
                    </div>
                </div>

                <div className='w-full h-full flex justify-center items-end py-6'>
                    <Button className={`w-full`} width={310} height={48} text='Add this category' />
                </div>

            </form>

        </div>
    )
}