import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from '../../Store/AuthSlice/authSlice'
import { Link, NavLink } from 'react-router-dom'
import {openModal,closeModal} from '../../Store/AuthSlice/authSlice';
import {  tableData } from "../../Store/AuthSlice/authSlice";


const Table = () => {
    const dispatch = useDispatch()
    const tableData = useSelector((state)=>state.authSlice.Data)
    console.log("table data", tableData);

    const Delete =(index)=>{
const deletedata = tableData.filter((item, id)=>id != index)
console.log("delete id table", deletedata);
// dispatch(deleteData(1))
dispatch(deleteData(deletedata))


    }
 
   
  return (
    <>
    {/* Table for Showing Data of User */}
    {tableData.length>0 ? <div className="table w-full  ">
      <table className=' w-full'>
        {/* table head */}
        <thead>
            <tr className=' bg-slate-200'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Adhaar Number</th>
                <th>Pan Number</th>
                <th>Photo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            { tableData.map((item,index)=>{
              console.log("itemmmmm", item);
            return(
                <>
                <tr key={index} className='text-center'>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.gender}</td>
                    <td>{item.adhaarno}</td>
                    <td>{item.pan}</td>
                    {/* <td><img src={item.image}  /></td> */}
                   <td> <img src={item.image} alt="Loading" className="h-10 w-10 rounded-full" /></td>
                    <td>
                    <Link to={`/View/${index}`}> <button  className='bg-blue-300 px-2 rounded-lg me-1' >View</button></Link>
                       
                        <button className='bg-green-400 px-2 rounded-lg me-1'>Edit</button>
                        <button onClick={()=>Delete(index)} className='bg-red-300 px-2 rounded-lg me-1'>Delete</button>
                       

                    </td>
                    
                </tr>
                </>
            )
            })}
        </tbody>

      </table>
    </div> : <h2 className='text-xl text-center text-red-500'>Data not Found</h2>}
    
    </>
  )
}

export default Table