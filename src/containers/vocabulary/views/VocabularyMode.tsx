import React, {FC} from 'react';
import {List, ListItem, Typography} from "@mui/material";
import CardLink from "../../../ship/components/CardLink/CardLink";

const VocabularyMode: FC<TVocabularyMode> = ({setMode}) => {
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
        </List>
    );
};

type TVocabularyMode = {
    setMode: (mode: "learn" | "practice" | null) => void
}

export default VocabularyMode;