"use client"

import { forwardRef } from "react"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

export interface AnimatedButtonProps extends ButtonProps {
  animation?: "primary" | "secondary" | "outline" | "icon" | "loading" | "add-to-cart" | "checkout" | "float" | "ghost"
  isLoading?: boolean
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, animation = "primary", isLoading, children, variant, ...props }, ref) => {
    // Map variant to animation if not explicitly provided
    const effectiveAnimation =
      animation ||
      (variant === "default"
        ? "primary"
        : variant === "secondary"
          ? "secondary"
          : variant === "outline"
            ? "outline"
            : variant === "ghost"
              ? "ghost"
              : "primary")

    return (
      <ShadcnButton
        className={cn(`btn-${effectiveAnimation}`, isLoading && "btn-loading", className)}
        variant={variant}
        ref={ref}
        {...props}
      >
        {children}
      </ShadcnButton>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
