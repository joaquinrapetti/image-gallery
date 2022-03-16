import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is a simple application that retrieves photos using Unsplash API. In
      order to star enter any search term in the input field.
    </p>

    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
