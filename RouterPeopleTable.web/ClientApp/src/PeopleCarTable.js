import React from 'react'
import axios from 'axios'
import PersonCarRow from './PersonCarRow'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

class PeopleCarTable extends React.Component {

    state = {
        people: [],
        searchText: ''
    }

    componentDidMount = () => {
      this.getPeopleWithCars()
    }

    getPeopleWithCars = async () => {
        const { data } = await axios.get('api/peoplecar/getpeoplewithcars')
        this.setState({ people: data })
    }

    onSearchTextChange = e => {
        this.setState({ searchText: e.target.value.toLowerCase()})
    }

    clearSearchClick = () => {
        this.setState({ searchText: '' })
    }
    render() {
        return (
            <div>
                <SearchBox searchText={this.state.searchText}
                    onSearchTextChange={this.onSearchTextChange}
                    clearSearchClick={this.clearSearchClick}/>
                <div className='container col-md-8 col-md-offset-2'>
                    <Link to={`/addperson`}><button className="btn btn-primary btn-block">Add Person</button></Link>
                    <table className="table table-bordered table-striped table-hover" style={{ marginTop: 45 }}>
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
                            {this.state.people.filter(p => (p.firstName.concat(p.lastName).toLowerCase()).includes(this.state.searchText)).map((person) => <PersonCarRow key={person.id} person={person} />)}  
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}
export default PeopleCarTable