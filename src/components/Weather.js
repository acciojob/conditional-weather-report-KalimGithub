import React from 'react';

const Weather = () => {

    const data = { temperature: 18, conditions: "Sunny" }
    return (
        <div className='weather-container'>
            {(data.temperature > 20 && (
                <p style={{color: 'red'}}>
                    Current Temp : {data.temperature}, Current Condition : {data.conditions}
                </p>
            ))
            || (
                <p style={{color:"blue"}}>
                    Current Temp : {data.temperature}, Current Condition : {data.conditions}
                </p>
            )
            }
        </div>
    )
}


export default Weather;