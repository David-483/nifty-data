
  import Skeleton from '@mui/material/Skeleton';

  
export default function BiographieSkeleton (){
      return (
        <div className="guruBio">
        <div className="guruBioHeader"> 
            <table className="guruBioTable">
                <tbody>
                <tr className="guruBioRow">
            <td className="guruBioHeaderText">Geburtsdatum</td>
            <td className="guruBioHeaderText">Geburtsort</td>
            <td className="guruBioHeaderText">Universität</td>
            <td className="guruBioHeaderText">Last Update</td>
        </tr>
        <tr className="guruBioRow2">
            <td className="guruBioHeaderText"><Skeleton style={{margin:"auto", borderRadius:"15px"}} variant="rectangular" /></td>
            <td className="guruBioHeaderText"><Skeleton style={{margin:"auto", borderRadius:"15px"}} variant="rectangular" /></td>
            <td className="guruBioHeaderText"><Skeleton style={{margin:"auto", borderRadius:"15px"}} variant="rectangular" /></td>
            <td className="guruBioHeaderText"><Skeleton style={{margin:"auto", borderRadius:"15px"}} variant="rectangular" /></td>
        </tr>
        </tbody>
        </table>
        <div className="guruBioText"> 
        <Skeleton variant="text" style={{margin:"auto", borderRadius:"15px"}} width={"100%"} height={"340px"} />
        </div>
        </div>
    </div>
);
}


