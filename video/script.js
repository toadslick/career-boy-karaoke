(function () {
  var TEXT_CLASS_NAME = "kara-text";
  var HIGHLIGHT_CLASS_NAME = "kara-text-highlight";
  var ACTIVE_GROUP_CLASS_NAME = "kara-active";
  var SEGMENT_CLASS_NAME = "kara-segment";
  var NEWLINE_CLASS_NAME = "kara-newline";
  var IMAGE_CLASS_NAME = "kara-image";

  var NEWLINE = "\n";

  var BEAT_DURATION = 60 / window.songData.bpm;
  var OFFSET = window.songData.offset;

  var groupContainer = document.getElementById("kara-group-container");
  var imageContainer = document.getElementById("kara-image-container");

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

  function createImageNode(index) {
    var node = document.createElement("div");
    node.classList.add(IMAGE_CLASS_NAME);
    node.style.setProperty(
      "background-image",
      "url(../images/" + index + ".png)"
    );
    imageContainer.appendChild(node);
    return node;
  }

  function percentElapsed(start, end, songTime) {
    var duration = end - start;
    var elapsed = songTime - start;
    return Math.max(0, Math.min(1, elapsed / duration));
  }

  function animateSegmentGroup(group, songTime) {
    var percentTop = percentElapsed(group.start - 10, group.end + 16, songTime);
    var percentOpacity = percentElapsed(
      group.start - 5,
      group.end + 2,
      songTime
    );
    group.node.style.setProperty("top", 100 - percentTop * 200 + "vh");
    group.node.style.setProperty(
      "opacity",
      1 - Math.pow(Math.cos(Math.PI * percentOpacity), 30)
    );
  }

  function animateSegment(segment, songTime) {
    var percent = percentElapsed(segment.start, segment.end, songTime);
    segment.node.lastElementChild.style.setProperty(
      "width",
      percent * 100 + "%"
    );
  }

  function animateImage(image, songTime) {
    var fadeDuration = 2;
    var fadeStart = image.start - fadeDuration;
    var fadeEnd = image.start;
    var percent = percentElapsed(fadeStart, fadeEnd, songTime);
    image.node.style.setProperty("opacity", percent);
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

  var images = window.songData.images.map(function (startTime, index) {
    return {
      start: startTime,
      node: createImageNode(index),
    };
  });

  var runLoop = function (time, browser, currentFrame, frameRate) {
    var currentSongTime = currentFrame / frameRate + OFFSET;
    segmentGroups.forEach(function (group) {
      animateSegmentGroup(group, currentSongTime);
      group.segments.forEach(function (segment) {
        animateSegment(segment, currentSongTime);
      });
    });
    images.forEach(function (image) {
      animateImage(image, currentSongTime);
    });
  };

  // This is where webvfx expects to find custom effect functions.
  window.webvfx_add_to_frame = [runLoop];
})();
