import JustinBieber from '../Components/JustinBieber'
import LeftBox from '../Components/LeftBox'
import RightBox  from '../Components/RIghtBox';

export default function JustinPage({setPage}){
  
    return(

        <div className="homepage">
        <LeftBox/>
        <JustinBieber setPage={setPage} />
        <RightBox/>
     </div>

    );
}