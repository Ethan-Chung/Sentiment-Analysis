import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Header from './components/header';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);
  const [userInput, setUserInput] = useState(''),
    onInput = ({target:{value}}) => setUserInput(value),
    onFormSubmit = e => {
      e.preventDefault();
      console.log(userInput);
      
      fetch(`/sentiment?message=${userInput}`).then(
        res => res.json()
      ).then(
        data => {
          setData(data);
          console.log(data);
        }
      );
      setInput(userInput);
      setUserInput('');
    }

  return (
    <div>
      <Header/>
      
      <h2 className='text-center pt-2'> Polarity Scores </h2>
      
        {
          Object.keys(data).length === 0
            ? (
              <div/>
             ) : (
              <div className='text-center pt-2'>
                
                <p><b>Positive:</b> {data.pos} </p>
                <p><b>Negative:</b> {data.neg} </p>
                <p><b>Neutral:</b> {data.neu} </p>
                <p><b>Compound:</b> {data.compound} </p>
              </div>
             )
        }
      <div className="d-flex align-items-center justify-content-center" style={{height: "100px"}}>
        <Form onSubmit={onFormSubmit} id="form">
            <Form.Control
              placeholder="Enter phrase ..."
              type="text"
              onChange={onInput}
              value={userInput}
            />
        </Form>
        <Button variant="primary" type="submit" form="form">
          Submit
        </Button>
        
      </div>
      <div className='text-center pt-2'>
        <p><b>Phrase:</b> {input} </p>
      </div>
      
    </div>
  );
}
