import Image from "next/image";
import myimage from '../app/fonts/fb.png'
import insta from '../app/insta.png'
import twitter from './Group.png'
import linkedin from './Linkedin.png'

const Footer = () => {
    return ( 
        <div style={{width:'20%'}}>
        <div style={{display:'flex', justifyContent:'space-between', width:'100%', marginTop:'7vw', marginBottom:'1vw'}}>
            <Image src={myimage} style={{width:'2vw', height:'auto'}}></Image>
            <Image src={insta} style={{width:'2vw', height:'auto'}}></Image>
            <Image src={twitter} style={{width:'2vw', height:'auto'}}></Image>
            <Image src={linkedin} style={{width:'2vw', height:'auto'}}></Image>
        </div>
        <p style={{textAlign:'center', marginBottom:'1.4vw'}}>Copyright c 2020 All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;