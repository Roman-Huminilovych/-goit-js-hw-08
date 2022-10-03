var throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

resumeTime();

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  }, 1000)
);

function resumeTime() {
  let setTime = localStorage.getItem(LOCALSTORAGE_KEY);
  if (setTime)
    player
      .setCurrentTime(setTime)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;
          default:
            break;
        }
      });
  console.log(setTime);
}
