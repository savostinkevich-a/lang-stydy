import React, {FC} from 'react';
import {useVocabularyContext} from "../context/LecturesContext";
import AnswersList from "../components/AnswersList/AnswersList";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const LectureResults: FC<TVocabularyResults> = ({lectureIndex}) => {

    const {answers} = useVocabularyContext()

    const navigate = useNavigate()

    return (
        <>
            <AnswersList answers={answers}/>
            <Box
                sx={{m:2}}
                onClick={() => navigate(`/${lectureIndex}`)}
            >
                <Button
                    sx={{width: "100%"}}
                    variant="contained"
                >
                    Powrót do menu
                </Button>
            </Box>
        </>
    );
};

type TVocabularyResults = {
    lectureIndex: number
}

export default LectureResults;