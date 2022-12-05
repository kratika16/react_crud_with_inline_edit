import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const crudSlice =createSlice({
    name: "crud",
    initialState:{
        contacts: [ {
            "id": 1,
            "fullName": "Jenny Chan",
            "address": "3 waterfoot road",
            "phoneNumber": "333-962-7516",
            "email": "jenny.chan@email.com"
          },
          {
            "id": 2,
            "fullName": "Jessica warren",
            "address": "4 tall town",
            "phoneNumber": "011-211-7516",
            "email": "jessica.warren@email.com"
          },
          {
            "id": 3,
            "fullName": "Tony Frank",
            "address": "11 lesly road",
            "phoneNumber": "788-962-7516",
            "email": "tony.frank@email.com"
          },
          {
            "id": 4,
            "fullName": "Jeremy Clark",
            "address": "333 miltown manor",
            "phoneNumber": "011-962-111",
            "email": "jeremy.clark@email.com"
          },
          {
            "id": 5,
            "fullName": "Raymond Edwards",
            "address": "99 blue acres",
            "phoneNumber": "3231-962-7516",
            "email": "raymon.edwards@email.com"
          }
          ],
    },
    reducers:{
        addContacts: (state,action)=>{
            console.log("contacts",action.payload);
            return{
                ...state,
                contacts: [...state.contacts, ...[action.payload]],
                
            }
        },
        editContacts: (state,action)=>{
            console.log(action.payload.setid);
            console.log(action.payload)
            const updateid= _.get(action.payload, "id");
            console.log(updateid)

            const updateddata= _.map(state.contacts, (abc)=>{
                if(abc.id === _.toNumber(updateid)){
                    return{...abc, ...action.payload};
                } 
                return abc;
            });

            console.log("updateddata", updateddata)
            return{
                ...state,
                contacts:updateddata,
                
            };
            
        },
        deleteContacts: (state,action)=>{
            const deleteid= action.payload;
            console.log(action.payload);
            return{
                ...state,
                contacts: _.filter(state.contacts, (data)=>data.id!==deleteid),  
            }
        },
    }
});
export const {addContacts, editContacts, deleteContacts}= crudSlice.actions;
export default crudSlice.reducer;