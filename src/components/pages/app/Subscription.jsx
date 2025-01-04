import { useAppFn } from "../../../context/AppContext"
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../../../utils/icons";
import Button from "../../ui/Button";

export default function Subscription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { subscription } = useAppFn();
    const subData = subscription.all.find(sub => sub.id === Number(id));

    const handleDelete = () => {
        subscription.remove(id);
        navigate(-1);
    }

    return (
        <div className='flex border-0 rounded-3xl w-full items-center h-full bg-nig-80 overflow-hidden justify-around'>

            <div className="scale-90 3xs:scale-100">
                <div className="flex flex-col justify-between py-6 items-center w-[328px] h-[334px] bg-nig-70 rounded-t-3xl border-b-[2px] border-dashed border-nig-100">
                    <div className="flex justify-between items-center w-full px-6 text-nig-30">
                        <svg onClick={() => navigate(-1)} xmlns="http://www.w3.org/2000/svg" className="hover:text-nig-20 cursor-pointer" width={48} height={48} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5"></path></svg>
                        <p>Subscription info</p>
                        <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" className="hover:text-nig-20 cursor-pointer" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"></path></svg>
                    </div>

                    <div className="scale-300">
                        {services[subData?.icon]}
                    </div>

                    <div className="text-center">
                        <p className="text-white font-bold text-h6">{subData?.name}</p>
                        <p className="text-h4 font-bold text-nig-30">${subData?.price}</p>
                    </div>
                </div>
                <div className="h-[432px] w-[328px] bg-[#282833] flex flex-col gap-6 items-center justify-center rounded-b-3xl">
                    <div className="w-[288px] h-[304px] bg-nig-60/20 p-6 flex flex-col justify-between rounded-2xl border-[1px] border-r-[0px] border-b-[0px] border-service-0/15">
                        <p className="flex justify-between items-center font-semibold text-h2">Name <span className="flex items-center text-sm text-nig-30">{subData?.name} <svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">Category <span className="flex items-center text-sm text-nig-30">{subData?.category.name}<svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">Type <span className="flex items-center text-sm text-nig-30">Monthly<svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">Pay Day <span className="flex items-center text-sm text-nig-30">{subData?.payMonth}, {subData?.payDay}<svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">Reminder <span className="flex items-center text-sm text-nig-30">{subData?.reminder}<svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                        <p className="flex justify-between items-center font-semibold text-h2">Currency <span className="flex items-center text-sm text-nig-30">USD ($)<svg xmlns="http://www.w3.org/2000/svg" width={28} height={32} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5"></path></svg></span></p>
                    </div>

                    <Button text='Save' type="simple" width={288} />
                </div>
            </div>

        </div>
    )
}