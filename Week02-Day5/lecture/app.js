$(document).ready(function(){
	$('#clickMe').on('click', function(e){
		e.preventDefault();
		var val = $('#myInput').val();
		var newEl = '<li class="click-click"></li>';
		newEl = $('newEl').text(val);
		$('.items').append(newEl);
	});

	$('.myData').on('click','click-click', function(e){
		e.preventDefault();
		alert($(this).text());
		alert("clicked");
	});

	$.ajax({
		method: 'GET',
		url: 'http://bird-api.com/api/birds?order=passeriformes&familyName=icteridae&IUCNRedListCategory2014=cr'
	}).then(function(data){
		console.log(data);
	});


});