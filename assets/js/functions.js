// about:blank cloaking
var blankerCheck = localStorage.getItem('aboutBlank');
if (blankerCheck === 'enabled') {
let inFrame
try{inFrame=window!==top}catch(e){inFrame=true}
if(!inFrame&&!navigator.userAgent.includes("Firefox")){const popup=open("about:blank","_blank")
if(!popup||popup.closed){alert("Please allow popups and redirects for about:blank cloak to work.")}else{const doc=popup.document
const iframe=doc.createElement("iframe")
const style=iframe.style
const link=doc.createElement("link")
const name=localStorage.getItem("name")||"My Drive - Google Drive";const icon=localStorage.getItem("icon")||"https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";doc.title=name;link.rel="icon";link.href=icon;iframe.src=location.href
style.position="fixed"
style.top=style.bottom=style.left=style.right=0
style.border=style.outline="none"
style.width=style.height="100%"
doc.head.appendChild(link);doc.body.appendChild(iframe)
location.replace("https://classroom.google.com")}}
} else {
  console.log('Blanker Disabled.');
}

var submenuOpen = false;
var submenu2Open = false;





function tabCloak() {
  var newTitle = localStorage.getItem('cloakedTitle');
  var newIcon = localStorage.getItem('cloakedIcon');

  if (newTitle === null || newTitle === '') {
    alert('No Cloak Detected. Please select one in settings.');
  } else {
    localStorage.setItem('tabTitle', newTitle);
    localStorage.setItem('tabIcon', newIcon);
    document.title = newTitle;
    var icon = document.querySelector('link[rel="icon"]');
    icon.setAttribute('href', newIcon);
  }
}

  
  function disableTabCloak() {
    var newTitle = 'Doge | V4';
    var newIcon = '/assets/img/doge.jpg';
  
    localStorage.setItem('tabTitle', newTitle);
    localStorage.setItem('tabIcon', newIcon);
  
    document.title = newTitle;
    var icon = document.querySelector('link[rel="icon"]');
    icon.setAttribute('href', newIcon);
  }

  function openWindow() {
    var win = window.open();   win.document.body.style.margin = '0';   win.document.body.style.height = '100vh';   var iframe = win.document.createElement('iframe');   iframe.style.border = 'none';   iframe.style.width = '100%';   iframe.style.height = '100%';   iframe.style.margin = '0';   iframe.src = window.location.href;   win.document.body.appendChild(iframe);
      }

  function visitLastSite() {
  location.href = '/~';
  }

  function enableLogin() {
    var userpass = prompt('Set Password:');
  if (userpass === '') {
    alert('Please enter a valid password.');
  } else {
    localStorage.setItem('login', 'enablelogin');
    alert("You will now use the password '" + userpass + "' to log into the site. Join our Discord if you forget your password.");
  localStorage.setItem('wordpass', userpass);
    location.href = "/";
  }
}

  // Function to disable login
  function disableLogin() {
    localStorage.setItem('login', 'disablelogin');
    location.href = "/";
  }


function doSomething() {
  // Perform action for context menu option
  console.log('"deez nuts" -Doge Unblocker "lmao" - Fire');
}



function openSettings() {
  location.href = '/settings.html';
}

function youtube() {
  let URL = 'https://www.youtube.com/';
  let urlToInject = window.location.origin + __uv$config.prefix + __uv$config.encodeUrl(URL);
  const newWindow = window.open();
  const iframe = newWindow.document.createElement('iframe');
  newWindow.document.body.style.margin = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.zIndex = '99999';
  iframe.style.border = 'none';
  newWindow.document.body.style.overflow = 'hidden';
  newWindow.document.body.appendChild(iframe);
  iframe.src = urlToInject;
}

function enableAboutBlank() {
  localStorage.setItem('aboutBlank', 'enabled');
  window.location.reload();
}

function disableAboutBlank() {
  localStorage.setItem('aboutBlank', 'disabled');
  window.location.reload();
}
