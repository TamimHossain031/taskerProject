/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function AddTask(props) {
  const { setShowModal, taskData, upDateData,option,setOption } = props.taskData;
 

  
  

  const [inputData, setInputData] = useState(option.data || {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavourite: false,
  });
  function addData(evt) {
    const keyValue = evt.target.name;
    let value = evt.target.value;
    if (keyValue === "tags") {
      value = value.split(",");
    }
    setInputData({
      ...inputData,
      [keyValue]: value,
    });
  }

  function submitData(e) {
    e.preventDefault();
    
    if(e.target.innerText === 'Edit Task'){
     let data = taskData.map(show => {
       if(show.id === inputData.id){
       return inputData        
       }
       return show       
      })    
      let edit = true;
      upDateData(data,edit);     
      setOption({type: null, data: null });
      setShowModal(false);
       

      
    }else if(e.target.innerText === 'Create new Task'){
      upDateData(inputData)
      setShowModal(false);
    }
    
   
  }

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-50 bg-slate-800"></div>
      <form
        className="mx-auto my-10 w-full max-w-[640px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-5 max-md:px-4 lg:my-10 lg:p-6 addTask "
        
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-6 lg:text-[28px]">
          Add New Task
        </h2>

        <div className="space-y-5 text-white lg:space-y-5">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
              value={inputData.title}
              onChange={addData}
            />
          </div>

          <div className="space-y-1 lg:space-y-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
              value={inputData.description}
              onChange={addData}
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-5 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-1 lg:space-y-1">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
                value={inputData.tags}
                onChange={addData}
              />
            </div>

            <div className="space-y-1 lg:space-y-1">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
                value={inputData.priority}
                onChange={addData}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-around lg:mt-10">
          <button
            
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={submitData}
          >
            {option.type =='edit' ?"Edit Task" : "Create new Task"}

           
          </button>
          <button
            
            className="rounded bg-red-500 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() =>{
              
              setShowModal(false)

            } }
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
