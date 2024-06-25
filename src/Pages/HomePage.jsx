import { useState, useEffect } from "react";
import LeftBox from "../Components/LeftBox";
import CenterBox from "../Components/CenterBox";
import RightBox from "../Components/RIghtBox";


const HomePage = ({setPage}) => {


 

    return (
        <div className="homepage">
           <LeftBox setPage={setPage}/>
           <CenterBox setPage={setPage} />
           <RightBox/>
        </div>

    );
}

export default HomePage;