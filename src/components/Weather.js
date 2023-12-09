import React from 'react';

const Weather = () => {

    const data = { temperature: 25, conditions: "Sunny" }
    return (
        <div className='weather-container'>
            {(data.temperature > 20 && (
                <div>
                    <p style={{ color: 'red' }}>
                        Current Temp : {data.temperature}
                    </p>
                    <p style={{ color: 'red' }}>
                    Current Condition : {data.conditions}
                    </p>
                </div>
                
            ))
            || (
                <div>
                    <p style={{ color: 'blue' }}>
                        Current Temp : {data.temperature}
                    </p>
                    <p style={{ color: 'blue' }}>
                    Current Condition : {data.conditions}
                    </p>
                </div>
            )
            }
        </div>
    )
}


export default Weather;