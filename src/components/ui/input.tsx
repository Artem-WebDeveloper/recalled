import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'placeholder:text-muted-foreground w-full min-w-0 border-b border-gray-600/30 bg-transparent px-1 text-base transition-colors outline-none focus-visible:border-gray-300 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
