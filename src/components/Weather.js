import React from 'react';

const Weather = () => {

    const data = { temperature: 25, conditions: "Sunny" }
    return (
        <div className='weather-container'>
            {(data.temperature > 20 && (
                <p style={{ color: 'red' }}>
                Temperature : {data.temperature} 
                <span> Current Condition : {data.conditions}</span>
                </p>
                
            ))
            || (
                    <p style={{ color: 'blue' }}>
                    Temperature : {data.temperature}
                    <span> Current Condition : {data.conditions}</span>
                    </p>
            )
            }
        </div>
    )
}


export default Weather;