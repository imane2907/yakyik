import React, {Component} from "react"
import Zone from "../presentation/Zone.js"
import superagent from "superagent"

class Zones extends Component{
	constructor() {
    super()
    this.state = {
      zone:
         {
             name: "",
             zipCodes: ""
             
          },
      list: []
        }
    }
    componentDidMount(){
    	console.log("componentDidMount")
    	superagent
    	.get("/api/zone")
    	.query(null)
    	.set("Accept", "application/json")
    	.end((err, response) => {
    		if(err){
    			alert("ERROR: " +err)
    			return
    		}
    		console.log(JSON.stringify(response.body))
    		let results = response.body.results
    		this.setState({
    			list: results
    		})
    	})
    }


    submitZone() {
        
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)
        this.setState({
        	list: updatedList
        })
    }
    updateZone(event){
    	
    	let updatedZone = Object.assign({}, this.state.zone)
    	updatedZone[event.target.id] = event.target.value
    	this.setState({
    		zone: updatedZone
    	})
    	
    }
    
	render(){

		const listItems = this.state.list.map((zone, i) => {
			return (
				  <li key={i}><Zone currentZone={zone} /></li>
				)
		})
		return(
			<div>
			<ol>
			    {listItems}
            </ol>
            <div className="form-group">
            <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="name" />
            </div>
            <div className="form-group">
            <input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zone Codes" />
            </div>
            
            <div className="form-group">
            <button onClick={this.submitZone.bind(this)}className="form-control btn btn-info">Add a Zone</button>
            </div>
			</div>
			)
	}
}

export default Zones