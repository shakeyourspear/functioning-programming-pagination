var photos = [
	"img/Personal/img1.jpg", "img/Personal/img2.jpg", "img/Personal/img3.jpg", "img/Personal/img4.jpg",
	"img/Personal/img5.jpg", "img/Personal/img6.jpg", "img/Personal/img7.jpg", "img/Personal/img9.jpg",
	"img/demo/pic1.jpg", "img/demo/pic2.jpg", "img/demo/pic3.jpg", "img/demo/pic4.jpg",
	"img/demo/pic5.jpg", "img/demo/pic6.jpg", "img/demo/pic7.jpg", "img/demo/pic8.jpg",
	"img/demo/pic9.jpg", "img/demo/pic10.jpg", "img/demo/pic11.jpg", "img/demo/pic12.jpg",
	"img/demo/pic13.jpg", "img/demo/pic14.jpg", "img/demo/pic15.jpg"
];

/*
	<li id="page-1">
	<a href="#">1</a>
	</li>
*/
$(document).ready(function(){
	var itemPerPage = 4;
	var totalPages = Math.ceil(photos.length / itemPerPage);
	for (var i=0; i<totalPages; i++) {
		var page = i + 1; 

		// Create the page mark
		var pageMark = $('<li id="page-' + page + '"><a href="#">' + page + '</a></li>')
		$(".page-mark-container").append(pageMark);

		// Bind onclick listener
		pageMark.click(function(e) {
			var pageMark = $(this);
			changeDisplayPhotos(pageMark);
		
			e.preventDefault();  
		});
	}

	// Display the first page
	$('#page-1').click()  
});

function changeDisplayPhotos(pageMark) {
	// Clear the image container
	var imageContainer = $('#img-container');
	imageContainer.empty()

	// Change the page photos
	var itemPerPage = 4;
	var clickedIndex = pageMark.index();
	var startIndex = clickedIndex * itemPerPage;
	var endIndex = startIndex + itemPerPage - 1;
	for (var j=startIndex; j<=endIndex; j++) {
		var path = photos[j];
		var img = $('\
			<div class="imgitem">\
				<div class="col-lg3 col-md-4 col-sm-6 col-xs-12">\
				<a href="' + path + '" class="thumbnail" target="_blank">\
					<p>' + path + '</p>\
					<img src="' + path + '" />\
				</a>\
				</div>\
			</div>');
		imageContainer.append(img);
	}
}