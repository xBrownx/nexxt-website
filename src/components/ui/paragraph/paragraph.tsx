import { cva, type VariantProps } from 'class-variance-authority';import * as React from 'react';import { cn } from '@/utils/cn';export const paragraphVariants = cva(    [        'font-normal',        'font-secondaryRegular',        'md:w-[640px]',        'md:text-lg',        'md:leading-[27px]',        'text-sm',        'leading-[21px]',        'tracking-[0.031rem]',    ],    {        variants: {            paragraphVariant: {                default: 'text-[#164a49]/70',                dark: 'text-[#162425]',            },        },        defaultVariants: {            paragraphVariant: 'default',        },    },);export type ParagraphProps = VariantProps<typeof paragraphVariants> & {    children?: React.ReactNode;};export const Paragraph: React.FC<ParagraphProps> = ({    paragraphVariant,    children,}) => {    return (        <p className={cn(paragraphVariants({ paragraphVariant }))}>            {children}        </p>    );};