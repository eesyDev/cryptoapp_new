import { Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cryptocard from './components/Cryptocard';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Homepage from './pages/Homepage';
import News from './pages/News';
import CoinDetails from './pages/CoinDetails';

function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			
			<div className="main">
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
					<Route path='/news' element={<News />} />
					<Route path='/crypto/:coinId' element={<CoinDetails/>}/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
