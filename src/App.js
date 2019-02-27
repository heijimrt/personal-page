import React, { Component } from 'react';
import MainToolbar from './components/MainToolbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>

            <div>
              <MainToolbar />
            </div>

            <div class="container">
              <Route path="/about" component={About} />
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
