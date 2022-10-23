import React, {FC, useEffect, useState} from 'react';
import Progress from "../../../ship/components/Progress/Progress";
import WordBox from "../../../lectures/components/WordBox/WordBox";
import UserAnswerInput from "../../../ship/components/UserAnswerInput/UserAnswerInput";
import AnswerButtonBox from "../../../lectures/components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../../lectures/context/LecturesContext";
import LectureResults from "../../../lectures/views/LectureResults";
import IVerb, {IVerbExercise} from "../models/IVerb";

const VerbsQuizView: FC<TVerbsQuizView> = (
    {
        lectureIndex,
        verbs
    }) => {

    const {
        isAnswered,
        isCorrect,
        progress,
        getRandomWord,
        userAnswer,
        setUserAnswer,
        checkAnswer,
        clearAnswer,
        updateProgress,
    } = useVocabularyContext()

    const [currentExercise, setCurrentExercise] = useState<IVerbExercise>({} as IVerbExercise)
    const [currentWord, setCurrentWord] = useState<IVerb>({} as IVerb)

    const getRandomExercise = () => {
        const verb = getRandomWord<IVerb>(verbs)
        const exercise = getRandomWord<IVerbExercise>(verb.exercises)
        setCurrentWord(verb)
        setCurrentExercise(exercise)
    }

    const next = () => {
        clearAnswer()
        updateProgress()
        getRandomExercise()
    }

    const skip = () => {
        getRandomExercise()
    }

    const submit = () => {
        checkAnswer(currentExercise.sentence, currentWord[currentExercise.pronoun])
    }

    useEffect(() => {
        getRandomExercise()
    }, [])

    if (progress >= 100) {
        return <LectureResults lectureIndex={lectureIndex}/>
    }

    return (
        <>
            <Progress value={progress}/>
            <WordBox
                answered={isAnswered}
                correct={isCorrect}
                askedWord={currentExercise.sentence}
                askedWordCaption={currentWord.infinitive}
                rightAnswer={currentWord[currentExercise.pronoun]}
                showAnswer={isAnswered}
            />
            <UserAnswerInput
                value={userAnswer}
                onChange={(event) => setUserAnswer(event.target.value)}
            />
            <AnswerButtonBox
                answered={isAnswered}
                disableSubmit={userAnswer === ""}
                next={next}
                submit={submit}
                skip={skip}
            />
        </>
    );
};

type TVerbsQuizView = {
    verbs: Array<IVerb>
    lectureIndex: number
}

export default VerbsQuizView;