import React, {FC} from 'react';
import {Box, BoxProps, Card, Typography} from "@mui/material";
import {green, red} from "@mui/material/colors";

const WordBox: FC<TWordBox> = (
    {
        answered,
        askedWordCaption,
        correct,
        askedWord,
        rightAnswer,
        showAnswer,
        ...restProps
    }) => {

    const renderBackground = () => {
        if (answered && correct) {
            return green["200"]
        }

        if (answered && !correct) {
            return red["200"]
        }

        return "white"
    }

    return (
        <Box sx={{width: "100%", mb: 2, pt: 2}} {...restProps}>
            <Card
                sx={{
                    mr: 2,
                    ml: 2,
                    p: 2,
                    textAlign: "center",
                    minHeight: 150,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: renderBackground()
                }}
            >
                <Typography variant={"h5"}>{askedWord}</Typography>
                {askedWordCaption && <Typography variant={"subtitle2"}>{askedWordCaption}</Typography>}
                {showAnswer && <Typography variant={"caption"}>{rightAnswer}</Typography>}
            </Card>
        </Box>
    );
};

type TWordBox = {
    answered: boolean,
    correct: boolean,
    askedWord: string,
    askedWordCaption?: string
    rightAnswer: string,
    showAnswer: boolean
} & BoxProps

export default WordBox;