import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';


function GuruSkeleton() {
    const [value, setValue] = React.useState('true');

    const handleChange = () => {
        return setValue(!value);
      };

  return (
    <div>

    </div>
  );
}

export default GuruSkeleton;
