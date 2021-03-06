(function () {
  var NEWLINE = "\n";
  var SPACE = " ";
  var PAUSE = "";

  window.songData = {
    bpm: 120,
    offset: -6,
    images: [-10, -3, 48, 80, 111, 144, 177, 219],
    lyrics: [
      [
        [2.5, "• • • "],
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
      ],
      [[5.5, PAUSE]],
      [
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
      ],
      [[6, PAUSE]],
      [
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
      ],
      [[5.5, PAUSE]],
      [
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
      ],
      [[3, PAUSE]],
      [
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
      ],
      [[1.25, PAUSE]],
      [
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
      ],
      [[3, PAUSE]],
      [
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
      ],
      [[3, PAUSE]],
      [
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
      ],
      [[1.5, PAUSE]],
      [
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
      ],
      [[3.5, PAUSE]],
      [
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
      ],
      [[4.75, PAUSE]],
      [
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
      ],
      [[5.5, PAUSE]],
      [
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
      ],
      [[3.5, PAUSE]],
      [
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "can"],
        [0.25, SPACE],
        [0.5, "never"],
        [0.25, SPACE],
        [0.25, "fight"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.5, "feeling"],
        [1, NEWLINE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "stay"],
        [0.25, SPACE],
        [0.25, "up"],
        [0.25, SPACE],
        [0.5, "all"],
        [0.25, SPACE],
        [0.25, "night"],
        [1, NEWLINE],
        [0.5, "workin'"],
        [0, SPACE],
        [0.25, "so"],
        [0.5, SPACE],
        [0.25, "hard"],
        [0.5, SPACE],
        [0.5, "after"],
        [0, SPACE],
        [1, "hours"],
        [0.5, NEWLINE],
        [0.25, "'til"],
        [0.25, SPACE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "see"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [1, "sun"],
        [0.5, "light"],
      ],
      [[1, PAUSE]],
      [
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
      ],
      [[3, PAUSE]],
      [
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
      ],
      [[2.75, PAUSE]],
      [
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
      ],
      [[1.5, PAUSE]],
      [
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
      ],
      [[3.5, PAUSE]],
      [
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
      [[4, PAUSE]],
      [
        [0.25, "I'm"],
        [0.25, SPACE],
        [1.25, "addicted"],
        [0.25, SPACE],
        [0.25, "to"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "work,"],
        [0.75, SPACE],
        [0.5, "I"],
        [3.5, NEWLINE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "love"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "way"],
        [0.25, SPACE],
        [0.25, "it"],
        [0.25, SPACE],
        [0.25, "hurts,"],
        [0.75, SPACE],
        [0.5, "I"],
        [1.5, NEWLINE],
        [0.25, "uh"],
      ],
      [[2.75, PAUSE]],
      [
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "suits"],
        [0.25, SPACE],
        [0.25, "and"],
        [0.25, SPACE],
        [0.5, "pencil"],
        [0.25, SPACE],
        [0.5, "skirts"],
        [1, NEWLINE],
        [0.25, "I"],
        [0.25, SPACE],
        [0.25, "get"],
        [0.75, SPACE],
        [0.25, "what"],
        [0, SPACE],
        [0.25, "I"],
        [0, SPACE],
        [0.5, "need"],
        [1, NEWLINE],
        [0.25, "'cause"],
        [0, SPACE],
        [0.25, "I'm"],
        [0, SPACE],
        [0.25, "gree"],
        [0.75, PAUSE],
        [0.25, "dy"],
        [0.75, SPACE],
        [0.5, "for"],
        [0.5, SPACE],
        [0.5, "it"],
      ],
      [[3, PAUSE]],
      [
        [0.25, "'cause"],
        [0.25, SPACE],
        [0.25, "I'm"],
        [0.25, SPACE],
        [1.25, "addicted"],
        [0.25, SPACE],
        [0.25, "to"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.5, "pres"],
        [0.5, PAUSE],
        [0.5, "sure"],
        [3, NEWLINE],
        [0.25, "yeah"],
        [0.25, SPACE],
        [0.25, "but"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "bur"],
        [0.25, PAUSE],
        [0.25, "den"],
        [0.25, SPACE],
        [0.25, "is"],
        [0.25, SPACE],
        [0.25, "a"],
        [0.25, SPACE],
        [0.5, "plea"],
        [0.5, PAUSE],
        [0.5, "sure"],
      ],
      [[3.5, PAUSE]],
      [
        [0.25, "come"],
        [0, SPACE],
        [0.25, "on,"],
        [0.75, SPACE],
        [0.25, "hit"],
        [0.25, SPACE],
        [0.25, "me"],
        [0.25, SPACE],
        [0.25, "with"],
        [0.25, SPACE],
        [0.25, "your"],
        [0.25, SPACE],
        [0.5, "led"],
        [0.5, PAUSE],
        [0.5, "ger"],
        [0.25, NEWLINE],

        [0.25, "close"],
        [1.5, SPACE],
        [0.25, "to"],
        [0, SPACE],
        [0.25, "the"],
        [0, SPACE],
        [0.25, "edge"],
        [1.25, NEWLINE],
        [0.25, "face"],
        [0.25, SPACE],
        [0.5, "down"],
        [0.5, SPACE],
        [0.25, "on"],
        [0.25, SPACE],
        [0.25, "the"],
        [0.25, SPACE],
        [0.25, "desk,"],
        [0.75, SPACE],
        [0.25, "I'm"],
        [0.25, SPACE],
      ],
      [[3.25, PAUSE]],
      [
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
      ],
      [[2.75, PAUSE]],
      [
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
      ],
      [[3.75, PAUSE]],
      [
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
      ],
      [[3.5, PAUSE]],
      [
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
      ],
      [[4.5, PAUSE]],
      [
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
    ],
  };
})();
