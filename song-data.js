(function () {
  var NEWLINE = "\n";
  var SPACE = " ";
  var PAUSE = "";

  window.songData = {
    bpm: 120,
    offset: 0.1,
    lyrics: [
      [
        [2.5, PAUSE],
        [0.5, "ca"],
        [0.5, "reer"],
        [0, SPACE],
        [0.5, "boy"],
        [4, NEWLINE],
        [0.5, "work"],
        [0.5, PAUSE],
        [0.5, "ing"],
        [0, SPACE],
        [1, "ove"],
        [0.5, "r"],
        [2, "time"],
        [5.5, NEWLINE],
        [0.5, "ca"],
        [0.5, "reer"],
        [0, SPACE],
        [0.5, "boy"],
        [4, NEWLINE],
        [0.25, "one"],
        [0.75, SPACE],
        [0.25, "thing"],
        [0.25, SPACE],
        [0.25, "on"],
        [0.5, SPACE],
        [0.25, "my"],
        [0.25, SPACE],
        [1.75, "mind"],
        [1, PAUSE],
      ],
      [
        [5, PAUSE],
        [0.25, "cheap"],
        [0.25, SPACE],
        [0.5, "office"],
        [0.25, SPACE],
        [0.75, "coffee"],
        [3, NEWLINE],
        [0.25, "is"],
        [0.25, SPACE],
        [0.25, "pump"],
        [0.5, PAUSE],
        [0.25, "ing"],
        [0.25, SPACE],
        [0.25, "through"],
        [0.5, SPACE],
        [0.25, "my"],
        [0.25, SPACE],
        [2, "veins"],
        [5.5, NEWLINE],
        [0.25, "I"],
        [0, SPACE],
        [0.25, "work"],
        [0.25, SPACE],
        [0.25, "for"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "man"],
        [0.25, SPACE],
        [0.5, "yeah"],
        [2, NEWLINE],
        [0.25, "but"],
        [0.25, SPACE],
        [0.25, "you"],
        [0.25, SPACE],
        [0.25, "know"],
        [0.5, SPACE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "love"],
        [0.75, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [3, "chase"],
        [1, PAUSE],
      ],
      [
        [2, PAUSE],
        [0.25, "I"],
        [0, SPACE],
        [0.25, "can"],
        [0, SPACE],
        [0.5, "never"],
        [0, SPACE],
        [0.25, "fight"],
        [0.5, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.5, "feeling"],
        [1.25, NEWLINE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "stay"],
        [0.25, SPACE],
        [0.25, "up"],
        [0.25, SPACE],
        [0.25, "all"],
        [0.5, SPACE],
        [0.25, "night"],
        [1.25, NEWLINE],
        [0.5, "workin'"],
        [0, SPACE],
        [0.25, "so"],
        [0.25, SPACE],
        [0.25, "hard"],
        [0.5, SPACE],
        [0.5, "after"],
        [0, SPACE],
        [1, "hours"],
        [0.75, NEWLINE],
        [0.25, "'til"],
        [0, SPACE],
        [0.25, "I"],
        [0, SPACE],
        [0.25, "see"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.75, "sun"],
        [0.5, "light"],
        [0.5, PAUSE],
      ],
      [
        [0.75, PAUSE],
        [0.25, "stuck"],
        [0, SPACE],
        [0.25, "up"],
        [0, SPACE],
        [0.25, "in"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "off"],
        [0.25, PAUSE],
        [0.25, "ice"],
        [0, SPACE],
        [0.75, "tower"],
        [1, NEWLINE],
        [0.25, "you"],
        [0.25, SPACE],
        [0.25, "know"],
        [0.25, SPACE],
        [0.25, "it's"],
        [0.25, SPACE],
        [0.25, "pure"],
        [0.5, SPACE],
        [1, "joy"],
        [0.5, NEWLINE],
        [0.25, "and"],
        [0.25, SPACE],
        [0.25, "that's"],
        [0.25, SPACE],
        [0.25, "my"],
        [0.25, SPACE],
        [0.25, "su"],
        [0.25, PAUSE],
        [0.25, "per"],
        [0.5, "pow"],
        [0.75, "er"],
        [0.5, NEWLINE],
        [0.25, "I'm"],
        [0.25, SPACE],
        [0.25, "a"],
        [0.25, SPACE],
        [0.25, "ca"],
        [0.25, PAUSE],
        [0.5, "reer"],
        [0.25, SPACE],
        [1, "boy"],
        [1, PAUSE],
      ],
      [
        [2, PAUSE],
        [0.5, "ca"],
        [0.5, "reer"],
        [0, SPACE],
        [0.5, "boy"],
        [1.5, NEWLINE],
        [0.25, "you"],
        [0.25, SPACE],
        [0.25, "know"],
        [0.25, SPACE],
        [0.25, "they"],
        [0.25, SPACE],
        [0.25, "got"],
        [0.25, SPACE],
        [0.25, "me"],
        [0.25, NEWLINE],
        [0.25, "work"],
        [0.75, PAUSE],
        [0.5, "ing"],
        [0, SPACE],
        [1, "ove"],
        [0.5, "r"],
        [2, "time"],
        [2, NEWLINE],
        [0.25, "yeah"],
        [1, PAUSE],
      ],
      [
        [2, PAUSE],
        [0.5, "ca"],
        [0.5, "reer"],
        [0, SPACE],
        [0.5, "boy"],
        [2.25, NEWLINE],
        [0.25, "and"],
        [0.25, SPACE],
        [0.25, "you"],
        [0.25, SPACE],
        [0.25, "know"],
        [0.25, SPACE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "got"],
        [0.5, NEWLINE],
        [0.25, "that"],
        [0.25, SPACE],
        [0.25, "one"],
        [0.5, SPACE],
        [0.5, "track"],
        [0.5, SPACE],
        [2, "mind"],
        [1.5, NEWLINE],
        [0.5, "oh"],
        [0, SPACE],
        [0.25, "yeah"],
        [0.5, PAUSE],
      ],
      [
        [1, PAUSE],
        [0.5, "even"],
        [0, SPACE],
        [0.5, "after"],
        [0, SPACE],
        [0.25, "I"],
        [0, SPACE],
        [0.25, "get"],
        [0.25, SPACE],
        [0.25, "what"],
        [0, SPACE],
        [0.25, "I"],
        [0, SPACE],
        [0.25, "want"],
        [0.25, NEWLINE],
        [0.25, "I"],
        [0, SPACE],
        [0.25, "can"],
        [0, SPACE],
        [0.25, "see"],
        [0.25, SPACE],
        [0.25, "ba"],
        [0.25, PAUSE],
        [0.25, "by"],
        [0.25, SPACE],
        [0.25, "ba"],
        [0.25, PAUSE],
        [0.25, "by"],
        [0.75, NEWLINE],
        [0.25, "that"],
        [0.25, SPACE],
        [0.25, "it's"],
        [0.25, SPACE],
        [1.5, "lonely"],
        [0.25, SPACE],
        [0.25, "at"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [2, "top"],
        [2, NEWLINE],
        [0.25, "yeah"],
        [1, PAUSE],
      ],
      [
        [2.5, PAUSE],
        [0.5, "ca"],
        [0.5, "reer"],
        [0, SPACE],
        [1.5, "boy"],
        [1, NEWLINE],
        [0.75, "nothing"],
        [0, SPACE],
        [0.5, "is"],
        [0, SPACE],
        [1.5, "ever"],
        [0, SPACE],
        [1, "gonna"],
        [0, NEWLINE],
        [0.25, "make"],
        [0.75, SPACE],
        [0.25, "me"],
        [0.25, SPACE],
        [2.75, "stop"],
        [1.25, PAUSE],
      ],
      [
        [3.5, PAUSE],
        [0.25, "busi"],
        [0.25, PAUSE],
        [0.25, "ness"],
        [0.25, SPACE],
        [0.25, "or"],
        [0, SPACE],
        [1.5, "pleasure"],
        [2, NEWLINE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "like"],
        [0.75, SPACE],
        [0.25, "to"],
        [0.25, SPACE],
        [0.25, "mix"],
        [0.75, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [2, "two"],
        [5.5, NEWLINE],
        [0.5, "hangin'"],
        [0, SPACE],
        [0.25, "in"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "break"],
        [0.25, SPACE],
        [1, "room"],
        [2, NEWLINE],
        [0.25, "mix"],
        [0.75, PAUSE],
        [0.5, "in'"],
        [0, SPACE],
        [0.25, "it"],
        [0.75, SPACE],
        [0.25, "with"],
        [0.75, SPACE],
        [2, "you"],
        [1, PAUSE],
      ],
    ],
  };
})();

/*

I can never fight the feeling, I stay up all night
Workin' so hard after hours 'til I see the sunlight
Stuck up in the office tower, you know it's pure joy
And that's my superpower, I'm a career boy
Career boy (career boy)
You know they got me working overtime, yeah (working overtime, yeah)
Career boy (career boy)
And you know I got that one track mind, oh-yeah (one track mind)
Even after I get what I want, I can see, baby-baby
That it's lonely at the top, yeah
Career boy
Nothing is ever gonna make me stop
I'm addicted to the work, I
I love the way it hurts, I (uh)
The suits and pencil skirts
I get what I need 'cause I'm greedy for it
'Cause I'm addicted to the pressure (addicted to the pressure)
Yeah, but the burden is a pleasure (burden is a pleasure)
Come on, hit me with your ledger
Close to the edge, face down on the desk, I'm...
Career boy (career boy)
You know they've got me working overtime, yeah (working overtime, yeah)
Career boy (career boy)
And you know I've got that one track mind (one track mind)
Even after I get what I want, I can see, baby-baby
That it's lonely at the top, yeah
Career boy (career boy)
Nothing is ever gonna make me stop (never have to stop)
Career boy (career boy)
Nothing is ever gonna make me stop

*/
