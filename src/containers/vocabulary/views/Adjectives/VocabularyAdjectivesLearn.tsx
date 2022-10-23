import React, {FC, useEffect, useState} from 'react';
import INoun, {WordGender} from "../../models/INoun";
import Progress from "../../../../ship/components/Progress/Progress";
import WordBox from "../../components/WordBox/WordBox";
import UserAnswerInput from "../../../../ship/components/UserAnswerInput/UserAnswerInput";
import AnswerButtonBox from "../../components/AnswerButtonsBox/AnswerButtonBox";
import {useVocabularyContext} from "../../context/VocabularyContext";
import VocabularyResults from "../VocabularyResults";
import IAdjective from "../../models/IAdjective";

const VocabularyAdjectivesLearn: FC<TVocabularyAdjectivesLearn> = (
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

type TVocabularyAdjectivesLearn = {
    adjectives: Array<IAdjective>
}

export default VocabularyAdjectivesLearn;