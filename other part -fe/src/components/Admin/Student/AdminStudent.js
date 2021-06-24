import React, { Component } from 'react'
import Sidebar from '../Sidebar'

export class AdminStudent extends Component {
    render() {
        return (
            <div class="wrapper_1">
                <div>
                    <Sidebar/>
                </div>
                <div>
                    <h1>This is Student Management Page</h1>
                </div>
            </div>
        )
    }
}

export default AdminStudent
