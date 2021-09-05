import React, { useState, useEffect } from 'react'
import { Button, Checkbox } from "antd"
import { Link } from "react-router-dom"
import Nav from './Nav'
//import { toast } from 'react-toastify'
const Login = ({ history }) => {
    const [email, setEmail] = useState("srreeja@gmail.com")
    const [password, setpassword] = useState("1234")
    const [cart, setCart] = useState([])
    useEffect(() => {

        if (typeof window !== undefined) {
            //get the cart from local storage
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart"))) //json to js

            }
        }

    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push("/")

    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <Nav />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" alt="oops" />
                </div>
                <div className="col-md-6 ">
                    <div style={{ display: "flex", justifyContent: "center" }} className="testimonial">
                        <div style={{ width: "50%", textAlign: "center" }}>
                            <h3 style={{ marginTop: 70, color: "rgb(103, 115, 107)" }}><b>Welcome back</b></h3>
                            <p style={{ color: "rgb(103, 115, 107)" }}>Please login to your account</p>
                            <form>
                                <div className="form-group" onSubmit={handleSubmit}>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Id"
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        placeholder="Your password"
                                        onChange={e => setpassword(e.target.value)} />
                                </div>
                                <span>
                                    <input type="checkbox" className="mr-1" />
                                    Remember me
                                    <a className="float-right">Forgot password</a>

                                </span>

                                <Button
                                    block
                                    type="primary mt-4"
                                    size="large"
                                    shape="round"
                                    style={{
                                        background: "#61acb3"
                                    }}
                                >
                                    Login
                                </Button>
                            </form>

                        </div>


                    </div>
                    <p style={{ textAlign: "center" }} className="float-bottom">Terms of use privacy policy</p>


                </div>

            </div >
        </>

    )
}

export default Login
