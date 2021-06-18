import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from '../main';
import './App.css';




class App extends React.Component{
  render(){
    return(
    <Router>
    <div style={{height: '100%', position: 'relative'}}>
    <Layout fixedHeader>
        <Content>
          <Main />
        </Content>
    </Layout>
    </div>
</Router>
    )
  }
}

export default App;
