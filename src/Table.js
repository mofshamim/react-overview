import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Sl</th>
                <th scope="col">Product Name</th>
                <th scope="col">Cost Price</th>
                <th scope="col">Sales Price</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Shirt</td>
                <td>750</td>
                <td>1000</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>T-Shirt</td>
                <td>460</td>
                <td>590</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Panjabi</td>
                <td>1050</td>
                <td>1400</td>
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