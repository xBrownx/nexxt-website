import { cva, VariantProps } from 'class-variance-authority';import * as React from 'react';import { cn } from '@/utils/cn';const displayTitleVariants = cva(    [        'font-primaryLight',        'md:text-7xl',        'font-light',        '',        'text-[#FFFFFF]',        'text-5xl',    ],    {        variants: {            align: {                default: '',                right: 'text-right',            },        },        defaultVariants: {            align: 'default',        },    },);type DisplayTitleProps = VariantProps<typeof displayTitleVariants> & {    children: React.ReactNode;};export const DisplayTitle: React.FC<DisplayTitleProps> = ({    children,    align,}) => {    return <h1 className={cn(displayTitleVariants({ align }))}>{children}</h1>;};