import React, {useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter, find, get, toNumber } from "lodash";
import { editContacts } from '../crudSlice';

const Edit = ({rowid ,setEditContactId, editContactId}) => {
    
    const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const contacts= useSelector((state)=>state.contacts);
  const dispatch = useDispatch();
  useEffect(()=>{
    const currentContact = find(
        filter(
            get(contacts, "contacts"),(o)=>toNumber(o.id)===(rowid)
        )
    );
    console.log("currentdata", currentContact);
    setFullName(currentContact.fullName);
    setAddress(currentContact.address);
    setPhoneNumber(currentContact.phoneNumber);
    setEmail(currentContact.email);
  },[]);
  const handleEditFormSubmit =(event)=>{
    event.preventDefault();
    const dataset ={
        id:rowid,
        fullName:fullName,
        address:address,
        phoneNumber:phoneNumber,
        email:email,
    }
    if(dataset){
        dispatch(editContacts(dataset));
        setEditContactId(null);
    }
    console.log("editeddata",dataset);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  }
  
  return (
    <div>
    <form onSubmit={handleEditFormSubmit}>
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={address}
        onChange={(e) => setAddress(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
    </form>
    </div>
  )
}

export default Edit