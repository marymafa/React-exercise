import React from 'react';

export default class MarkdownPreviewer extends React.Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
		source: ''
	  };
	  
	  this.handleChange = this.handleChange.bind(this);
	  this.createMarkdownPreview = this.createMarkdownPreview.bind(this);
	}   
	handleChange(event) {
	  this.setState({value: event.target.value});
	}
	createMarkdownPreview() {
	  return {__html: ReactMarkdown(this.state.value)};
	}
	render() {
	  return (
	  <div>
		<h1 id="markdown-title">{this.props.name}</h1>
		<div id="markdown-content">
		  <div id="markdown-src">
			<div>Src:</div>
			<textarea type="text" onChange={this.handleChange} value={this.state.value}></textarea>
		  </div>
	
		  <div>Pre:</div>
			<div id="markdown-des">           
			  <div dangerouslySetInnerHTML={this.createMarkdownPreview()}></div>
			</div>
		  <div className="clear-all"></div>
		</div>
		<ReactMarkdown source={this.state.source}/>
	  </div>
	  )
	}
  }
  