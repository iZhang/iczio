window.fbAsyncInit = function() 
{
  FB.init({
    appId      : '1685896151707691',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();

  document.getElementById('fb-share-button').onclick = function() 
  {
  FB.ui({
    method: 'share',
    display: 'popup',
    href: 'https://icz.io',
  }, function(response){});
  }
};

(function(d, s, id)
{
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));