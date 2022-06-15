import { Button, Box, TextField, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getData } from "../service/api";
import Information from "./Information";

const useStyles = makeStyles({

    component: {
        padding: 10,
        background: '#87CEEB'
    },

    input: {
        color: '#fff',
        marginRight: 10
    },
    button: {
        height: 50,
        width: 130,
        background: '#00BFFF',
        color: '#FFF',
        marginTop: 10,
        marginLeft: 10
    }

})

const Form = () => {
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city, setCity]= useState('');
    const [country, setCountry]= useState('');
    const [click,handleClick] = useState(false);
    useEffect(() => {
        const getWeather = async () =>{
       city && await getData(city,country).then(response => {
            getWeatherData(response.data);
            console.log(response.data)
        })
    };
    getWeather();
    handleClick(false);
    }, [click]);


    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) =>{
        setCountry(value);
    }
    return (
        <>
            <Box className={classes.component}>
                <TextField
                    inputProps={{ className: classes.input }}
                    onChange={(e) => handleCityChange(e.target.value)}
                    label="City"
                    className={classes.input}
                />
                <TextField
                    label="Country"
                    onChange={(e) => handleCountryChange(e.target.value)}
                    inputProps={{ className: classes.input }}
                    className={classes.input}
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={()=> handleClick(true)}
                >Weather Check
                </Button>
            </Box>
            <Information data={data} />
        </>
    );
}

export default Form;