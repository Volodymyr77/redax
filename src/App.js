
import './App.css';
import {connect} from 'react-redux';
import React from 'react';

function App(props) {
    console.log(props);
  return (
    <div className="App">
      <h1 onClick={props.incCounter}>Hello code {props.count}</h1>
        <h2>aassss</h2>
       </div>
  );
}
const mapStateToProps = (state) => {

    return {count: state.count};
}


const incCounter = (payload) => ({type: "increment", payload});
const decCounter = () => ({ type: "decrement"});

export default  connect(mapStateToProps, {incCounter, decCounter})(App);

