import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'
export const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop mute="true"/>
        <h1>TRAVEL PATHS AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button 
            className='btns' 
            buttonStyle="btn-outline"
            buttonSize="btn-large"
            >
                GET STARTED
            </Button>
            <Button 
            className='btns' 
            buttonStyle="btn-primary"
            buttonSize="btn-large"
            >
                WATCH TRAILER <i className='fa-solid fa-play-circle'></i>
            </Button>
        </div>
    </div>
  )
}
