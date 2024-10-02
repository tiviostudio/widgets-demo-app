interface Props {
	title: string
	imageUrl: string
}

export const ChannelTile = ({ title, imageUrl }: Props) => {
	return (
			<div className="group">
					<div className='relative w-48 h-48 transition-all duration-200 ease-in-out transform group-hover:scale-105 bg-background overflow-hidden'>
							<img className="object-cover w-full h-full" src={imageUrl} alt={title} />
					</div>
					<h3 className='text-white px-4 py-5 group-hover:bg-white group-hover:text-black title'>{title}</h3>
			</div>
	)
}
