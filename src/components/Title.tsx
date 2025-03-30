import Typography from '@mui/material/Typography'

import { Philosopher } from 'next/font/google'

const philosopher = Philosopher({ weight: '400', subsets: ['latin'] })

export default function Title({ className }: { className?: string }) {
  return (
    <Typography
      className={philosopher.className + ' ' + className}
      variant="h5"
      component="div"
    >
      Off the Battlefield Foundation
    </Typography>
  )
}
