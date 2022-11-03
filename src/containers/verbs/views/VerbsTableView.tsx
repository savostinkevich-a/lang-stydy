import React, {FC} from 'react';
import IVerb from "../models/IVerb";
import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const VerbsTableView: FC<TVerbsTableView> = (
    {
        verbs
    }) => {

    return (
        <Box
            sx={{
                pl: 2,
                pr: 2,
                mb: 4
            }}
        >
            {
                verbs.map((verb, index) => (
                    <Accordion
                        key={index}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{verb.infinitive}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                sx={{
                                    mb: 1
                                }}
                            >
                                <Box sx={{mb: 2}}>
                                    <Typography variant={"h4"} color={"#1976d2"}>{verb.infinitive}</Typography>
                                </Box>

                                <Typography variant={"subtitle1"}>ja {verb.ja}</Typography>
                                <Typography variant={"subtitle1"}>ty {verb.ty}</Typography>
                                <Typography variant={"subtitle1"}>on/ona/ono {verb["on/ona/ono"]}</Typography>
                                <Typography variant={"subtitle1"}>my {verb.my}</Typography>
                                <Typography variant={"subtitle1"}>wy {verb.wy}</Typography>
                                <Typography variant={"subtitle1"}>oni/one {verb["oni/one"]}</Typography>
                            </Box>
                            <Divider/>
                            <Box
                                sx={{
                                    mt: 1
                                }}
                            >
                                {
                                    verb.exercises.map((exercise) => (
                                        <Typography variant={"subtitle1"} lineHeight={1.2} sx={{pb: 1.5}}>
                                            {exercise.sentence.replace("...", verb[exercise.pronoun])}
                                        </Typography>
                                    ))
                                }
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    );
};

type TVerbsTableView = {
    verbs: Array<IVerb>
    lectureIndex: number
}


export default VerbsTableView;