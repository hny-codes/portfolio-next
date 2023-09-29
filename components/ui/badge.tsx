import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2 m-0.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        astro:
          'border-transparent bg-[#fd7e14] text-secondary-foreground shadow',
        next: 'border-transparent bg-[#343a40] text-primary-foreground shadow',
        contentful: 'border-transparent shadow bg-[#ffa8a8]',
        react:
          'border-transparent shadow bg-[#4dabf7] text-secondary-foreground',
        tailwind: 'border-transparent shadow bg-[#22b8cf]',
        typescript:
          'border-transparent shadow bg-[#1864ab] text-primary-foreground',
        css: 'border-transparent shadow bg-[#66d9e8] text-secondary-foreground',
        vanillaJs:
          'border-transparent shadow bg-[#fcc419] text-secondary-foreground',
        vite: 'border-transparent shadow bg-[#5f3dc4] text-primary-foreground',
        cypress:
          'border-transparent shadow bg-[#00595F] text-primary-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
