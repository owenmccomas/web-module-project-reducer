import React, { useState } from 'react';
import { useReducer } from 'react';
import './App.css';
import reducer, { initialState } from '../reducers';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { addOne, ADD_MEM, ADD_ONE, APPLY_MEM, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, CLEAR_MEM } from '../actions';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAddOne = () => {
  //   dispatch({type: ADD_ONE})
  // }
  const handleApplyNumber = (number) => {
     dispatch({type: APPLY_NUMBER, payload: number})
  }
  const handleOperationChange = (operation) => {
    dispatch({type: CHANGE_OPERATION, payload: operation})
  }
  const handleClear = () => {
    dispatch({type: CLEAR_DISPLAY})
  }
  const handleAddMem = () => {
    dispatch({type: ADD_MEM})
  }
  const handleApplyMem = () => {
    dispatch({type: APPLY_MEM})
  }
  const handleClearMem = () => {
    dispatch({type: CLEAR_MEM})
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {handleAddMem()}}/>
              <CalcButton value={"MR"} onClick={() => {handleApplyMem()}}/>
              <CalcButton value={"MC"} onClick={() => {handleClearMem()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNumber(1)}/>
              <CalcButton value={2} onClick={() => handleApplyNumber(2)}/>
              <CalcButton value={3} onClick={() => handleApplyNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNumber(4)}/>
              <CalcButton value={5} onClick={() => handleApplyNumber(5)}/>
              <CalcButton value={6} onClick={() => handleApplyNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNumber(7)}/>
              <CalcButton value={8} onClick={() => handleApplyNumber(8)}/>
              <CalcButton value={9} onClick={() => handleApplyNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperationChange('+')}/>
              <CalcButton value={"*"} onClick={() => handleOperationChange('*')}/>
              <CalcButton value={"-"} onClick={() => handleOperationChange('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
