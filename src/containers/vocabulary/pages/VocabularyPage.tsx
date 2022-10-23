import React from 'react';
import data from "../data";
import {Link, useNavigate} from "react-router-dom";
import routes from "../../../ship/routes";
import AppLayout from "../../../ship/layout/AppLayout";
import {Box, Button, Card, List, ListItem, Typography} from "@mui/material";
import CardLink from "../../../ship/components/CardLink/CardLink";

const VocabularyPage = () => {

    const navigate = useNavigate()

    return (
        <AppLayout headerTitle={"Praktyka słownictwa"}>
            <Box
                sx={{
                    pl: 2
                }}
            >
                <Button
                    onClick={() => navigate(`/`)}
                >
                    Do strony głównej
                </Button>
            </Box>
            <List>
                {data.lectures.map((lecture) => (
                    <ListItem key={lecture.lectureIndex} onClick={() => navigate(`${routes.VOCABULARY}/${lecture.lectureIndex}`)}>
                         <CardLink>
                             <Typography variant="button">Lekcja {lecture.lectureIndex}</Typography>
                         </CardLink>
                    </ListItem>
                ))}
            </List>
        </AppLayout>

    );
};

export default VocabularyPage;