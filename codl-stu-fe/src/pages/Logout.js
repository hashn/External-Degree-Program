import React from "react"

class Logout extends React.Component {

    componentDidMount = () => {
        if (localStorage.getItem("token") != null) {
            localStorage.removeItem("token")
        }
        this.props.history.push("/login")
    }

    render() {
        return (
            <div class="my-5">
                <center>loging out</center>
            </div>
        )
    }
}

export default Logout