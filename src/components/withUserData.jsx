import React from 'react'

const withUserData = (WrappedComponent) => {
  return (props) => {        // returns the component to WrappedChild inside App.jsx
    const name = "srikanth";
    const age = 25;
    return (<WrappedComponent name={name} age={age}/>)  //returns the child component with props passed when the child component is rendered inside App.jsx
  }
}

export default withUserData
