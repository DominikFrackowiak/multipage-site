import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export default function Article() {
	const params = useParams()
	const { id } = params
	const {
		data: article,
		isPending,
		error,
	} = useFetch(`http://localhost:3000/articles/${id}`)

	const navigate = useNavigate()

	useEffect(() => {
		if (error) {
			//redirect user
			setTimeout(() => {
				navigate('/')
			}, 1500)
		}
	}, [error, navigate])

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{article && (
				<div key={article.id} className='card'>
					<h3>{article.title}</h3>
					<p>By {article.author}</p>
					<p>{article.body}</p>
				</div>
			)}
		</div>
	)
}
