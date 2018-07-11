
import {createStore} from 'redux';



const reducer = function(state,action){
    switch (action.type){
        case "REGISTER_USER":
        return action.payload;
        
        case "LOGIN_USER":
        return action.payload;

        default:
        return state;
    }

}
export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

