import { useEffect } from "react";

const useFrame = (animation) => {
    useEffect(() => {
        let animationID = null;
        let frameCount = 0;

        const frame = () => {
            animation(frameCount++);
            animationID = requestAnimationFrame(frame);
        };

        frame();

        return () => {
            cancelAnimationFrame(animationID);
        };
    }, []);
};

export default useFrame;
