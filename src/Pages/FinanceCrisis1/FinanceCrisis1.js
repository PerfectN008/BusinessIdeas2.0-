import React, { Component } from 'react'
import Crisis from '../../Components/Crisis/Crisis'

class FinanceCrisis1 extends Component {
    constructor(){
        super()
        this.state = {
            crisis: null,
            question: null,
            options: null
        }
    }

    componentDidMount(){
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(res => res.json())
        .then(data => this.setState({
            crisis: data[0],
            question: data[0],
            options: [{option: data[0], value: 4000}, {option: data[0], value: 3000}, {option: data[0], value: 2000}, {option: data[0], value: 1000}]
        }))
    }

    render() {
        return (
            this.state.crisis && this.state.question && this.state.options ? 
            <div>
                <Crisis crisis={this.state.crisis} question={this.state.question} options={this.state.options} redirect='/crisis/finance/2'/>
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
}

export default FinanceCrisis1;