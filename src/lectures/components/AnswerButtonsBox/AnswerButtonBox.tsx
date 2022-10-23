import React, {FC} from 'react';
import Button from "@mui/material/Button";
import {Box, BoxProps} from "@mui/material";

const AnswerButtonBox: FC<TAnswerButtonBox> = (
    {
        answered,
        disableSubmit,
        next,
        skip,
        submit,
        ...restProps
    }) => {

    return (
        <Box sx={{pr: 2, pl: 2}} {...restProps}>
            {
                !answered &&
                <Button
                    onClick={submit}
                    variant="contained"
                    disabled={disableSubmit}
                    sx={{
                        mb: 2,
                        width: "100%"
                    }}
                >
                    Potwierdzać
                </Button>
            }


            {
                answered ?
                    <Button
                        onClick={next}
                        variant="contained"
                        sx={{width: "100%"}}
                    >
                        Dalej
                    </Button>
                    :
                    <Button
                        onClick={skip}
                        sx={{
                            width: "100%"
                        }}
                    >
                        Pomijać
                    </Button>
            }
        </Box>
    );
};

type TAnswerButtonBox = {
    answered: boolean
    disableSubmit: boolean
    next: () => void
    submit: () => void
    skip: () => void
} & BoxProps

export default AnswerButtonBox;