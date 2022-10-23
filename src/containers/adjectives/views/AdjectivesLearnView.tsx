import React, {FC, useEffect, useState} from 'react';
import WordBox from "../../../lectures/components/WordBox/WordBox";
import AnswerButtonBox from "../../../lectures/components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../../lectures/context/LecturesContext";
import IAdjective from "../models/IAdjective";

const AdjectivesLearnView: FC<TAdjectivesLearnView> = (
    {
        adjectives
    }) => {

    const {

        getRandomWord,
        clearAnswer,
        updateProgress,
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

    useEffect(getRandomAdjective, [])

    return (
        <>
            <WordBox
                answered={false}
                correct={false}
                askedWord={`${currentWord.pl}`}
                askedWordCaption={`(${currentWord.gender})`}
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

type TAdjectivesLearnView = {
    adjectives: Array<IAdjective>
}

export default AdjectivesLearnView;