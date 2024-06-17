function videoYoutube() {
    const videoContainer = document.getElementById("video-container");

    videoContainer.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/PS1EDeVW9ms?si=llAp_guOlqsKIIF'; 
    iframe.width = '640'; 
    iframe.height = '360'; 
    iframe.frameborder = '0'; 
  
    videoContainer.appendChild(iframe);
  }
