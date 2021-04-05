import React, {Component} from "react"
import "./style.css";
import Navbar from '../Navbar/index';
import axios from 'axios';

class PostBlog extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             id: '',
             value: ''
        }
    }
    
    onChangeHandler = e => {
        this.setState({[e.target.name] :e.target.value})
    }

    onSubmitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const {name, id, value} = this.state
        return (
            <div className="inp">
            <Navbar />
            <form onSubmit={this.onSubmitHandler}>
                <label>
                    Name: <input type="text" name="name" placeholder="name" value={name} onChange={this.onChangeHandler}/>
                </label>
                <label>
                    Id: <input type="text" name="id" placeholder="id" value={id} onChange={this.onChangeHandler}/>
                </label>
                <label>
                    Summary: <input type="text" name="value" placeholder="value" value={value} onChange={this.onChangeHandler}/>
                </label>
                <label>
                    <input type="submit" value="Submit"/>
                </label>
            </form>
            </div>
        )
    }
}

export default PostBlog