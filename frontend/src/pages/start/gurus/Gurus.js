import { Button, Rating } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link} from "react-router-dom";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function GuruContainer({ticker}) {

    const picUrl = `/img/gurus/david.jpg`;

  return (



    <div className="start-page-trendingaktien-container">
    <div className="start-page-trendingaktien-content">
  <img className="start-page-trendingaktien-content-image" src={`/img/gurus/NiftyFinance_${ticker}.jpg`} 
    style={{
        minWidth: '20%',
        maxWidth: '70%',
        minHeight: '20%',
        maxHeight: 100,
        borderRadius: "100px",
        border: "1px white outset"
      }}

  ></img>

  {/* <p style={{textAlign:"center", fontSize:"20px"}}>{ticker}</p> */}
  
    <IconButton className="start-page-trendingaktien-content-button"
      style={{
        borderRadius: 35,
        backgroundColor: "rgba(0,0,0,0.4)",
        backgroundSize: "800%, 100%",
        // padding: "18px 36px",
        marginTop: "auto",
        marginBottom: "20px",
        marginRight:"auto",
        marginLeft:"auto",
        fontSize: "10px",
        width: 40,
        height: 40,
      }}

    >
    <ChevronRightIcon style={{color:"white"}} />
    </IconButton>
    </div>
    </div>


    // <div className="start-page-gurus-container">
    // <div className="start-page-gurus-content">
    //     <div className="start-page-gurus-content-image">
    //         <img width="150px" alt="Name" src={`/img/gurus/${pic}.jpg`} ></img>
    //     </div>
    //     <h4 className="start-page-gurus-content-name">{name} </h4>

    //     {/* <h4 className="start-page-gurus-content-companyname">{company} </h4>  

    //     <div className="start-page-gurus-content-container-infos">
    //     <div className="start-page-gurus-content-container-block">
    //       <h4 className="start-page-gurus-content-info">Assets: </h4> 
    //       <h4 className="start-page-gurus-content-value">  {assets}
    //       </h4>
    //       </div>
    //       <div className="start-page-gurus-content-container-block">
    //       <h4 className="start-page-gurus-content-info">Holdings: </h4> 
    //       <h4 className="start-page-gurus-content-value"> {holdings} </h4>
    //       </div>
    //       <div className="start-page-gurus-content-container-block">
    //      <h4 className="start-page-gurus-content-info">Top Holding: </h4> 
    //      <h4 className="start-page-gurus-content-value"> {topholding} </h4>
    //        </div>
    //     </div>

        
    //     <div className="start-page-gurus-content-container-block-lastUpdated">
    //       <h4 className="start-page-gurus-content-info">Last updated: </h4> 
    //       <h4 className="start-page-gurus-content-value"> {lastuptaded} </h4>
    //       </div> */}

    //     <Button className="start-page-analysen-content-button"
    //       style={{
    //         borderRadius: 35,
    //         backgroundImage: "linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)",
    //         backgroundSize: "300%, 100%",
    //         // padding: "18px 36px",
    //         margin: "auto auto auto auto",
    //         fontSize: "18px",
    //         width: 120,
    //         height: 40,
    //       }}
    //       variant="contained"
    //       endIcon={<PlayArrowIcon />}
    //       component={Link} to="/gurus/david"
    //     >
    //       Go!
    //     </Button>
    //     </div>
    // </div>
   
  );
}

export default GuruContainer;
