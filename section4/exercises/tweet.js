/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = [comments]; //NEEEEEEED the array [] syntax for it to work here!!!!!
    // only way I figured this out is because .push only works as a function on an array,
    //so I thought, "how can I make all the comments below an array even if there's only one??"
  }
  incrementLikes(newLikes) {
    this.numberOfLikes += newLikes; //why does ++ not work here?!?! spent so long on this
  }
  addComments(newComments) {
    this.comments.push(newComments);
    //this.comments.push(newComments); //.push only works with an array, therefore will not print if every comment isn't an array...
  }
};

var oneTweet = new Tweet("Geena", "I'm spending my Halloween coding.", "3:24 PM", 32, "lol same!");
var twoTweet = new Tweet("Joe", "It's Sunday", "2:00 PM", 4, "Nice observation.");
var threeTweet = new Tweet("@alexis", "I love cats!", "1:47 PM", 2);
var fourTweet = new Tweet("@SharonLoves", "meme meme meme", "11:02 AM", 0);
var fiveTweet = new Tweet("Alexandra", "I can't wait for vacation next month", "4:32 PM", 15, ["Omg lucky!", "wow how exciting!"]);
var sixTweet = new Tweet("@JackAttack", "UGH I have a case of the Sunday Scaries!", "2:01 PM", 2);
var sevenTweet = new Tweet("@TBone24", "Go Broncos!", "9:52 AM", 17, "YEAH BUDDY!");
var eightTweet = new Tweet("Frank", "I loooooove tacos mmm", "4:20 PM", 2, "Hard shell or soft?");

oneTweet.incrementLikes(9);
oneTweet.addComments("Just wait til you get that salary!!")
console.log(oneTweet);

twoTweet.incrementLikes(1);
twoTweet.addComments("Wow would you look at that?", "Ugh noooo!"); // why does only the first string get logged???
console.log(twoTweet);

threeTweet.incrementLikes(2);
console.log(threeTweet);

fourTweet.incrementLikes(8);
fourTweet.addComments("memes are the best")
console.log(fourTweet);

fiveTweet.incrementLikes(4);
fiveTweet.addComments("Ahh! I want to go... where are you headed?")
console.log(fiveTweet);

sixTweet.incrementLikes(-1);
sixTweet.addComments("dude same, I am not ready for work tomorrow") //because there is no comment on the original tweet,
// but one was added later... it shows as undefined, and then the added comment. Is this correct?
console.log(sixTweet);

sevenTweet.incrementLikes(3);
console.log(sevenTweet);

eightTweet.incrementLikes(2);
eightTweet.addComments("bruhhhh")
console.log(eightTweet);
