import React from 'react';import bgVideo from '../assets/replika-vid.mp4';export const ReplikaPage = () => {    return (        <section className="flex h-screen items-center justify-center bg-y-grey-gradient">            <div className="flex size-full items-center justify-center">                <video autoPlay controls={false} width={'100%'} height={'100%'}>                    <source src={bgVideo} type="video/mp4" />                </video>            </div>        </section>    );};