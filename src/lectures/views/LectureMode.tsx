import React, {FC} from 'react';
import {List, ListItem, Typography} from "@mui/material";
import CardLink from "../../ship/components/CardLink/CardLink";

const LectureMode: FC<TVocabularyMode> = ({setMode}) => {
    return (
        <List>
            <ListItem onClick={() => setMode("practice")}>
                <CardLink>
                    <Typography variant="button">Praktykować</Typography>
                </CardLink>
            </ListItem>
            <ListItem>
                <CardLink onClick={() => setMode("learn")}>
                    <Typography variant="button">Uczyć się</Typography>
                </CardLink>
            </ListItem>
            <ListItem>
                <CardLink onClick={() => setMode("table")}>
                    <Typography variant="button">Tablica</Typography>
                </CardLink>
            </ListItem>
        </List>
    );
};

type TVocabularyMode = {
    setMode: (mode: "learn" | "practice" |"table" | null) => void
}

export default LectureMode;