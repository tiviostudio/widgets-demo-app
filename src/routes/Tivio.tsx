import { TivioWidgetApp } from '@tivio/sdk-react'
import { useNavigate } from 'react-router-dom'

export default function Tivio() {
	const navigate = useNavigate()
	return (
		<div>
			<TivioWidgetApp id='' navigateFunction={navigate} />
		</div>
	)
}