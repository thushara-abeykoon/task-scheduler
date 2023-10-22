import {useState} from "react";
import TaskCalendar from "./TaskCalendar";

export default function Dashboard() {

    const [username, setUsername] = useState("username");

    return (
        <>
            <div>
                <div className={'headerDashboard backdrop-blur-md'}>
                    <div>
                        <p style={{marginLeft:"20px"}}>{username}</p>
                    </div>
                    <div>
                        <p className={'header'} style={{color:"#ffffff", margin:'auto'}}>TASK SCHEDULER</p>
                    </div>
                    <div className={'logoutBtnWrapper'}>
                        <button className={'logout'}>Log out</button>
                    </div>
                    </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div className="backdrop-blur-md w-full h-full">
                    <TaskCalendar />
                </div>
            </div>
        </>
    )
}