import React, { Component } from 'react';
import MainToolbar from './components/MainToolbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <MainToolbar />

            <div className="container" id="page-wrap">
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
