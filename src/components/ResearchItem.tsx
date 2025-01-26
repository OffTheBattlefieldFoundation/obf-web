import React from 'react'
import Image from 'next/image'
import { Outfit } from 'next/font/google'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import Box from '@mui/material/Box'

import { ArticleMetaData } from '../../lib/articles'

const outfit = Outfit({ weight: '500', subsets: ['latin'] })

export default function ResearchItem({
  articleMetaData,
}: {
  articleMetaData: ArticleMetaData
}) {
  const { title, date: dateISO } = articleMetaData
  const date = parseISO(dateISO)

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Image
        height={800}
        width={800}
        alt="kyiv city"
        src="/kyiv.jpg"
        style={{ width: 'auto', height: 'auto' }}
      />

      <style>
        {`
          .titleCard {
            position: absolute;
            top: 64px;
            right: 0;
            min-height: 120px;
            padding: 8px;
            padding-left: 24px;
            filter: drop-shadow(-4px 8px 4px rgb(0, 0, 0, 0.5));
            background-color: rgb(224, 255, 199, 0.7);
            transition: background-color 0.3s;
            backdrop-filter: blur(2px);
          }

          .titleCard:hover {
            backdrop-filter: blur(5px);
            background-color: rgb(189, 255, 134, 0.7);
          }
        `}
      </style>

      <Link href={`/research/${articleMetaData.id}`}>
        <Box
          className={outfit.className + ' titleCard'}
          sx={{
            width: {
              xs: '100%',
              sm: '70%',
              md: '50%',
            },
          }}
        >
          <div
            style={{
              fontSize: 24,
            }}
          >
            {title}
          </div>
          <div>{format(date, 'LLLL d, yyyy')}</div>
        </Box>
      </Link>
    </div>
  )
}
