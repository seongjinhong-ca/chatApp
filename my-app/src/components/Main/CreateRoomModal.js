import React, { useState } from "react";

export const CreateRoomModal = ({setRooms, testingRooms}) => {
    const [roomName, setRoomName] = useState();
    
    // functions
    const handleRoomName = (e) =>{
      const{value} = e.target;
      setRoomName(value);
      console.log(value);
    }
    const generateRoom = (roomName) =>{
      //create a room object
      const id = testingRooms.length + 1;
      // const roomNumber = JSON.stringify(`room + ${id}`);
      const index= id -1;
      const newRoomList = Object.assign(testingRooms, { index:{
        id: id,
        name: roomName
      }})
      console.log(newRoomList)
      // update the current rooms list
      setRooms(newRoomList);
    }
    
    return(
      <>
        <label>Room name: </label>
        <input name="roomName" value={roomName} onChange={handleRoomName}/>
        <button onClick={(roomName)=>{generateRoom(roomName)}}> generate </button>
        <button>cancel</button>
      </>
    )
  }
  