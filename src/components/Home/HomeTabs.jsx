import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import allGames from '../../assets/img/homeTab/allGames.png';
import '../../assets/css/home.css';
import useFetch from '../../hooks/useFetch';
import BASE_URL from '../../hooks/baseURL';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function GameList({ game, products, launchGame }) {
  return (
    <>
      <h3 className='text-white'>{game?.name}</h3>
      {products &&
        products.map((product) => (
          <Link
            key={product.id}
            className=' col-3  col-lg-2  mb-1 mb-sm-4 btn'
            onClick={() => launchGame(game?.code, product.code)}
          >
            <img
              className={`img-fluid rounded-3 shadow gameImg `}
              src={product.imgUrl}
            />
          </Link>
        ))}
    </>
  );
}

function HomeTabs() {
  const { data: gameTypes } = useFetch(BASE_URL + '/gameType');
  const [url, setUrl] = useState(BASE_URL + '/allGameProducts');
  const { data: games, loading } = useFetch(url);
  const products = games.products;
  const slots = games[0]?.products;
  const casinos = games[1]?.products;
  const sports = games[2]?.products;
  const fishes = games[3]?.products;
  const navigate = useNavigate();

  const [auth, setAuth] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    setAuth(localStorage.getItem('authToken'));
    setAuthUser(JSON.parse(localStorage.getItem('authUser')));
  }, []);

  const launchGame = async (gameTypeId, product_code) => {
    if (auth) {
      let user = authUser.userData;
      const gameData = {
        productId: product_code,
        gameType: gameTypeId,
      };
      try {
        const response = await fetch(BASE_URL + '/game/Seamless/LaunchGame/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + auth,
          },
          body: JSON.stringify(gameData),
        });
        if (!response.ok) {
          throw new Error('Launch Game failed');
        }
        const data = await response.json();
        window.open(data.Url, '_blank');
      } catch (error) {
        console.error('Launch Game error:', error);
      }
    } else {
      navigate('/login');
    }
  };

  return (

    <Tab.Container id='left-tabs-example' defaultActiveKey={0}>
      <div className='mt-3'>
        <div className='' style={{ width: '100%' }}>
          <div className='container'>
            <Dropdown className=' customDropdown d-md-none  mb-4'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Game Types
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Nav.Link
                  className=' rounded-5   py-1    d-flex   align-items-center customNavItem '

                  eventKey={0}
                  onClick={() => setUrl(BASE_URL + '/allGameProducts')}
                > <Dropdown.Item className='rounded-5 px-2 ' >
                    <img className='tabImg' src={allGames} />
                    <span className='tabTitle text-center'>
                      All Games
                    </span></Dropdown.Item>
                </Nav.Link>
                {gameTypes &&
                  gameTypes.map((tab) => (
                    <Nav.Link
                      key={tab.id}
                      onClick={() =>
                        setUrl(BASE_URL + '/gameTypeProducts/' + tab.id)
                      }
                      className=' rounded-5 rounded-sm-5  py-1   d-flex   align-items-center customNavItem' style={{ height: 'max-content' }}
                      eventKey={tab.id}
                    >
                      <Dropdown.Item className='rounded-5 px-2 '>
                        <img className='tabImg' src={tab.img_url} />
                        <span className='tabTitle text-center  '>
                          {tab.name}
                        </span>
                      </Dropdown.Item>
                    </Nav.Link>

                  ))}
              </Dropdown.Menu>
            </Dropdown>

            <div className='d-flex flex-row justify-content-end'>
              <Nav variant='pills' className='d-none d-md-flex flex-row customGameTab '>
                <Nav.Item className='d-none d-md-flex flex-row gap-1  '>
                  <Nav.Link
                    className=' rounded-5   py-1    px-sm-2 d-flex   align-items-center '
                    eventKey={0}
                    onClick={() => setUrl(BASE_URL + '/allGameProducts')}
                  >
                    <img className='tabImg' src={allGames} />
                    <span className='tabTitle text-center text-light'>
                      All Games
                    </span>
                  </Nav.Link>
                  {gameTypes &&
                    gameTypes.map((tab) => (
                      <Nav.Link
                        key={tab.id}
                        onClick={() =>
                          setUrl(BASE_URL + '/gameTypeProducts/' + tab.id)
                        }
                        className=' rounded-5 rounded-sm-5   py-1   px-sm-2 d-flex   align-items-center ' style={{ height: 'max-content' }}
                        eventKey={tab.id}
                      >
                        <img className='tabImg' src={tab.img_url} />
                        <span className='tabTitle text-center text-light'>
                          {tab.name}
                        </span>
                      </Nav.Link>
                    ))}
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className=' '>
            {loading && (
              <div className='text-center'>
                <div className='spinner-border text-white' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
            )}
            <div>
              <Tab.Pane className='mx-auto row me-1 me-sm-0' eventKey={0}>
                <GameList
                  game={games[0]}
                  products={slots}
                  launchGame={launchGame}
                />
                <GameList
                  game={games[1]}
                  products={casinos}
                  launchGame={launchGame}
                />
                <GameList
                  game={games[2]}
                  products={sports}
                  launchGame={launchGame}
                />
                <GameList
                  game={games[3]}
                  products={fishes}
                  launchGame={launchGame}
                />
              </Tab.Pane>
            </div>
            <div>
              <Tab.Pane className='mx-auto   row me-1 me-sm-0' eventKey={games?.id}>
                <GameList
                  game={games}
                  products={products}
                  launchGame={launchGame}
                />
              </Tab.Pane>
            </div>
          </div>
        </div>
      </div>
    </Tab.Container>


  );
}

export default HomeTabs;
