(function () {
  var TEXT_CLASS_NAME = "kara-text";
  var HIGHLIGHT_CLASS_NAME = "kara-text-highlight";
  var NEWLINE = "\n";

  var BEAT_DURATION = 60 / window.songData.bpm;
  var OFFSET = window.songData.offset;

  var segmentContainer = document.getElementById("kara-segments-container");

  function createSegmentNode(text) {
    var container = document.createElement("div");
    container.classList.add("kara-segment");
    container.innerHTML =
      "<span class='" +
      TEXT_CLASS_NAME +
      "'>" +
      text +
      "</span><span class='" +
      HIGHLIGHT_CLASS_NAME +
      "'>" +
      text +
      "</span>";
    segmentContainer.appendChild(container);
    return container;
  }

  function animateSegmentNode(node, percent) {
    node.lastElementChild.style.setProperty("width", percent * 100 + "%");
  }

  var totalDuration = 0;
  var segments = [];

  window.songData.lyrics.forEach(function (lyric) {
    const endTime = totalDuration + BEAT_DURATION * lyric[0];
    segments.push({
      start: totalDuration,
      end: endTime,
      node: createSegmentNode(lyric[1]),
    });
    totalDuration = endTime;
  });

  var runLoop = function (time, browser, currentFrame, frameRate) {
    const currentSongTime = currentFrame / frameRate + OFFSET;
    segments.forEach(function (segment, index) {
      var duration = segment.end - segment.start;
      var elapsed = currentSongTime - segment.start;
      var percent = duration ? Math.max(0, Math.min(1, elapsed / duration)) : 0;
      animateSegmentNode(segment.node, percent);
    });
  };

  // This is where webvfx expects to find custom effect functions.
  window.webvfx_add_to_frame = [runLoop];
})();
