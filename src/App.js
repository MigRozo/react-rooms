import React from 'react';

function App() {
  return (
    <div className="rooms">
      <div className="roomsNav">
        <button className="roomsNav_item" data-tag="all">all</button>
        <button className="roomsNav_item" data-tag="resorts">Resorts</button>
        <button className="roomsNav_item" data-tag="villas">Villas</button>
      </div>
      <div className="roomsList">
        <article className="room">room1</article>
        <article className="room" data-tag="resorts">room2</article>
        <article className="room" data-tag="villas">room3</article>
      </div>
    </div>
  );
}

export default App;
