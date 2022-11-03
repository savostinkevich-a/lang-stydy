import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AppLayout from "../../ship/layout/AppLayout";
import CardLink from "../../ship/components/CardLink/CardLink";
import {Box, Button, List, ListItem, Typography} from "@mui/material";
import lectures from "../data";

const LecturesDetailPage = () => {

    const {lecture} = useParams()
    const navigate = useNavigate()

    const currentLecture = lectures[Number(lecture)]

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
                    onClick={() => navigate(`/`)}
                >
                    Do listy lekcji
                </Button>
            </Box>
            <List>
                {
                    currentLecture.nouns.length ?
                    <ListItem onClick={() => navigate(`/${lecture}/nouns`)}>
                        <CardLink>
                            <Typography variant="button">Rzeczowniki</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currentLecture.nouns.map(noun => noun.pl).join(", ")}
                            </Typography>
                        </CardLink>
                    </ListItem> : ""
                }

                {
                    currentLecture.adjectives.length ?
                    <ListItem onClick={() => navigate(`/${lecture}/adjectives`)}>
                        <CardLink>
                            <Typography variant="button">Przymiotniki i zaimki</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currentLecture.adjectives.map(adjective => adjective.masculine.pl).join(", ")}
                            </Typography>
                        </CardLink>
                    </ListItem> : ""
                }

                {
                    currentLecture.verbs.length ?
                    <ListItem onClick={() => navigate(`/${lecture}/verbs`)}>
                        <CardLink>
                            <Typography variant="button">Czasowniki</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currentLecture.verbs.map(verb => verb.infinitive).join(", ")}
                            </Typography>
                        </CardLink>
                    </ListItem> : ""
                }

            </List>
        </AppLayout>
    );
};

export default LecturesDetailPage;