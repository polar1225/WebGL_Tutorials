/**
 * Created by polar on 2016/11/16.
 */
window.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, false);
        var light = new BABYLON.HemisphericLight("light0", new BABYLON.Vector3(0, 1, 0), scene);
        var sphere = new BABYLON.Mesh.CreateSphere("sphere", 24, 1, scene);
        sphere.position.y = 1;
        var ground = new BABYLON.Mesh.CreateGround("plane", 10, 10, 2, scene);
        return scene;
    };
    var scene = createScene();
    engine.runRenderLoop(function () {
        scene.render();
    });
    window.addEventListener("resize", function () {
        engine.resize();
    });
});
//# sourceMappingURL=HelloBabylon.js.map