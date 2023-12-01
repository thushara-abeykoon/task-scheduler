import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import CopyMessage from "./CopyMessage";

export default function TaskViewer({ id, visible, handleViewer }) {
  const [task, setTask] = useState();
  const [copyMessageActive, setCopyMessageActive] = useState(false);
  useEffect(() => {
    if (id != null) {
      axios
        .get(`http://localhost:8080/api/task/${id}`)
        .then((res) => {
          setTask(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div
      className={
        visible
          ? "w-screen h-screen fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center overflow-auto"
          : "hidden"
      }
    >
      <div className="w-3/4 rounded-3xl shadow-lg h-3/4 bg-white flex-col">
        <div className="flex justify-end mr-3 mt-2">
          <button
            onClick={() => {
              handleViewer(null, false);
            }}
            className=" text-black text-3xl hover:text-red-600"
          >
            <IoMdCloseCircle />
          </button>
        </div>
        {task ? (
          <>
            <div className="text-2xl text-center underline underline-offset-8 font-bold">
              {task.title}
            </div>
            <div className="m-8 h-36 text-center overflow-auto">
              <textarea
                value={task.desc}
                className="w-full h-full text-center bg-white resize-none"
                disabled
              ></textarea>
            </div>
            <div className="flex items-center justify-center px-10 py-4">
              <p className="mr-10">{task.url.toLowerCase()}</p>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(`${task.url.toLowerCase()}`);
                  setCopyMessageActive(true);
                  setTimeout(() => {
                    setCopyMessageActive(false);
                  }, 900);
                }}
                className="text-lg cursor-pointer h-10 w-10 flex justify-center items-center rounded-full hover:bg-gray-200 "
              >
                <MdContentCopy />
              </div>
            </div>
            <div className="flex justify-around py-4 bg-black text-white">
              <div>Type: {task.taskType}</div>
              <div>Status: {task.status}</div>
            </div>
            <div className="flex justify-around text-stone-500 py-4">
              <p>Date: {task.date.substring(0, 10)}</p>
              <p>Created On: {task.dateCreated.substring(0, 10)}</p>
              <p>
                Updated On:{" "}
                {task.dateUpdated
                  ? task.dateUpdated.substring(0, 10)
                  : "No Update Details"}
              </p>
              <CopyMessage activeStatus={copyMessageActive} />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
