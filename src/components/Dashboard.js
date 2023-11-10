import {useState} from "react";
import TaskCalendar from "./TaskCalendar";

export default function Dashboard(props) {

    const [username, setUsername] = useState("username");

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className=" w-full h-full">
                    <TaskCalendar />
                </div>
            </div>
        </div>
    )
}