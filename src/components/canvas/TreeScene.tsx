import { Canvas } from "@react-three/fiber";
import { Gift } from "./models/Gift";
import { XmasTree } from "./models/XmasTree";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "../theme/theme-provider";

const TreeScene = ( ) => {
    const { theme } = useTheme()
    const ambientLightIntensity = theme == "light" ? 1.5 : 0.5;

    return (
        <Canvas style={{width: '100vw', height: '100vh'}}>
            <ambientLight intensity={ambientLightIntensity}/>
            <directionalLight position={[-1, 1, -1]} intensity={5}/>
            <spotLight position={[-2, -2, -2]} intensity={5}/>
            <OrbitControls />
            <XmasTree scale={0.9} position={[4, -0.5, 1]}/>
            <Gift scale={0.2} position={[2.8, -2.3, 1.7]}/>
        </Canvas>
    )
};

export default TreeScene;
