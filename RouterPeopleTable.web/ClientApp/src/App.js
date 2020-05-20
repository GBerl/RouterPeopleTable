import React from 'react';
import { Route } from 'react-router';
import PeopleCarTable from './PeopleCarTable'
import AddPerson from './AddPerson'
import AddCarForPerson from './AddCarForPerson'
import DeleteCars from './DeleteCars'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={PeopleCarTable} />
            <Route exact path='/addperson' component={AddPerson} />
            <Route exact path='/addcarforperson/:id' component={AddCarForPerson} />
            <Route exact path='/deletecars/:id' component={DeleteCars} />
        </div>
    )
}
export default App