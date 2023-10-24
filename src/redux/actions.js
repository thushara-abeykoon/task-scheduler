import * as actions from './actionTypes'
import axios from "axios";

export const taskAdded = (id,title) => ({
    type: actions.TASK_ADDED,
    payload: {
        id,
        title
    }
})

export const allTasksFetched = () =>dispatch=> {
  axios.get("http://localhost:8080/api/task")
      .then(res=>{
          dispatch({
              type: actions.TASK_FETCHED,
              payload : res.data
          })
      })
      .catch(error=>{
          alert("Server Interrupted!")
          console.log(error)
      })
}

