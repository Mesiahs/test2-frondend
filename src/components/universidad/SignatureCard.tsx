import React from 'react'
import { Carrera } from '../../interfaces/Universidad';


const SignatureCard = ({carrera, onSignatureName}: { carrera: Carrera, onSignatureName: Function }) => {


  return (
    <div className=" flex flex-col justify-between w-2xs bg-[#ffffffa0] backdrop-blur-3xl rounded-lg shadow-2xs  m-4 max-w-xs  cursor-pointer" onClick={() => onSignatureName(carrera.nombre_carrera)}>
      
      <h3 className="text-xl min-w-7 p-6 font-semibold text-gray-800 mb-2">
        {carrera.nombre_carrera}
      </h3>
      <img src={carrera.url} alt="" className='rounded-b-lg ' />

    </div>
  )
}

export default SignatureCard