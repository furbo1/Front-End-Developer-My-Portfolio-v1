import React, { Component } from 'react'
import { StaticKitProvider } from '@statickit/react';

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fName: ' ',
      lName: ' ',
      eMail: ' ',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    if (this.state.message !== '') {
      alert('Your message was sent: ' + this.state.message)
    } else {
      alert('Message field cannot be blank')
    }

    event.preventDefault()
  }

  render () {
    return (<section id ='form' data-aos="fade-up">
      <form
className ='contactForm'
        onSubmit ={this.handleSubmit}>
        <fieldset>
          <legend> Contact Form: </legend>
           <label htmlFor='fName'> First name:  </label> <input
type='text'
              value ={this.state.fName}
              name ='fName'
              
              onChange ={this.handleChange}
                    /><br />
          <label htmlFor ='lName'> Last name:
          </label> <input
type='text'
              value ={this.state.lName}
              name ='lName'
              
              onChange ={this.handleChange}
                    /><br />
          <label htmlFor ='eMail'> Email:
          </label> <input
type='email'
              value ={this.state.eMail}
              name ='eMail'
              
              onChange ={this.handleChange}
                    /><br />
          <textarea name ='message'
              value ={this.state.message}
              rows ='9'
              cols ='35'
              
              onChange ={this.handleChange}
          /><br />
          <button className ='btn1'> Submit 
            </button><br />
        </fieldset>  
        
            </form>  
                 </section>
    )
  }
}
