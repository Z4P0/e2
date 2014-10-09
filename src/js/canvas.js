'use strict';
var mtn = mtn || {};

mtn.canvas = {

  clear: function(ctx, x, y, w, h) {
    ctx.clearRect(x, y, w, h);
  },

  rect: function(ctx, x, y, w, h, col) {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
  },

  circle: function(ctx, x, y, r, col) {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x + 5, y + 5, r, 0,  Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  },

  text: function(ctx, string, x, y, size, col) {
    ctx.font = 'italic '+size+'px Helvetica';
    // ctx.font = size+'px Helvetica';
    ctx.fillStyle = col;
    ctx.fillText(string, x, y);
  },

  backgroundGradient: function(ctx, width, height){
    // Create gradient - top to bottom


    // change this to fill entire ctx with gradient
    // ctx.fillStyle="purple";
    // ctx.fillRect(0,0,width,height);

    var grd = ctx.createLinearGradient(0, 0, 0, height);
    // light blue
    grd.addColorStop(0, '#8ED6FF');
    // dark blue
    grd.addColorStop(1, '#004CB3');
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.fillRect(0,0,width,height);

  },

  blackOverlay: function(ctx, width, height) {
    ctx.globalAlpha = 0.6;
    // rect(ctx, 0, 0, width, height, z.COLORS.black);
    ctx.globalAlpha = 1;
  }

};
