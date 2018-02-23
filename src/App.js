import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'redux-zero/react';
import {api} from './actions';
import {Grid, Row, Col, Image} from 'react-bootstrap';

const Episode = ({item, index}) => 
{
  return (
    <Col md={3} className="container">
      <Image className="images" src={item.image.medium}/>
      <strong className='text-name'>{item.name}</strong>      
      <div className="overlay">
        <p className="text-summary">{item.summary}</p>
      </div>
      {/* <span className=""><span>$</span><span data-bind="text: price">{item.id}</span></span> */}
      {/* <button className="add-to-cart" onClick={addToCart}>Add to cart</button> */}
      
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
    <Grid fluid = "true">
      <Row className='text-center'>
        {episodesList}
      </Row>
    </Grid>
  );
}

const mapToProps = ({episodes, index}) => ({episodes, index})

export default connect(mapToProps)(App);