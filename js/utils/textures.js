Cut.addTexture({
  name : "base",
  factory : function(name) {
    if (name.substring(0, 2) === "d_") {
      var d = name.substr(2, 1);
      return Cut.Out.drawing("d_" + d, 20, 10, 10, function(ctx, ratio) {
        ctx.scale(ratio, ratio);
        ctx.font = "bold 8px Arial";
        ctx.fillStyle = "#7DBD00";
        ctx.measureText && this.cropX(ctx.measureText(d).width + 0.8);
        ctx.textBaseline = "top";
        ctx.fillText(d, 0.4, 1);
      });
    }
  },
  cutouts : [ Cut.Out.drawing("bg", 100, 100, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.rect(0, 0, 100, 100);
    ctx.fillStyle = "#000";
    ctx.fill();

  }), Cut.Out.drawing("planet", 15, 15, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.arc(8, 8, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "#7DBD00";
    ctx.fill();

  }), Cut.Out.drawing("explosion", 15, 15, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.arc(8, 8, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFAB19";
    ctx.fill();

  }), Cut.Out.drawing("ship", 4, 4, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.arc(2, 2, 2, 0, 2 * Math.PI, true);
    ctx.arc(2, 2, 0.7, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#DCF600";
    ctx.fill();

  }), Cut.Out.drawing("next", 8, 8, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.arc(4, 4, 3.2, 0, 2 * Math.PI);
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = "#fff";
    ctx.stroke();

  }), Cut.Out.drawing("asteroid", 4, 4, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.arc(2, 2, 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#C11515";
    ctx.fill();

  }), Cut.Out.drawing("bullet", 4, 4, 10, function(ctx, ratio) {
    ctx.scale(ratio, ratio);
    ctx.arc(2, 2, 1.2, 0, 2 * Math.PI);
    ctx.fillStyle = "#DCF600";
    ctx.fill();

  }) ]
});