"use client";

import DialogMessage from "@/components/DialogMessage";
import TestBoard from "@/components/test/TestBoard";
import { useEffect, useState } from "react"

import { getForms } from "../../services/testService"
import { Form, Question } from "@/interfaces/FormInterface";
import ScoreDisplay from "@/components/test/ScoreDisplay";
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use";

const Test = () => {
  const [showDialog, setShowDialog] = useState(true);
  const [form, setform] = useState<Form | null>(null)
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [isTheEnd, setIsTheEnd] = useState(false)
  const { width, height } = useWindowSize()
  let questionsFrom: Question[] | undefined = []


  const fetchForms = async () => {
    try {
      const forms = await getForms();
      console.log(forms)
      setform(forms[0])
      questionsFrom = form?.questions
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const chancgeQuestion = () => {
    if (form && form.questions.length - 1 > indexQuestion) {
      nextQuestion()
    } else {
      setIsTheEnd(true)
    }
  }

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1)
  }

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const renderContent = () => {
    if (!form) {
      return "Cargando...";
    }
    if (isTheEnd) {
      return <div className=""> <ScoreDisplay /> </div>
    }
    return (
      <TestBoard
        question={form.questions[indexQuestion]}
        key={indexQuestion}
        onNextQuestion={chancgeQuestion}
      />
    );
  };

  useEffect(() => {
    fetchForms()
  }, [])


  return (
    <div className='mt-24 w-screen flex flex-col justify-center items-center'>
      <div></div>

      <h3 className='text-2xl font-semibold text-gray-800 text-center p-6 rounded-lg' >{form?.name_form}</h3>
      {showDialog ? <DialogMessage onClose={closeDialog} /> : ''}
      {renderContent()}
      {isTheEnd ?
        <Confetti
          width={width}
          height={height}
        />
        : ''}
    </div>
  );
};

export default Test;