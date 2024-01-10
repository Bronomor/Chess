import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader  } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// board

// 0 <- empty field
// 1 <- white pawn
// 3 <- white bishop
// 4 <- white knight
// 5 <- white rock
// 8 <- white queen
// 9 <- white king
// -1 <- black pawn
// -3 <- black bishop
// -4 <- blackknight
// -5 <- black rock
// -8 <- black queen
// -9 <- black king

let board = [
	[-5,-4,-3,-9,-8,-3,-4,-5 ],
	[-1,-1,-1,-1,-1,-1,-1,-1 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 0, 0, 0, 0, 0, 0, 0, 0 ],
	[ 1, 1, 1, 1, 1, 1, 1, 1 ],
	[ 5, 4, 3, 9, 8, 3, 4, 5 ]
]

// renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


//controls 
EventsControls = new EventsControls( camera, renderer.domElement );
EventsControls.attachEvent( 'onclick', function() {

	if ( this.focused.name )
    {
		king.position.set(king.position.x+12, king.position.y, king.position.z);
	}
	console.log( 'this.focused.name: ' + this.focused.name );

});

// light
const light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

//camera controls
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-89, 181, -5);
orbit.target.set(60, 41, -4);
orbit.update();

// Floor
const planeGeometry = new THREE.PlaneGeometry(450, 450);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x964B00});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

// objects
const kingObj = new URL('../models/king.obj', import.meta.url);
const tableObj = new URL('../models/Tabel/table.fbx', import.meta.url);
const chessBoardObj = new URL('../models/chessboard.fbx', import.meta.url);
const fullChessboardObj = new URL('../models/full.fbx', import.meta.url);

// handlers

const king = new THREE.Object3D();
const table = new THREE.Object3D(); 
const chessboard = new THREE.Object3D(); 
const fullChessboard = new THREE.Object3D(); 

// loaders

const loader = new OBJLoader();
const tableLoader = new FBXLoader();
const chessboardLoader = new FBXLoader();
const fullChessboardLoader = new FBXLoader();

// load a resource
loader.load( // resource URL
	kingObj, // called when resource is loaded
	(object) => {
		king.add(object);
		king.position.set(-42, 110, -6);
		king.scale.multiplyScalar(2); 
		scene.add( king );
		EventsControls.attach( king );

	},
	// called when loading is in progresses
	function ( xhr ) { console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
	// called when loading has errors
	function ( error ) { console.log( 'An error happened' ); }
);

tableLoader.load(
	tableObj.href,
	(object) => {
		table.add(object);
		table.position.set(0,50,0);
		scene.add( table );
	},
	function ( xhr ) { console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
	function ( error ) { console.log( 'An error happened' ); }
);

chessboardLoader.load(
	chessBoardObj.href,
	(object) => {
		chessboard.add(object);
		chessboard.scale.multiplyScalar(0.02); 
		chessboard.position.set(0,110,0);
		scene.add( chessboard );
	},
	function ( xhr ) { console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
	function ( error ) { console.log( 'An error happened' ); }
);

fullChessboardLoader.load(
	fullChessboardObj.href,
	(object) => {
		console.log(object)
		fullChessboard.add(object);
		fullChessboard.scale.multiplyScalar(0.02); 
		fullChessboard.position.set(0,110,0);
		//scene.add( fullChessboard );
	},
	function ( xhr ) { console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
	function ( error ) { console.log( 'An error happened' ); }
);

function animate()
{
    renderer.render( scene, camera );
}
renderer.setAnimationLoop(animate);

//var loc = window.location.pathname;
//var dir = loc.substring(0, loc.lastIndexOf('/'));
//console.log(object);
//console.log(dir);
//console.log(loc);
//console.log('Current directory: ' + process.cwd());


// Chess table
/*const loader = new GLTFLoader();
loader.load(

    './Chessboard.glb',

    function ( gltf ) {

		scene.add( gltf.scene );

		//gltf.animations; 
		//gltf.scene; 
		//gltf.scenes; 
		//gltf.cameras; 
		//gltf.asset;
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
); */
// instantiate a loader

