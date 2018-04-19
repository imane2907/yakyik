import React, {Component} from "react"
import Comment from "../presentation/Comment.js"
import styles from "../styles.js"

class Comments extends Component{
	constructor(){
		super()
		this.state = {
			comment: {
				username: "",
				body: ""
			},
			list: []
		}
	}
	submitComment(){
        console.log("submitComment: " + JSON.stringify(this.state.comment))
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)
        this.setState({
        	list: updatedList
        })
	}
	updateUsername(event){
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment["username"] = event.target.value
        this.setState({
        	comment: updatedComment
        })
        
	}
	updateBody(event){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment["body"] = event.target.value
		this.setState({
			comment: updatedComment
		})
	}
	updateTimestamp(event){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment["timestamp"] = event.target.value
		this.setState({
			comment: updatedComment
		})
	}
	render(){
        
		const commentList = this.state.list.map((comment, i)=>{
			return (
				<li key={i}> <Comment currentComment={comment} /></li>
				)
		})
		const commentStyle= styles.comment.commentsBox
		const commentsList=styles.comment.commentsList
		return(
			 <div>
				 <h1>Comments: Zone 1</h1>
				    <div style={commentStyle}>
					 <ul style={commentsList}>
						 { commentList }
					 </ul>
					 <div className="form-group">
					    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="username" />
					 </div>
					 <div className="form-group">
					    <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="comment" />
					 </div>
					 <div className="form-group">
					    <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="time stamp" />
					 </div>
					 <div className="form-group">
					    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Add your comment</button>
					 </div>
					 </div>
				 </div>
			)
	}
}

export default Comments