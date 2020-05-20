import React from 'react'
import axios from 'axios'
import AddCarForm from './AddCarForm'


class AddCarForPerson extends React.Component {
    state = {
        person: {
                id: '',
                firstName: '',
                lastName: '',
                age: ''
            },
        car: {
            make: '',
            model: '',
            year: ''
        }
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`api/peoplecar/getpersonbyid?id=${this.props.match.params.id}`)
        this.setState({ person: data })
    }

    personTextChange = e => {
        const car = this.state.car
        car[e.target.name] = e.target.value
        this.setState({ car })
    }

    onAddCarClick = async () => {
        await axios.post('api/peoplecar/addcar', { ... this.state.car, personId:this.state.person.id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <AddCarForm person={this.state.person}
                    car={this.state.car}
                    onMakeChange={this.personTextChange}
                    onModelChange={this.personTextChange}
                    onYearChange={this.personTextChange}
                    onAddCarClick={this.onAddCarClick} />
            </div>
        )

    }
}
export default AddCarForPerson