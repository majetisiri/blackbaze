var urlList=["http://example.edu/approval?brake=addition","https://example.com/","http://book.example.net/bat.php","https://www.example.com/appliance/belief.html","https://www.example.edu/bat/arm.php","https://art.example.com/bird?arch=beds"];


function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).val()).select();
	document.execCommand("copy");
	$temp.remove();
}

$(document).ready(function(){
	$("#newLink").click(function(){
		var urlListLength = (urlList.length)
	    var randomNumber = Math.floor(Math.random()*urlListLength);
		var newLink = urlList[randomNumber];
		$(this).parent().siblings().children("#emailInput").val(newLink);
	});
});