import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<nav>
					<h1>
						<Link to='/'>My Articles</Link>
					</h1>

					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/contact'>Contact</NavLink>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/articles/:id' element={<Article />} />
					<Route path='*' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
