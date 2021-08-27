// 💪 Exercise: (5-10 minutes)
// Create the Villagers component
// Step 1. Create the component
// Step 2. fetch() the data from https://acnhapi.com/v1a/villagers
// Step 3. Add that data to the Villager component's state
    // Important! Note the shape of the response's data - 
    // It's an object rather than an array
// Step 4. render() that data into the page
// Step 5. Add the Villagers component to App.js

import React from 'react'

class Villagers extends React.Component {
    state = {
        villagers: []
    }

    componentDidMount() {
        const url = 'https://acnhapi.com/v1a/villagers'
        fetch(url)
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                this.setState({
                    villagers: json
                })
            })
    }

    renderVillagers() {
        return this.state.villagers.map((villager, idx) => {
            console.log(villager)
            return (
                <div key={idx}>
                    {/* dot notation vs */}
                    {/* square bracket notation */}
                    <h3>{ villager.name["name-USen"] }</h3>
                    <img src={ villager.image_uri }></img>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Animal Crossing Animals!</h2>
                <div>
                    { this.renderVillagers() }
                </div>
            </div>
        )
    }
}

export default Villagers