import React, { Component } from "react";
import { FaSistrix } from "react-icons/fa";

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
    this.props.history.push(`/search/${this.state.formData.query}`);
  };

  render() {
    return (
      <div className="mr-6 my-2 border border-red-500">
        <form ref={this.formRef} onSubmit={this.handleSubmit} className="">
          <input
            type="text"
            name="query"
            value={this.state.formData.query}
            onChange={this.handleChange}
            required
            placeholder="Search..."
            className="bg-purple-white shadow rounded border border-indigo-600  border-2 p-2 hover:text-white"
          />
          {/*  <Button type="submit"
    			disabled={this.state.invalidForm}>
        Search
          </Button> */}
          <button
            type="submit"
            disabled={this.state.invalidForm}
            className="border border-blue-400 text-black-500 bg-blue-300 rounded-md font-bold py-2 px-6 my-2 items-center hover:bg-blue-600 hover:text-white"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
