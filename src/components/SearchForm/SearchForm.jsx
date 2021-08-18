import React, { Component } from 'react'
import { FaSistrix } from "react-icons/fa";
import { Button } from "../Button/Button";

class Search extends Component {
  state = {
		invalidForm: true,
		formData: {
			query: '',
		},
  }

	formRef = React.createRef();

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = e => {
		e.preventDefault();
    this.props.history.push(`/search/${this.state.formData.query}`)
  };
  
  render() {
    return (
      <div className="nav-links">
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >
        <input 
          type="text"
          name="query"
          value={this.state.formData.query}
          onChange={this.handleChange}
          required
        />
           <Button type="submit"
    			disabled={this.state.invalidForm}>
        Search
          </Button>
      </form>
      </div>
    )
  }
}

export default Search