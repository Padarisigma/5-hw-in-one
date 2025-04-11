import React from 'react'
import Image from 'next/image'
import { Users } from './todolist'
import DeleteBtn from './buttonDel'
import EditCard from './editCard'


const CardUser = ({data}) => {
  return <div className='grid w-[100%] px-[50px] py-[60px] bg-white m-auto sm:grid-cols-4 sm:grid-rows-[600px_600px] gap-[30px]'>
  {
	  data.map((user:Users)=>{
		  return <div key={user.id} className='bg-[#57BFC10F] py-[20px] px-[30px] rounded-[10px] flex flex-col items-center gap-[20px]'>
		  <Image src={user.image} width={500} height={500} alt='map images'/>
		  <p className='text-[25px] font-semibold text-[#050F0F]'>{user.title}</p>
		  <p className='text-[17px] text-[#050F0F80]'>{user.desc}</p>
		  <p className='text-[22px] text-[#050F0F]'>{user.price} $</p>
		  <DeleteBtn id={user.id}/>
		  <EditCard user={user}/>
		  </div>
	  })
  }
 </div>
}

export default CardUser