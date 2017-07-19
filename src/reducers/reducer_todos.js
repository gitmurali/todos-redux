import {ADD_TODO} from '../actions';
import {DELETE_TODO} from '../actions';

export default function(state=[], action) {

    switch (action.type){
        case ADD_TODO:
            return [action.payload, ...state];
        case DELETE_TODO:
            const newState = state.filter((elm, index) => {
                return action.payload !== index
            });
            return newState;
    }
    return state;
}
