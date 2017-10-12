var camera,scene,renderer,controls;
var particleLight;
var pbrMat;
var params;
init();
animate();
function init(){
    params = {
        exposure:0.68,
        metalness:1,
        roughness:0.2
    };

    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
    camera.position.z = 4;
    camera.position.y = 0.5;
    controls = new  THREE.OrbitControls(camera);

    scene = new THREE.Scene();
    var textureCube = new THREE.CubeTextureLoader()
            .setPath("resources/textures/pisa/")
            .load( [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ] );
    scene.background = textureCube;
    var genCubeUrls = function (prefix,postfix) {
        return [
            prefix + 'px' + postfix,            prefix + 'nx' + postfix,
            prefix + 'py' + postfix,            prefix + 'ny' + postfix,
            prefix + 'pz' + postfix,            prefix + 'nz' + postfix,
        ];
    };

    var hdrUrls = genCubeUrls('resources/textures/pisaHDR/','.hdr');
    var hdrCubeRenderTarget = null;
    var albedoTexture = new THREE.TextureLoader().load("resources/textures/pbr/rusted_iron/albedo.png");
    albedoTexture.wrapS = albedoTexture.wrapT = THREE.RepeatWrapping;
    albedoTexture.anisotropy = 16;
    var normalTexture = new THREE.TextureLoader().load("resources/textures/pbr/rusted_iron/normal.png");
    normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;

    new THREE.HDRCubeTextureLoader().load(THREE.UnsignedByteType,hdrUrls,function(hdrCubeMap){
        var pmremGenerator = new THREE.PMREMGenerator(hdrCubeMap);
        pmremGenerator.update(renderer);

        var pmreCumeUVPacker = new THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods);
        pmreCumeUVPacker.update(renderer);

        hdrCubeRenderTarget = pmreCumeUVPacker.CubeUVRenderTarget;

        var material = new THREE.MeshStandardMaterial(
            {
                map:albedoTexture,
                normalMap:new THREE.TextureLoader().load("resources/textures/pbr/rusted_iron/normal.png"),
                aoMap:new THREE.TextureLoader().load("resources/textures/pbr/rusted_iron/ao.png"),
                metalnessMap:new THREE.TextureLoader().load("resources/textures/pbr/rusted_iron/metallic.png"),
                roughnessMap:new THREE.TextureLoader().load("resources/textures/pbr/rusted_iron/roughness.png"),
                envMap:hdrCubeRenderTarget.texture
            }
        );
        var mesh = new THREE.Mesh(new THREE.SphereBufferGeometry(1,32,32),material);
        mesh.position.x = -1.5;
        scene.add( mesh );

        pbrMat = new THREE.MeshStandardMaterial(
            {
                envMap:hdrCubeRenderTarget.texture
            });
        mesh = new THREE.Mesh(new THREE.SphereBufferGeometry(1,32,32),pbrMat);
        scene.add( mesh );
        mesh.position.x = 1.5;
    });


    //添加灯光
    scene.add(new THREE.AmbientLight(0x222222));
    var directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(1,1,1).normalize();
    scene.add(directionalLight);

    particleLight = new THREE.Mesh(new THREE.SphereBufferGeometry(0.1,8,8),new THREE.MeshBasicMaterial({color:0xffffff}));
    particleLight.add(new THREE.PointLight(0xcccccc,1,10));
    scene.add(particleLight);

    renderer = new THREE.WebGLRenderer( { antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.toneMapping = THREE.Uncharted2ToneMapping;
    renderer.toneMappingExposure = 0.75;

    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize",onWindowResize,false);



    //gui
    var gui = new dat.GUI();
    gui.add(params, "exposure",0,1);
    gui.add(params, "metalness",0,1);
    gui.add(params, "roughness",0,1);
    gui.open();
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}

function animate(){
    requestAnimationFrame(animate);
    var time = Date.now() * 0.00025;

    particleLight.position.x = Math.sin(time * 7) * 3;
    particleLight.position.y = Math.sin(time * 5) * 4;
    particleLight.position.z = Math.sin(time * 3) * 3;

    render();
}

function render(){
    renderer.toneMappingExposure = params.exposure;
    if(pbrMat){
        pbrMat.metalness = params.metalness;
        pbrMat.roughness = params.roughness;
    }
    renderer.render(scene,camera);
}