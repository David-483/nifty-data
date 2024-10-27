import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ChartSkeleton() {
    return (
      <Stack spacing={1}>
<Skeleton variant="text" height={50}  />
        <Skeleton sx={{ borderRadius:"15px",}}   variant="rectangular" width={"100%"} height={200}  />
      </Stack>
    );
  }