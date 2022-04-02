
var youTubeVideoID='QZnVRvTJzcU';

var youTubeURL="https://www.youtube.com/embed/"+youTubeVideoID;

var videoModal = document.querySelector('#modalid');
var iframeModal = document.querySelector('iframe');
videoModal.addEventListener('hide.bs.modal', function () {
    iframeModal.setAttribute('src','');
})
videoModal.addEventListener('show.bs.modal', function () {
    iframeModal.setAttribute('src', youTubeURL);
})
