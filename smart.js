var photocell;
var button;
var rgbled;
var photocell2;
var button2;
var rgbled2;
var newid1;
var newid2;
function top1check(){
	c2_callFunction("p1check");
}
function top2check(){
	c2_callFunction("p2check");
}
function toca1check(){
	c2_callFunction("ca1check");
}
function toca2check(){
	c2_callFunction("ca2check");
}
function newid(){
newid1 = prompt('請輸入P1 DeviceID' , '');
boardReady({board: 'Smart', device: newid1, transport: 'mqtt'}, function (board) {
  board.samplingInterval = 20;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  button = getButton(board, 4);
  photocell = getPhotocell(board, 0);
  photocell.measure(function (val) {
    photocell.detectedVal = val;
    if (photocell.detectedVal <= 0.15) {
      rgbled.setColor('#009900' , function () {
		toca1check();
      });
    } else if (photocell.detectedVal > 0.15) {
      rgbled.setColor('#cc0000');
    }
  });
  button.on('pressed', function () {
    rgbled.setColor('#3333ff' , function () {
		top1check();
    });
  });
});
newid2 = prompt('請輸入P2 DeviceID' , '');
boardReady({board: 'Smart', device: newid2, transport: 'mqtt'}, function (board) {
  board.samplingInterval = 20;
  rgbled2 = getRGBLedCathode(board, 15, 12, 13);
  button2 = getButton(board, 4);
  photocell2 = getPhotocell(board, 0);
  photocell2.measure(function (val) {
    photocell2.detectedVal = val;
    if (photocell2.detectedVal <= 0.15) {
      rgbled2.setColor('#009900' , function () {
		toca2check();
      });
    } else if (photocell2.detectedVal > 0.15) {
      rgbled2.setColor('#cc0000');
    }
  });
  button2.on('pressed', function () {
    rgbled2.setColor('#3333ff' , function () {
		top2check();
    });
  });
});
}