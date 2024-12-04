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
      <div style={{width:'40%', display:'flex', flexDirection:'column', justifyContent:'space-around', height:"300px", margin:'120px 250px',}}>
        <div>
          <h1>Hi, I am Tamseel,</h1>
          <h1>A Frontend Developer and UI/UX Designer</h1>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum distinctio culpa, obcaecati laudantium animi nostrum maxime saepe impedit nulla, neque reiciendis cum odit optio quibusdam dolore ipsam ratione vero nam. Sequi aliquam nisi non.
        </p>
        <button style={{width:'50%',color:"white", height:'45px', fontSize:'24px', backgroundColor:'red', padding:'0px 10px', borderRadius:'10px', border:'none'}}>Download Resume</button>
      </div>
      <div style={{backgroundColor:'aliceblue',height:'35vw', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{display:'flex', justifyContent:'space-between', width:'70%',margin:'30px 0px', padding:"50px 0px",}}>
          <h2>Recent posts</h2>
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
          <h1>Featured Works</h1>
        </div>
        <div className="works" style={{width:'70%', display:'flex', flexDirection:'column', justifyContent:'space-around', height:'60vw'}}>
          <Works title={'Traflagar Landing Page'} year={'2024'} subtitle={'Landing page'} image={trafalgar} link={'https://trafalgar-landing-page-xi.vercel.app/'}/>
          <hr />
          <Works title={'Car Servicing Agency Website'} year={'2024'} subtitle={'Website'} image={vertron} link={'https://vertron-seven.vercel.app/'}/>
          <hr />
          <Works title={'36 Days of Malayalam type'} year={'2024'} subtitle={'Typography'}/>
          <hr />
        </div>
      </section>
      <div style={{justifyContent:'center', display:'flex'}}>
      <Footer/></div>
      </div>  
  );
}
