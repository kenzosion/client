import React from 'react';
import { BrowserRoute, Route, Link } from 'react-router-dom';
import { Stream } from 'stream';

const App = () => {
    return (
      <div>
        <BrowserRoute>
          <div>
            <Route path="/" exact component={Stream} />
            <Route path="/" exact component={Stream} />
            <Route path="/" exact component={Stream} />
            <Route path="/" exact component={Stream} />
            <Route path="/" exact component={Stream} />
          </div>
        </BrowserRoute>
      </div>
    );
}

export default App;