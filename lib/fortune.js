var fortunes = [
	"A good traveler has no fixed plans, and is not intent on arriving. -Lao Tzu",
	"I love to travel, but hate to arrive. -Hernan Cortes",
	"Travel makes a wise man better, and a fool worse. -Thomas Fuller",
	"Travel teaches as much as books. -Youssou N'Dour",
	"When you come to a fork in the road, take it -Yogi Berra",
];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};