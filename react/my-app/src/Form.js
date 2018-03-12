import React from "react"

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
     
  
    }
  
    render() {
      return (
  
        <form >
  
          React form:<br />
          <label>
            Firstname:
      <input type="text" name="firstname" placeholder="firstname" />
          </label><br />
          <label>
            Lastname:
      <input type="text" name="lastname" placeholder="lastname" />
          </label><br />
          Gender:
  
  <select>
            <option selected value="select">select</option>
            <option value="both">Both</option>
            <option value="male">male</option>
            <option value="female">Female</option>
          </select><br />
          <label>
            ContactNo:
      <input type="text" name="contactno" placeholder="contactno" />
          </label><br />
          <label>
            EmailAddress:
      <input type="text" name="emailaddress" placeholder="emailaddress" />
          </label>
          <input type="submit" value="Submit" />
  
        </form>
  
      );
    }
  }