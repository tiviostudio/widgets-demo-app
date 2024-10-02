import { Link } from 'react-router-dom'

export const ErrorScreen = () => {
	return (
		<div
			className="flex flex-col items-center justify-center"
			style={{
				backgroundImage: "url('/images/background.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100vw",
				height: "100vh"
			}}
		>
			<h2 className="text-white text-[120px] font-bold">Quadrum</h2>
			<h3 className="text-white text-[60px] font-bold opacity-80">404</h3>
			<p className="text-white text-[30px] font-bold opacity-80">Stránka nenalezena</p>
			<button className=' mt-16 button-base-styles bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 inline-flex items-center'>
				<Link to='/'>
					Zpět na hlavní stránku
				</Link>
			</button>
		</div>
	)
}
