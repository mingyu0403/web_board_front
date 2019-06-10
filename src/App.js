import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

import './App.scss';

import Stores from "./Stores";
import Board from "./Board";

function App() {

  return (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menu-bar'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/page1'>Page 1</Link></li>
                    <li><Link to='/page2'>Page 2</Link></li>
                    <li><Link to='/page3'>Page 3</Link></li>
                    <li><Link to='/board'>게시판</Link></li>
                </ul>
            </header>

            <section className='app-body'>
                <Route path='/' exact component={Home} />
                <Route path='/page1' component={Page1} />
                <Route path='/page2' component={Page2} />
                <Route path='/page3' component={Page3} />
                <Route path='/board/:command?/:postid?' exact component={Board} />
                {/*<Route path='/board' exact component={Board} />*/}
                {/*<Route path='/board/view/:postid' exact component={Board} />*/}
                {/*<Route path='/board/add/' exact component={Board} />*/}
            </section>

            <aside className='nav-aside'>

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
