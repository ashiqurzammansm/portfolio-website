"use client";
import { ReactNode, useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type MotionValue,
} from "framer-motion";

type Props = {
    /** How strongly the element is pulled (px) */
    strength?: number;
    /** Start pulling when the pointer is within this radius (px) */
    radius?: number;
    /** Scale on hover */
    scale?: number;
    className?: string;
    children: ReactNode;
};

export default function Magnetic({
                                     strength = 20,
                                     radius = 120,
                                     scale = 1.03,
                                     className,
                                     children,
                                 }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    // smooth springs for nicer motion
    const sx = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.5 });
    const sy = useSpring(my, { stiffness: 300, damping: 20, mass: 0.5 });

    // ✅ Let TS infer the tuple type and read by index to avoid the compile error
    const rotate: MotionValue<number> = useTransform([sx, sy], (vals) => {
        const x = vals[0] ?? 0;
        const y = vals[1] ?? 0;
        return (x + y) * 0.03;
    });

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.hypot(relX, relY);

        if (distance < radius) {
            // avoid division by 0 when pointer is exactly at center
            const safe = distance === 0 ? 1 : distance;
            const pull = (1 - distance / radius) * strength;
            mx.set((relX / safe) * pull);
            my.set((relY / safe) * pull);
        } else {
            mx.set(0);
            my.set(0);
        }
    }

    function onMouseLeave() {
        mx.set(0);
        my.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ x: sx, y: sy, rotate }}
            whileHover={{ scale }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
