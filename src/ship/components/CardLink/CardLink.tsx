import React, {FC} from 'react';
import {Card, CardContent, CardProps} from "@mui/material";

const CardLink: FC<TCardLink> = (
    {
        style,
        children,
        ...restProps
    }): JSX.Element => {
    return (
        <Card
            style={{
                width: "100%",
                ...style
            }}
            {...restProps}
        >
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
};

export default CardLink;

type TCardLink = {

} & CardProps