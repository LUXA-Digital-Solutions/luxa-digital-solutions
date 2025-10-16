import { motion, useScroll, useSpring, useTransform } from "motion/react";
import React, { ReactNode, useMemo, useRef } from "react";

export interface ScrollStackMotionProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  /** Distance between stacked items (in px) */
  itemDistance?: number;
  /** Each next item scale step (0.0 - 1.0). Example: 0.04 => 4% smaller per depth */
  itemScale?: number;
  /** The CSS top where items pin. Accepts css length (e.g. '30vh' or '200px') */
  stackTop?: string;
  /** Base scale for the top-most card when fully stacked */
  baseScale?: number;
  /** Optional max blur added for deeper items */
  blurPerDepth?: number;
  /** Optional small rotation per depth (deg) */
  rotationPerDepth?: number;
  /** Whether to use the window scroll (default) or a custom container */
  container?: React.RefObject<HTMLElement | null>;
}

/**
 * ScrollStackMotion
 * - Uses CSS position: sticky for rock-solid pinning (no jitter)
 * - Uses Motion useScroll to drive smooth scale/blur as cards approach the stackTop
 * - Works with window scroll by default. Pass a container ref to useScroll container if needed
 */
export const ScrollStackMotion: React.FC<ScrollStackMotionProps> = ({
  children,
  className,
  itemDistance = 140,
  itemScale = 0.04,
  stackTop = "30vh",
  baseScale = 0.9,
  blurPerDepth = 0,
  rotationPerDepth = 0,
  container,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const items = useMemo(() => React.Children.toArray(children), [children]);

  return (
    <div ref={containerRef} className={className ?? "relative w-full"}>
      {/* Sentinel space above to control where cards begin pinning */}
      <div style={{ height: stackTop }} aria-hidden />

      {items.map((child, i) => (
        <StackItem
          key={i}
          index={i}
          total={items.length}
          itemDistance={itemDistance}
          itemScale={itemScale}
          stackTop={stackTop}
          baseScale={baseScale}
          blurPerDepth={blurPerDepth}
          rotationPerDepth={rotationPerDepth}
          container={container ?? undefined}
        >
          {child}
        </StackItem>
      ))}

      {/* Spacer at bottom so the last sticky can release cleanly */}
      <div
        style={{
          height: `calc(${stackTop} + ${itemDistance * (items.length + 1)}px)`,
        }}
        aria-hidden
      />
    </div>
  );
};

interface StackItemProps
  extends Required<
    Pick<
      ScrollStackMotionProps,
      | "itemDistance"
      | "itemScale"
      | "stackTop"
      | "baseScale"
      | "blurPerDepth"
      | "rotationPerDepth"
    >
  > {
  index: number;
  total: number;
  children: ReactNode;
  container?: React.RefObject<HTMLElement | null>;
}

const StackItem: React.FC<StackItemProps> = ({
  index,
  total,
  children,
  itemDistance,
  itemScale,
  stackTop,
  baseScale,
  blurPerDepth,
  rotationPerDepth,
  container,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Progress of this card from the moment its top hits the bottom of viewport to when it hits stackTop
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    container: container ?? undefined,
    offset: ["start end", "start start"],
  });

  // Smooth spring for snappy but smooth response
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 35,
    mass: 0.6,
  });

  // When progress=0 => scale 1. At progress=1 => target scale based on depth
  const targetScale = baseScale + index * itemScale; // deeper items are smaller
  const scale = useTransform(progress, [0, 1], [1, Math.max(0.6, targetScale)]);

  // Translate up so items visually stack with spacing once pinned
  const translateY = useTransform(progress, [0, 1], [0, index * itemDistance]);

  const rotate = useTransform(
    progress,
    [0, 1],
    [0, index * (rotationPerDepth || 0)],
  );
  const blur = useTransform(progress, [0, 1], [0, index * (blurPerDepth || 0)]);
  // Map numeric blur MotionValue to a CSS blur(...) string; call useTransform unconditionally to preserve hook order
  const blurFilter = useTransform(blur, (b) =>
    blurPerDepth ? `blur(${b}px)` : undefined,
  );

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: `calc(${stackTop} + ${itemDistance}px)` }}
    >
      <div className="sticky" style={{ top: stackTop }}>
        <motion.div
          className="transform-gpu will-change-transform"
          style={{
            y: translateY,
            scale,
            rotate,
            filter: blurFilter,
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollStackMotion;
