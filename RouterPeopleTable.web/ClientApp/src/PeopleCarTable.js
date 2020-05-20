import React from 'react'
import axios from 'axios'
import PersonCarRow from './PersonCarRow'
import { Link } from 'react-router-dom'

class PeopleCarTable extends React.Component {

    state = {
        people:[]
    }

    componentDidMount = () => {
      this.getPeopleWithCars()
    }

    getPeopleWithCars = async () => {
        const { data } = await axios.get('api/peoplecar/getpeoplewithcars')
        this.setState({ people: data })
    }

    render() {
        return (
            <div>
                <div className='container col-md-8 col-md-offset-2'style={{ marginTop: 45 }}>
                    <Link to={`/addperson`}><button className="btn btn-primary btn-block">Add Person</button></Link>
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Number of Cars</th>
                                <th>Add Car</th>
                                <th>Delete Cars</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((person) => <PersonCarRow key={person.id} person={person} />)}  
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default PeopleCarTable