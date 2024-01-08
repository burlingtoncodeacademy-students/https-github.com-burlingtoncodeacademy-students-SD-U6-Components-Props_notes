import React from 'react'

function AboutMe() {

    const city = 'New York City';
    const state = "New York";

    let style = {
        ul: {
            textAlign: 'left',
            color: 'green'
        },
        p: {
            fontSize: '20pt'
        },
    }

    return (
        <div>
            <p style={style.p}>{city}, {state}</p>
            <ul style={style.ul}>
                <li>Grocery Store</li>
                <li>Gas Station</li>
                <li>Out to Eat</li>
            </ul>
        </div>
    )
}

export default AboutMe