import { useLocation } from 'react-router-dom'

export default function Contact() {
	const queryString = useLocation().search
	console.log(queryString)

	const queryParams = new URLSearchParams(queryString)
	const name = queryParams.get('name')

	return (
		<div>
			<h2>Hey {name}, Contact us here...</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
				exercitationem sit nihil explicabo aut et ipsum reprehenderit minima
				optio saepe, quae placeat aperiam? Dolorum libero aut voluptas tempora.
				Eum, nihil.
			</p>
		</div>
	)
}
