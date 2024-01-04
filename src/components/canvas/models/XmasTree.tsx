
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import xmasTree from "@/assets/3d/ChristmasTree.glb"
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    mesh1356770401: THREE.Mesh;
    mesh1356770401_1: THREE.Mesh;
    mesh1356770401_2: THREE.Mesh;
    mesh1356770401_3: THREE.Mesh;
    mesh1356770401_4: THREE.Mesh;
    mesh1356770401_5: THREE.Mesh;
    mesh1356770401_6: THREE.Mesh;
    mesh1356770401_7: THREE.Mesh;
    mesh1356770401_8: THREE.Mesh;
    mesh1356770401_9: THREE.Mesh;
    mesh1356770401_10: THREE.Mesh;
    mesh1356770401_11: THREE.Mesh;
    mesh1356770401_12: THREE.Mesh;
    mesh1356770401_13: THREE.Mesh;
    mesh1356770401_14: THREE.Mesh;
    mesh1356770401_15: THREE.Mesh;
    mesh1356770401_16: THREE.Mesh;
    mesh1356770401_17: THREE.Mesh;
    group1994944117: THREE.Mesh;
    group1533398606: THREE.Mesh;
  };
  materials: {
    mat18: THREE.MeshStandardMaterial;
    mat20: THREE.MeshStandardMaterial;
    mat11: THREE.MeshStandardMaterial;
    mat7: THREE.MeshStandardMaterial;
    mat15: THREE.MeshStandardMaterial;
    mat3: THREE.MeshStandardMaterial;
    mat5: THREE.MeshStandardMaterial;
    mat8: THREE.MeshStandardMaterial;
    mat19: THREE.MeshStandardMaterial;
    mat0: THREE.MeshStandardMaterial;
    mat2: THREE.MeshStandardMaterial;
    mat10: THREE.MeshStandardMaterial;
    mat9: THREE.MeshStandardMaterial;
    mat22: THREE.MeshStandardMaterial;
    mat13: THREE.MeshStandardMaterial;
    mat12: THREE.MeshStandardMaterial;
    mat21: THREE.MeshStandardMaterial;
    mat17: THREE.MeshStandardMaterial;
  };
};

export function XmasTree(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(xmasTree) as GLTFResult;
  const tree = useRef(null!);
  //const [ dicertion, setDirection ] = useState<boolean>(true)

  // useFrame((state, delta) => {
  //   tree.current.rotation.y += delta/4
  //   if(tree.current.position.x < -2) {
  //     setDirection(false)
  //   }
  //   if(tree.current.position.x > 4) {
  //     setDirection(true)
  //   }
  //   if (dicertion) {
  //     tree.current.position.x -= delta/4
  //     tree.current.position.z += delta/8
  //   } else {
  //     tree.current.position.x += delta/4
  //     tree.current.position.z -= delta/8
  //   }
  // })

  return (
    <group ref={tree} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1994944117.geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.group1533398606.geometry}
        material={materials.mat12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401.geometry}
        material={materials.mat18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_1.geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_2.geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_3.geometry}
        material={materials.mat7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_4.geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_5.geometry}
        material={materials.mat3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_6.geometry}
        material={materials.mat5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_7.geometry}
        material={materials.mat8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_8.geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_9.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_10.geometry}
        material={materials.mat2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_11.geometry}
        material={materials.mat10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_12.geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_13.geometry}
        material={materials.mat22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_14.geometry}
        material={materials.mat13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_15.geometry}
        material={materials.mat12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_16.geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh1356770401_17.geometry}
        material={materials.mat17}
      />
    </group>
  );
}

useGLTF.preload(xmasTree);