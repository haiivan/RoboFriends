import React, { Component } from "react";
import Scroll from "../components/Scroll";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import ErrorBoundry from "./ErrorBoundry";
//REDUX
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    //requestRobots(dispatch)
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  //Regular

  /*  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users });
      });
  } */

  //REDUX
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    //const { robots } = this.state;
    const { robots, searchField, onSearchChange, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
