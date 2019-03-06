import React from "react";

function Weather({ cities, count, temp, text }) {
    const classDisplay = ""

    // if(text === "List Of Cities")
    // {
    //     classDisplay = "";
    //     //classDisplay = "displayNone";
    // }
    // else{
    //     classDisplay = "displayNone"
    // }
    return (
        <div>
           
            <div >
                {
                    <p className={classDisplay}>{text}</p>
                }
                {
                    cities.map((item, i) => (
                        item && <p> {i+1}: 
                    <span>
                        {item}
                    </span></p>))
                    
                }
                {/* {
                    temp.map((item, i) => (
                        item && <p> temp: 
                    <span>
                        {item}
                    </span></p>))
                } */}
                {
                    count && <p>Number Of Countries: 
                        <span>  {count}</span>
                    </p>
                }
            </div>
        
        </div>
    );
}

// class Weather extends React.Component{

//     render(){

//         return(

//             <div>
//                 {
//                     this.props.country && this.props.city && <p className="weather__key">Location: 
//                         <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
//                     </p> 
//                 }
                
//                 {
//                     this.props.count && <p>count: 
//                         <span>  {this.props.count}</span>
//                     </p>
//                 }
//             </div>
//         )
//     }
// }




export default Weather

