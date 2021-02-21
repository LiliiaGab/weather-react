import React from "react";

export default function Forecast() {
  return (
       <div className="card-group" id="forecast">
           <div className="col-2"> 
           <img src="http://openweathermap.org/img/wn/03d.png"
           alt="Cloudy"/>
           <span className="future-temperature">
               24°C
               <br/>
               16:00
           </span>
           </div> 
             <div className="col-2"> 
           <img src="http://openweathermap.org/img/wn/04d.png"
           alt="Cloudy"/>
           <span className="future-temperature">
               22°C
               <br/>
               19:00
           </span>
           </div> 
             <div className="col-2"> 
           <img src="http://openweathermap.org/img/wn/03n.png"
           alt="Cloudy"/>
           <span className="future-temperature">
               19°C
               <br/>
               22:00
           </span>
           </div> 
             <div className="col-2"> 
           <img src="http://openweathermap.org/img/wn/02n.png"
           alt="Cloudy"/>
           <span className="future-temperature">
               18°C
               <br/>
               01:00
           </span>
           </div> 
             <div className="col-2"> 
           <img src="http://openweathermap.org/img/wn/01n.png"
           alt="Clean"/>
           <span className="future-temperature">
               18°C
               <br/>
               04:00
           </span>
           </div> 
             <div className="col-2"> 
           <img src="http://openweathermap.org/img/wn/02d.png"
           alt="Cloudy"/>
           <span className="future-temperature">
               17°C
               <br/>
               07:00
           </span>
           </div> 
       </div>

       
         
      
  );
}