import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

class PageLegal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  };

  componentDidMount() {
    //the request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          this.setState({
            //TODO: this seems fishy
            body: xhttp.responseText
          });
        }
      }
    }.bind(this);

    //send
    xhttp.open('POST', '/legal', true);
    xhttp.send();
  }

  render() {
    return (
      <div className='page'>
        <ReactMarkdown source={this.state.body} />
        <p>Return <Link to='/'>Home</Link></p>
      </div>
    );
  };
}

export default PageLegal;
