import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Home from "./Home";

import Profile from "./Profile";
import ProfileEdit from "./Profile/ProfileEdit";

import './App.scss';

import Stores from "./Stores";
import Board from "./Board";
import Login from "./Profile/Login";

function App() {

  return (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menu-bar'>
                    <li><Link to='/'>Home</Link></li>
                    {/*<li><Link to='/login'>로그인</Link></li>*/}
                    <li><Link to='/profile'>프로필</Link></li>
                </ul>
            </header>

            <section className='app-body'>
                <Route path='/' exact component={Home} />
                {/*<Route path='/login' component={Login} />*/}
                <Route path='/profile' exact component={Profile} />
                <Route path='/profile/edit' component={ProfileEdit} />
                <Route path='/board/:command?/:postid?' exact component={Board} />
                {/*<Route path='/board' exact component={Board} />*/}
                {/*<Route path='/board/view/:postid' exact component={Board} />*/}
                {/*<Route path='/board/add/' exact component={Board} />*/}

            </section>

            <aside>

            </aside>
        </BrowserRouter>
    </Provider>
    );
}

/*
class App extends React.Component {
  state = {
    location: 0
  };
  render() {
    let {location} = this.state;
    return (
        <div>
          {location === 0 && <Home/>}
          {location === 1 && <Page1/>}
          {location === 2 && <Page2/>}
          {location === 3 && <Page3/>}
        </div>
    );
  }
}
*/

export default App;
