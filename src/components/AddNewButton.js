import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { editorOpened } from "../redux/actions";
import { connect } from "react-redux";

const AddNewButton = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.editorOpened(props.selectDate, "add", null);
        }}
        className="w-72 bsolute mx-auto mt-10 rounded-xl h-10 bg-stone-700 hover:bg-stone-800 text-white"
      >
        new task
      </button>
    </div>
  );
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ editorOpened }, dispatch);
}

export default connect(null, matchDispatchToProps)(AddNewButton);
