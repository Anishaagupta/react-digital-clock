import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

var greeting = ""
var currDate = new Date(2020, 6, 13,21)
currDate = currDate.getHours()
const cssStyle = { }

var msg = ()=> {
  if(currDate >=1 && currDate < 12){
      greeting = "Good Morning" 
      cssStyle.color = "Green"   
    
  }else if( currDate >=12 && currDate <= 17){
      greeting = "Good Afternoon"
      cssStyle.color = "Orange"
  }else {
      greeting = " Good Evening"
      cssStyle.color = "Black"
  }

}
msg()
//challenge code with main.css
ReactDOM.render(
  <>
    <div className="back">
      <h1>Hello Friends, <span style = {cssStyle}> {greeting}</span></h1>
    </div>   
  </>,
  document.getElementById("root")
    
)