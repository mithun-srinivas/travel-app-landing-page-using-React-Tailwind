import React from 'react'
import NavigationBar from '../NavigationBar';
// import NavigationBar from '../NavigationBar';
import Bottom from './Bottom';
import Content from './Content';
import LeftPanel from './LeftPanel';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-home-page bg-center bg-cover bg-no-repeat -mt-4">
        <NavigationBar />
        <LeftPanel />
        <Bottom />
        <Content />
    </div>
  )
}
