import {useState} from "react";
import TaskCalendar from "./TaskCalendar";
import Header, {SearchBar, Tabs} from "./Header";

export default function Dashboard(props) {

    const [username, setUsername] = useState("username");

    return (
        <div>
            <div className=' w-full fixed bg-stone-900 text-white rounded-b-full pb-8 pt-4 flex justify-around items-center'>
                <Tabs />
                <SearchBar />
                <Header />
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className=" w-full h-full">
                    <TaskCalendar handleIsActive={props.handleIsActive} />
                </div>
            </div>
        </div>
    )
}