import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = `/api`;
    console.log(process.env.PORT);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <br/>
        <br/>
        <div>{this.state.person.name.title}</div>
        <h2>{this.state.person.name.first}</h2>
        <h4>{this.state.person.name.last}</h4>
        <img src={this.state.person.picture.large} />
        <h3>====================</h3>
        <h2>made with ♥ for you Alien</h2>
      </div>
    );
  }
}
