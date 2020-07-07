import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SliderPuzzle from './components/SliderPuzzleComponent';
import Footer from './components/footer';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

function App() {
  return (
    <div>
      <Title>Nick's App</Title>
      <SliderPuzzle />
      <Footer />
    </div>
  );
}

export default App;
