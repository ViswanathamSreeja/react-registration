import React from 'react'
import { useEffect, useState } from 'react'
import Nav from './Nav'
const List = () => {
    const [cart, setCart] = useState([])
    let i = 0
    useEffect(() => {

        if (typeof window !== undefined) {
            //get the cart from local storage
            if (localStorage.getItem("cart")) {
                setCart(JSON.parse(localStorage.getItem("cart"))) //json to js

            }
        }

    }, [])


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
                            <h2 style={{ marginTop: 70, color: "rgb(103, 115, 107)" }}><b>Registered users</b></h2>
                            <div className="row">
                                <div className="container-fluid p-5">
                                    <div className="col text-center">
                                        <h5 style={{ color: "rgb(103, 115, 107)" }}>
                                            {cart.length > 0 ? "All Email Ids" : "oops no registered users"}
                                        </h5>
                                        {
                                            cart.map((c, i) => (
                                                <div key={i++}>

                                                    {c.email}
                                                </div>
                                            ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
