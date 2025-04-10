import React from 'react'
import ClientGetById from '../../(components)/client-get-by-id';
const GetById = ({params}) => {
	const id = params.id; // Получаем id на сервере
   console.log(id);
	
	return (
	  <ClientGetById id={id} />
	);
}

export default GetById