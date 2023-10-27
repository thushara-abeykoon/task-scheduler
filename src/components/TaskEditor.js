import {useEffect, useState} from "react";
import {store} from "../redux/store";
import {connect} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import {allTasksFetched, editorClosed} from "../redux/actions";
import dayjs from "dayjs";
import axios from "axios";
import customParseFormat from 'dayjs/plugin/customParseFormat'

const TaskEditor = (props) => {

    const [isActive, setIsActive] = useState(false);


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("");
    const [date,setDate] = useState(null);
    const [taskType, setTaskType] = useState();
    const [dateCreated, setDateCreated] = useState(dayjs().toDate().toISOString());
    const [dateUpdated, setDateUpdated] = useState(null);


    store.subscribe(()=> {
            setIsActive(store.getState().taskEditorReducer.status)
            const tempDate = store.getState().taskEditorReducer;
            setDate((tempDate.date)?parseToISOString(tempDate.date):tempDate.date)
        }
    )



    return (
        <div className={(!isActive)?'hidden':'fixed w-screen h-screen top-0 right-0 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'w-screen h-screen bg-transparent z-10 fixed'} onClick={()=>{props.editorClosed()}} ></div>
            <div className=' z-20 pt-5 px-5 w-9/12 h-4/6 rounded-3xl shadow-2xl bg-white flex flex-col items-center'>
                <input type="text"
                       className='font-semibold w-full text-2xl border-opacity-20 pb-3 border-b-2 bg-transparent outline-none  border-black'
                       placeholder='title'
                    onChange={e=>{
                        setTitle(e.target.value)
                    }}
                />
                <textarea
                    onChange={event => setDesc(event.target.value)}
                    cols="30"
                    rows="10"
                    placeholder='description'
                    className='h-full resize-none mt-5 w-full outline-none border-b-2 border-black border-opacity-20 pb-4'>
                </textarea>
                <input onChange={event => setUrl(event.target.value)} type="text" placeholder='url' className='w-full text-md border-opacity-20 mt-5 pb-2 border-b-2 bg-transparent outline-none  border-black'/>
                <div className='flex justify-between items-center w-full h-20 bottom-3'>
                    <p className={'text-stone-600'} >{date}</p>
                    <select defaultValue="select a type" onChange={  event => setTaskType((event.target.value)?event.target.value.toUpperCase():event.target.value)} placeholder='select task' className='border-2 text-stone-600 border-stone-400 rounded-lg outline-none w-40'>
                        <option value={undefined} disabled >select a type</option>
                        <option value="assessment">assessment</option>
                        <option value="assignment">assignment</option>
                        <option value="exam">exam</option>
                        <option value="presentation">presentation</option>
                        <option value="viva">viva</option>
                    </select>
                    <button onClick={()=>{
                        console.log(date)
                        console.log(dateCreated)
                        taskAdded(title,desc,taskType,date,dateCreated,url);
                        props.allTasksFetched()
                        props.allTasksFetched()
                        props.editorClosed()
                    }} className='border-2 rounded-md w-20 border-stone-800 hover:bg-blue-400' >add</button>
                </div>
            </div>
        </div>
    )
}


const taskAdded = (title, desc, taskType, date, dateCreated, url, dateUpdated= null, status = "SCHEDULED",) => {

    axios.post("http://localhost:8080/api/task", {
        "title": title,
        "desc": desc,
        "status": status,
        "taskType": taskType,
        "date": date,
        "dateCreated": dateCreated,
        "dateUpdated": dateUpdated,
        "url": url
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        alert("Unknown Error Occurred")
        console.log(err)
    })
}

function parseToISOString(localDateString){
    dayjs.extend(customParseFormat)
    const parsedDate = dayjs(localDateString,{format: "DD/MM/YYYY"});
    const newDate = parsedDate.add(1,"day")
    return newDate.toDate().toISOString();
}


function matchDispatchToProps(dispatch){
   return  bindActionCreators({editorClosed, allTasksFetched},dispatch)
}

export default connect(null,matchDispatchToProps)(TaskEditor);