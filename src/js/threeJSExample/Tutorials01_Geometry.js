var camera,scene,renderer;
var mesh;

var planeGeom;
var plane;

var clock;

init();
animate();
function init(){
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 10;
    camera.position.y = 1.5;
    var controls = new THREE.OrbitControls(camera);

    clock = new THREE.Clock();
    scene = new THREE.Scene();


    var texture = new THREE.TextureLoader().load("resources/textures/crate.gif");
    var geomery = new THREE.BoxBufferGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({map:texture });

    mesh = new THREE.Mesh(geomery,material);
    scene.add(mesh);

    planeGeom = new THREE.PlaneGeometry(10,10,30,30);
    planeGeom.rotateX(-Math.PI / 2.0);
    for(var i = 0,l = planeGeom.vertices.length; i < l; ++i){
        planeGeom.vertices[i].y = 0.5 * Math.sin(i / 5);
    }
    plane = new THREE.Mesh(planeGeom,material);
    scene.add(plane);
    plane.position.y -= 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize",onWindowResize,false);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}

function animate(){
    requestAnimationFrame(animate);
    render();
}

function render(){
    var delta = clock.getDelta();
    var time = clock.getElapsedTime() * 10;

    for(var i = 0,l = planeGeom.vertices.length; i < l; ++i){
        planeGeom.vertices[i].y = 0.5 * Math.sin(i / 5 + time);
    }
    plane.geometry.verticesNeedUpdate = true;
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render(scene,camera);
}