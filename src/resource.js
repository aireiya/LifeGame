var res = {
  spritesheet_plist : "res/spritesheet.plist",
  spritesheet_png : "res/spritesheet.png",
  clear_png:"res/game_clear.png",
  bgm_main : "res/view.mp3",            //BGM
  bgm_clear : "res/Clear.mp3",
  nextstage_png : "res/nextstage.png",
  clearback_png : "res/souko.jpg",
  back_png : "res/background_W.png",
  back_B_png : "res/background_B.png",
  start_png : "res/start.png",
  bgm_start : "res/tw050.mp3",
  red_png : "res/red.png",
  blue_png : "res/blue.png",
  yellow_png : "res/yellow.png",
  wight_png : "res/wight.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
