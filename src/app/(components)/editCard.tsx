"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import { API } from './todolist'

const EditCard = ({user}) => {
const [openEdit, setEditOpen]=useState(false)
	const [titleEdit, setEditTitle]=useState(user.title)
	const [descEdit, setEditDesc]=useState(user.desc)
	const [priceEdit, setEditPrice]=useState(user.price)
 console.log(user);

 const editCards=async ()=>{
	const newUser={
		id: user.id,
		title: titleEdit,
		desc: descEdit,
		price:priceEdit,
	}
  try {
	await axios.put(API + `/${user.id}`, newUser )
	location.reload()
  } catch (error) {
	console.error(error);
	
  }
 }
 
	return <>
	<button className='py-[10px] tracking-[1px] px-[50px] bg-white rounded-[10px]  border-0' onClick={()=>setEditOpen(true)}>Edit</button>
	<Dialog open={openEdit} onOpenChange={setEditOpen}>
		 <DialogContent  className="sm:max-w-[425px]">
			<DialogHeader>
			  <DialogTitle>Edit card</DialogTitle>
			</DialogHeader>
			<div className="grid gap-4 py-4">
			  <div className="grid grid-cols-4 items-center gap-4">
				 <Label htmlFor="name" className="text-right">
					Title
				 </Label>
				 <Input id="name" value={titleEdit} onChange={(e)=>setEditTitle(e.target.value)} className="col-span-3" />
			  </div>
			  <div className="grid grid-cols-4 items-center gap-4">
				 <Label htmlFor="name" className="text-right">
					Price
				 </Label>
				 <Input id="name" type='number' value={priceEdit} onChange={(e)=> setEditPrice(Number(e.target.value))} className="col-span-3" />
			  </div>
			  <div className="grid grid-cols-4 items-center gap-4">
				 <Label htmlFor="username" className="text-right">
					Description
				 </Label>
				 <Input id="username" value={descEdit} onChange={(e)=> setEditDesc(e.target.value)} className="col-span-3" />
			  </div>
			</div>
			<DialogFooter>
			  <Button type="submit" onClick={editCards}>Save changes</Button>
			</DialogFooter>
		 </DialogContent>
	  </Dialog>
	</>
}

export default EditCard