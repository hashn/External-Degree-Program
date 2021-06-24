import React, { Component } from 'react'
import Sidebar from '../Sidebar'

export class Admin extends Component {
    render() {
        return (
            <div class="row wrapper_1">
                <div className="col">
                    <Sidebar/>
                </div>
                <div className="col">
                   <h1>This is Admin Management Page</h1>
                </div>
            </div>
        )
    }
}

export default Admin
