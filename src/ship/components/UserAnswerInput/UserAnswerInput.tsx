import React, {FC} from 'react';
import {Box, TextField, TextFieldProps} from "@mui/material";

const UserAnswerInput: FC<TextFieldProps> = (
    {
        ...restProps
    }) => {
    return (
        <Box sx={{p: 2}}>
            <TextField
                label={"Odpowiadać"}
                sx={{width: "100%"}}
                {...restProps}
            />
        </Box>
    );
};

type TUserAnswerInput = {

} & TextFieldProps

export default UserAnswerInput;