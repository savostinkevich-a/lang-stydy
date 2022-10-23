import React, {FC, useEffect, useState} from 'react';
import INoun from "../../models/INoun";
import WordBox from "../../components/WordBox/WordBox";
import AnswerButtonBox from "../../components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../context/VocabularyContext";

const VocabularyNounsQuiz: FC<TVocabularyNounsQuiz> = (
    {
        nouns
    }) => {

    const {
        getRandomWord,
    } = useVocabularyContext()

    const [currentWord, setCurrentWord] = useState<INoun>({} as INoun)

    const next = () => {
        setCurrentWord(getRandomWord<INoun>(nouns))
    }

    useEffect(() => {
        setCurrentWord(getRandomWord<INoun>(nouns))
    }, [])


    return (
        <>
            <WordBox
                answered={false}
                correct={false}
                askedWord={currentWord.pl}
                rightAnswer={currentWord.ru}
                showAnswer={true}
            />
            <AnswerButtonBox
                answered={true}
                disableSubmit={true}
                next={next}
                submit={() => {}}
                skip={() => {}}
            />
        </>
    );
};

type TVocabularyNounsQuiz = {
    nouns: Array<INoun>
}

export default VocabularyNounsQuiz;