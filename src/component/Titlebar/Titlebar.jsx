import React, { useState } from 'react';
import './Titlebar.css';
import vscode_icon from '../../assets/vscode_icon.svg';
import { VscChromeClose } from "react-icons/vsc";
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";

const Titlebar = ({handleMaximize, handleMinimize, handleClose}) => {

  return (
    <section className='titlebar'>
        <img src={vscode_icon} alt="VSCode Icon" height={15} width={15} className='titlebarIcon'/>
        <div className="titlebarItems">
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
            <p>Run</p>
        </div>
        <p className="tilebarTitle">Yakshit Poojary - Visual Studio Code</p>
        <div className="windowButtons">
            <VscChromeMinimize  size={30} className='minimize' onClick={handleMinimize}/>
            <VscChromeMaximize size={30} className='maximize' onClick={handleMaximize}/>
            <VscChromeClose  size={30} className='close' onClick={handleClose}/>
        </div>
    </section>
  )
}

export default Titlebar