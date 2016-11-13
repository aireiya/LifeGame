var map = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],

];
var size;

var cratesArray = [];　 //配列オブジェクトの生成
var cratesArray_map = []; //バックで戻る方の木箱配列
var def_crates = []; //リセット用生成

var winSize;

var gameScene = cc.Scene.extend({
  onEnter: function() {
    this._super();
    winSize = cc.director.getWinSize();

    var layer0 = new gameLayer();
    layer0.init();
    this.addChild(layer0);

  }
});

var gameLayer = cc.Layer.extend({
  init: function() {
    this._super();

    var backgroundSprite = cc.Sprite.create(res.back_png);
    //アンチエイリアス処理を止める
    backgroundSprite.getTexture().setAliasTexParameters();

    backgroundSprite.setPosition(winSize.width / 2, winSize.height / 2);
    this.addChild(backgroundSprite);

    var BLback = cc.Sprite.create(res.back_B_png);
    //アンチエイリアス処理を止める
    BLback.getTexture().setAliasTexParameters();

    BLback.setPosition(winSize.width / 2, winSize.height * 0.6);
    this.addChild(BLback);


        for (i = 0; i < 14; i++) {　　　　　　
          cratesArray[i] = [];　 //配列オブジェクトの生成
          def_crates[i] = []; //リセット用生成
          for (j = 0; j < 14; j++) {
            switch (map[i][j]) {
              case 0:
                var crateSprite = cc.Sprite.create(res.wight_png);

              break;
              case 1:
                var crateSprite = cc.Sprite.create(res.red_png);

              break;
              case 2:
                var crateSprite = cc.Sprite.create(res.yellow_png);

              break;
              case 3:
                var crateSprite = cc.Sprite.create(res.blue_png);

              break;


              default:
                cratesArray[i][j] = null;//木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する

                var def = cratesArray[i][j];
                def_crates[i][j] = def;
                break;
            }
            crateSprite.setPosition(310 + 26 * j,  555 - 26 * i);
            this.addChild(crateSprite);
            cratesArray[i][j] = crateSprite;//(i,j)の位置にcrateSpriteを入れる

            var def = cratesArray[i][j];
            def_crates[i][j] = def;
          }
        }

        // タップイベントリスナーを登録する
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: true,
                    onTouchBegan: this.onTouchBegan,
                    onTouchMoved: this.onTouchMoved,
                    onTouchEnded: this.onTouchEnded
                }, this);
                

        return true;

  },
  onTouchBegan: function(touch, event) {
    if(touch.getLocation().x < 460 && touch.getLocation().y < 30 && touch.getLocation().x > 310 && touch.getLocation().y > 10 ){
      console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
      var a = cc.TransitionFade.create(2.0, new StageSelectScene());
      cc.director.runScene(a);
    }
    if(touch.getLocation().x < 330 && touch.getLocation().y < 320 && touch.getLocation().x > 150 && touch.getLocation().y > 100 ){
      console.log("たっち" + touch.getLocation().x +" " + touch.getLocation().y);
      //cc.director.runScene(new GameOverScene());
    }
  },
  onTouchMoved: function(touch, event) {},
  onTouchEnded: function(touch, event) {},

  update: function(dt) {
    //スタート押したら動くように、ontouchでフラグ立て
    //法則入れる　消えるときはmap[i][j]を-1、生まれるときは+1、0から生まれるときは+3
  },
});
