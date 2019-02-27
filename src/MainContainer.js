import React, { Component } from 'react';
import './MainContainer.css';
import DailyWeatherCard from './DailyWeatherCard'

const mockTab = [
    {
        day: 'Monday',
        weatherType: 'sunny',
        tempHigh: '25',
        tempLow: '14'
    },
    {
        day: 'Tuesday',
        weatherType: 'sunny',
        tempHigh: '23',
        tempLow: '12'
    },
    {
        day: 'Wednesday',
        weatherType: 'rainy',
        tempHigh: '17',
        tempLow: '10'
    },
    {
        day: 'Thursday',
        weatherType: 'cloudy',
        tempHigh: '16',
        tempLow: '11'
    },
    {
        day: 'Friday',
        weatherType: 'sunny',
        tempHigh: '22',
        tempLow: '15'
    }
];

class MainContainer extends Component {
    render() {
        return (
            <>
                {mockTab.map((mockedObject, i) => {
                    return <DailyWeatherCard day={mockedObject.day} weatherType={mockedObject.weatherType} tempHigh={mockedObject.tempHigh} tempLow={mockedObject.tempLow} key={i}></DailyWeatherCard>
                })}
            </>
        );
    }
}

export default MainContainer;
