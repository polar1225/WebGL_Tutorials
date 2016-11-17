/**
 * Created by polar on 2016/11/16.
 */
window.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var sphere;
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, false);
        var light = new BABYLON.HemisphericLight("light0", new BABYLON.Vector3(0, 1, 0), scene);
        sphere = new BABYLON.Mesh.CreateSphere("sphere", 24, 1, scene);
        sphere.position.y = 1;
        var anim = new BABYLON.Animation("anim1", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keys = [];
        keys.push({ frame: 0, value: -5 });
        keys.push({ frame: 50, value: 0 });
        keys.push({ frame: 100, value: 5 });
        anim.setKeys(keys);
        var easingFunc = new BABYLON.CircleEase();
        easingFunc.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        anim.setEasingFunction(easingFunc);
        sphere.animations.push(anim);
        scene.beginAnimation(sphere, 0, 100, true, 1);
        var ground = new BABYLON.Mesh.CreateGround("plane", 10, 10, 2, scene);
        return scene;
    };
    var scene = createScene();
    var update = function () {
        scene.render();
    };
    engine.runRenderLoop(function () {
        update();
    });
    window.addEventListener("resize", function () {
        engine.resize();
    });
});
//# sourceMappingURL=HelloBabylon.js.map