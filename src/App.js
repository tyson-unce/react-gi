import { Component } from 'react';  
import BasicInfo from './components/BasicInfo';


let people = [
  {
    name: 'Tyson',
    phone: 'XXX-XXXX',
    age: 300,
    favoriteFood: 'Pizza'
  },
  {
    name: 'Sally',
    phone: 'XXX-XXXX',
    age: 18,
    favoriteFood: 'Steak'
  },

]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />
  }
  )
}

export default class App extends Component {  
  // easy
  constructor(props){  
    super(props);  
    this.state = {
        person: {
        }
    }
  }  
  // very easy/ medium
    render() {
      return (iteratePeople(people))
  }
}
