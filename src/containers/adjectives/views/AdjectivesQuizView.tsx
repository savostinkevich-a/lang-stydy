import React, {FC, useEffect, useState} from 'react';
import Progress from "../../../ship/components/Progress/Progress";
import WordBox from "../../../lectures/components/WordBox/WordBox";
import UserAnswerInput from "../../../ship/components/UserAnswerInput/UserAnswerInput";
import AnswerButtonBox from "../../../lectures/components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../../lectures/context/LecturesContext";
import LectureResults from "../../../lectures/views/LectureResults";
import IAdjective from "../models/IAdjective";

const AdjectivesQuizView: FC<TAdjectivesQuizView> = (
    {
        lectureIndex,
        adjectives
    }) => {

    const {
        isAnswered,
        isCorrect,
        progress,
        userAnswer,
        setUserAnswer,
        getRandomWord,
        clearAnswer,
        updateProgress,
        checkAnswer
    } = useVocabularyContext()

    const [currentWord, setCurrentWord] = useState<{pl: string, ru: string, gender: string}>({} as {pl: string, ru: string, gender: string})

    const getRandomAdjective = () => {
        const {antonym, ...adjective} = getRandomWord<IAdjective>(adjectives)
        const [gender, {pl, ru}] = getRandomWord<[string, {pl: string, ru: string}]>(Object.entries(adjective))
        setCurrentWord({pl, ru, gender})
    }

    const next = () => {
        clearAnswer()
        updateProgress()
        getRandomAdjective()
    }

    const skip = () => {
        getRandomAdjective()
    }

    const submit = () => {
        checkAnswer(currentWord.ru, currentWord.pl)
    }

    useEffect(getRandomAdjective, [])

    if (progress >= 100) {
        return <LectureResults lectureIndex={lectureIndex}/>
    }


    return (
        <>
            <Progress value={progress}/>
            <WordBox
                answered={isAnswered}
                correct={isCorrect}
                askedWord={`${currentWord.ru}`}
                askedWordCaption={`(${currentWord.gender})`}
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

type TAdjectivesQuizView = {
    adjectives: Array<IAdjective>
    lectureIndex: number
}

export default AdjectivesQuizView;