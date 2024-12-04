const Blogscard = (props) => {
    return ( 
        <div style={{display:'flex', flexDirection:'column', width:'48%', backgroundColor:"white",padding:'20px', height:'300px', justifyContent:'space-around', borderRadius:'10px', boxShadow:'0px 20px 10px lightgrey'}}>
            <h1 style={{fontSize:'2.3vw'}}>{props.title}</h1>
            <div style={{display:'flex', width:'100%'}}>
                <p style={{fontSize:'1vw'}}><span style={{paddingRight:'20px'}}>{props.date}</span>  |  <span style={{paddingLeft:'20px'}}>{props.tldr}</span></p>
            </div>
            <p style={{fontSize:'1vw', textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum veniam consequuntur, minima at praesentium deserunt! Sequi a, temporibus odio, aliquid id quasi maiores fuga nobis quidem explicabo iusto. Nihil libero quae placeat doloremque sit ipsa at illo quas eos voluptatem?</p>
            <p>{props.author}</p>
        </div>
     );
}
 
export default Blogscard;