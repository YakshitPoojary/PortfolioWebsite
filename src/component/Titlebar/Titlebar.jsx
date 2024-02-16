import React from 'react';
import './Titlebar.css';
import vscode_icon from '../../assets/vscode_icon.svg';


const Titlebar = () => {
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
            <span className="minimize"></span>
            <span className="maximize"></span>
            <span className="close"></span>
        </div>
    </section>
  )
}

export default Titlebar