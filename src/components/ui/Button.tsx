'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', glow = true, children, ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden will-change-transform";

        // Variant styles
        const variants = {
            primary: "bg-brand-neon text-white hover:bg-brand-neon-hover border-transparent",
            secondary: "bg-white text-brand-neon hover:bg-gray-50 border-transparent",
            outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
            ghost: "bg-transparent text-brand-neon hover:bg-brand-neon/10",
        };

        // Size styles
        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const glowClass = (variant === 'primary' && glow)
            ? "shadow-[0_0_20px_rgba(10,26,255,0.4)] hover:shadow-[0_0_30px_rgba(10,26,255,0.6)]"
            : "";

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], glowClass, className)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                {...props}
            >
                {children}
                {/* Shine effect overlay could go here for extra premium feel */}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
