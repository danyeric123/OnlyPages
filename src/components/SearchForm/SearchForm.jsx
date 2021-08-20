import React, { Component } from "react";
// import { FaSistrix } from "react-icons/fa";

class Search extends Component {
  state = {
    invalidForm: true,
    formData: {
      query: "",
    },
  };

  formRef = React.createRef();

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({invalidForm: true,
      formData: {
        query: "",
      }})
    this.props.history.push(`/search/${this.state.formData.query}`);
  };

  render() {
    return (
      <div className="mr-6 my-2">
        <form ref={this.formRef} onSubmit={this.handleSubmit} className="">
          <input
            type="text"
            name="query"
            value={this.state.formData.query}
            onChange={this.handleChange}
            required
            placeholder="Search..."
            className=" shadow rounded border border-indigo-600  border-2 p-2"
          />
          <button
            type="submit"
            disabled={this.state.invalidForm}
            /* className="group relative inline-block px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 my-2" */
            className="border border-blue-400 text-white bg-blue-600 rounded-md font-bold py-2 px-6 my-2 items-center hover:bg-blue-500 hover:text-white"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
