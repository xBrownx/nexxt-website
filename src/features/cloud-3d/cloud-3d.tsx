import { createElement, CSSProperties, useEffect, useRef } from 'react';import { CloudProps } from '@/features/cloud-3d/types';import createCloud from './cloud-cls';const getIsInitialized = (id: string) => {    const key = '__cloud-' + id;    if (key in window) {        return Boolean((window as any)[key]);    }    return ((window as any)[key] = false);};const setIsInitialized = (id: string, value: boolean) => {    const key = '__cloud-' + id;    (window as any)[key] = value;};export const Cloud3d = <T extends HTMLDivElement>(props: CloudProps<T>) => {    const ref = useRef<HTMLDivElement>(null);    const key = [props.id, props.className].join('-');    useEffect(() => {        if (getIsInitialized(key) || !ref.current) {            return;        }        if (props.children.length === 0) {            console.error('Cloud: No children provided.');            return;        }        const options = props.options            ? typeof props.options == 'function'                ? props.options(window)                : props.options            : {};        const cloud = createCloud(ref.current as any, props.children, options);        setIsInitialized(key, true);        if (props.onClick) {            const elements = Array.from(                ref.current.getElementsByClassName(                    options.itemClass ?? 'cloud--item',                ),            ) as Array<HTMLElement>;            if (props.onClick) {                for (const el of elements) {                    el.addEventListener(                        'click',                        (event) => {                            if (props.onClick) props.onClick(el as T, event);                        },                        props.onClickOptions,                    );                }            }        }        return () => {            try {                // cloud?.destroy();            } finally {                setIsInitialized(key, false);            }        };    }, [ref, key, props]);    return createElement('div', {        id: props.id,        className: props.className,        style: props.style,        ref,    });};