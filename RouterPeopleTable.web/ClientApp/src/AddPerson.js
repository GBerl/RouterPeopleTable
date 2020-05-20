import React from 'react'
import axios from 'axios'
import NewPersonForm from './NewPersonForm'


class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    personTextChange = e => {
        const person = this.state.person
        person[e.target.name] = e.target.value
        this.setState({person})
    }

    onAddPersonClick = async() => {
        await axios.post('api/peoplecar/addperson', this.state.person)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <NewPersonForm person={this.state.person}
                    onFirstNameChange={this.personTextChange}
                    onLastNameChange={this.personTextChange}
                    onAgeChange={this.personTextChange}
                    onAddPersonClick={this.onAddPersonClick}/>
            </div>
        )

    }
}
export default AddPerson