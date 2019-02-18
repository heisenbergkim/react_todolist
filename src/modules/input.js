import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'input/SET_iNPUT';
export const setInput = createAction(SET_INPUT);

const initialState = Map({
    value: ''
});


export default handleActions({
    
})