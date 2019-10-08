import React from 'react'
import Axios from 'axios'

export default class getSingleUser extends React.Component {
    state = {
        user: {}
    }

    getSingleUser = () =>
    Axios.get(`/api/user/${this.props.match.params.id}/`)
    .then(res => {
        this.setState({user: res.data})
    })

    componentDidMount() {
        this.getSingleUser();
    }
    
    render() {
        return (
            <div>
               <p>{this.state.user.id} <br/>{this.state.user.userName} <br/> {this.state.user.email} <br/> {this.state.user.picture}</p> 
            </div>
        )
    }
}