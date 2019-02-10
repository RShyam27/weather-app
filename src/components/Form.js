import React from "react";
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="your city.." />
                <input type="text" name="country" placeholder="your country.." />
                <button>Get Weather</button>
            </form>
        );
    }
}
export default Form;