import { useEffect, useState } from "react";
import { store } from "../redux/store";
import { connect, useSelector } from "react-redux";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched, editorClosed } from "../redux/actions";
import dayjs from "dayjs";
import axios from "axios";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const TaskEditor = (props) => {
  const id = useSelector((state) => state.taskEditorReducer.id);
  const method = useSelector((state) => state.taskEditorReducer.method);
  console.log(method);
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [taskType, setTaskType] = useState("SELECT A TYPE");
  const [status, setStatus] = useState("SCHEDULED");
  const [dateCreated, setDateCreated] = useState(
    dayjs().toDate().toISOString()
  );
  const [dateUpdated, setDateUpdated] = useState(null);
  useEffect(() => {
    if (id != null && method === "update") {
      axios
        .get(`http://localhost:8080/api/task/${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setDesc(res.data.desc);
          setUrl(res.data.url);
          setDate(res.data.date);
          setTaskType(res.data.taskType);
          setStatus(res.data.status);
          setDateCreated(res.data.dateCreated);
          setDateUpdated(res.data.dateUpdated);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  store.subscribe(() => {
    setIsActive(store.getState().taskEditorReducer.status);
    const tempDate = store.getState().taskEditorReducer;
    setDate(tempDate.date ? parseToISOString(tempDate.date) : tempDate.date);
  });

  const resetEditor = () => {
    setTitle("");
    setDesc("");
    setUrl("");
    setDate(null);
    setTaskType("select a type");
    setStatus("SCHEDULED");
    setDateCreated(dayjs().toDate().toISOString());
    setDateUpdated(null);
  };

  return (
    <div
      className={
        !isActive
          ? "hidden"
          : "fixed w-screen h-screen top-0 right-0 backdrop-blur-sm flex items-center justify-center"
      }
    >
      <div
        className={"w-screen h-screen bg-transparent z-10 fixed"}
        onClick={() => {
          props.editorClosed();
          resetEditor();
        }}
      ></div>
      <div className=" z-20 pt-5 px-5 w-9/12 h-4/6 rounded-3xl shadow-2xl bg-white flex flex-col items-center">
        <input
          value={title}
          type="text"
          className="font-semibold w-full text-2xl border-opacity-20 pb-3 border-b-2 bg-transparent outline-none  border-black"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          cols="30"
          rows="10"
          placeholder="description"
          className="h-full resize-none mt-5 w-full outline-none border-b-2 border-black border-opacity-20 pb-4"
        ></textarea>
        <input
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          type="text"
          placeholder="url"
          className="w-full text-md border-opacity-20 mt-5 pb-2 border-b-2 bg-transparent outline-none  border-black"
        />
        {method === "update" ? (
          <div className="flex justify-between w-full py-2 border-b-2 text-stone-600">
            <p>
              Created On: {dateCreated ? dateCreated.substring(0, 10) : null}
            </p>
            <p>
              Updated On:{" "}
              {dateUpdated ? dateUpdated.substring(0, 10) : "No Update Status"}
            </p>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border-2 text-stone-600 border-stone-400 rounded-lg outline-none w-40"
            >
              <option value={"SCHEDULED"}>scheduled</option>
              <option value={"IN_PROGRESS"}>in progress</option>
              <option value={"COMPLETE"}>complete</option>
            </select>
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-between items-center w-full h-20 bottom-3 py-3">
          <p className={"text-stone-600"}>
            {date ? date.substring(0, 10) : null}
          </p>
          <select
            value={taskType.toLowerCase()}
            onChange={(event) =>
              setTaskType(
                event.target.value
                  ? event.target.value.toUpperCase()
                  : event.target.value
              )
            }
            placeholder="select task"
            className="border-2 text-stone-600 border-stone-400 rounded-lg outline-none w-40"
          >
            <option value={undefined} disabled>
              select a type
            </option>
            <option value="assessment">assessment</option>
            <option value="assignment">assignment</option>
            <option value="exam">exam</option>
            <option value="presentation">presentation</option>
            <option value="viva">viva</option>
          </select>
          <button
            onClick={() => {
              if (method === "update") {
                axios
                  .put(`http://localhost:8080/api/task/${id}`, {
                    id: id,
                    title: title,
                    desc: desc,
                    status: status,
                    taskType: taskType,
                    date: date,
                    dateCreated: dateCreated,
                    dateUpdated: dayjs().toDate().toISOString(),
                    url: url,
                  })
                  .then((res) => {
                    props.allTasksFetched();
                    props.editorClosed();
                    console.log(res);
                  })
                  .catch((err) => {
                    alert("Task Update Failed");
                    console.log(err);
                  });
              } else {
                axios
                  .post("http://localhost:8080/api/task", {
                    title: title,
                    desc: desc,
                    status: status,
                    taskType: taskType,
                    date: date,
                    dateCreated: dateCreated,
                    dateUpdated: null,
                    url: url,
                  })
                  .then((res) => {
                    props.allTasksFetched();
                    props.editorClosed();
                    return res;
                  })
                  .catch((err) => {
                    alert("Task Add Failed");
                    console.log(err);
                  });
              }
              resetEditor();
            }}
            className=" w-12 h-12 flex justify-center bg-white items-center rounded-full hover:bg-blue-200 text-black text-4xl"
          >
            {method === "update" ? (
              <FaRegArrowAltCircleUp />
            ) : (
              <IoMdAddCircleOutline />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

function parseToISOString(localDateString) {
  dayjs.extend(customParseFormat);
  const parsedDate = dayjs(localDateString, { format: "DD/MM/YYYY" });
  const newDate = parsedDate.add(1, "day");
  return newDate.toDate().toISOString();
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ editorClosed, allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(TaskEditor);
