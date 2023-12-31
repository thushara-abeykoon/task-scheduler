import { generateDate } from "../utils/generateDate";
import cn from "../utils/cn";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { store } from "../redux/store";
import AddNewButton from "./AddNewButton";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched } from "../redux/actions";
import { connect } from "react-redux";
import TaskViewer from "./TaskViewer";

const TaskCalendar = (props) => {
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleViewer = (id, visible) => {
    setId(id);
    setVisible(visible);
  };

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    props.allTasksFetched();
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      setTasksList(store.getState().taskReducer);
    });
  });

  return (
    <div className="w-full mt-10 grid grid-cols-1 items-center">
      <div className="flex mx-auto divide-x-2 gap-10 items-center select-none max-w-full-xs md:max-w-2xl ">
        <div className="w-96 h-96 mx-6">
          <div className="flex justify-between">
            <div>
              <h1 className={"font-semibold"}>
                {months[today.month()]}, {today.year()}
              </h1>
            </div>
            <div className={"flex items-center gap-5"}>
              <GrFormPrevious
                className={
                  "h-5 w-5 grid place-content-center cursor-pointer hover:bg-blue-200 rounded-full"
                }
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className={"cursor-pointer font-semibold"}
                onClick={() => {
                  setToday(dayjs());
                }}
              >
                Today
              </h1>
              <GrFormNext
                className={
                  "h-5 w-5 grid place-content-center cursor-pointer hover:bg-blue-200 rounded-full"
                }
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 font-bold">
            {days.map((day, index) => {
              return (
                <h1 className="h-14  grid place-content-center" key={index}>
                  {day}
                </h1>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    className="h-14 border-t grid place-content-center text-sm"
                    key={index}
                  >
                    <h1
                      onClick={() => {
                        setSelectDate(date);
                      }}
                      className={cn(
                        currentMonth ? "" : "text-gray-500",
                        today ? "bg-red-600 text-white" : "",
                        "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : ""
                      )}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className={"h-96 w-96 pl-5 flex flex-col "}>
          <h2 className={"font-semibold mb-4"}>
            Schedule for <span>{selectDate.toDate().toDateString()}</span>
          </h2>
          <div className={"h-96 rounded-md overflow-y-scroll"}>
            {tasksList.map((task) =>
              convertToDateString(task.date) ===
              selectDate.toDate().toDateString() ? (
                <TaskList
                  key={task.id}
                  task={task}
                  handleViewer={handleViewer}
                />
              ) : null
            )}
          </div>
          <AddNewButton selectDate={selectDate.toDate().toLocaleDateString()} />
        </div>
      </div>
      <TaskViewer id={id} visible={visible} handleViewer={handleViewer} />
    </div>
  );
};

function TaskList({ task, handleViewer }) {
  return (
    <div
      key={task.id}
      className="hover:bg-blue-100 active:bg-blue-200 mt-2 cursor-pointer backdrop-blur-md border-2 border-black rounded-2xl w-72 pt-1 pb-2 px-4"
      onClick={() => {
        handleViewer(task.id, true);
      }}
    >
      <h2 className="text-lg text-ellipsis">{task.title}</h2>
      <p
        className={`text-xs ${
          task.status === "IN_PROGRESS"
            ? "text-blue-700"
            : task.status === "SCHEDULED"
            ? "text-yellow-800"
            : "text-green-600"
        }`}
      >
        {task.status}
      </p>
    </div>
  );
}

function convertToDateString(date) {
  const date2 = dayjs(date);
  return date2.toDate().toDateString();
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(TaskCalendar);
