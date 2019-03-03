import React from "react";

function Weather({ cities }) {
    return (
        <div >
            {
                cities.map(item => (
                <div>
                    <h4>{item}</h4>
                </div>))
            }
        </div>
    );
}



export default Weather

