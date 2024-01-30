/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { editModal } from "../../Context";
import whiteStar from "../../assets/whiteStar.svg";
import yellowStar from "../../assets/yelloStar.svg";
import randomColor from "../../utiles/randomColor";

export default function SingleTask({ singleData }) {
  const { id, title, description, tags, priority, isFavourite } = singleData;
  const { option, setOption, setShowModal, singleDelete,isFav } =useContext(editModal);
 
  
  
  let tagList = "";
  if (tags.length > 0) {
    tagList = tags.map((singleTag) => (
      <li key={singleTag}>
        <span className="inline-block h-5 whitespace-nowrap rounded-[45px]  px-2.5 text-sm capitalize text-[#F4F5F6]" style={{backgroundColor:randomColor()}}>
          {singleTag}
        </span>
      </li>
    ));
  } else {
    tagList = "No Tag yet";
  }

  function toggleFav(){
    let data = {...singleData,isFavourite:!isFavourite}
    isFav(data,id)
    
  }

  return (
    <>
      <tr
        key={singleData.id}
        className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
      >
        <td onClick={toggleFav}>
          <img src={isFavourite ? yellowStar : whiteStar} alt="star" />
        </td>
        <td>{title}</td>
        <td>
          <div className="text-left">{description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">{tagList}</ul>
        </td>
        <td className="text-center">{priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="text-red-500"
              onClick={() => {               
                singleDelete(id);
              }}
            >
              Delete
            </button>
            <button
              className="text-blue-500"
              onClick={() => {
                setOption({
                  type: "edit",
                  data: singleData,
                });
                setShowModal(true);
              }}
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
