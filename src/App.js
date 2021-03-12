import axios from 'axios';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: null
    }
    this.getQuote = this.getQuote.bind(this)
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote(){
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes").then(res => {
      this.setState({
        quote: res.data[0]
      })
    }).catch(err => console.log(err))
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        {
          this.state.quote
            ? <QuoteCard quote={this.state.quote} />
            : <p>No Data yet</p>
        }
        <button type="button"onClick={this.getQuote}>New Quote</button>
      </div>
    );
  }
}

export default App;
