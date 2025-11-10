"use client";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

type Props = {
    strength?: number; // pull strength in px
    radius?: number;   // start pulling when pointer is within this radius
    scale?: number;    // scale on hover
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

    const sx = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.5 });
    const sy = useSpring(my, { stiffness: 300, damping: 20, mass: 0.5 });

    // ✅ Add generics so TS knows the input/output types
    const rotate = useTransform<[number, number], number>(
        [sx, sy],
        ([x, y]) => ((x ?? 0) + (y ?? 0)) * 0.03
    );

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.hypot(relX, relY);

        if (distance < radius && distance > 0) {
            const pull = (1 - distance / radius) * strength;
            mx.set((relX / distance) * pull);
            my.set((relY / distance) * pull);
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
