import React from "react";

export default function Task({
  title,
  //   desc,
  taskType,
  date,
  //   dateCreated,
  //   url,
  //   dateUpdated,
  status,
}) {
  return (
    <div className=" text-stone-500 place-items-center border-2 border-black px-10 py-3 mt-5 flex justify-between rounded-lg hover:bg-stone-400 cursor-pointer ">
      <div>
        <h3 className="text-xl text-black">{title}</h3>
        <div className="flex justify-between w-44">
          <p className="text-xs">{taskType}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <p
        className={`text-xs ${
          status === "IN_PROGRESS"
            ? "text-blue-600"
            : status === "SCHEDULED"
            ? "text-yellow-800"
            : "text-green-600"
        }`}
      >
        {status}
      </p>
    </div>
  );
}

// const taskAdded = (title, desc, taskType, date, dateCreated, url, dateUpdated= null, status = "SCHEDULED",) => {
