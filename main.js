var players = document.getElementsByClassName('player');
console.log(players)
setProgress(.4, players[0]);

var t = 0;
var update = requestAnimationFrame.bind(null, function () {
    var p = easeInOutCubic(t += 0.01);
    setProgress(p, players[0]);
    if (t < 1) return update();
});
update();

function setProgress(ratio, player) {
    var leftSide = player.getElementsByClassName('left-side')[0];
    var rot = 45 + ratio * 360;
    leftSide.classList[ratio > .5 ? 'add' : 'remove']('fill');
    leftSide.setAttribute('style', 'transform: rotate(' + rot + 'deg)');
}

function easeInOutCubic(t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
