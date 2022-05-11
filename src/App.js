import React from 'react';

import { RoomsNav } from './components/RoomsNav';
import { RoomsNavItem } from './components/RoomsNavItem';
import { RoomsList } from './components/RoomsList';
import { Room } from './components/Room';

import './App.css';

function App() {
  const [ currentCategory, setCurrentCategory ] = React.useState('all');
  const [ state, setState ] = React.useState({});

  const roomsByCategory = ( category = 'all' ) => (
    state.rooms?.filter(room => category === 'all' || category === room.category)
  );

  React.useEffect(() => {
    fetch(`/api/rooms.json`)
      .then( resp => resp.json() )
      .then( data => setState(data) );
  }, []);
  

  return (
    <div className="rooms">
      <RoomsNav>
        <RoomsNavItem
          value="all"
          label="All Rooms"
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        { state.categories?.map((category, i) => (
          <RoomsNavItem
            key={i}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            {...category}
          />
        )) }
      </RoomsNav>

      <RoomsList>
        { roomsByCategory( currentCategory )?.map(room => <Room key={room.id} {...room} />) }
      </RoomsList>
    </div>
  );
}

export default App;
