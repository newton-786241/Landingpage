const Works = (props) => {
    return ( 
        <div style={{width:'100%', display:'flex', justifyContent:'space-between', }}>
            <div style={{width:"16vw", height:'16vw', backgroundColor:'aqua', borderRadius:'10px', boxShadow:'4px 10px 10px lightgrey'}}>
            </div>
            <div style={{width:'74%', height:'11vw', display:"flex", flexDirection:'column', justifyContent:'space-between'}}>
                <h1 style={{fontSize:'2vw'}}>{props.title}</h1>
                <p style={{fontSize:'1.1vw'}}><span style={{backgroundColor:'darkblue', color:'white', fontWeight:'bold', padding:'5px 10px', borderRadius:'9999px',}}>{props.year}</span> <span style={{color:'grey', paddingLeft:'2vw'}}>{props.subtitle}</span></p>
                <p style={{fontSize:'1.1vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quae! Voluptatibus maxime dolore iusto, omnis molestiae sint aliquam possimus architecto, autem quo voluptate consectetur? Suscipit.</p>
            </div>
        </div>
     );
}
 
export default Works;