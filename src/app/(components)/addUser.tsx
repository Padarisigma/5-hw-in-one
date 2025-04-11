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
const AddUser = () => {
	const [open, setOpen]=useState(false)
	const [title, setTitle]=useState('')
	const [desc, setDesc]=useState('')
	const [price, setPrice]=useState('')
 
	
	const addCard=async ()=>{
		const newUser={
			id: Date.now(),
			title: title,
			desc: desc,
			price:price,
			image:"https://s3-alpha-sig.figma.com/img/2d69/d9fc/832138c1d8f9bb75756613f279402f9f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UcEi-1l-EYueVq79gzu3fsn3jGSZvN~cJqKcOgHkDm4jomVoYDCoV3oEz48S9k0yir0nRaA0fvADycgkQKzoW84BgsnEydu24sbflb7vzXc9AziaPYU2xp2ERqfNE9q2Xbi0N7C4mX-GSy1-3YDsdjQMAmtOPr8f8egbMYjwgsaI0Ed2OcA0OUEyb8x5C04Mi0GOny7pkohlT6mwjiT21oxuqt6S3ZO41SllwsbARBEVbVHR7pEsnGCDdfTLg729aBYXMRpSNNbda63cIkG9CjRMVICnnTrAD-Se3hiGomd8MijoSYvcg48q7BoNcrzlG3uZi910XO3w0Gt-n9GyvA__"
		}
		try {
		await axios.post(API, newUser)	
		location.reload()
		} catch (error) {
			console.error(error);
		}
		setOpen(false)
		setTitle('')
		setDesc('')
		setPrice('')
	}

  return <>
  <div className='flex justify-center bg-white'>
  <button className='py-[7px] px-[30px] border border-black  rounded-[10px]' onClick={()=>setOpen(true)}>Add Card</button>
  </div>
  <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent  className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add card</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" value={title} onChange={(e)=>setTitle(e.target.value)} className="col-span-3" />
          </div>
			 <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Price
            </Label>
            <Input id="name" type='number' value={price} onChange={(e)=> setPrice(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" value={desc} onChange={(e)=> setDesc(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={addCard}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </>
}

export default AddUser