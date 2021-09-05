import React, { useState } from 'react'
import { Button } from "antd"
import Nav from './Nav'
//import { toast } from 'react-toastify'
const Register = ({ history }) => {
    let initialState = {
        email: "",
        name: "",
        no: "",
        password: "",
    }

    const [values, setValues] = useState(initialState)
    const { email, name, no, password } = values


    const handleSubmit = (e) => {
        e.preventDefault()
        var namereg = /^[0-9a-zA-Z]+$/;
        var emailreg = /\S+@\S+\.\S+/
        var numreg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        var pswdreg = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
        if (name.match(namereg)) {
            if (no.match(numreg)) {
                if (email.match(emailreg)) {
                    if (password.match(pswdreg)) {
                        let cart = []
                        if (typeof window !== undefined) {
                            //get the cart from local storage
                            if (localStorage.getItem("cart")) {
                                cart = JSON.parse(localStorage.getItem("cart")) //json to js
                            }
                            //push item to cart
                            cart.push({
                                ...values
                            })
                            //save to localStorage
                            localStorage.setItem("cart", JSON.stringify(cart));   //converting js to json
                        }
                        console.log("item added")
                        //   setValues({ ...values, email: "", name: "", password: "", no: "" })
                        history.push("/")
                        return true;
                    }
                    else {
                        alert("Please enter  letter, number and special characters with Min of 8 characters & max of 16 charecters")
                    }

                }
                else {
                    alert("email validation failed")
                }

            }
            else {
                alert("please enter 10 digit num")
            }
        }
        else {
            alert('Please input alphanumeric characters only');
            return false;
        }
    }

    const handleChange = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })


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
                <div className="col-md-6">
                    <div style={{ display: "flex", justifyContent: "center" }} className="testimonial">
                        <div style={{ width: "50%", textAlign: "center" }}>
                            <h2 style={{ marginTop: 70, color: "rgb(103, 115, 107)" }}><b>Register here</b></h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input

                                        type="text"
                                        name="name"
                                        value={name}

                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="UserName" />
                                </div>
                                <div className="form-group">

                                    <input

                                        type="Number"
                                        name="no"
                                        value={no}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="MobileNo" />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Email Id" />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                        className="form-control mt-2"
                                        placeholder="Your password"
                                    />
                                </div>
                                <Button
                                    onClick={handleSubmit}
                                    block
                                    type="primary mt-4"
                                    size="large"
                                    shape="round"
                                    style={{
                                        background: "#61acb3"
                                    }}>
                                    Register
                                </Button>
                            </form>

                        </div>
                    </div>

                </div>
            </div >
        </>

    )
}

export default Register
