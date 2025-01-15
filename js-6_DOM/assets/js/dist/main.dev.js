"use strict";

var currentColorIndex = 0;

function changeColor() {
  var lightsItem = document.querySelectorAll(".lights li");

  for (var i = 0; i < lightsItem.length; i++) {
    lightsItem[i].style.opacity = "0.3";
  }

  lightsItem[currentColorIndex].style.opacity = "1";
  currentColorIndex = (currentColorIndex + 1) % lightsItem.length;
}

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var songsList = document.getElementById("songs-list");
var songsItem;

for (var i in playList) {
  songsItem += "<li>".concat(playList[i]["author"], " - ").concat(playList[i]["song"], "</li>");
}

songsList.innerHTML = songsItem;

function closeModal() {
  var modalWindow = document.getElementById("window-content");
  modalWindow.style.display = "none";
}

function openModal() {
  var modalWindow = document.getElementById("window-content");
  modalWindow.style.display = "block";
}