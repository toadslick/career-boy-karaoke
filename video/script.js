(function () {
  var TEXT_CLASS_NAME = "kara-text";
  var HIGHLIGHT_CLASS_NAME = "kara-text-highlight";
  var ACTIVE_GROUP_CLASS_NAME = "kara-active";
  var SEGMENT_CLASS_NAME = "kara-segment";
  var NEWLINE_CLASS_NAME = "kara-newline";

  var NEWLINE = "\n";

  var BEAT_DURATION = 60 / window.songData.bpm;
  var OFFSET = window.songData.offset;

  var groupContainer = document.getElementById("kara-group-container");

  function creategroupNode() {
    var node = document.createElement("div");
    node.classList.add("kara-group");
    groupContainer.appendChild(node);
    return node;
  }

  function createSegmentNode(text, groupNode) {
    var node = document.createElement("div");
    node.classList.add(
      text === NEWLINE ? NEWLINE_CLASS_NAME : SEGMENT_CLASS_NAME
    );
    node.innerHTML =
      "<div class='" +
      TEXT_CLASS_NAME +
      "'>" +
      text +
      "</div><div class='" +
      HIGHLIGHT_CLASS_NAME +
      "'>" +
      text +
      "</div>";
    groupNode.appendChild(node);
    return node;
  }

  function animateSegmentNode(node, percent) {
    node.lastElementChild.style.setProperty("width", percent * 100 + "%");
  }

  var totalDuration = 0;
  var segmentGroups = [];

  window.songData.lyrics.forEach(function (group) {
    var segmentGroup = {
      start: totalDuration,
      node: creategroupNode(),
      segments: [],
    };

    group.forEach(function (segment) {
      var endTime = totalDuration + BEAT_DURATION * segment[0];
      segmentGroup.segments.push({
        start: totalDuration,
        end: endTime,
        node: createSegmentNode(segment[1], segmentGroup.node),
      });
      totalDuration = endTime;
    });

    segmentGroup.end = totalDuration;
    segmentGroups.push(segmentGroup);
  });

  var runLoop = function (time, browser, currentFrame, frameRate) {
    var currentSongTime = currentFrame / frameRate + OFFSET;
    segmentGroups.forEach(function (group) {
      if (currentSongTime > group.start && currentSongTime <= group.end) {
        group.node.classList.add(ACTIVE_GROUP_CLASS_NAME);
        group.segments.forEach(function (segment) {
          var duration = segment.end - segment.start;
          var elapsed = currentSongTime - segment.start;
          var percent = duration
            ? Math.max(0, Math.min(1, elapsed / duration))
            : 0;
          animateSegmentNode(segment.node, percent);
        });
      } else {
        group.node.classList.remove(ACTIVE_GROUP_CLASS_NAME);
      }
    });
  };

  // This is where webvfx expects to find custom effect functions.
  window.webvfx_add_to_frame = [runLoop];
})();
