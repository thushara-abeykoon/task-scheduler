import {store} from "../redux/store";
import {taskAdded, allTasksFetched} from "../redux/actions";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import {connect} from "react-redux";
import reducers from "../redux/reducer/reducers";
import {TASK_FETCHED} from "../redux/actionTypes";

const TestComponent = (props) => {


    store.subscribe(()=>{
        console.log(store.getState(reducers(store.getState(),TASK_FETCHED)))
    })



    return (
        <div className='flex flex-col h-screen justify-center items items-center'>
            <button className='btnBlue rounded-full w-20 h-10 text-white' onClick={()=>{
                props.allTasksFetched();
            }}>Click Me</button>
        </div>
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({taskAdded, allTasksFetched},dispatch);
}
function matchStateToProps(state){
    return {
        allTasks : state.allTasks
    }
}

export default connect(matchStateToProps,matchDispatchToProps)(TestComponent)