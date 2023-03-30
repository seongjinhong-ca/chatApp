import React, { useState } from 'react';

/*
test with the sample room objects
make sure list all the rooms

*/
const testingRooms = [
  {
    room1:{
      name:"room1",
      id:1
    }
  },
  {
    room2:{
      name:"room2",
      id:2
    }
  }
]

export const MainPage = () => {
  const [rooms, setRooms] = useState(testingRooms);
  return (
    <>
      <h1>This is Main Room</h1>
      <ol>
        {rooms.map((room) => {
          <li key={room.id}>
            <button>{room.name}</button>
          </li>
        })}
      </ol>
      <button>create</button>
    </>
  );
}
