import { TivioWidget } from '@tivio/sdk-react'
import { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FocusNode, useFocusNodeById } from '@please/lrud'

export const ExternalTivioWidget = ({ gridPosition }: any) => {
  const widgetRef = useRef(null)
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)

  const navFocusNode = useFocusNodeById('widget')

  return (
    <FocusNode
      className='w-full bg-background'
    >
      <div className='pl-32 mt-24'>
        <div>
          <TivioWidget id='jojWidget2' ref={widgetRef} navigateFunction={navigate} isFocused={navFocusNode?.isFocused} onBlur={() => console.log('debug:onBlur')} onEnabled={() => setLoaded(true)} />
        </div>
        {
          !loaded && (
            <div className='h-[350px]'>
              <div className='bg-gray-800 w-[125px] h-[40px] ml-2 rounded-[0.925vh]' />
              <div className='flex items-center w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
                <div className='flex whitespace-nowrap space-x-[43px]'>
                  {
                    Array.from([0, 1, 2, 3, 4]).map((_i, index) => {
                      return (
                        <div className='w-[289px] rounded-[0.925vh] transition-all duration-200 ease-in-out transform m-2' key={index}>
                          <div className="object-cover w-[289px] h-[162px] bg-gray-800 rounded-[0.925vh]" />
                          <div className='bg-gray-800 w-[75px] h-[15px] mt-4 p-2 group-hover:text-black rounded-[0.925vh]' />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </FocusNode>
  )
}
