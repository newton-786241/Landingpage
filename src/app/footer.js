import Image from "next/image";
import myimage from '../app/fonts/fb.png'
import insta from '../app/insta.png'
import twitter from './Group.png'
import linkedin from './Linkedin.png'

const Footer = () => {
    return ( 
        <div style={{width:'20%'}}>
        <div style={{display:'flex', justifyContent:'space-between', width:'100%', marginTop:'7vw', marginBottom:'1vw'}}>
            <Image src={myimage}></Image>
            <Image src={insta}></Image>
            <Image src={twitter}></Image>
            <Image src={linkedin}></Image>
        </div>
        <p style={{textAlign:'center', marginBottom:'2vw'}}>Copyright c 2020 All Rights Reserved</p>
        </div>
     );
}
 
export default Footer;