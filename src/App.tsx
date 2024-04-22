import './App.scss'
import { useState,useRef, useEffect } from 'react'

import profileImage from './assets/img-dev.png'
import reactLogo from './assets/react-logo.svg'
import ts from './assets/typescript-def.svg'
import vite from './assets/vitejs.svg'
import project1 from './assets/project1.svg'
import project2 from './assets/project2.svg'
import project3 from './assets/project3.svg'
import project4 from './assets/project4.svg'

function App() {

  const [toggle, setToggle] = useState(1)
  const [visible, setVisible] = useState(false)
  const [changeBg, setChangeBg] = useState(false)
  
  const menuRef = useRef<HTMLUListElement>(null) 


  function updateToggle(id: number) {
    setToggle(id)
  }

  function openMenu() {
    menuRef?.current?.classList.toggle("menu-mobile")
  }
  
  const scrolled = window.scrollY
  
  const toggleVisible = () => {
    if (scrolled >= 300) {
      setVisible(true)
      setChangeBg(true)
    }
    else if (scrolled < 300) {
      setVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); 
  }

  useEffect(() => {
    setInterval(function() {window.addEventListener('scroll', toggleVisible); }, 100)
   
  }, []); 


  return (
    <div className='page-container'>
      <div className='home-container' id='home'>
        <div className='menu-container' style={{background: changeBg ? '#00D2DF' : '#121212'}}>
          <p>Portfólio</p>
          <ul ref={menuRef}>
          <button className='close-menu-button' onClick={openMenu}></button>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-me">Sobre mim</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
          <button className='open-menu-button' onClick={openMenu}></button>
        </div>
        <div className='home-content' >
          <div className='home-texts'>
            <p>Olá, eu sou</p>
            <h1>HELLITON CRUZ</h1>
            <p>Desenvolvedor de Software</p>
          </div>
          <div className='social-links'>
            <a href="/">LinkedIn</a>
            <a href="/">GitHub</a>
          </div>
        </div>
      </div>

      <div className='about-container' id='about-me'>
        <img src={profileImage} alt="" />
        <div className='texts-about'>
          <h3>Sobre mim</h3>
          <h4>Bahia, Brasil</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac commodo dolor, nec bibendum velit.</p>
          <div className='about-buttons'>
            <a href="helliton-cruz-curriculo.pdf" download="helliton-cruz-curriculo.pdf">Currículo</a>
            <a href="mailto:hellitoncruz16@gmail.com">E-mail</a>
          </div>
        </div>
      </div>

      <div className='xp-container' id='experience'>
        <div className='xp-content'>
          <h3>EXPERIÊNCIA</h3>
          <div className='tab-layout'>
            <ul className='tab-items'>
              <li className={toggle === 1 ? 'tab-item-active' : 'tab-item'} onClick={() => {
                updateToggle(1);
              }}>Quality Digital</li>
              <li className={toggle === 2 ? 'tab-item-active' : 'tab-item'} onClick={() => updateToggle(2)}>Acct Global</li>
              <li className={toggle === 3 ? 'tab-item-active' : 'tab-item'} onClick={() => updateToggle(3)}>Freelancer</li>
            </ul>
            <div className='tab-contents'>
              <div className={toggle === 1 ? 'show-content' : 'tab-content'}>
                <h4 className='job-name-txt'>Desenvolvedor de Software Junior <span className='job-period'>Fev 2023 - Atual</span></h4>
                <p className='job-company-txt'>Quality Digital</p>
                <p className='job-description-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.</p>
              </div>
              <div className={toggle === 2 ? 'show-content' : 'tab-content'}>
                <h4 className='job-name-txt'>Estagiário em Desenvolvimento de Software <span className='job-period'>Jun 2022 - Fev 2023</span></h4>
                <p className='job-company-txt'>Acct Global</p>
                <p className='job-description-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.</p>
              </div>
              <div className={toggle === 3 ? 'show-content' : 'tab-content'}>
                <h4 className='job-name-txt'>Freelancer <span className='job-period'>Jan 2021 - Jun 2022</span></h4>
                <p className='job-company-txt'>Workana</p>
                <p className='job-description-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum soeellicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='projects-container' id='projects'>
        <h3>PROJETOS</h3>
        <div className='project-contents'>
          <div className='project-item'>
            <img className= "project-img" src={project1} alt="" />
            <h4 className='project-name'>Nome do projeto</h4>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <div className='project-tecs-container'>
              <p className='project-tecs'>Tecnologias usadas no projeto</p>
              <ul className='tecs-list' >
                <li className='tec-name'><img className='logo-tec' src={reactLogo} alt="" />ReactJS</li>
                <li className='tec-name'><img className='logo-tec' src={ts} alt="" />TypeScript</li>
                <li className='tec-name'><img className='logo-tec' src={vite} alt="" />ViteJS</li>
              </ul>
            </div>
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>

          <div className='project-item'>
            <img className= "project-img" src={project2} alt="" />
            <h4 className='project-name'>Nome do projeto</h4>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <div className='project-tecs-container'>
              <p className='project-tecs'>Tecnologias usadas no projeto</p>
              <ul className='tecs-list'>
                <li className='tec-name'><img className='logo-tec' src={reactLogo} alt="" />ReactJS</li>
                <li className='tec-name'><img className='logo-tec' src={ts} alt="" />TypeScript</li>
                <li className='tec-name'><img className='logo-tec' src={vite} alt="" />ViteJS</li>
              </ul>
            </div>
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>

          <div className='project-item'>
            <img className= "project-img" src={project3} alt="" />
            <h4 className='project-name'>Nome do projeto</h4>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <div className='project-tecs-container'>
              <p className='project-tecs'>Tecnologias usadas no projeto</p>
              <ul className='tecs-list'>
                <li className='tec-name'><img className='logo-tec' src={reactLogo} alt="" />ReactJS</li>
                <li className='tec-name'><img className='logo-tec' src={ts} alt="" />TypeScript</li>
                <li className='tec-name'><img className='logo-tec' src={vite} alt="" />ViteJS</li>
              </ul>
            </div>
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>

          <div className='project-item'>
            <img className= "project-img" src={project4} alt="" />
            <h4 className='project-name'>Nome do projeto</h4>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            <div className='project-tecs-container'>
              <p className='project-tecs'>Tecnologias usadas no projeto</p>
              <ul className='tecs-list'>
                <li className='tec-name'><img className='logo-tec' src={reactLogo} alt="" /> ReactJS</li>
                <li className='tec-name'><img className='logo-tec' src={ts} alt="" />TypeScript</li>
                <li className='tec-name'><img className='logo-tec' src={vite} alt="" />ViteJS</li>
              </ul>
            </div>
            <a href="/project-link" className='project-link'>Visualizar</a>
          </div>


        </div>
      </div>
      <button id='toTop' style={{display: visible ? 'flex' : 'none'}} onClick={scrollToTop}>&#9650;</button>
      <footer>
        <div className='footer-content'><p>@ 2024 - Helliton Cruz</p></div>
      </footer>
    </div>
  )
}

export default App
