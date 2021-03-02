import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import Card from '../../components/Card/index.js';
import Footer from '../../components/Footer/index.js';
import Label from '../../components/Label/index.js'

const Home=() => {
    let admins = require('../../data/data.json');
    return(
        <div className="Home">
            <div className="main">
                <h1>The Blog</h1>
                <h2>My best business trips & resources</h2>
                <h3>Take a look around!</h3>
            </div>
            <div className="cardContainer">
                <Card  
                    info =
                    {
                        {
                            "names":admins[0].name,
                            "imgUrl":admins[0].URL,
                            "title":admins[0].heading,
                            "paragh":admins[0].value
                        }
                        
                    }
                />
                <Card
                info =
                {
                    {
                        "names":admins[1].name,
                        "imgUrl":admins[1].URL,
                        "title":admins[1].heading,
                        "paragh":admins[1].value
                    }
                    
                }
                />
                <Card  
                    info =
                    {
                        {
                            "names":admins[2].name,
                            "imgUrl":admins[2].URL,
                            "title":admins[2].heading,
                            "paragh":admins[2].value
                        }
                        
                    }
                />
                <Card
                    info =
                    {
                        {
                            "names":admins[3].name,
                            "imgUrl":admins[3].URL,
                            "title":admins[3].heading,
                            "paragh":admins[3].value
                        }
                        
                    }
                />
                < Label />
                < Footer />
        </div>
        </div>
    )
}

export default Home