import React from 'react'

const withUserData = (WrappedComponent) => {
  return (props) => {
    const name = "srikanth";
    const age = 25;
    return (<WrappedComponent name={name} age={age}/>) 
  }
}

export default withUserData
