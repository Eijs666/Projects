//import { OrbitControls } from "./three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();
//Camera - fov / aspect / near / far
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//Renderer into the canvas - render = draws into canvas
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#bg"),
});
//Render to device ratio (16:9)
renderer.setPixelRatio(window.devicePixelRatio);
//Make it fullscreen
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera); //We draw scene and camera into canvas

//Sphere
const geometry = new THREE.SphereGeometry(0.25, 24, 24);
const material = new THREE.MeshBasicMaterial({color: "white", wireframe: true});
const star = new THREE.Mesh(geometry, material);

//Torso 
const geo = new THREE.TorusGeometry(10, 3, 16, 100);
const mat = new THREE.MeshBasicMaterial({color: "blue"});
const torso = new THREE.Mesh(geo, mat);

scene.add(torso); //Add object to scene
scene.add(star); //Add object to scene

//Light
const pointLight = new THREE.PointLight("white");
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight("white");
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

/*
function addStar() {
	const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: "white"});
    const star = new THREE.Mesh(geometry, material);
	
    //Create random x y z position
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z);
    
    scene.add(star);
	
}

//Controls
//const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
	requestAnimationFrame(animate);
	torso.rotation.x += 0.01;
	torso.rotation.y += 0.005;
	torso.rotation.z += 0.01;

	controls.update();

	//renderer.render(scene, camera);
}
*/

//animate();