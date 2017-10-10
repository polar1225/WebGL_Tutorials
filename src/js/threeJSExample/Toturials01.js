var camera,scene,renderer;
var mesh;

init();
animate();
function init(){
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 4;
    camera.position.y = 0.5;

    scene = new THREE.Scene();

    var texture = new THREE.TextureLoader().load("resources/textures/crate.gif");
    var geomery = new THREE.BoxBufferGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial({map:texture });

    mesh = new THREE.Mesh(geomery,material);
    scene.add(mesh);

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
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render(scene,camera);
}