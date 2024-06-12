const Arr = () => {

    const DETAILS=[
        {
            name:"Justin Biebr",
            song:"Lovely",
            pic:" artist-pic jb"
        },
        {
            name:"Lana Del Ray",
            song:"Say Yes To Heaven",
            pic:" artist-pic lana"
        },
        {
            name:"Kendrick Lamar",
            song:"Humble",
            pic:" artist-pic kdot"
        },
        {
            name:"Selena Gomez",
            song:"Back To You",
            pic:" artist-pic selena"
        },
        {
            name:"Drake",
            song:"God's Plan",
            pic:" artist-pic drake"
        }
    
    
    
    ]
    


    return (


        DETAILS.map((value,index)=>{
            return(
                <div className="artist-container">
                <div className={value.pic}>
                </div>
                <h4>{value.name}</h4>
                <p>{value.song}</p>
            </div>

            );
        })
       


    );
}
export default Arr;