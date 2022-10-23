import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AppLayout from "../../../ship/layout/AppLayout";
import data from "../data";
import VocabularyNounsQuiz from "../views/Nouns/VocabularyNounsQuiz";
import VocabularyProvider from "../context/VocabularyContext";
import VocabularyNounsLearn from "../views/Nouns/VocabularyNounsLearn";
import VocabularyMode from "../views/VocabularyMode";
import {Box, Button} from "@mui/material";
import routes from "../../../ship/routes";

const VocabularyNounsPage = () => {

    const {lecture} = useParams()
    const currentLecture = data.lectures.find(lect => lect.lectureIndex === Number(lecture))
    const [mode, setMode] = useState<"learn" | "practice" | null>(null)
    const navigate = useNavigate()

    if (!currentLecture) {
        return <></>
    }

    return (
        <AppLayout headerTitle={`Lekcja ${lecture} | Rzeczowniki`}>
            <Box
                sx={{
                    pl: 2
                }}
            >
                <Button
                    onClick={() => navigate(`${routes.VOCABULARY}/${lecture}`)}
                >
                    Zwrócić
                </Button>
            </Box>

            <VocabularyProvider>
                <>
                    {mode === null && <VocabularyMode setMode={setMode}/>}
                    {mode === "practice" && <VocabularyNounsQuiz nouns={currentLecture.nouns} lectureIndex={currentLecture.lectureIndex}/>}
                    {mode === "learn" && <VocabularyNounsLearn nouns={currentLecture.nouns}/>}
                </>
            </VocabularyProvider>
        </AppLayout>
    );
};

export default VocabularyNounsPage;