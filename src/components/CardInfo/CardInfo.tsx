import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";

interface StarshipDetailType {
    row1: string
    row2: string
    row3: string
    row4: string
}

export const CardInfo: React.FC<StarshipDetailType> = (props) => {
    const {row1, row2, row3, row4} = props;
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {row1}
                </Typography>
                <Typography color="textSecondary" component="h2">
                    {row2}
                </Typography>
                <Typography color="textSecondary">
                    {row3}
                </Typography>
                <Typography variant="body1" component="p">
                    {row4}
                </Typography>
            </CardContent>
        </Card>
    );
}