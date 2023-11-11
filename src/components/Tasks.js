import React from "react";
import Task from "./Task";

export default function Tasks() {
  return (
    <div className="p-10">
      <div className="flex justify-end">
        <p className="mr-2">Sort By :</p>
        <select className="rounded outline-none border-2 border-black">
          <option>Date Created</option>
          <option>Title</option>
          <option>Task Type</option>
          <option>Status</option>
        </select>
      </div>
      <div className="h-96 overflow-auto rounded-lg">
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
        <Task
          title={"Hello"}
          taskType={"EXAM"}
          date={"2023/08/29"}
          status={"SCHEDULED"}
        />
      </div>
    </div>
  );
}
