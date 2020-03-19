import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from '../main';
import './App.css';




class App extends React.Component{
  render(){
    return(
    <Router>
    <div style={{height: '100%', overflow: 'auto', position: 'relative'}}>
    <Layout fixedHeader>
      <Header transparent title=' ' id='header-bar' scroll>
        <Navigation>
                <Link to="/">Team Sign-Up</Link>
                <Link to="/teams">Current Teams</Link>               
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
    </div>
</Router>
    )
  }
}

export default App;
