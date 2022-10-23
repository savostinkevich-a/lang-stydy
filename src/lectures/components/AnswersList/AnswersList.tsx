import React, {FC} from 'react';
import {BoxProps, List, ListItem, Typography, Box} from "@mui/material";
import {green, red} from "@mui/material/colors";
import IAnswer from "../../models/IAnswer";

const AnswersList: FC<TAnswersList> = (
    {
        answers,
       ...restProps
    }) => {
    return (
        <Box {...restProps}>
            <Box
                sx={{
                    p: "1rem",
                    textAlign: "center"
                }}
            >
                <Typography
                    variant={"h6"}>{answers.filter(answer => answer.isCorrect).length} of {answers.length}</Typography>
            </Box>
            <List sx={{
                mr: 2,
                ml: 2
            }}>
                {
                    answers.map(({isCorrect, question, userAnswer, correctAnswer}, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                background: isCorrect ? green['100'] : red["100"]
                            }}
                        >
                            <Typography>{question} - {userAnswer} ({correctAnswer})</Typography>
                        </ListItem>
                    ))
                }
            </List>
        </Box>

    );
};

type TAnswersList = {
    answers: Array<IAnswer>
} & BoxProps

export default AnswersList;