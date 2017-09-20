import React from 'react';
import Add from './Add';

class Header extends React.Component {
  render() {
    return (
      <header className='container header'>
        <h1 className='title text-center'>Kanban Board</h1>
        <Add data={this.props.data} />
      </header>
    );
  }
}

export default Header;