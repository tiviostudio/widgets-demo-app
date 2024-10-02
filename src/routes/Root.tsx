import { useState } from 'react'
import { FocusNode, useSetFocus } from '@please/lrud'
import { Banner } from '../components/Banner/Banner'
import { ExternalTivioWidget } from '../components/ExternalTivioWidget'
import { Movies } from '../components/Movies/Movies'
import { RecentChannels } from '../components/RecentChannels/RecentChannels'
import { RootLayout } from '../components/RootLayout'
import { motion } from 'framer-motion'
import { ScrollRestoration } from 'react-router-dom'

const COMPONENTS: { name: string, focusId: string }[] = [
  { name: 'Banner', focusId: 'banner' },
  { name: 'RecentChannels', focusId: 'recent-channels' },
  { name: 'ExternalTivioWidget', focusId: 'widget' },
  { name: 'Movies', focusId: 'movies' },
]

export default function Root() {
  const [gridPosition, setGridPosition] = useState({
    rowIndex: 0,
    columnIndex: 0,
  })
  const setFocus = useSetFocus()
  const ROW_HEIGHT = window?.screen?.width < 1300 ? 350 : 280

  const [lastGridPosition, setLastGridPosition] = useState({
    rowIndex: 0,
    columnIndex: 0,
  })

  console.log('debug:gridPosition', gridPosition)


  return (
      <RootLayout>
        <FocusNode
          focusedClass=''
          isGrid
          focusId="home"
          defaultFocusColumn={gridPosition.columnIndex}
          defaultFocusRow={gridPosition.rowIndex}
          onLeft={(e) => {
            if (gridPosition.columnIndex === 0) {
              e.preventDefault()
              setFocus('nav')
            }
          }}
          onGridMove={(e) => {
            setGridPosition({
              rowIndex: e.nextRowIndex,
              columnIndex: e.nextColumnIndex,
            })
          }}
          elementType={motion.div}
          // @ts-ignore
          initial={{
            scale: 0.8,
            opacity: 0,
            y: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: -ROW_HEIGHT * gridPosition.rowIndex,
          }}
          exit={{
            scale: 1.15,
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeOut',
          }}>
          {COMPONENTS.map((componentObj, rowIndex) => {
            switch (componentObj.name) {
              case 'Banner':
                return (
                  <FocusNode
                    key={rowIndex}
                    focusId={componentObj.focusId}
                    focusedClass=''
                  >
                    <Banner key={rowIndex} />
                  </FocusNode>
                )
              case 'RecentChannels':
                return (
                  <FocusNode
                    key={rowIndex}
                    focusId={componentObj.focusId}
                    focusedClass=''
                  >
                    <RecentChannels key={rowIndex} gridPosition={gridPosition} rowIndex={rowIndex} />
                  </FocusNode>
                )
              case 'ExternalTivioWidget':
                return (
                  <FocusNode
                    key={rowIndex}
                    focusId={componentObj.focusId}
                    focusedClass=''
                  >
                    <ExternalTivioWidget key={rowIndex} gridPosition={gridPosition} />
                  </FocusNode>
                )
              case 'Movies':
                return (
                  <FocusNode
                    key={rowIndex}
                    focusId={componentObj.focusId}
                    focusedClass=''
                  >
                    <Movies key={rowIndex} gridPosition={gridPosition} rowIndex={rowIndex} />
                  </FocusNode>
                )
              default:
                return null
            }
          })}
        </FocusNode>
      </RootLayout>
  )
}
