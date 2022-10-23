import React from 'react';
import {useNavigate} from "react-router-dom";
import AppLayout from "../../ship/layout/AppLayout";
import {List, ListItem, Typography} from "@mui/material";
import CardLink from "../../ship/components/CardLink/CardLink";
import lectures from "../data";

const LecturesIndexPage = () => {

    const navigate = useNavigate()

    return (
        <AppLayout headerTitle={"Praktyka słownictwa"}>
            <List>
                {
                    Object.keys(lectures).map(key => (
                        <ListItem key={key} onClick={() => navigate(`${key}`)}>
                            <CardLink>
                                <Typography variant="button">Lekcja {key}</Typography>
                            </CardLink>
                        </ListItem>
                    ))
                }
            </List>
        </AppLayout>

    );
};

export default LecturesIndexPage;