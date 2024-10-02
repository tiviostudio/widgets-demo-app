import { FocusNode } from '@please/lrud'

interface Props {
	title: string
	imageUrl: string
}

export const VideoTile = ({ title, imageUrl }: Props) => {
	return (
		<FocusNode focusedClass='channel-focused' className='w-[289px] rounded-[0.925vh] transition-all duration-200 ease-in-out m-2 group'>
			<img className="object-cover w-[289px] h-[162px]" src={imageUrl} alt={title} />
			<h3 className='text-white group-hover:bg-white group-hover:text-black title p-4'>{title}</h3>
		</FocusNode>
	)
}
