import React, { Component } from 'react'
import InterviewForm from './InterviewForm.js'
import { Redirect} from 'react-router-dom'
import axios from 'axios';


export class NewInterview extends Component {
    state = {
        id: "-1",
        isadded: false
    }
    addInterview = (temp) => {
        axios.post('http://localhost:3000/interviews', {
            title:temp.title,
            start_time: temp.start_time,
            end_time: temp.end_time
        })
        .then(res => {
            this.setState({isadded: true})
        })
    }
    render() {
        if (this.state.isadded === true) {
            return <Redirect to = "/"></Redirect>
        }
        return (
            <div>
                <h2>Create new Interview</h2>
                <InterviewForm addInterview = {this.addInterview}
                    id = {this.state.id}
                />
            </div>
        )
    }
}

export default NewInterview
