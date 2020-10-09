import React, { Component } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';
export class ShowInterview extends Component {
    state = {
        interview: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/interviews/'+this.props.match.params.id)
        .then(res => {
            this.setState({ interview: res.data})
        }
        )
    }
    render() {
        return (
            <div>
            <h3>Title : {this.state.interview.title}</h3>
            <h3>Start Time : {this.state.interview.start_time}</h3>
            <h3>End Time : {this.state.interview.end_time}</h3>

            </div>
        )
    }
}

export default ShowInterview
