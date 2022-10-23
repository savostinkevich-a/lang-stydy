import React, {FC, useEffect, useState} from 'react';
import INoun from "../../models/INoun";
import Progress from "../../../../ship/components/Progress/Progress";
import WordBox from "../../components/WordBox/WordBox";
import UserAnswerInput from "../../../../ship/components/UserAnswerInput/UserAnswerInput";
import AnswerButtonBox from "../../components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../context/VocabularyContext";
import VocabularyResults from "../VocabularyResults";

const VocabularyNounsQuiz: FC<TVocabularyNounsQuiz> = (
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
        return <VocabularyResults lectureIndex={lectureIndex}/>
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

type TVocabularyNounsQuiz = {
    nouns: Array<INoun>
    lectureIndex: number
}

export default VocabularyNounsQuiz;