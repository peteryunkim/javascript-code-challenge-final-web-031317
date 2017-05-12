$(document).ready(function(){
  // your code here!
  submitInfo()
})

/*-----------------------------------------
without any classes
-----------------------------------------*/

// function submitInfo(){
// 	$('#photo-form').on('submit', function(event){
// 	event.preventDefault();
// 	let imageUrl = $('#image-url').val()
// 	let imageCaption = $('#image-caption').val()
// 	$('#photo-list').append(`<img src="${imageUrl}"><br><h4>${imageCaption}</h4>`)
 // $('#image-url').val('')
 // $('#image-caption').val('')
// 	})
// }

/*-----------------------------------------
with Image class
-----------------------------------------*/


// function submitInfo(){
// 	$('#photo-form').on('submit', function(event){
// 		event.preventDefault()
// 		let imageUrl = $('#image-url').val()
// 		let imageCaption = $('#image-caption').val()
// 		let newImage = new Image(imageUrl, imageCaption)
// 		$('#photo-list').append(newImage.render())
// 		$('#image-url').val('')
//  		$('#image-caption').val('')
// 	})
// }

/*-----------------------------------------
with Image and Caption class
-----------------------------------------*/



// function submitInfo(){
// 	$('#photo-form').on('submit', function(event){
// 		event.preventDefault()
// 		let imageUrl = $('#image-url').val()
// 		let imageCaption = $('#image-caption').val()
// 		let newCaption = new Caption(imageCaption)
// 		let newImage = new Image(imageUrl, newCaption.caption)
// 		$('#photo-list').append(`${newImage.render()}`)
// 		$('#image-url').val('')
//  		$('#image-caption').val('')
// 	})
// }

/*-----------------------------------------
with Image/Caption class and less variables
------------------------------------------*/


function submitInfo(){
	$('#photo-form').on('submit', function(event){
		event.preventDefault()
		let newCaption = new Caption($('#image-caption').val())
		let newImage = new Image($('#image-url').val(), newCaption.caption)
		$('#photo-list').append(`${newImage.render()}`)
		$('#image-url').val('')
 		$('#image-caption').val('')
	})
}






