import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import App from './App'
import './styles/index.css'

// 全局註冊 GSAP 插件
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 全局 GSAP 預設值
gsap.defaults({
  duration: 1.2,
  ease: "power3.out"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)