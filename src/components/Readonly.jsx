import React, {useState} from "react";
import { useDispatch } from "react-redux";
import Deletepopup from "../modal/Deletepopup";
import { deleteContacts } from "../crudSlice";

const Readonly = ({ i,row, handleEditClick }) => {
    const [deleteID, setDeleteID]= useState();
    const [showMyModel, setShowMyModel]= useState(false);
    const dispatch = useDispatch();
  const handleOnClose =()=> setShowMyModel(false);
  const handleDelete = (id) => {
    setDeleteID(id);
    setShowMyModel(true)
  }
  console.log(deleteID);

  const handleDeleteItem=()=>{
    return(
      console.log(deleteID),
      dispatch(deleteContacts(deleteID)),
      setShowMyModel(false)
    )
  };
  return (
    
      <tr key={i}>
        <td className="pr-8 pl-2 py-2">{row.fullName}</td>
        <td className="pr-8  pl-2 py-2">{row.address}</td>
        <td className="pr-8 pl-2 py-2">{row.phoneNumber}</td>
        <td className="pr-8 pl-2 py-2">{row.email}</td>
        <td className="pr-8 ">
          <button 
            type="button" 
            onClick={(event) => handleEditClick(event, row)}
            className= "text-blue-500  pr-2"
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDelete(row.id)} className="text-red-500" >
            Delete
          </button>
        </td>
        <Deletepopup visible={showMyModel} onClose={handleOnClose} onDelete={handleDeleteItem}/>
      </tr>
   
  );
};

export default Readonly;
