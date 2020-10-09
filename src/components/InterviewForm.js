import React, { Component } from 'react'
import axios from 'axios';

export class InterviewForm extends Component {
    state = {

            title: "",
            start_time: "",
            end_time: "",
            id: ""
    }
    componentDidMount() {
        this.setState({isloading: true})
        const temp1 = []
        const temp2 = []
        axios.get('http://localhost:3000/')
        //this.setState({id: this.props.id})
        .then(res => {
            this.setState({id: this.props.id})


            if (this.props.id !== "-1") {
                axios.get('http://localhost:3000/interviews/'+ this.state.id)
                .then(res => {
                   this.setState({title: res.title})
                   this.setState({start_time: res.data.start_time.substr(0, res.data.start_time.length - 1)})
                   this.setState({end_time: res.data.end_time.substr(0, res.data.end_time.length - 1)})
                   console.log(this.state)
                })
                console.log("hererer")
            }

            return res;
        });
    }

    onSubmit = (e) => {
        let temp = {
            "title":this.state.title,
            "start_time": this.state.start_time,
            "end_time": this.state.end_time,
        }
        console.log(this.state);
        this.props.addInterview(temp);
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit} style = {{ display: 'flex' }}>
                   <label> Title:
                     <input
                        type = "text"
                        name = "title"
                        value = {this.state.title}
                        />
                        </label>
                    <label> Start time:
                        <input
                            type = "datetime-local"
                            name = "start_time"
                            value = {this.state.start_time}
                            onChange = {this.onChange}
                        />
                    </label>
                    <label> End time:
                        <input
                            type = "datetime-local"
                            name = "end_time"
                            value = {this.state.end_time}
                            onChange = {this.onChange}
                        />
                    </label>


                    <input
                        type = "button"
                        name = "Submit"
                        value = "submit"
                        onClick = {this.onSubmit}

                    />
                </form>
            </div>
        )
    }
}

export default InterviewForm
