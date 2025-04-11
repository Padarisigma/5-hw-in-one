import axios from 'axios'
import React from 'react'
import CardUser from './cardUser'
import { Users } from 'lucide-react'
import AddUser from './addUser'

export const API='https://678e0d0ea64c82aeb11ec8d1.mockapi.io/users'

export interface Users {
	title: string
	  desc: string,
	  id: string,
	  price: number
	  image: any
 }

 const get=async ()=>{
	try {
	  const {data}= await axios.get(API)
	  return data
	} catch (error) {
	  console.error(error);
	  
	}
 }


const Todolist = async () => {
	const data=await get()
  return <>
   <AddUser/>
    <CardUser data={data} />
  </>
}

export default Todolist