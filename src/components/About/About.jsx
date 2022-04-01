import React from 'react'
import MediaCard from './Card/Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px",

    },
    paper: {
        height: 200,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <section className="card card-second">
            <Grid container
                justifyContent='space-around'
                className={classes.root}>
                <Grid className="card-shadow" item xs={3}>
                    <MediaCard url={"https://builder-broadcast.s3.ap-south-1.amazonaws.com/1648809171461.jpg"} />
                </Grid>
                <Grid className="card-shadow" item xs={3}>
                    <MediaCard url={"https://builder-broadcast.s3.ap-south-1.amazonaws.com/1648809171459.jpg"} />
                </Grid>
                <Grid className="card-shadow" item xs={3}>
                    <MediaCard url={"https://builder-broadcast.s3.ap-south-1.amazonaws.com/1648809171461.jpg"} />
                </Grid>

            </Grid>
        </section>

    )
}
