/**
 * Created by polar on 2017/10/12.
 */
var scene,camera,renderer;
var clock;
var object;
init();
animate();

function init(){
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,300);
    camera.position.z = 10;
    camera.position.y = 1.5;

    var control = new THREE.OrbitControls(camera);

    clock = new THREE.Clock();

    scene = new THREE.Scene();

    var geomery = new THREE.BoxBufferGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial();
    object = new THREE.Mesh(geomery,material);
    scene.add(object);

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
    var time = clock.getElapsedTime();
    var quaternion = object.quaternion;
    var rotQuat = new THREE.Quaternion();
    rotQuat.setFromAxisAngle(new THREE.Vector3(0,1,0),delta);
    object.setRotationFromQuaternion(quaternion.multiply(rotQuat));
    object.position.y = 2 * Math.sin(time);
    renderer.render(scene,camera);
}
