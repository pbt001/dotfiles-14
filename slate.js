/* global slate: true */
/* global screenSizeX: true */
/* global screenSizeY: true */
/* global screenOriginX: true */
/* global screenOriginY: true */


/* default configs
====================================================================== */

slate.configAll({
  "defaultToCurrentScreen": true,
  "windowHintsShowIcons": true,
  "windowHintsIgnoreHiddenWindows": false,
  "windowHintsSpread": true,
  "windowHintsWidth": 50,
  "windowHintsHeight": 50,
  "nudgePercentOf": "screenSize",
  "resizePercentOf": "screenSize",
  "secondsBetweenRepeat": 0.1,
  "checkDefaultsOnLoad": true,
  "focusCheckWidthMax": 3000,
  "modalEscapeKey": "esc"
});


/* operations
====================================================================== */

// show the overlay hints for applications
var hint = slate.operation("hint", { "characters": "ASDFGHJKLQWERTYUIOPCVBN" });


// custom resize grids for all monitors 6x4
var grid = slate.operation("grid", {
  "padding": 10,
  "grids": {
    "0": {
      "width": 6,
      "height": 4
    },
    "1": {
      "width": 6,
      "height": 4
    },
    "2": {
      "width": 6,
      "height": 4
    }
  }
});


// ultrafast application-switching
var iterm = slate.operation("focus", { "app": "iTerm" });
var chrome = slate.operation("focus", { "app": "Google Chrome" });
var mail = slate.operation("focus", { "app": "Mail" });
var fork = slate.operation("focus", { "app": "ForkLift" });


var fullscreen = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY"
});

var lefthalf = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY"
});

var righthalf = slate.operation("move", {
  "x": "screenOriginX + screenSizeX / 2",
  "y": "screenOriginY",
  "width": "screenSizeX / 2",
  "height": "screenSizeY"
});

var tophalf = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY / 2"
});

var bottomhalf = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY + screenSizeY / 2",
  "width": "screenSizeX",
  "height": "screenSizeY / 2"
});

var mobile = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "480",
  "height": "screenSizeY"
});

var tablet = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "1024",
  "height": "768"
});

var desktop = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "1280",
  "height": "800"
});

var fullhd = slate.operation("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "1920",
  "height": "1080"
});


/* Key bindings
====================================================================== */

var hyper = ":shift,ctrl,alt,cmd";
var hyperModal = hyper + ",m:toggle";

slate.bind("tab" + hyper, hint, false);

slate.bind("j" + hyper, iterm, false);
slate.bind("k" + hyper, fork, false);
slate.bind("l" + hyper, chrome, false);
slate.bind(";" + hyper, mail, false);

// movements in modal mode
slate.bind("1" + hyperModal, lefthalf, false);
slate.bind("2" + hyperModal, righthalf, false);
slate.bind("3" + hyperModal, tophalf, false);
slate.bind("4" + hyperModal, bottomhalf, false);
slate.bind("5" + hyperModal, mobile, false);
slate.bind("6" + hyperModal, tablet, false);
slate.bind("7" + hyperModal, desktop, false);
slate.bind("8" + hyperModal, fullhd, false);
slate.bind("space" + hyperModal, fullscreen, false);

