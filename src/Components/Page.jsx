/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { editModal } from "../Context";
import { taskData } from "../data/taskData";
import Footer from "./Footer";
import HeroArea from "./HeroArea";
import Navbar from "./Navbar";
import AddTask from "./TaskBox/AddTask";
import TaskControl from "./TaskBox/TaskControl";
import TaskList from "./TaskBox/TaskList";

let data = taskData();
export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTaskData] = useState(data);
  const [copytask, setCopyTask] = useState(taskData);
  const [option, setOption] = useState({ type: null, data: null });

  function filterData(data) {
    if (data.length > 0) {
      const newData = copytask.filter((task) =>
        task.title.toLowerCase().includes(data.toLowerCase())
      );

      setCopyTask(newData);
    } else {
      setCopyTask(taskData);
    }
  }

  function upDateData(data, edit) {
    if (edit) {
      setCopyTask(data);
      setTaskData(data);
    } else {
      setCopyTask([...taskData, data]);
      setTaskData([...taskData, data]);
    }
  }
  function singleDelete(id) {   
    
    setCopyTask(copytask.filter(
      (single) => single.id !== id
    ))
    setTaskData(copytask.filter(
      (single) => single.id !== id
    ))
  
  }

  function isFav(favourite,id){
    
    let toggleFav = taskData.map(single =>{
      if(single.id === id) return favourite
      return single
    })

    setTaskData(toggleFav)
    setCopyTask(toggleFav)
    
    
    
  }

  function deleteAll() {
    setTaskData([]);
    setCopyTask([]);
  }

  return (
    <>
      <editModal.Provider
        value={{ option, setOption, setShowModal, singleDelete,isFav }}
      >
        <Navbar />
        <HeroArea />
        <section className="mb-20" id="tasks">
          <div className="container">
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              {showModal && (
                <AddTask
                  taskData={{
                    setShowModal,
                    taskData,
                    upDateData,
                    option,
                    setOption,
                  }}
                />
              )}

              <TaskControl
                controlData={{ setShowModal, filterData, deleteAll }}
              />
              <TaskList taskData={copytask} />
            </div>
          </div>
        </section>
        <Footer />
      </editModal.Provider>
    </>
  );
}
