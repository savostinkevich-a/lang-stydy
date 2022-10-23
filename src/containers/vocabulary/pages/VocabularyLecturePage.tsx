import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import data from "../data";
import AppLayout from "../../../ship/layout/AppLayout";
import CardLink from "../../../ship/components/CardLink/CardLink";
import {Box, Button, List, ListItem, Typography} from "@mui/material";
import routes from "../../../ship/routes";

const VocabularyLecturePage = () => {

    const {lecture} = useParams()

    const navigate = useNavigate()

    const currentLecture = data.lectures.find(lect => {
        return lect.lectureIndex === Number(lecture)
    })

    if (!currentLecture) {
        return <></>
    }

    return (
        <AppLayout headerTitle={`Lekcja ${lecture}`}>
            <Box
                sx={{
                    pl: 2
                }}
            >
                <Button
                    onClick={() => navigate(`${routes.VOCABULARY}`)}
                >
                    Do listy lekcji
                </Button>
            </Box>
            <List>
                <ListItem onClick={() => navigate(`${routes.VOCABULARY}/${currentLecture.lectureIndex}/nouns`)}>
                    <CardLink>
                        <Typography variant="button">Rzeczowniki</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                                currentLecture.nouns.map((noun, index) => (
                                    <span key={index}>{noun.pl}, </span>
                                ))
                            }
                        </Typography>
                    </CardLink>
                </ListItem>
                <ListItem onClick={() => navigate(`${routes.VOCABULARY}/${currentLecture.lectureIndex}/adjectives`)}>
                    <CardLink>
                        <Typography variant="button">Przymiotniki</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                                currentLecture.adjectives.map((adjective, index) => (
                                    <span key={index}>{adjective.masculine.pl}, </span>
                                ))
                            }
                        </Typography>
                    </CardLink>
                </ListItem>
            </List>

        </AppLayout>
    );
};

export default VocabularyLecturePage;