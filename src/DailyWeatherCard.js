import React, { Component } from 'react'
import './DailyWeatherCard.css';

class DailyWeatherCard extends Component {
    constructor(props) {
        super(props)
        this.resolveImageForWeatherType = this.resolveImageForWeatherType.bind(this)
    }


    resolveImageForWeatherType(weatherType) {
        switch (weatherType) {
            case 'sunny': return 'https://cdn.pixabay.com/photo/2013/07/13/12/12/cloud-159393_960_720.png'
            case 'rainy': return 'https://cdn.pixabay.com/photo/2016/03/18/15/09/light-rain-1265212_960_720.png'
            case 'cloudy': return 'https://cdn.pixabay.com/photo/2012/04/18/13/21/clouds-37009_960_720.png'
            case 'snowy': return 'https://cdn.pixabay.com/photo/2012/04/18/13/23/cloudy-37012_960_720.png'
            default: return 'https://cdn.pixabay.com/photo/2013/07/13/12/12/cloud-159393_960_720.png'
        }
    }

    render() {
        const { day, weatherType, tempHigh, tempLow } = this.props
        const imageForWeatherType = this.resolveImageForWeatherType(weatherType)
        return (
            <div className='cardContainer'>
                <div className='day'>{day}</div>
                <img className='image' src={imageForWeatherType}></img>
                <div className='tempValues'>
                    <span>{tempHigh}°C </span>
                    <span> {tempLow}°C</span>
                </div>
            </div>
        );
    }
}

export default DailyWeatherCard;
