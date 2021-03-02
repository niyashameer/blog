import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Navbar from '../Navbar/index';

let admins = require('../../data/data.json');

const PostBlog = () => {

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method  :   'POST',
        })
            .then(response => console.log(FormData.entries()))
            .catch(error => console.log(error))
    
      }
        
        return (
            <div className="inp">
                <Navbar />
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: <input type="text" name="name"/> 
                    </label>
                    <label>
                        Title: <input type="text" name="heading"/>
                    </label>
                    <label>
                        Summary: <input type="text" name="value"/>
                    </label>
                    <label>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }

      

export default PostBlog