import React, {Component} from "react"
import Zones from "../containers/Zones.js"
import Comments from "../containers/Comments.js"
import styles from "../styles.js"
class Home extends Component {
	render(){
		const containerStyle = styles.universal.container
		return (
		  <div style={containerStyle}className="container">
			<div className ="row">
			    <div className="col-md-4">
			        <Zones /> 
			    </div>
			    <div className="col-md-8">
                    <Comments />
			    </div>
			</div>
			
           </div>
			)
	}
}
export default Home