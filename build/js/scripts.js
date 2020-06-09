"use strict";

//youtube script
var tag = document.createElement('script');
tag.src = '//www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '700',
    width: '100%',
    videoId: 'FBS6o3Y8YJc',
    // youtube video id
    playerVars: {
      autoplay: 0,
      rel: 0,
      showinfo: 0
    },
    events: {
      onStateChange: onPlayerStateChange
    }
  });
};

var p = document.getElementById('player');
$(p).hide();
var t = document.getElementById('thumbnail');
t.src = './images/transport/video_bg_fon.jpg';

onPlayerStateChange = function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    $('.start-video').fadeIn('normal');
  }
};

$(document).on('click', '.start-video', function () {
  $(this).hide();
  $('#player').show();
  $('#thumbnail_container').hide();
  player.playVideo();
});