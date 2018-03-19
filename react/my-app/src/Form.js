import React from "react"


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      email: ' ',
      contactNo: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert('thanks for submitting: ' + this.state.email);
    // const form = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   contactNo: this.state.contactNo,
    //   Gender: this.state.Gender

    // }
    let database=this.state
    database.push({Form});
    this.setState({
      name: '',
      email: '',
      contactNo: '',
      Gender: '',

    })
  }

  render() {
    return (
      <div>
        <form>
          React Form:<br />
          <label>
            Name:
                  <input
              name='name'
              value={this.state.name}
              onChange={e => this.handleChange(e)} />
          </label><br />
          Gender:

  <select>
            <option selected value="select" onChange={this.handleChange}>select</option>
            <option value="both">Both</option>
            <option value="male">male</option>
            <option value="female">Female</option>
          </select><br />
          <label>
            Email:
                  <input
              name='email'
              value={this.state.email}
              onChange={e => this.handleChange(e)} />
          </label><br />
          <label>
            contactNo:
                  <input
              name='contactno'
              value={this.state.contactno}
              onChange={e => this.handleChange(e)} />
          </label>
          <button onClick={(e) => this.onSubmit(e)}>Send</button>
        </form>

      </div>
    );
  }
}

export default Form;