import React from 'react';

class BookSelector extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });

    const selectedBook = this.props.books[newIndex];
    this.props.selectBook(selectedBook, newIndex);
  }

    render() {
      const options = this.props.books.map((book, index) => {
        return <option value={index} key={index}>{book["im:artist"].label}
        </option>
      });

    return (
      <select 
      id="books" 
      value={this.state.selectedIndex}
      onChange={this.handleChange.bind(this)}
      >
        {options}
      </select>
    );
  }
}

export default BookSelector;
