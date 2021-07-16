import Header from "../components/headers"

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import {GetemployeeAction} from'../actions/getEmployeeAction'
import{DeleteemployeeAction} from '../actions/deleteEmployeeActions'

const Home = (props)=>{

    const dispatch = useDispatch()

    const employee = useSelector((store)=> store.getemployee)

    const {error,response,loading} =employee

    useEffect(()=>{
        dispatch(GetemployeeAction())
    },[])

    useEffect(()=>{

    },[error,response,loading])


    const Addemp =()=>{
props.history.push('/addemp')
    }


    const onDelete =(del)=>{
        dispatch(DeleteemployeeAction(del))
    }



 
    const OnEdit=(id,firstname,lastname,email,phone)=>{

        props.history.push('/editemp')
    }
    return(
        <div className="container">
<Header title="Home"/>

<button onClick={Addemp} className="btn btn-primary float-end">Add Employee</button>

<table className="table table-stripped">
    <thead>
        <tr>
            <td>id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td> Action</td>

        </tr>
    </thead>
    <tbody>
        {response &&
        response.data &&
        response.data.data &&
        response.data.data.length > 0 &&
        response.data.data.map((e)=>{

            return(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.firstname}</td>
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td>{e.action}</td>
                    <td>
                        <button onClick={()=> OnEdit(e.id,e.firstname,e.lastname,e.email,e.phone)} className="btn btn-secondary">Edit</button>
                        <button onClick={()=>onDelete(e.id)} className="btn btn-danger">Delete</button>
                    </td>

                </tr>
            )
        })
            
        }
    </tbody>
</table>


        </div>

        
    )
} 



export default Home

