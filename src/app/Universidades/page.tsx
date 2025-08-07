"use client";

import CasesList from '@/components/categories/CasesList'
import React, { useEffect, useState } from 'react'

import universidadesJson from "@/assets/json/Universidades.json"

import { Universidad } from '@/interfaces/Universidad';

const pageUniversity = () => {
    // const [universidades, setUniversidades] = useState()
    const [universidades, setUniversidades] = useState<Universidad[] | undefined>(undefined);

    useEffect(() => {
        console.log(universidadesJson);
        // setUniversidades(universidadesJson)
    }, [])


    return (
        <div className="pt-28">
            <CasesList universidades={universidadesJson} />
        </div>
    )
}

export default pageUniversity