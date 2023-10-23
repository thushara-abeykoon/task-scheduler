import {store} from "../redux/store";
import {taskAdded} from "../redux/actions";

export const TestComponent = () => {

    store.dispatch(taskAdded(1,'hello'))

    console.log(store.getState())

    return (
        <div>

        </div>
    )
}
