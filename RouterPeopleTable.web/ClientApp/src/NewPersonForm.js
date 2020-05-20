import React from 'react'


function NewPersonForm(props) {
    const { firstName, lastName, age } = props.person
    const { onFirstNameChange, onLastNameChange, onAgeChange, onAddPersonClick } = props
    return (
        <div>
            <div className="col-md-4 col-md-offset-4 well" style={{ marginTop: 45 }}>
                <h1>New Person</h1>
                <input type="text" className="form-control" placeholder="First Name" onChange={onFirstNameChange} name='firstName' value={firstName} style={{ marginTop: 25 }} />
                <input type="text" className="form-control" placeholder="Last Name" onChange={onLastNameChange} name='lastName' value={lastName} style={{ marginTop: 25 }} />
                <input type="text" className="form-control" placeholder="Age" onChange={onAgeChange} name='age' value={age} style={{ marginTop: 25 }} />
                <button className="btn btn-success btn-block" onClick={onAddPersonClick} style={{ marginTop: 25 }}>Submit</button>
            </div>
        </div>
    )
}
export default NewPersonForm