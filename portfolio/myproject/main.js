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
// Planet Ring 1 - Red Diamond
const planetRingGeometry = new THREE.TorusGeometry(20, 3, 2.5, 100);
const planetRingMaterial = new THREE.MeshStandardMaterial({ map: redDiamond});
const planetRing = new THREE.Mesh(planetRingGeometry, planetRingMaterial);
planetRing.position.set(15,-2,-40);
planetRing.rotation.set(1.8,0.4,0);
scene.add(planetRing);

// Planet Ring 2 - BlueLava
const planetRing2Mat = new THREE.MeshBasicMaterial({map: blueLavaTexture});
var planetRing2 = new THREE.Mesh(planetRingGeometry, planetRing2Mat);
planetRing2.position.set(-50, 30, -10);
planetRing2.rotation.set(1.8,15,0);
scene.add(planetRing2);

// Planet Ring 3 - Lava
const planetRing3Mat = new THREE.MeshBasicMaterial({map: lavaTexture});
var planetRing3 = new THREE.Mesh(planetRingGeometry, planetRing3Mat);
planetRing3.position.set(20,30,20);
planetRing3.rotation.set(5,-0.6,0);
scene.add(planetRing3);


// Planet 1 - Red Diamond
const planetGeo = new THREE.SphereGeometry(12, 24, 24);
const planetMat = planetRingMaterial;
const planet = new THREE.Mesh(planetGeo, planetMat);
planet.position.set(15,-2,-40);
scene.add(planet);

// Audio ---
const listener = new THREE.AudioListener(); // Audiolistener
planet.add(listener); // Add listener to an object

const sound = new THREE.Audio(listener); // Global audio source

// Load a sound - set audio to object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load("spaceAudio.mp4", function(buffer){
  sound.setBuffer(buffer); // Set audio to a space in memory
  sound.setLoop(true); // Loop audio
  sound.setVolume(0.5); // Volume
  sound.play(); // Play audio
});



// Planet 2 - Blue Lava
const planet2Mat = new THREE.MeshBasicMaterial({map: blueLavaTexture});
var planet2 = new THREE.Mesh(planetGeo, planet2Mat);
planet2.position.set(-50, 30, -10);
scene.add(planet2);

// Planet 3 - Lava
const planet3Mat = new THREE.MeshBasicMaterial({map: lavaTexture });
var planet3 = new THREE.Mesh(planetGeo, planet3Mat);
planet3.position.set(20, 30, 20);
scene.add(planet3);

// Stars 
var stars = [];
function createStar(){
  // Star geo - mat - mesh
  const starGeometry = new THREE.SphereGeometry(0.25, 24, 24);
  const starMaterial = new THREE.MeshStandardMaterial({ color: "#47E8C5" });
  const star = new THREE.Mesh(starGeometry, starMaterial);

  // Random star position
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));
  // Sets random generated position to star position
  star.position.set(x, y, z);
  stars.push(star); // Push star 
  scene.add(star); // Add star to scene
}
// How many stars // Save x number of stars in array
stars = Array(0).fill().forEach(createStar);

// Shooting Star ---
var starShot; // Global variable to reference animation
var isStarShot = false;
function shootingStar(){
  randomNumber(); // Generate y float for this star
  const shootGeo = new THREE.SphereGeometry(1, 24, 24);
  const shootMat = new THREE.MeshStandardMaterial({ color: "white" });
  const shootStar = new THREE.Mesh(shootGeo, shootMat);
  // Start position
  shootStar.position.set(-700,0,-200);

  starShot = shootStar; // Fill the empty star with new created star
  scene.add(starShot); //Display star

  isStarShot = true;
//  deleteObject(starShot);
}
// Get button reference
const btnShoot = document.getElementById("btnShoot");
// When button is clicked shoot a star
btnShoot.addEventListener("click", shootingStar);
shootingStar();

/*
// DELETE object (stars) - Maintain memory space
function deleteObject(obj){
  setTimeout(function() {
    THREE.deleteObject(obj);
    obj = deleteObject;
    console.log("Deleted: " + obj);
  }, 5000);
};
// HELLOOOOOOOOOOOOOOOOOOOOOOOO FIX DELETE
*/

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

  camera.position.z = (t * 1.5) * -0.01;
  camera.rotation.x = t * -0.0002;
 // camera.position.x = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Generate Random Number
var randomNum;
function randomNumber(){
  const ranNum = Math.random() * (1.5 - -1) + -1;
  randomNum = ranNum;
}


// Animation Loop ---
function animate() {
  requestAnimationFrame(animate);

  // Planet Rings Animation
  planetRing.rotateZ(0.001); 
  planetRing2.rotateZ(-0.001);  
  planetRing3.rotateZ(-0.001);

  // Planets Animations
  planet.rotateY(0.001);
  planet2.rotateY(0.001);
  planet3.rotateY(0.001);

  if(isStarShot){
    starShot.position.x += 5;
   starShot.position.y += randomNum;
  }else{
    return;
  }
  
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