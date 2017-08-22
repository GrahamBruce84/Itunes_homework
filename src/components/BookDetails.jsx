import React from 'react';

class BookDetail extends React.Component {

  render(){
    if(!this.props.book){
      return null;
    }

    return (
      <div className="allSongs">
      <h3>{this.props.book["im:artist"].label}</h3>
      <h4>{this.props.book["im:name"].label}</h4>
      <img src={this.props.book["im:image"][2].label} alt={this.props.book["im:artist"].label}/>
      </div>
    );
  }
}

export default BookDetail;
