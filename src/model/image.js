class Image{
	constructor(imageUrl, imageCaption){
		this.imageUrl = imageUrl;
		this.imageCaption = imageCaption
	}

	render(){
		return `<img src="${this.imageUrl}"><div class="card-content"><h4>${this.imageCaption}</h4></div>`
	}
}

// class Image{
// 	constructor(imageUrl, imageCaption){
// 		this.imageUrl = imageUrl;
// 		this.imageCaption = imageCaption
// 	}

// 	render(){
// 		return `<img src="${this.imageUrl}">`
// 	}
// }