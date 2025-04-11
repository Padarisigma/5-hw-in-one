"use client"
import React from 'react' 
import axios from 'axios'
import { API } from './todolist'
const DeleteBtn = ({id}: {id: string}) => {
 const deleteUser=async ()=>{ 
   try {
		await axios.delete(`${API}/${id}`)
		location.reload()
	} catch (error) {
		console.error(error);
	}
 }

  return (
	<button className='py-[10px] tracking-[1px] px-[50px] bg-white rounded-[10px]  border-0' onClick={()=>deleteUser()} > Delete Card </button>
  )
}

export default DeleteBtn