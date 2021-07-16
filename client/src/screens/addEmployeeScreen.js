import { useState } from "react"
import { useDispatch } from "react-redux"
import Header from "../components/headers"

import {AddemployeeAction} from "../actions/addemployeeActions"

const AddEmployeeScreen = (props)=>{


    const[firstname,setFirstname] =useState('')
    const[lastname,setLastname]=useState('')
    const[email,setEmail] =useState('')
    const[phone,setPhone] =useState('')
const dispatch = useDispatch()

    const submitform=()=>{
      dispatch(AddemployeeAction(firstname,lastname,email,phone))

    }

    const cancelform=()=>{
   props.history.push('/Home')
    }


    return(
        <div>
            <Header title="Addemployee"/>
            <div className="container">
      
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">First Name</label>
        <input 
        onChange={(e)=>{
            setFirstname(e.target.value)
        }}
        type="text" className="form-control" />
      </div>
    
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Last Name</label>
        <input
         onChange={(e)=>{
            setLastname(e.target.value)
    
        }}
         type="text" className="form-control" />
      </div>
    
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input 
         onChange={(e)=>{
            setEmail(e.target.value)
    
        }}
        type="email" className="form-control" id="exampleInputPassword1"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Phone</label>
        <input 
         onChange={(e)=>{
            setPhone(e.target.value)
    
        }}
        type="Phone" className="form-control" />
      </div>
      
     <button onClick={submitform} type="submit" className="btn btn-primary">Add</button>
    
    <button onClick={cancelform} type="submit" className="btn btn-danger float-end">Cancel</button>
    
         </div>
        </div>
    )
} 



export default AddEmployeeScreen