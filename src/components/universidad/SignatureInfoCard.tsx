import { Carrera } from '@/interfaces/Universidad'
import React from 'react'

const SignatureInfoCard = ({ onClose, signature }: { onClose: Function, signature: Carrera | null | undefined }) => {
  const materias = signature?.planEstudios
  const sobreCarreraInfo = signature?.informacion_carrera.Sobre_carrera
  const showInfoCarrera = () => {
    if (sobreCarreraInfo && sobreCarreraInfo?.length > 0) {
      return sobreCarreraInfo.map((info, index) => <p key={index} className="text-gray-700 mt-2">
        {info}
      </p>)
    }
    return <p className="text-gray-700 mt-2 ">
      {signature?.informacion_carrera.Sobre_carrera[0]}
    </p>
  }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#ffffffac] backdrop-blur-xs bg-opacity-50 "
      onClick={() => onClose()}
    >
      <div
        className="bg-white max-h-4/5 mt-10 backdrop-blur-3xl w-3/4 p-6 rounded-lg shadow-lg flex flex-col items-baseline overflow-y-scroll text-base  "
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-orange-800 self-center">Bienvenido, a {signature?.nombre_carrera}</h3>

        {showInfoCarrera()}

        <h4>Perfil del egresado</h4>
        
        <p className="text-gray-700 mt-2 ">
          {signature?.informacion_carrera['Perfil profesional'][0]}
        </p>

        <section className='flex overflow-x-scroll overflow-y-scroll w-full mt-4 min-h-96 '>
          {materias?.map((materia, index) =>
            <section key={index} className='min-w-52 bg-gradient-to-b from-amber-100 to-white rounded-xl  ' >
              <h4 className='text-center pb-3 font-semibold' >Semestre {materia.numeroSemestre}</h4>
              {materia.materias.map((m, index) =>
                <section key={index} className=' m-2 pt-2 pr-2 pl-2 pb-1 rounded-xl bg-gradient-to-b from-white  to-orange-100  shadow-xs ' >
                  <p className='font-bold border-b-white border-b-2 p-1'>{m.nombre}</p>
                  <p className='bg-[#ffffffac] rounded-b-lg text-center'>Número de creditos: <span className='font-semibold'>{m.creditos}</span></p>
                </section>
              )}
            </section>
          )}
        </section>
      </div>
    </div>
  )
}

export default SignatureInfoCard