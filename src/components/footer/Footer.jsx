import React from 'react'

function Footer() {

    const currentYear = new Date().getFull

    return (
        <h6>
            Copyright {currentYear} &copy;
        </h6>
    )
}

export default Footer