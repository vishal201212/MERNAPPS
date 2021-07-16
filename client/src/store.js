
import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {AddemployeeReducer} from './reducers/addEmployeeReducer'
import {DeleteemployeeReducer} from './reducers/deleteEmployeeReducer'
import {EditemployeeReducer} from './reducers/editEmployeeReducer'
import {GetemployeeReducer} from './reducers/getEmployeeReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
    addemployee:AddemployeeReducer,
    deleteemployee:DeleteemployeeReducer,
    editemployee:EditemployeeReducer,
    getemployee:GetemployeeReducer,
    
})


const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger,thunk)))



export default store