import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import { Modal } from './components/Modal';
import { CreateRoomModal } from './components/Main/CreateRoomModal';

/*
test with the sample room objects
make sure list all the rooms

*/
const testingRooms = [
  {
    name:"room1",
    id:1
  },
  {
    name:"room2",
    id:2
  }
]

const App = () => {
  const [rooms, setRooms] = useState(testingRooms);
  const [onModal, setOnModal] = useState(false);

  const createRoomModal = () => {
    // create modal for creating a room
    return (
      <Modal>
        <CreateRoomModal setRooms={setRooms} testingRooms={testingRooms}/>
      </Modal>
    )
  }
  const gotoRoom = (id, room) => {
    // go to another page : chatRoom page
    // use router
    return (
      <>
        <div className="room">
          <p>This is room{id}</p>
          <p>The name of this room is {room.name}</p>
        </div>
      </>
    )
  }

  // const roomLists =
  //   rooms.map((room) => (
  //     <li key={room.id.toString()}>
  //       {console.log(room)}
  //       <button onClick={(room) => gotoRoom(room.id, room)}>{room.name}</button>
  //     </li>
  //   ))
  return (
    <>
      <h1>This is Main Room</h1>
        {
          rooms.map((room) => (
            <li key={room.id}>
              <button onClick={(room)=> gotoRoom(room.id, room)}>{room.name}</button>
            </li>
          ))
        }
        {/* {onModal &&(<Modal/>)} */}
        <Modal>
          <CreateRoomModal setRooms={setRooms} testingRooms={testingRooms}/>
        </Modal>
      {/* <button onClick={()=> setOnModal(true)}>enable Modal</button> */}
      {/* <button onClick={()=> createRoomModal()}>create</button> */}
      {/* <button onClick={()=> createRoomModal()}>create</button> */}
    </>
  );
}


export default App;
