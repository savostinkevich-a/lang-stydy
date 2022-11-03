import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AppLayout from "../../ship/layout/AppLayout";
import NounsQuizView from "../../containers/nouns/views/NounsQuizView";
import VocabularyProvider from "../context/LecturesContext";
import NounsLearnView from "../../containers/nouns/views/NounsLearnView";
import LectureMode from "../views/LectureMode";
import {Box, Button} from "@mui/material";
import lectures from "../data";

const LecturesNounsPage = () => {

    const {lecture} = useParams()
    const currentLecture = lectures[Number(lecture)]

    const [mode, setMode] = useState<"learn" | "practice" | "table" | null>(null)
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
                    onClick={() => navigate(`/${lecture}`)}
                >
                    Zwrócić
                </Button>
            </Box>

            <VocabularyProvider>
                <>
                    {mode === null && <LectureMode setMode={setMode}/>}
                    {mode === "practice" && <NounsQuizView nouns={currentLecture.nouns} lectureIndex={Number(lecture)}/>}
                    {mode === "learn" && <NounsLearnView nouns={currentLecture.nouns}/>}
                    {mode === "table" && <NounsLearnView nouns={currentLecture.nouns}/>}
                </>
            </VocabularyProvider>
        </AppLayout>
    );
};

export default LecturesNounsPage;