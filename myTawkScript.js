// Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5ec00e9b967ae56c521a6915/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Script


// Start of tawk.to Status Code
Tawk_API = Tawk_API || {};
Tawk_API.onStatusChange = function (status){
if(status === 'online')
{
document.getElementById('tawkbutton').innerHTML = '<a href="javascript:void(Tawk_API.toggle())">Online - Click to chat</a>';
}
else if(status === 'away')
{
document.getElementById('tawkbutton').innerHTML = 'We are currently away';
}
else if(status === 'offline')
{
document.getElementById('tawkbutton').innerHTML = 'Live chat is Offline';
}
};
// End of tawk.to Status Code
