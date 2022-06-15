import {Box, makeStyles} from '@material-ui/core';

import logo from '../images/weather_img.jpg';
import Form from './Form';


const useStyles = makeStyles({
    component:{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        margin: '0 auto'
    },
    leftContainer: {
        backgroundImage: `url(${logo})`,
        height: '80%',
        width: '30%',
        backgroundSize:'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        background: 'lightblue',
        height: '80%',
        width: '95%'
    }
})

const Weather = () => {
    const classes= useStyles();
    return(
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Weather;