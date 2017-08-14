/**
 * Created by polar on 2017/8/14.
 */
var Game = (function () {
    function Game(canvasElement) {
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        this._scene = new BABYLON.Scene(this._engine);
        this._camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), this._scene);
        this._camera.setTarget(BABYLON.Vector3.Zero());
        this._camera.attachControl(this._canvas, false);
        this._light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this._scene);
        var sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2 }, this._scene);
        // move the sphere upward 1/2 of its height
        sphere.position.y = 1;
        // create a built-in "ground" shape
        var ground = BABYLON.MeshBuilder.CreateGround('ground1', { width: 6, height: 6, subdivisions: 2 }, this._scene);
    };
    Game.prototype.animate = function () {
        var _this = this;
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    //使用canvas创建游戏
    var game = new Game('renderCanvas');
    //创建游戏场景
    game.createScene();
    //游戏动画开始
    game.animate();
});
//# sourceMappingURL=BabylonDemo.js.map