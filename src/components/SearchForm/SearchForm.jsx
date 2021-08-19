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
      <div className="mr-6 my-2" >
      <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        className=""
      >
        <input 
          type="text"
          name="query"
          value={this.state.formData.query}
          onChange={this.handleChange}
          required
          placeholder="Search..."
          className="bg-purple-white shadow rounded border border-indigo-600  border-2  p-2"
        />
          {/*  <Button type="submit"
    			disabled={this.state.invalidForm}>
        Search
          </Button> */}
          <button className="absolute right-60 mt-3 mr-4" type="submit"
    			disabled={this.state.invalidForm}>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
          </button>
      </form>
      </div>
    )
  }
}

export default Search