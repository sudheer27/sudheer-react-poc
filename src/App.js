import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Slider from './components/Slider/Slider';
import HomeContent from './components/HomeContent/HomeContent';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    personData : [
      { id : 'abcd1', name : 'Sudheer', age : 27 },
      { id : 'abcd2', name : 'Ramyanka', age : 27 },
      { id : 'abcd3', name : 'Badigireddy', age : 28 }
    ],
    showPersons : false 
  }

  swapNameHandler = (newName) => {
    this.setState({
      personData : [
        { name : newName, age : 28 },
        { name : 'RamyankaReddy', age : 28 },
        { name : 'Badigireddy', age : 28 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.personData.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.personData[personIndex]
    };
    // const person = Object.assign({}, this.state.personData[personIndex]);
    person.name = event.target.value;
    const personData = [...this.state.personData];
    personData[personIndex] = person;

    // this.setState({
    //   personData : [
    //     { name : 'Sudheer', age : 27 },
    //     { name : event.target.value, age : 27 },
    //     { name : 'Badigireddy', age : 28 }
    //   ]
    // })
    this.setState({ personData :personData })
  }

  deletePersonListHandler = (personIndex) => {
    // const personData = this.state.personData.slice();
    const personData = [...this.state.personData];
    personData.splice(personIndex, 1);
    this.setState({personData : personData});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let personData = null;
    if(this.state.showPersons) {
      personData = (
        <div>
          {this.state.personData.map((person, index) => {
            return <HomeContent click={() => this.deletePersonListHandler(index)} name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightblue',
      //   color: 'black'
      // }
    }

    const classes = [];
    if(this.state.personData.length <= 2) {
      classes.push('blue');
    }
    if(this.state.personData.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <Header />
        {/* <Slider /> */}
        <h1>Hi This is Service Website</h1>
        <p className = {classes.join(' ')} >This basic sample</p>
        <button 
          style = {style}
          onClick = {this.togglePersonsHandler} >Toggle Persons</button>
        {personData}
        <Footer />
      </div >
    );
  }
}

export default App;
