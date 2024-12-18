import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";

const CustomCursor = ({ color = "rgba(0, 0, 0, 0.7)" }) => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor  = cursorRef.current;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY, 
                duration: 0.1, 
                ease: 'power3.out'
            })
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);


    useEffect(() => {
        const cursor = cursorRef.current;

        if(cursor){
            cursor.style.backgroundColor = color;
        }

        const onMouseEnter = () => {
            gsap.to(cursor, {
                scale: 1.5,
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
                duration: 0.3,
            });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1, 
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                duration: 0.3,
            });
        };

        document.querySelectorAll('button, a').forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.querySelectorAll('button, a').forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, [color]);


    return(
        <div 
        ref={cursorRef}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '20px',
            height: '20px',
            backgroundColor: color,
            borderRadius: '50%',
            pointerEvents: 'none', // Prevent interference with clicking
            zIndex: 9999,
            transform: 'translate(-50%, -50%)', // Center the circle on the cursor
        }}>
        </div>
    )
}

export default CustomCursor;