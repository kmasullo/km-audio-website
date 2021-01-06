import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import MixBanner from '../MixBanner/MixBanner';
import HearDifBanner from '../HearDifBanner/HearDifBanner';
import ServicesBanner from '../ServicesBanner/ServicesBanner';
import Testimonials from '../Testimonials/Testimonials';

export default class App extends Component {
  render(){
    return(
      <div className="appDiv">
        <Route component={Header} path='/'/>
        <Route component={MixBanner} exact path='/' />
        <Route component={HearDifBanner} exact path='/' />
        <Route component={ServicesBanner} exact path='/' />
        <Route component={Testimonials} exact path='/' />
      </div>
    )
  }
}