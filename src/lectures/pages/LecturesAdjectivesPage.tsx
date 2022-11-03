import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AppLayout from "../../ship/layout/AppLayout";
import VocabularyProvider from "../context/LecturesContext";
import LectureMode from "../views/LectureMode";
import {Box, Button} from "@mui/material";
import AdjectivesQuizView from "../../containers/adjectives/views/AdjectivesQuizView";
import AdjectivesLearnView from "../../containers/adjectives/views/AdjectivesLearnView";
import lectures from "../data";
import AdjectivesTableView from "../../containers/adjectives/views/AdjectivesTableView";

const LecturesAdjectivesPage = () => {

    const {lecture} = useParams()
    const currentLecture = lectures[Number(lecture)]
    const [mode, setMode] = useState<"learn" | "practice" | "table" | null>(null)
    const navigate = useNavigate()

    if (!currentLecture) {
        return <></>
    }

    return (
        <AppLayout headerTitle={`Lekcja ${lecture} | Przymiotniki`}>
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
                    {mode === "practice" &&
                        <AdjectivesQuizView
                            adjectives={currentLecture.adjectives}
                            lectureIndex={Number(lecture)}
                        />
                    }
                    {mode === "learn" && <AdjectivesLearnView adjectives={currentLecture.adjectives}/>}
                    {mode === "table" && <AdjectivesTableView adjectives={currentLecture.adjectives}/>}
                </>
            </VocabularyProvider>
        </AppLayout>
    );
};

export default LecturesAdjectivesPage;