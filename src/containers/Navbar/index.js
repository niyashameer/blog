import React,{useEffect} from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../PostBlog/index"

const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

        const handleScroll=() => {
            const offset=window.scrollY;
            if(offset > 200 ){
            setScrolled(true);
            }
            else{
            setScrolled(false);
            }
        }

        useEffect(() => {
            window.addEventListener('scroll',handleScroll)
        })
        let navbarClasses=['header'];
        if(scrolled){
            navbarClasses.push('scrolled');
        }


    return (
        <header className={navbarClasses.join(" ")}>
            <div class="headerOne">
            <a href="#">Home</a>
            </div>
                {/* <Nav class="headerMenu" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="../containers/PostBlog/index.js">Post Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.button>
                        BOOK A CALL
                    </Nav.button>
                </Nav> */}
            <nav class="headerMenu">
                <a href="./">About</a>
                <a href="./PostBlog">Post Blog</a> {/* This the only anchor tag that has a link for this project*/}
                <a href="#">Contact</a>
                <button><a href="#">BOOK A CALL</a></button>
            </nav>
        </header>
    )
}

export default Navbar;