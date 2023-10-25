import {useState} from "react";
import {store} from "../redux/store";
import {connect} from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import {editorClosed} from "../redux/actions";

const TaskEditor = (props) => {


    const [isActive, setIsActive] = useState(false);
    const [date,setDate] = useState(null);

    store.subscribe(()=>{
        setIsActive(store.getState().taskEditorReducer.status)
        setDate(store.getState().taskEditorReducer.date)
        }
    )

    return (
        <div className={(!isActive)?'hidden':'fixed w-screen h-screen top-0 right-0 backdrop-blur-md flex items-center justify-center'}>
            <div className={'w-screen h-screen bg-transparent z-10 fixed'} onClick={()=>{props.editorClosed()}} ></div>
            <div className=' z-20 pt-5 px-5 w-9/12 h-4/6 rounded-3xl shadow-2xl bg-white flex flex-col items-center'>
                <input type="text"
                       className='font-semibold w-full text-2xl border-opacity-20 pb-3 border-b-2 bg-transparent outline-none  border-black'
                       placeholder='title'/>
                <textarea
                    cols="30"
                    rows="10"
                    placeholder='description'
                    className='h-full resize-none mt-5 w-full outline-none border-b-2 border-black border-opacity-20 pb-4'>

                </textarea>
                <input type="text" placeholder='url' className='w-full text-md border-opacity-20 mt-5 pb-2 border-b-2 bg-transparent outline-none  border-black'/>
                <div className='flex justify-between items-center w-full h-20 bottom-3'>
                    <p className={'text-stone-600'} >{date}</p>
                    <select placeholder='select task' className='border-2 text-stone-600 border-stone-400 rounded-lg outline-none w-40'>
                        <option value="">select task type</option>
                        <option value="assessment">assessment</option>
                        <option value="assignment">assignment</option>
                        <option value="exam">exam</option>
                        <option value="presentation">presentation</option>
                        <option value="viva">viva</option>
                    </select>
                    <button onClick={()=>{
                        props.editorClosed()
                    }} className='border-2 rounded-md w-20 border-stone-800 hover:bg-blue-400' >add</button>
                </div>
            </div>
        </div>
    )
}


function matchDispatchToProps(dispatch){
   return  bindActionCreators({editorClosed},dispatch)
}

export default connect(null,matchDispatchToProps)(TaskEditor);