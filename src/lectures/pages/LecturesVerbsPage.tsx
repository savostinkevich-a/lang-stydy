import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AppLayout from "../../ship/layout/AppLayout";
import VocabularyProvider from "../context/LecturesContext";
import LectureMode from "../views/LectureMode";
import {Box, Button} from "@mui/material";
import VerbsQuizView from "../../containers/verbs/views/VerbsQuizView";
import lectures from "../data";

const LecturesVerbsPage = () => {

    const {lecture} = useParams()
    const currentLecture = lectures[Number(lecture)]
    const [mode, setMode] = useState<"learn" | "practice" | null>(null)
    const navigate = useNavigate()

    if (!currentLecture) {
        return <></>
    }

    return (
        <AppLayout headerTitle={`Lekcja ${lecture} | Czasowniki`}>
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
                    {mode === "practice" && <VerbsQuizView verbs={currentLecture.verbs} lectureIndex={Number(lecture)}/>}
                </>
            </VocabularyProvider>
        </AppLayout>
    );
};

export default LecturesVerbsPage;