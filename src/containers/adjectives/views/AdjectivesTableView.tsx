import React, {FC} from 'react';
import IAdjective from "../models/IAdjective";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Table,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AdjectivesTableView: FC<TAdjectivesTableView> = (
    {
        adjectives
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
                adjectives.map((adjectives, index) => (
                    <Accordion
                        key={index}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{adjectives.masculine.pl}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                sx={{
                                    mb: 1
                                }}
                            >
                                <Box sx={{mb: 2}}>
                                    <Typography variant={"h4"} color={"#1976d2"}>{adjectives.masculine.pl}</Typography>
                                    <Typography variant={"subtitle2"}
                                                color={"#1976d2"}>{adjectives.masculine.ru}</Typography>
                                </Box>
                                <Table>
                                    <TableRow>
                                        <TableCell>RODZAJ MĘSKI</TableCell>
                                        <TableCell>{adjectives.masculine.pl}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>RODZAJ ŻEŃSKI</TableCell>
                                        <TableCell>{adjectives.feminine.pl}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>RODZAJ NIJAKI</TableCell>
                                        <TableCell>{adjectives.neuter.pl}</TableCell>
                                    </TableRow>
                                    {
                                        adjectives.plural
                                        &&
                                        <TableRow>
                                            <TableCell>RODZAJ MĘSKOOSOBOWY</TableCell>
                                            <TableCell>{adjectives.plural.pl}</TableCell>
                                        </TableRow>
                                    }

                                </Table>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    );
};

type TAdjectivesTableView = {
    adjectives: Array<IAdjective>
}

export default AdjectivesTableView;