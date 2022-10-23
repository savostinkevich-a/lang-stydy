import {createContext, Dispatch, FC, ReactElement, SetStateAction, useContext, useState} from "react";
import IAnswer from "../models/IAnswer";

const VocabularyContext = createContext<TVocabularyContext>({} as TVocabularyContext)

const VocabularyProvider: FC<VocabularyProvider> = (
    {
        children
    }) => {

    const [progress, setProgress] = useState<number>(0)
    const [isAnswered, setIsAnswered] = useState<boolean>(false)
    const [isCorrect, setIsCorrect] = useState<boolean>(false)
    const [userAnswer, setUserAnswer] = useState<string>("")

    const [answers, setAnswers] = useState<Array<IAnswer>>([])

    const setAnswer = (answer: IAnswer) => {
        setAnswers([...answers, answer])
    }

    const getRandomWord = <Type,>(array: Array<Type>): Type => {
        return array[Math.floor(Math.random() * array.length)]
    }

    const checkAnswer = <Type,>(question: string, correctAnswer: string) => {
        const isUserAnswerCorrect = userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()
        setIsAnswered(true)
        setIsCorrect(isUserAnswerCorrect)
        setAnswer({
            question,
            correctAnswer,
            userAnswer,
            isCorrect: isUserAnswerCorrect
        })
    }

    const clearAnswer = () => {
        setIsCorrect(false)
        setIsAnswered(false)
        setUserAnswer("")
    }

    const updateProgress = () => setProgress(prev => prev + 10)

    const values: TVocabularyContext = {
        progress,
        isAnswered,
        isCorrect,
        answers,
        getRandomWord,
        userAnswer,
        setUserAnswer,
        checkAnswer,
        clearAnswer,
        updateProgress
    }

    return (
        <VocabularyContext.Provider value={values}>
            {children}
        </VocabularyContext.Provider>
    )
}

export const useVocabularyContext = () => useContext(VocabularyContext)

type TVocabularyContext = {
    progress: number
    isAnswered: boolean,
    isCorrect: boolean,
    answers: Array<IAnswer>
    getRandomWord: <T,>(array: Array<T>) => T
    userAnswer: string,
    setUserAnswer: Dispatch<SetStateAction<string>>
    checkAnswer: (question: string, correctAnswer: string) => void
    updateProgress: () => void
    clearAnswer: () => void
}

type VocabularyProvider = {
    children: ReactElement | Array<ReactElement>
}

export default VocabularyProvider