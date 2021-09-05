import React from 'react'
import Nav from './Nav'
const Home = () => {
    return (
        <div>
            <Nav />
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-4">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80" alt="oops" />
                </div>
            </div>
        </div>
    )
}

export default Home
