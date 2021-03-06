import React from 'react';
import BookSelector from '../components/BookSelector.jsx'
import BookDetails from '../components/BookDetails.jsx'


class BookContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      focusBook: null,
      chartPosition: 1
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({
          books: data.feed.entry,
          focusBook: data.feed.entry[0]
        });
      }
    });
    request.send();
  }

  setFocusBook(book, index){
   this.setState({
    focusBook: book,
    chartPosition: parseInt(index)+1
  }) 
 }

 render(){
  return (
    <div id="container">
    <h2 id="header-song">Top 20 <span id="offset">Shite</span> songs of the week</h2>
    <BookSelector 
    books={this.state.books} 
    selectBook={this.setFocusBook.bind(this)}/>
    <BookDetails book={this.state.focusBook} chartPosition={this.state.chartPosition}/>
    </div>
    );
}
}

export default BookContainer;
