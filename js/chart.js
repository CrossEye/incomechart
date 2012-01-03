(function() {
    var 
    $chart = $("#chart");
    if (!$chart.length) {return;}
    var pos = $chart.offset(),
    width = $chart.width(), height = $chart.height(),
    center = {x: (width / 2), y: (height /2)},
    ctx = $chart[0] && $chart[0].getContext('2d');
    ctx.clearRect(0,0,width,height);

    ctx.save();

    ctx.translate(center.x, center.y);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0,.45 * Math.min(width, height) ,0, Math.PI*2, true);
    ctx.stroke();

    ctx.restore();
}());
