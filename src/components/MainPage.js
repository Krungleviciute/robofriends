import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./MainPage.css";
import Scroll from "../components/Scroll";

import Header from "../components/Header";

// Using class component so it would be possible to test instances of the component
export class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = (robotsData, searchText) => {
    return robotsData.filter((robot) => {
      return robot.name.toLowerCase().includes(searchText.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending, robots, searchField } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h2 id="loading">Loading</h2>
          ) : (
            <CardList robots={this.filterRobots(robots, searchField)} />
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;

// ------------------- Hooks Example --------------------
// const MainPage = ({
//   searchField,
//   onSearchChange,
//   robots,
//   isPending,
//   onRequestRobots,
// }) => {
//   useEffect(() => {
//     onRequestRobots();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const filterRobots = (robotsData, text) =>
//     robotsData.filter((robot) => {
//       return robot.name.toLowerCase().includes(text.toLowerCase());
//     });

//   return isPending ? (
//     <h1 className="tc">Loading ...</h1>
//   ) : (
//     <div className="tc">
//       <Header />
//       <SearchBox searchChange={onSearchChange} />
//       <Scroll>
//         <CardList robots={filterRobots(robots, searchField)} />
//       </Scroll>
//     </div>
//   );
// };
// export default MainPage;
