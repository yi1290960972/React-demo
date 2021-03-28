import React, { Component } from 'react'
import './weather.css'
import leftArrow from '../../Resources/leftArrow.png'
import rightArrow from '../../Resources/rightArrow.png'
import refresh from '../../Resources/refresh.png'
import rain from '../../Resources/rain.png'
import sunny from '../../Resources/sunny.png'
import thunderStorm from '../../Resources/thunderStorm.png'

export default class City extends Component {
    constructor(props){
        super(props)
        this.state={
            index:0,
            weather:[
                {city:'Sydney',current:'19°',min:'16°',max:'22°',weather:rain,state:false,weatherName:'Rain'},
                {city:'Melburne',current:'19°',min:'7°',max:'19°',weather:sunny,state:false,weatherName:'Sunny'},
                {city:'Brisbane',current:'25°',min:'18°',max:'29°',weather:thunderStorm,state:false,weatherName:'Thunderstorm'}
            ]
        }
        
    }
    handleRefresh(){
        var weather = this.state.weather
        weather[this.state.index].state = true
        this.setState({
            weather
        })
    }
    handleLeft(){
        var index = this.state.index--
        if(this.state.index==-1){
            this.setState({
                index:2
            })
        }else{
            var index = this.state.index
            this.setState({
                index
            })
        }
    }
    handleRight(){
        var index = this.state.index++;
        if(this.state.index==3){
            this.setState({
                index:0
            })
        }else{
            var index = this.state.index
            this.setState({
                index
            })
        }
    }
    render() {
        var img;
        let obj = this.state.weather[this.state.index]
        if(obj.state==false){
           img =( <img  className="refresh" src={refresh} alt="" onClick={this.handleRefresh.bind(this)}></img> ) 
       }else{
          img = ( 
                    <div className="box">
                        <img className="refresh" src={this.state.weather[this.state.index].weather}></img>
                        <div className="current">{obj.current}</div>
                        <span className="min">{obj.min}</span>
                        <span>{obj.max}</span>
                        <div className="weatherName">{obj.weatherName}</div>
                    </div>
                )
        }
        return (
            <div className="content">
                <div className="cityName">{this.state.weather[this.state.index].city}</div>
                <div className="info">
                    <img className="left" src={leftArrow} alt="" onClick={this.handleLeft.bind(this)}></img>
                    {img}
                    <img className="right" src={rightArrow} alt="" onClick={this.handleRight.bind(this)}></img>
                </div>
            </div>
        )
    }
}
