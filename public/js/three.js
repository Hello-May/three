import * as THREE from 'https://unpkg.com/three/build/three.module.js'

// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const controls = new OrbitControls( camera, renderer.domElement );

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
// }

// animate();

// let scene, renderer, camera, cube
// // 建立場景
// scene = new THREE.Scene()
// scene.background = new THREE.Color('skyblue');

// // 建立渲染器
// renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight) // 場景大小
// renderer.setClearColor(0xeeeeee, 1.0) // 預設背景顏色
// renderer.shadowMap.enable = true // 陰影效果

// // 建立相機
// const fov = 35; // AKA Field of View
// const aspect = container.clientWidth / container.clientHeight;
// const near = 0.1; // the near clipping plane
// const far = 100; // the far clipping plane

// camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.set(0, 0, 10);

// // 建立光源
// let pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.set(10, 10, -10)
// scene.add(pointLight)

// // 建立物體
// const geometry = new THREE.BoxGeometry(1, 1, 1) // 幾何體
// const material = new THREE.MeshPhongMaterial({
//     color: 0x0000ff
// })

// // 材質
// cube = new THREE.Mesh(geometry, material) // 建立網格物件
// cube.position.set(0, 0, 0)
// scene.add(cube)

// // 監聽螢幕寬高來做簡單 RWD 設定
// window.addEventListener('resize', function () {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
// })


// // 渲染場景
// function render() {
//     // 建立動畫
//     cube.rotation.x += 0.01
//     cube.rotation.y += 0.01

//     requestAnimationFrame(render)
//     renderer.render(scene, camera)
// }
// render()

const container = document.querySelector('#scene-container')

let scene, renderer, camera
let cube

// 初始化場景、渲染器、相機、物體
function init() {
    // 建立場景
    scene = new THREE.Scene()

    // 建立渲染器
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight + 100) // 場景大小
    renderer.setClearColor(0xeeeeee, 1.0) // 預設背景顏色
    renderer.shadowMap.enable = true // 陰影效果

    // 將渲染器的 DOM 綁到網頁上
    document.body.appendChild(renderer.domElement)

    // 建立相機
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    )
    camera.position.set(10, 10, 10)
    camera.lookAt(scene.position)

    // 建立光源
    let pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(10, 10, -10)
    scene.add(pointLight)

    // 建立物體
    const geometry = new THREE.BoxGeometry(1, 1, 1) // 幾何體
    const material = new THREE.MeshPhongMaterial({
        color: 0x0000ff
    }) // 材質
    cube = new THREE.Mesh(geometry, material) // 建立網格物件
    cube.position.set(0, 0, 0)
    scene.add(cube)
}

// 建立動畫
function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
}

// 渲染場景
function render() {
    animate()
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}

// 監聽螢幕寬高來做簡單 RWD 設定
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})


init()
render()

container.append(renderer.domElement)

loading = false