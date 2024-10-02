import { ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Props {
  children: ReactNode
}
export const RootLayout = ({ children }: Props) => {
  return (
    <div className='flex bg-white'>
      <Sidebar />
      <div className='w-full pl-14 bg-background pb-64'>
        {children}
      </div>
    </div>
  )
}
