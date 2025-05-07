'use client'

import { Formity, OnReturn, ReturnOutput } from "@formity/react";
import { Data } from "../../../components/formMultiSteps"
import React, { useCallback, useState } from 'react'
import {schema, Values} from '../../../schemas/schema'

const psychologicalTest = () => {
  const [values, setValues] = useState<ReturnOutput<Values> | null>(null);

  const onReturn = useCallback<OnReturn<Values>>((values) => {
    setValues(values);
  }, []);

  if (values) {
    return <Data data={values} onStart={() => setValues(null)} />;
  }

  return (
    <div className="flex justify-center items-center mt-22 " >
      <div className="w-3/4  ">
      <Formity<Values> schema={schema} onReturn={onReturn}/>
      </div>
    </div>
  )
}

export default psychologicalTest