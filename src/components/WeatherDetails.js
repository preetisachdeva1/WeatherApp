import React, { Component } from 'react';
import { Col } from 'reactstrap';


class WeatherDetails extends Component {
	getIcon(des, timeHour) {
		let icon = ''
		if(des.includes('clear sky') && (timeHour>=6 && timeHour<=18)) {
			icon = 'day'
		} else if(des.includes('clouds') && (timeHour>=6 && timeHour<=18)){
			icon = 'cloudyday'
		} else if(des.includes('clear sky') && ((timeHour>=0 && timeHour<=6) || (timeHour>=21))) {
			icon = 'moon'
		} else if(des.includes('clouds') && ((timeHour>=0 && timeHour<=6) || (timeHour>=21))) {
			icon = 'cloudymoon'
		} else if(des.includes('rain')) {
			icon = 'rain'
		}
		return icon
	}
	render() {
		let { minTemp, maxTemp, humidity, description, date, timeHour } = this.props;
		let icon = this.getIcon(description, timeHour);
		console.log("props", this.props);
		return (
			    <Col lg={2} className="weather-card">
			    	<div className="date">{date}</div>
			    	<div className="weather-icon"><span className={icon}></span></div>
					<div className="temprature"><span className="max-temprature">{maxTemp}<sup>o</sup> / </span><span className="min-temprature">{minTemp}<sup>o</sup></span></div>
					<div className="humidity">humidity : {humidity}</div>
					<div className="description">Weather : {description}</div>
				</Col>
		)
	}
}

export default WeatherDetails;