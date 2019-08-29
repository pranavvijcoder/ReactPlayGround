import React, { Component } from "react";

class PeopleAPI extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      loaded: false,
      peoples: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/members")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            loaded: true,
            peoples: result
          });
        },
        error => {
          this.setState({
            loaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, loaded, peoples } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!loaded) {
      return <div>Loading from backend ajgdjagsd...</div>;
    } else {
      return (
        <ul>
          {peoples.map(p => (
            <li key={p.id}>
              {p.id} - {p.name} {p.age}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default PeopleAPI;
