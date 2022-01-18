import './style.css'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(0);

renderer.render(scene, camera);

// Planet Texture
const redDiamond = new THREE.TextureLoader().load("redDiamond.jpg");
const lavaTexture = new THREE.TextureLoader().load("lava.jpg");
const blueLavaTexture = new THREE.TextureLoader().load("blueLava.jpg");

// Objects ---
// Planet Ring
const planetRingGeometry = new THREE.TorusGeometry(20, 3, 2.5, 100);
const planetRingMaterial = new THREE.MeshStandardMaterial({ map: lavaTexture});
const planetRing = new THREE.Mesh(planetRingGeometry, planetRingMaterial);
planetRing.position.set(15,7,-40);
planetRing.rotation.set(1.8,0.4,0);
scene.add(planetRing);

// Planet Ring 2 - Blue
const planetRing2Mat = new THREE.MeshBasicMaterial({map: blueLavaTexture});
var planetRing2 = new THREE.Mesh(planetRingGeometry, planetRing2Mat);
planetRing2.position.set(-50, 30, -10);
planetRing2.rotation.set(1.8,15,0);
scene.add(planetRing2);


// Planet
const planetGeo = new THREE.SphereGeometry(12, 24, 24);
const planetMat = planetRingMaterial;
const planet = new THREE.Mesh(planetGeo, planetMat);
planet.position.set(15,7,-40);
scene.add(planet);

// Planet 2
const planet2Mat = new THREE.MeshBasicMaterial({map: blueLavaTexture});
var planet2 = new THREE.Mesh(planetGeo, planet2Mat);
planet2.position.set(-50, 30, -10);
scene.add(planet2);
// RING NOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

// Planet 2
const planet3Mat = new THREE.MeshBasicMaterial({color: "gray" });
var planet3 = new THREE.Mesh(planetGeo, planet3Mat);
planet3.position.set(-10, 30, -10);
scene.add(planet3);
// COLOR RING NOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE


// Stars 
var stars = [];
function createStar(){
  // Star geo - mat - mesh
  const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
  const starMaterial = new THREE.MeshStandardMaterial({ color: "#47E8C5" });
  const star = new THREE.Mesh(starGeometry, starMaterial);

  // Random star position
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  // Sets random generated position to star position
  star.position.set(x, y, z);
  stars.push(star); // Push star 
  scene.add(star); // Add star to scene
}
// How many stars // Save x number of stars in array
var stars = Array(20).fill().forEach(createStar);

// Lights ---
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Background ---
const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

// Scroll Animation ---
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.01;
  camera.rotation.x = t * -0.0002;
 // camera.position.x = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

//Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Torus.rotation.x += 0.01; // Torus Animation
  planetRing.rotateZ(0.001); // Planet Ring Animation
  planet.rotateY(0.001); // Planet Animation
  planet2.rotateY(0.001); // Planet Animation

  for (let index = 0; index < 11; index++) {
   //const element = stars[index];
   //console.log(element); //TEST
   //element.position.x += 0.01;
 };
 
  renderer.render(scene, camera);
}

animate();

//Text
/*


      <blockquote>
        <p>I like making stuff and putting it on the internet</p>
      </blockquote>

      <section>
        <h2>📜 Manifesto</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section class="light">
        <h2>👩🏽‍🚀 Projects</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>🏆 Accomplishments</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <blockquote>
        <p>The best way out is always through <br>-Robert Frost</p>
      </blockquote>

      <section class="left">
        <h2>🌮 Work History</h2>

        <h3>McDonalds</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Burger King</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Taco Bell</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      
      <blockquote>
        <p>Thanks for watching!</p>
      </blockquote>
*/