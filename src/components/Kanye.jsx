import React from 'react'

// 💪 Exercise (2 min)
// 1. Add that kanye quote to state
// 2. Display the quote on the page


class Kanye extends React.Component {
    state = {
        quote: ""
    }
   
    // This is the best place to put AJAX requests
    componentDidMount() {
        console.log('Kanye is mounted!')
        this.fetchQuote()
    }

    componentWillUnmount() {
        console.log('Goodbye from Kanye Component')
    }

    fetchQuote = () => {
        const url = 'https://api.kanye.rest/'
        fetch(url)
            .then(response => {
                // console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data.quote)
                // To add to the state: this.setState
                this.setState({
                    quote: data.quote
                })
            })
    }

    render() {
        return (
            <div>
                <h2>Quotes by Kanye:</h2>
                <p>{ this.state.quote }</p>
                <button onClick={this.fetchQuote}>Get new Quote</button>
            </div>
        )
    }
}

export default Kanye