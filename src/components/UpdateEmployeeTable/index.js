import React, { Component } from "react";
import NavSearch from "../NavSearch";
import Employees from "../Employees";




let counter = 0;



class UpdateEmployeeTable extends Component {
  state = {
    input: "",
    results: [],
    employees: [],
  };

  // When this component mounts, search the randomuser API for specified results and nationality of US to filter out characters from other languages
  componentDidMount() {
    fetch("https://randomuser.me/api/?nat=us&results=75")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ results: data.results, employees: data.results })
      );
  }

  handleInputChange = (event) => {
    this.setState(
      {
        input: event.target.value,
      },
      this.filterHandler
    );
  };

  filterHandler = () => {
    const { input, results } = this.state;
    const lowercasedInput = input.toLowerCase();
    // console.log(input);
    const filteredData = results.filter((item) => {
      return item.email.toLowerCase().includes(lowercasedInput);
    });

    this.setState({
      employees: filteredData,
    });
  };

  // When the Name is clicked, the table is sorted alphabetically, either ascending or descending.
  handleFormSubmit = (event) => {
    counter = counter + 1;
    let sorted = this.state.results;
    sorted.sort((a, b) => (a.email > b.email ? 1 : b.email > a.email ? -1 : 0));
    if (counter % 2 === 0) {
      sorted.reverse();
    }
    this.setState({ employees: sorted });
  };

  render() {
    return (
      <div>
        

        <NavSearch handleInputChange={this.handleInputChange} />
        <Employees
          handleFormSubmit={this.handleFormSubmit}
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default UpdateEmployeeTable;
