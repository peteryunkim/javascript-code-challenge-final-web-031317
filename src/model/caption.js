class Caption {
	constructor(caption){
		this.caption = caption
	}

	render(){
		return `<div class="card-content"><h4>${this.caption}</h4></div><br>`
	}
}