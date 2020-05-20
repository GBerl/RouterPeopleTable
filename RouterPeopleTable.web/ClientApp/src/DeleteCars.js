import React from 'react'
import axios from 'axios'
import CarRow from './CarRow'

class DeleteCars extends React.Component {
    state = {
        cars: []
    }

    getAllCars = async () => {
        const { data } = await axios.get(`api/peoplecar/getcarsbyid?id=${this.props.match.params.id}`)
        this.setState({ cars: data })
    }

    componentDidMount = async () => {
        await this.getAllCars()
    }

    deleteCarsClick = async () => {
        await axios.post(`api/peoplecar/deletecarsforid?id=${this.props.match.params.id}`)
        this.props.history.push('/')
    }
    dontDeleteClick = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='container col-md-8 col-md-offset-2' style={{ marginTop: 45 }}>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Make</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cars.map((car) => <CarRow key={car.id} car={car} />)}
                    </tbody>
                </table>
                <div className='row well' style={{ marginTop: 45 }}>
                    <div> <h4 className='col-md-8'>Are you sure you want to delete these cars?</h4>
                        <button className="btn btn-success col-md-1" onClick={this.deleteCarsClick}>Yes</button>
                        <button className="btn btn-danger col-md-1" onClick={this.dontDeleteClick} >No</button>
                    </div>
                </div>
            </div>)
    }
}

export default DeleteCars
