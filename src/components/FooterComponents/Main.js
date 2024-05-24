import React from 'react'
import '../../css/FooterCss/Main.css'
import MainCard from './MainCard';
function Main() {
   
  return (
    <div id='main-container'>
        <MainCard title={"Product"} subheadings={["Pricing"," Overview", "Browse"," Accessibility","Five"]}></MainCard>
        <MainCard title={"Solutions"} subheadings={["Brainstorming"," Ideation", "Wireframing"," Research","Design"]}></MainCard>
        <MainCard title={"Support"} subheadings={["Contact Us"," Developers", "Documentation"," Integrations","Reports"]}></MainCard>
        <MainCard title={"Get the App"} subheadings={["Pricing"," Overview", "Browse"," Accessibility","Five"]}></MainCard>

    </div>
  )
}

export default Main