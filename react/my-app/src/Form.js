import React from "react"
import confirmationPage from "./confirmationPage"

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Lastname: "",
        EmailAddress: "",
        message: ""
      }; this.handleChange = this.handleChange.bind(this);//his binding is necessary to make `this` work in the callback
      this.handleSubmit = this.handleSubmit.bind(this);//This syntax ensures `this` is bound within handleSubmit

    }
    
    onChange = (e) => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
  }

  onSubmit = (e) => {
      e.preventDefault();
      const { name, email, message } = this.state;

  }
    handleChange(event) {//receives an javascript event
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      alert('thanks for submitting: ' + this.state.value);
      event.preventDefault();
      
    }
  
    render() {
      const { name, email, message } = this.state;
      return (
  
        <form  onSubmit={this.handleSubmit}>
  
          React form:<br />
          <label>
            Firstname:
      <input type="text" name="firstname" placeholder="firstname"  onChange={this.handleChange}/>
          </label><br />
          <label>
            Lastname:
      <input type="text" name="lastname" placeholder="lastname"  onChange={this.handleChange}/>
          </label><br />
          Gender:
  
  <select>
            <option selected value="select"  onChange={this.handleChange}>select</option>
            <option value="both">Both</option>
            <option value="male">male</option>
            <option value="female">Female</option>
          </select><br />
          <label>
            ContactNo:
      <input type="text" name="contactno" placeholder="contactno"   onChange={this.handleChange}/>
          </label><br />
          <label>
            EmailAddress:
      <input type="text" name="emailaddress" placeholder="emailaddress"  onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
  
        </form>
  
      );
    }
  }