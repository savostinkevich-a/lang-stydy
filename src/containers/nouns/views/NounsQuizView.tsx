import React, {FC, useEffect, useState} from 'react';
import INoun from "../models/INoun";
import Progress from "../../../ship/components/Progress/Progress";
import WordBox from "../../../lectures/components/WordBox/WordBox";
import UserAnswerInput from "../../../ship/components/UserAnswerInput/UserAnswerInput";
import AnswerButtonBox from "../../../lectures/components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../../lectures/context/LecturesContext";
import LectureResults from "../../../lectures/views/LectureResults";

const NounsQuizView: FC<TNounsQuizView> = (
    {
        lectureIndex,
        nouns
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

    const [currentWord, setCurrentWord] = useState<INoun>({} as INoun)

    const next = () => {
        clearAnswer()
        updateProgress()
        setCurrentWord(getRandomWord<INoun>(nouns))
    }

    const skip = () => {
        setCurrentWord(getRandomWord<INoun>(nouns))
    }

    const submit = () => {
        checkAnswer(currentWord.ru, currentWord.pl)
    }

    useEffect(() => {
        setCurrentWord(getRandomWord<INoun>(nouns))
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
                askedWord={currentWord.ru}
                rightAnswer={currentWord.pl}
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

type TNounsQuizView = {
    nouns: Array<INoun>
    lectureIndex: number
}

export default NounsQuizView;