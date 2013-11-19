var tagall;
var clname;
tagall=document.getElementsByTagName("ul");
for(var i=0;i<tagall.length;i++){
if(tagall[i].className=='sub')
	{
		clname[tagall.length]=tagall[i];				
	}
};
for(var i=0;i<clname.length;i++){
document.write(clname[i] + "<br>")}