"use client"

import { Carrera } from '@/interfaces/Universidad';
import React, { useState } from 'react'
import SignatureCard from './SignatureCard';
import SignatureInfoCard from './SignatureInfoCard';

const ListCardSignatures = ({ signatures }: { signatures: Carrera[] }) => {
  const [showDialog, setShowDialog] = useState(true);
  const [signature, setSignature] = useState<Carrera | null>(null);

  const getSignatureName = (signatureName: string) => {
    console.log(signatureName);
    const signature = signatures.find(s => s.nombre_carrera == signatureName);
    if(signature) {
      setSignature(signature)
    }
    setShowDialog(true)
  }

  const handleCloseDialog = () => {
    setShowDialog(false);
  };


  return (
    // <div className=' bg-[url(https://st2.depositphotos.com/1031174/6301/i/450/depositphotos_63015917-stock-photo-abstract-background.jpg)] bg-cover bg-center'>
    // <div className=' bg-[url(https://img.freepik.com/vector-gratis/fondo-circulos-azules_1302-4820.jpg)] bg-cover bg-top '> }
    // <div className=' bg-[url(https://static.vecteezy.com/system/resources/previews/008/493/106/non_2x/abstract-blue-circles-with-transparent-background-png.png)] bg-cover bg-center'>
    // <div className=' bg-[url(https://previews.123rf.com/images/claudiodivizia/claudiodivizia1802/claudiodivizia180200005/94800716-abstract-minimalist-orange-illustration-with-circles-useful-as-a-background.jpg)] bg-cover bg-center'>
    <div className=' bg-[url(https://static.vecteezy.com/system/resources/previews/004/927/320/non_2x/abstract-orange-and-white-color-background-with-geometric-shape-illustration-vector.jpg)] bg-cover bg-top'>
      <section className="flex flex-wrap gap-2 w-full bg-[#ffffff9c] backdrop-blur-sm justify-center trans ">
        {signatures?.map((carrera, index) => <SignatureCard onSignatureName={getSignatureName} carrera={carrera} key={index} />)}
      </section>

      {showDialog ? <SignatureInfoCard onClose={handleCloseDialog} signature={signature} /> : ''}
    </div>
  )
}

export default ListCardSignatures