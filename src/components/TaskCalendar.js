import {generateDate} from "../utils/generateDate";
import cn from "../utils/cn";
import dayjs from "dayjs";
import {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
const TaskCalendar = () => {

    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="flex w-1/2 mx-auto divide-x-2 gap-10 h-screen items-center select-none ">
            <div className='w-96 h-96'>
                <div className="flex justify-between">
                    <div>
                        <h1 className={"font-semibold"}>{months[today.month()]}, {today.year()}</h1>
                    </div>
                    <div className={"flex items-center gap-5"}>
                        <GrFormPrevious className={"h-5 w-5 grid place-content-center cursor-pointer hover:bg-blue-200 rounded-full"} onClick={()=>{
                            setToday(today.month(today.month()-1))
                        }} />
                        <h1 className={"cursor-pointer font-semibold"} onClick={()=>{
                            setToday(dayjs())
                        }} >Today</h1>
                        <GrFormNext className={"h-5 w-5 grid place-content-center cursor-pointer hover:bg-blue-200 rounded-full"} onClick={()=>{
                            setToday(today.month(today.month()+1))
                        }} />
                    </div>
                </div>
                <div className="grid grid-cols-7 font-bold">
                    {days.map((day, index)=>{
                        return <h1 className="h-14  grid place-content-center" key={index}>{day}</h1>
                    })}
                </div>
                <div className='w-full grid grid-cols-7'>
                    {generateDate(today.month(),today.year()).map(({date, currentMonth, today},index)=>{
                        return (
                            <div className='h-14 border-t grid place-content-center text-sm ' key={index}>
                                <h1 onClick={()=>{
                                    setSelectDate(date)
                                }} className={
                                    cn(currentMonth?"":"text-gray-500",
                                        today?"bg-red-600 text-white":"","h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer",
                                        selectDate.toDate().toDateString() === date.toDate().toDateString()? "bg-black text-white":""
                                    )}>{date.date()}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={"h-96 w-96 px-5"}>
                <h1 className={"font-semibold"}>
                    Schedule for <span>{selectDate.toDate().toDateString()}</span>
                </h1>
                <p className={"text-gray-400"}>No meetings today</p>
            </div>
        </div>
)
}

export default TaskCalendar;
