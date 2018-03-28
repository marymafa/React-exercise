
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown  from 'react-markdown';
import './index.css';

class Markdown extends React.Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
		source: ''
	  };
	  
	  this.handleChange = this.handleChange.bind(this);
	
	}   
	handleChange(event) {
	  this.setState({value: event.target.value});
	}
	createMarkdownPreview() {
	  return {__html: ReactMarkdown(this.state.source)};
	}
	render() {
	  return (
	  <div>
		<h1 >{this.props.name}</h1>
		<div  class="row">
		  <div class="container-fluid">
			<div className="col-xs-12 col-sm-6">
            MarkdownPreview;
			<textarea  id="Markdown" class="Markdown" onChange={this.handleChange} source={this.state.source}></textarea>
		  </div>
	
		  <div>Pre:</div>
			<div id="markdown-des">           
			  <div dangerouslySetInnerHTML={this.createMarkdownPreview()}></div>
			</div>
		  <div className="clear-all"></div>
		</div>
        </div>
		<ReactMarkdown source={this.state.source}/>
	  </div>
	  )
	}
  }

ReactDOM.render(<Markdown />,document.getElementById('root'))





