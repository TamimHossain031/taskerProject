/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import SingleTask from "./SingleTask";

export default function TaskList({taskData}) {

  
  return (
 
    taskData.length === 0 ? <h1>You haven't any task </h1> :
    <>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8  text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>
          <tbody>
           {taskData.map(single => <SingleTask key={single.id} singleData={single}/>)}
          </tbody>
        </table>
      </div>
    </>
  );
}
