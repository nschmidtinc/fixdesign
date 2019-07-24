import React from "react";
import image from './VirtualMirror00007.png'
let base64Icon = 'hello'
let imageS = ''
class Header extends React.Component {
  state = {
    input: 'enter your email here',
    yourImage: './VirtualMirror00007.png'
  };
  
  handleNameChange = (event) => {
    this.setState({ input: event.target.value });
  };
  componentWillMount() {

    console.log('mounted!!!')
    fetch('http://localhost:5000/', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then( async response => {
       // const bing = JSON.parse(response)
        this.setState({yourImage: response.body})
       
        })
    
  }

  componentDidUpdate() {
  console.log(this.state, 'this is the state!')
  base64Icon = this.state.yourImage
  console.log(base64Icon)
  }
  handleEmail = () => {

    console.log(this.state.input)


  const email1 = this.state.input
  let here = this.state.yourImage
  const data = {
    "email": email1 
  }
      fetch('http://localhost:5000/sendmypicture/', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
  }
  render(){
  return(
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
    <img style={{width:'60%', height:'60%'}} src={require('./VirtualMirror00007.png')} />
    <img style={{width:'60%', height:'60%'}}src={image} alt="hello!"></img>
      <h1 className="mb-1">Looking Good!</h1>
      <h3 className="mb-5">

        <em> enter email to send yourself this picture</em>
      </h3>
        <div style={{display: 'flex', flexDirection: 'column'}}>
      <input value={this.state.input} onChange={this.handleNameChange}></input>
      <a className="btn btn-primary btn-xl js-scroll-trigger" onClick={this.handleEmail} href="#about">
        Send Me My Picture!
      </a>
      </div>
    </div>
    <div className="overlay" />
  </header>
)
}
};
export default Header;
