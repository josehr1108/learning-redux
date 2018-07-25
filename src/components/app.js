import React, { Component } from 'react';  //React toma todo el objeto y {Component} toma solo la propiedad Component de ese objeto
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
          <BookList/>
          <BookDetail/>
      </div>
    );
  }
}
