'use strict';
var mtn = mtn || {};


mtn.main = {
  init: function() {

    // setup canvas things
    // ----------------------------
    var body = document.querySelector('body');
    var canvas = document.querySelector('#canvas');
        // set the size
        canvas.width = body.scrollWidth;
        canvas.height = body.scrollHeight;
    canvas.onmousemove = function (event) {
      // console.log(event.clientX, event.clientY);
      mtn.mouseX = event.clientX;
      mtn.mouseY = event.clientY;
    };

    // set the canvas context
    var ctx = canvas.getContext('2d');

    // setup some variables
    // ----------------------------
    mtn.og_diameter = mtn.diameter = 10;
    mtn.fill = 'rgb(26,26,26)';
    mtn.stroke = 'rgb(234,36,30)';
    mtn.x = body.scrollWidth/2;
    mtn.y = body.scrollHeight/2;

    mtn.ctx = ctx;
    // mtn.ctx.strokeWidth=2;
    mtn.ctx.strokeStyle = mtn.stroke;


    console.log(mtn.x, mtn.y);


    // da real deal
    // ===================================
    // start in the center
    mtn.canvas.circle(mtn.ctx, mtn.x, mtn.y, mtn.diameter, mtn.fill);
    // start the loop
    mtn.main.loop();

  },



  loop: function() {


    if (mtn.mouseX > mtn.x) mtn.x++;
    else if (mtn.mouseX < mtn.x) mtn.x--;

    if (mtn.mouseY > mtn.y) mtn.y++;
    else if (mtn.mouseY < mtn.y) mtn.y--;

    if (mtn.mouseX === mtn.x && mtn.mouseY === mtn.y) {
      mtn.diameter++;
    } else {
      mtn.diameter--;
      if (mtn.diameter < mtn.og_diameter) mtn.diameter = mtn.og_diameter;
    }

    // z.canvas.clear(z.ctx, 0, 0, z.w, z.h);
    mtn.canvas.circle(mtn.ctx, mtn.x, mtn.y, mtn.diameter, mtn.color);


    setTimeout(function() {
      mtn.animationID = requestAnimationFrame(mtn.main.loop);
    }, 1000/60);

  }
};


window.onload = mtn.main.init;
