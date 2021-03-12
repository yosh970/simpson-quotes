import axios from 'axios';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

const startingQuote = {
  image:"https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg",
  character:"Nelson Muntz",
  quote:"Shoplifting is a victimless crime, like punching someone in the dark.",
  characterDirection:"Left"
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: startingQuote
    }
    this.getQuote = this.getQuote.bind(this)
  }

  getQuote(){
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes").then(res => {
      console.log(res)
      this.setState({
        quote: res.data[0]
      })
    })
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <QuoteCard quote={this.state.quote} />
        <button type="button"onClick={this.getQuote}>New Quote</button>
      </div>
    );
  }
}

export default App;
