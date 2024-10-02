import { FocusNode } from '@please/lrud'
import { ChannelTile } from './ChannelTile'
import { motion } from 'framer-motion'

const TV_CHANNELS = [{
	id: 1,
	name: 'Star Dance',
	logo: '/images/channels/rtl.webp'
}, {
	id: 2,
	name: 'Televizní noviny',
	logo: '/images/channels/mtv.webp'
}, {
	id: 3,
	name: 'Sicario',
	logo: '/images/channels/nbc.jpg'
}, {
	id: 4,
	name: 'Simpsonovi XVII',
	logo: '/images/channels/star.webp'
}, {
	id: 5,
	name: 'Počasí',
	logo: '/images/channels/svt.webp'
}, {
	id: 6,
	name: 'Matrix',
	logo: '/images/channels/fox.webp'
}, {
	id: 7,
	name: 'UPN News',
	logo: '/images/channels/upn.webp'
}]

const ITEM_WIDTH = 192

export const RecentChannels = ({ gridPosition, rowIndex }: any) => {
	return (
		<div className='w-full pl-32 -mt-44 xl:-mt-64'>
			<h2 className='text-4xl mb-5 z-50 relative text-white'>Televizní Kanály</h2>
			<div className='flex items-center w-full overflow-x-auto overflow-y-hidden scrollbar-hide'>
			<motion.div className='flex whitespace-nowrap space-x-[43px]'
					animate={{
						scale: 1,
						opacity: 1,
						x: ((gridPosition.columnIndex && gridPosition.rowIndex === rowIndex) && (-ITEM_WIDTH * gridPosition.columnIndex)) > -800 ? 0 : (-ITEM_WIDTH * gridPosition.columnIndex) + 800,
					}}
					transition={{
						duration: 0.25,
						ease: 'easeOut',
					}}>

					{
						TV_CHANNELS.map((channel, index) => {
							return (
								<FocusNode key={index} focusedClass='channel-focused' className='text-white'>
									<ChannelTile title={channel.name} imageUrl={channel.logo} />
								</FocusNode>
							)
						})
					}
					</motion.div>
			</div>
		</div>
	)
}
