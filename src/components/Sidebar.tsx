import { useState, useEffect } from 'react'

const Sidebar = () => {
	const [currentTime, setCurrentTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date())
		}, 10000)
		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div className='p-5 flex flex-col items-center justify-between h-screen bg-[#00040a] text-white w-[80px] z-50 fixed'>
			<div>
				<div className='flex flex-col items-center justify-center'>
					<img src='/images/quadrum_logo.webp' alt='Quibi Logo' className='w-[40px] mb-2' />
					<p className='mt-4'>{currentTime.getHours().toString().padStart(2, '0')}:{currentTime.getMinutes().toString().padStart(2, '0')}</p>
				</div>
			</div>
			<div className='space-y-8'>
				<div className='flex flex-col items-center border-r-2 border-white -mr-5 pr-[18px]'>
					<img src='/images/icons/home.webp' alt='Home icon' className='w-[80px] mb-2' />
					<p className='text-lg font-normal uppercase'>Home</p>
				</div>
				<div className='flex flex-col items-center'>
					<img src='/images/icons/video.webp' alt='Video icon' className='w-[60px] mb-2' />
				</div>
				<div className='flex flex-col items-center'>
					<img src='/images/icons/tv.webp' alt='TV icon' className='w-[60px] mb-2' />
				</div>
				<div className='flex flex-col items-center'>
					<img src='/images/icons/search.webp' alt='Search icon' className='w-[40px] mb-2' />
				</div>
			</div>
			<div className='space-y-4'>
				<img src='/images/icons/avatar.webp' alt='Avatar icon' className='w-[40px] mb-2' />
				<img src='/images/icons/settings.webp' alt='Settings icon' className='w-[40px] mb-2' />
			</div>
		</div>
	)
}

export default Sidebar