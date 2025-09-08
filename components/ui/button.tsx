import { cn } from '@/lib/utils'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { LoaderCircleIcon, LucideIcon } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      effect: {
        expandIcon: 'group gap-0 relative',
        ringHover:
          'transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  effect,
  size,
  asChild = false,
  icon: Icon,
  isLoading,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: LucideIcon
    isLoading?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          effect,
          size,
          className,
        }),
        {
          '[&>svg:first-of-type:not(:last-of-type)]:hidden': isLoading,
        },
      )}
      disabled={isLoading}
      {...props}
    >
      <Slottable>{props.children}</Slottable>
      {Icon &&
        !isLoading &&
        (effect === 'expandIcon' ? (
          <div className="w-0 ps-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:ps-2 group-hover:opacity-100">
            <Icon className="ms-2" />
          </div>
        ) : (
          <Icon className="ms-2" />
        ))}
      {isLoading && <LoaderCircleIcon className="size ms-2 animate-spin" />}
    </Comp>
  )
}

export { Button, buttonVariants }
