var t = 5;
var tt = 3;
var ttt = 3;

$(function() {
	var i = Math.floor(Math.random()*t) + 1;
	var ii = Math.floor(Math.random()*tt) + 1;
	var iii = Math.floor(Math.random()*ttt) + 1;

clips = [
{
	src: 'data/ini' + i + '.mp4',
	in: 0,
	out: 8
},
{
	src: 'data/med' + ii + '.mp4',
	in: -1,
	out: 3
},
{
	src: 'data/tot' + iii + '.mp4',
	in: -1,
	out: 4
}
];
	sequence = Popcorn.sequence("video", clips);
	sequence.listen( 'canplaythrough', sequence.play() );

//sequence.preload( auto );
//sequence.autoplay( true );
//sequence.play();

});