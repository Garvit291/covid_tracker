import React from 'react';

import { Card , CardContent , Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';  // use multiple class name at one object

import styles from './Cards.module.css';
const Cards = ({data:{confirmed,deaths,recovered,lastUpdate} , country} ) => {
    if(!confirmed){
        return 'Loading!!'  // if the data is not fetched
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">   
                <Grid  item component={Card}  xs={12} md={3} className={cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography  gutterBottom>INFECTED</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0}end={confirmed.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography className={styles.date}>{new Date(lastUpdate).toDateString()}</Typography>
                        {country?
                        <Typography className={styles.heading} variant="body2">Number of Active Cases of Covid-19 in {country} </Typography>:
                        <Typography variant="body2">Number of Active Cases of Covid-19 Globally </Typography>
                        }
                        
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography  gutterBottom>RECOVERED</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0}end={recovered.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography  className={styles.date} >{new Date(lastUpdate).toDateString()}</Typography>
                        {country?
                        <Typography className={styles.heading} variant="body2">Number of Recovered Patients of Covid-19 in {country} </Typography>:
                        <Typography variant="body2">Number of Recovered Patients of Covid-19 Globally </Typography>
                        }
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom>DEATHS</Typography>
                        <Typography variant='h4'>
                            <CountUp start={0}end={deaths.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography className={styles.date} >{new Date(lastUpdate).toDateString()}</Typography>
                        {country?
                        <Typography className={styles.heading} variant="body2">Number of Deaths due to Covid-19 in {country} </Typography>:
                        <Typography variant="body2">Number of Deaths due to Covid-19 Globally</Typography>
                        }
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
} 

export default Cards;