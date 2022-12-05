import _ from "lodash";

import React, { Fragment } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../crudSlice";
import Edit from "./Edit";
import Readonly from "./Readonly";

const Display = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const {contacts} = useSelector((state) => state.contacts);
  console.log("contacts", contacts);
  const dispatch = useDispatch();
  const data = {
    id: Math.floor(Math.random() * 100),
    fullName: fullName,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (data) {
      dispatch(addContacts(data));
    }
  };
  console.log("contacts", contacts);
  const [editContactId, setEditContactId] = useState(null);
  const handleEditClick = (event, row) => {
    event.preventDefault();
    setEditContactId(row.id);
  };

  return (
    <div>
    <div className="bg-gray-200 my-4 mx-52 ">
      <h2 className="bg-white text-gray-900 text-xl uppercase text-center font-bold py-4">Contacts</h2>
      <table>
        <thead className="bg-gray-400">
          <tr className="justify-evenly">
            <th className="pr-12 py-2">Name</th>
            <th className="pr-12 py-2">Address</th>
            <th className="pr-12 py-2">Phone Number</th>
            <th className="pr-12 py-2">Email</th>
            <th children=" py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {_.map(contacts, (row, i) => {
            return (
              <Fragment>
                {editContactId === row.id ? (
                  <Edit
                    rowid={row.id}
                    editContactId={editContactId}
                    setEditContactId={setEditContactId}
                  />
                ) : (
                  <Readonly row={row} i={i} handleEditClick={handleEditClick} />
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      </div>
      <form className="bg-gray-300 py-4 mx-36 justify-evenly" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="full name"
          required
          placeholder="Enter name"
          className="mx-2"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          name="Address"
          required
          placeholder="Enter Address"
          className="mx-2"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          name="Phone Number"
          required
          placeholder="Enter Phone Number"
          className="mx-2"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter email"
          className="mx-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="text-red-500 pl-8">
          Add
        </button>
      </form>
    </div>
  );
};

export default Display;
