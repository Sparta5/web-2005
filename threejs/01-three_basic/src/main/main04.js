import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// console.log(THREE)

// 目标：3D物体缩放旋转

// 1、创建场景
const scene = new THREE.Scene();

// 2、创建相机
const camere = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 设置相机位置
camere.position.set(0, 0, 10);
scene.add(camere);

// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// 修改物体位置
// cube.position.set(5, 0, 0)
// cube.position.y=5
// 缩放
// cube.scale.set(3, 2, 1);
// cube.position.x = 5;
// 旋转
cube.rotation.set(Math.PI / 4, 0, 0, "XYZ");

// 将几何体添加到场景中
scene.add(cube);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 使用渲染器，通过相机将场景渲染进来
renderer.render(scene, camere);

// 创建轨道控制器
const controls = new OrbitControls(camere, renderer.domElement);

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

function render() {
  // 渲染器渲染场景和相机
  renderer.render(scene, camere);
  cube.position.x += 0.02;
  cube.rotation.y += 0.01;
  if (cube.position.x > 5) cube.position.x = 0;
  // 动画循环（浏览器内置方法）
  requestAnimationFrame(render);
}

render();
