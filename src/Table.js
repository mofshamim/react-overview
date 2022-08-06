import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Sl</th>
                <th scope="col">Name</th>
                <th scope="col">Profession</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Ali Akbar</td>
                <td>Accountant</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Solaiman Shakil</td>
                <td>Software Enginerr</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sakib al Hasan</td>
                <td>Cricketer</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table class="table">
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table