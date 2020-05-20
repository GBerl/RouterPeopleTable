import React from 'react'
import { Link } from 'react-router-dom'

function PersonCarRow(props){
    const { id, firstName, lastName, age, cars } = props.person

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{cars.length}</td>
            <td>
               <Link to={`/addcarforperson/${id}`}><button className="btn btn-primary">Add a Car</button></Link>
            </td>
            <td>
                <Link to={`/deletecars/${id}`}><button className="btn btn-danger">Delete Cars</button></Link>
            </td>
        </tr>
        )
}

export default PersonCarRow