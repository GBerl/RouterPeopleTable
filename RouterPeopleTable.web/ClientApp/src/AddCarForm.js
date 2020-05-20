import React from 'react'

function AddCarForm(props) {
    const { firstName, lastName } = props.person
    const { make, model, year } = props.car
    const { onMakeChange, onModelChange, onYearChange, onAddCarClick } = props

    return (
        <div className="col-md-4 col-md-offset-4 well">
            <h1>Add a car for {firstName} {lastName}</h1>
                <input type="text" className="form-control" placeholder="Model" onChange={onModelChange} name='model' value={model} style={{ marginTop: 25 }} />
                <input type="text" className="form-control" placeholder="Make" onChange={onMakeChange} name='make' value={make} style={{ marginTop: 25 }} />
                <input type="text" className="form-control" placeholder="Year" onChange={onYearChange} name='year' value={year} style={{ marginTop: 25 }} />
            <button className="btn btn-success btn-block" onClick={onAddCarClick} style={{ marginTop: 25 }}>Submit</button>
        </div>
    )
}
export default AddCarForm