import React from 'react';
import {List, ListItem, Card, CardContent} from "@mui/material";
import AppLayout from "../layout/AppLayout";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import routes from "../routes";
import CardLink from "../components/CardLink/CardLink";

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <AppLayout headerTitle={"Strona główna"}>
            <List>
                <ListItem onClick={() => navigate(routes.VOCABULARY)}>
                    <CardLink>
                        <Typography variant="button">Praktyka słownictwa</Typography>
                    </CardLink>
                </ListItem>
                <ListItem>
                    <CardLink>
                        <Typography variant="button">Czasowniki</Typography>
                    </CardLink>
                </ListItem>
            </List>
        </AppLayout>
    );
};

export default HomePage;