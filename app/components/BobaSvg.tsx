import { motion } from "framer-motion";



type BobaSvgProps = {
    baseColor?: string;
    radius?: number;
    strokeWidth?: number;
    className?: string;
    appearDelay?: number;
};

export const BobaSvg = ({
    baseColor = '#000000',
    radius = 12,
    strokeWidth = 2,
    className,
    appearDelay = 0,
}: BobaSvgProps) => {
    const safeRadius = Math.max(0, radius);
    const safeStrokeWidth = Math.max(0, strokeWidth);
    const size = safeRadius * 2 + safeStrokeWidth;
    const center = size / 2;
    const strokeColor = `color-mix(in oklab, ${baseColor} 70%, black 30%)`
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: appearDelay, duration: 0.2 }}

            className={className}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            aria-label="Boba"
        >
            <circle
                cx={center}
                cy={center}
                r={safeRadius}
                fill={baseColor}
                stroke={strokeColor}
                strokeWidth={safeStrokeWidth}
            />
        </motion.svg>
    );
};