import {Box, Typography, makeStyles} from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloudIcon from '@mui/icons-material/Cloud';
const useStyles = makeStyles({
    component: {
        margin: 50
    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2
    },
    value:{
        color: '#fff'
    },
    // icon: {
    //     marginRight: 15,
    //     color: 'red'
    // }
})

const Information = ({ data }) => {
    const classes = useStyles()
    return (
        data?
        <Box className={classes.component}>
           
            <Typography className ={classes.row}><LocationOnIcon className={classes.icon} /> Location : <Box className={classes.value} component="span">  {data.name}, {data.sys.country} </Box></Typography>
            <Typography className ={classes.row}><DeviceThermostatIcon className={classes.icon}/> Temperature : <Box className={classes.value} component="span">{data.main.temp}°C</Box></Typography>
            <Typography className ={classes.row}><OpacityIcon className={classes.icon}/> Humidity :  <Box className={classes.value} component="span">{data.main.humidity}%</Box></Typography>
            <Typography className ={classes.row}><WbSunnyIcon className={classes.icon}/> Sun-Rise :  <Box className={classes.value} component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
            <Typography className ={classes.row}><Brightness4Icon className={classes.icon}/> Sun-Set :  <Box className={classes.value} component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
            <Typography className ={classes.row}><QuestionMarkIcon className={classes.icon}/> Condition : <Box className={classes.value} component="span">{data.weather[0].main}</Box></Typography>
            <Typography className ={classes.row}><CloudIcon className={classes.icon} /> Clouds : <Box className={classes.value} component="span">{data.clouds.all}%</Box></Typography>

        </Box> :''
    )
}

export default Information;