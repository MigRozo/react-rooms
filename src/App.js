import React from 'react';
import './App.css';

function RoomsNav(props) {
  const { children } = props;

  return (
    <div className="roomsNav">{children}</div>
  );
}

function RoomsNavItem(props) {
  const { value, label, setCurrentCategory } = props;

  return (
    <button className="roomsNav_item" onClick={ () => setCurrentCategory(value) }>{ label ? label : value }</button>
  );
}

function RoomsList(props) {
  const { children } = props;

  return (
    <div className="roomsList">{children}</div>
  );
}

function Room(props) {
  const { category, name, description, link, available } = props;

  return (
    <article className="room">
      <div className="container">
        <div className="room_row">
          <figure className="room_pic">
            <img src="https://picsum.photos/768/576" alt={name} />
          </figure>
          <div className="room_copy">
            <span className="subtitles">{ category ? category : 'room' }</span>
            <h2 className="titles">{ name }</h2>

            {description && (
              <div className="text">
                <p>{ description }</p>
              </div>
            )}

            <div className="room_cta">
              {(link && available) && (
                <a className="btn" href="#" target="_blank" aria-label="Book now Double King room">Book Now</a>
              )}

              {(!link && available) && (
                <span className="tag">Cooming soon</span>
              )}

              {!available && (
                <span className="tag">No Vacancy</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [currentCategory, setCurrentCategory] = React.useState('all');
  const [state] = React.useState({
    categories: [
      { value: 'suite', label: '' },
      { value: 'villa', label: '' }
    ],
    rooms: [
      {
        category: '',
        id: 12871,
        name: 'Double King',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quas fugit vero nemo possimus esse distinctio. Sunt placeat dicta ab.',
        link: '#',
        available: true
      },
      {
        category: 'suite',
        id: 12870,
        name: 'Double Queen',
        description: 'Qui quisquam deserunt hic. Suscipit dolorum quibusdam saepe aliquam iusto eaque atque assumenda perspiciatis ab, eveniet adipisci?',
        link: '#',
        available: false
      },
      {
        category: 'villa',
        id: 12869,
        name: 'Deluxe Jack',
        description: 'Minus, illo! Voluptates mollitia quia reprehenderit quam officiis perferendis corrupti fugit dicta. Rem quae earum rerum cum ex amet perferendis, harum itaque.',
        link: '',
        available: true
      }
    ]
  });

  return (
    <div className="rooms">
      <RoomsNav>
        <RoomsNavItem value="all" label="All Rooms" setCurrentCategory={setCurrentCategory} />
        { state.categories.map((category, i) => (<RoomsNavItem key={i} setCurrentCategory={setCurrentCategory} {...category} />)) }
      </RoomsNav>

      <RoomsList>
        { state.rooms.map(room => {
          if ( currentCategory === 'all' || currentCategory === room.category ) return (<Room key={room.id} {...room} />)
        }) }
      </RoomsList>
    </div>
  );
}

export default App;
