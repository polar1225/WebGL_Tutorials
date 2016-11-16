import Mesh = BABYLON.Mesh;
import Light = BABYLON.Light;
/**
 * Created by polar on 2016/11/16.
 */
window.addEventListener("DOMContentLoaded",()=>{
    let canvas = <HTMLCanvasElement>document.getElementById("renderCanvas");

    let engine = new BABYLON.Engine(canvas, true);

    var createScene = function () {
        let scene = new BABYLON.Scene(engine);
        let camera= new BABYLON.FreeCamera("camera",new BABYLON.Vector3(0,5,-10),scene);

        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas,false);

        let light:Light = new BABYLON.HemisphericLight("light0",new BABYLON.Vector3(0,1,0),scene);

        let sphere:Mesh = new BABYLON.Mesh.CreateSphere("sphere",24,1,scene);
        sphere.position.y = 1;

        let ground = new BABYLON.Mesh.CreateGround("plane",10,10,2,scene);

        return scene;
    }
    let scene = createScene();
    engine.runRenderLoop(()=>{
        scene.render();
    });

    window.addEventListener("resize",()=>{
        engine.resize();
    })

});