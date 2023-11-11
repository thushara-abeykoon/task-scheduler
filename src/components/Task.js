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
    <div className=" border-2 border-black px-10 py-3 mt-5 flex justify-between rounded-lg hover:bg-stone-400 cursor-pointer ">
      <div>
        <h3 className="text-lg">{title}</h3>
        <div className="flex justify-between w-44">
          <p className="text-xs">{taskType}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <p className="text-sm">{status}</p>
    </div>
  );
}

// const taskAdded = (title, desc, taskType, date, dateCreated, url, dateUpdated= null, status = "SCHEDULED",) => {
