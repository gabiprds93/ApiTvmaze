import React from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {api} from './actions';
import {Grid, Row, Col, Image, Nav, NavItem, Navbar} from 'react-bootstrap';

const Episode = ({item, index}) => 
{
  return (
    <Col md={3} className="item">
      <Image className="images" src={item.image.medium}/>
      <strong className="text-name">{item.name}</strong>      
      <div className="overlay">
        <i className="far fa-6x fa-play-circle"></i>
        {/* <p className="text-summary">{item.summary}</p> */}
      </div>      
    </Col>
  )
}

const App = ({episodes, index}) =>
{
  api();
  let episodesList;
  if(episodes)
  {
    episodesList = episodes.map((item, index) => 
    {
      return <Episode key={index} item={item} index={index} />
    })
  }
  return (
    <Grid fluid>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#">
              Watchlist
            </NavItem>
          </Nav>          
          <Nav pullRight>
            <NavItem href="#">
              Movies
            </NavItem>
            <NavItem href="#">
              Tv
            </NavItem>
            <NavItem className="popular" href="#">
              Most Popular
            </NavItem>
            <NavItem className="icon-arrow" href="#">
              A-Z <i className="fa fa-long-arrow-alt-down"></i>
            </NavItem>
            <NavItem className="icon-bars" href="#">
              <i className="fas fa-bars"></i>
            </NavItem>
            <NavItem className="icon-th" href="#">
              <i className="fas fa-th-large"></i>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row className='text-center'>
        {episodesList}
      </Row>
    </Grid>
  );
}

const mapToProps = ({episodes, index}) => ({episodes, index})

export default connect(mapToProps)(App);