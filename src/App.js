import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ToDoContainer from './containers/TodoContainer/ToDoContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ToDoContainer />
        </Layout>
      </div>

    );
  }
}

export default App;
