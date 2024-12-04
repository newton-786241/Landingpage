import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";
import Blogscard from "./Blogscard";
import Works from "./works";
import Footer from "./footer";
import trafalgar from './Screenshot (2).png'
import vertron from './Screenshot (3).png'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div style={{display:'flex', }}>
      <div style={{width:'40%', display:'flex', flexDirection:'column', justifyContent:'space-around', height:"25vw", margin:'5vw 15vw',}}>
        <div>
          <h1 style={{fontSize:"2vw"}}>Hi, I am Tamseel,</h1>
          <h1 style={{fontSize:'2vw'}}>A Frontend Developer and UI/UX Designer</h1>
        </div>
        <p style={{fontSize:'1vw'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum distinctio culpa, obcaecati laudantium animi nostrum maxime saepe impedit nulla, neque reiciendis cum odit optio quibusdam dolore ipsam ratione vero nam. Sequi aliquam nisi non.
        </p>
        <button style={{width:'50%',color:"white", height:'3vw', fontSize:'1.5vw', backgroundColor:'red', padding:'0px 10px', borderRadius:'10px', border:'none'}}>Download Resume</button>
        <div style={{width:'40%'}}></div>
      </div>
      </div>
      <div style={{backgroundColor:'aliceblue',height:'35vw', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{display:'flex', justifyContent:'space-between', width:'70%',margin:'2vw 0px', padding:"2vw 0px",}}>
          <h2 style={{fontSize:'2vw'}}>Recent posts</h2>
          <a href="">View all</a>
        </div>
        <div style={{width:'70%'}}>
          <div style={{margin:"0px 0px", width:'100%', display:'flex', justifyContent:"space-between"}}>
            <Blogscard title={'Making a design system from scratch'} date={'12-12-2024'} tldr={'Design, Coding'}/>
            <Blogscard title={'Creating Pixel Perfect Icons in Figma'} date={'12-12-2022'} tldr={'Figma, Icon Design'}/>
          </div>
        </div>
      </div>
      <section className="works" style={{alignItems:'center', display:"flex", flexDirection:'column'}}>
        <div style={{width:'70%', margin:'50px 0px'}}>
          <h1 style={{fontSize:'2vw'}}>Featured Works</h1>
        </div>
        <div className="works" style={{width:'70%', display:'flex', flexDirection:'column', justifyContent:'space-around', height:'60vw'}}>
          <Works title={'Traflagar Landing Page'} year={'2024'} subtitle={'Only Landing page'} image={trafalgar} link={'https://trafalgar-landing-page-xi.vercel.app/'}/>
          <hr />
          <Works title={'Car Servicing Agency Website'} year={'2024'} subtitle={'Full Website'} image={vertron} link={'https://vertron-seven.vercel.app/'}/>
          <hr />
          <Works title={'Lorem Ipsum'} year={'2024'} subtitle={'Lorem Ipsum'}/>
          <hr />
        </div>
      </section>
      <div style={{justifyContent:'center', display:'flex'}}>
      <Footer/></div>
      </div>  
  );
}
