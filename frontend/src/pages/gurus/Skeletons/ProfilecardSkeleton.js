import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';


export default function ProfilecardSkeleton() {
    return (
        <div className="guru-middle-container guru-container">
        <div className="guru-profile guruCard">
            <div className="guru-profile-picture guru-big-profile-picture clear">
            <Skeleton variant="rectangular" style={{borderRadius:"100px"}}  width={"100%"} height={"100%"} />
            </div>
            <h1 className="guru-guruName"> </h1>
            <div className="guru-profile-description">
            <Skeleton variant="text" style={{margin:"auto", borderRadius:"15px"}} width={"90%"} height={"180px"} />
            </div>
        </div>
    </div>

    );
  }