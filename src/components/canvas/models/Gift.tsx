import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gift from "@/assets/3d/gift.gltf";

type GLTFResult = GLTF & {
  nodes: {
    Giftbox01: THREE.Mesh;
    Giftbox02: THREE.Mesh;
    Giftbox03: THREE.Mesh;
    Giftbox04: THREE.Mesh;
    Giftbox05: THREE.Mesh;
    Giftbox06: THREE.Mesh;
  };
  materials: {
    Pink01: THREE.MeshStandardMaterial;
    Pink02: THREE.MeshStandardMaterial;
    Pink03: THREE.MeshStandardMaterial;
    Yellow01: THREE.MeshStandardMaterial;
  };
};

export function Gift(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(gift) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Giftbox01.geometry}
        material={materials.Pink01}
        position={[0.001, 1.058, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Giftbox02.geometry}
        material={materials.Pink02}
        position={[0.001, 1.307, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Giftbox03.geometry}
        material={materials.Pink02}
        position={[0.009, 2.189, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Giftbox04.geometry}
        material={materials.Pink03}
        position={[0.009, 2.189, 0]}
        rotation={[-0.051, 0, 0]}
        scale={[0.183, 0.403, 0.363]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Giftbox05.geometry}
        material={materials.Pink01}
        position={[0.009, 2.189, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Giftbox06.geometry}
        material={materials.Yellow01}
        position={[0.003, 2.377, 0.007]}
        scale={0.168}
      />
    </group>
  );
}

useGLTF.preload(gift);