import React from 'react';
import Header from './componets/Header';
import Users from './componets/Users';

class App extends React.Component {
  
  componentDidUpdate(prevProp) {
    if (this.state.helpText !== "Help")
    console.log("Some")
  }


  render() {
    return (<div>
      <Header title="Список користовачів" />
      <main>
        <Users />
      </main>
      <aside></aside>
    </div>)
  }

 
}

export default App