// React
import React from 'react';

// Style
import './style.sass';

class SideBar extends React.Component {
  render() {
    const { routes } = this.props;
    return(
      <div className="sideBar-container">
        <ul>
          {routes.map((route, ix) => {
            return(
              <li>{route.name}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;