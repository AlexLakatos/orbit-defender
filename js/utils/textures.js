Cut.addTexture({
  name : "base",
  factory : function(name) {
    if (name.substring(0, 2) === "d_") {
      var d = name.substr(2, 1);
      return Cut.Out.drawing("d_" + d, 20, 10, 10, function(ctx, ratio) {
        ctx.scale(ratio, ratio);
        ctx.font = "bold 8px Arial";
        ctx.fillStyle = "#72DB37";
        ctx.measureText && this.cropX(ctx.measureText(d).width + 0.8);
        ctx.textBaseline = "top";
        ctx.fillText(d, 0.4, 1);
      });
    }
  },
  cutouts : [ Cut.Out.drawing("bg", 100, 100, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.rect(0, 0, 100, 100);
    gradient = ctx.createRadialGradient(50, 50, 0, 50, 50, 45);
    gradient.addColorStop(0.00, "rgb(0, 56, 84)");
    gradient.addColorStop(1.00, "rgb(0, 31, 62)");
    ctx.fillStyle = gradient;
    ctx.fill();

  }), Cut.Out.drawing("planet", 20, 20, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("planet"), 0, 0, 20, 20);

  }), Cut.Out.drawing("ring", 23, 23, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("ring"), 0, 0, 23, 23);

  }), Cut.Out.drawing("explosion", 16, 16, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("explosion"), 0, 0, 16, 16);

  }), Cut.Out.drawing("ship", 5, 5, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("ship"), 0, 0, 5, 5);

  }), Cut.Out.drawing("next", 8, 8, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("next"), 0, 0, 8, 8);

  }), Cut.Out.drawing("asteroid", 8, 8, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("invader"), 0, 0, 8, 8);
    ctx.rotate

  }), Cut.Out.drawing("bullet", 5, 5, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.drawImage(document.getElementById("bullet"), 0, 0, 5, 5);

  }) ]
});