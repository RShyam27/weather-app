import React from "react";
class Weather extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.city && this.props.country && <p className="weather__key">Location: <span className="weather__value">{this.props.city} , {this.props.country}</span></p> }
                {this.props.tempraure && <p className="weather__key">Temprature: <span className="weather__value">{this.props.tempraure}</span></p>}
                {this.props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{this.props.humidity}</span></p>}
                {this.props.description && <p className="weather__key">Condtions:<span className="weather__value">{this.props.description}</span> </p>}
            </div>
        )
    }
}
export default Weather;