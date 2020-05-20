import React from 'react'

function CarRow(props) {
    const { model,make,year} = props.car

    return (
        <tr>
            <td>{model}</td>
            <td>{make}</td>
            <td>{year}</td>
        </tr>
    )
}

export default CarRow