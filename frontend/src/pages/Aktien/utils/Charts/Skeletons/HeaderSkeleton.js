import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function HeaderSkeleton() {
    return (
      <Stack spacing={1}>
        <Skeleton sx={{ borderRadius:"15px",marginTop:"10px",}} variant="rectangular" width={"100%"} height={100}  />
      </Stack>
    );
  }