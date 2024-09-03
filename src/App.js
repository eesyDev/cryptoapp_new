import { Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cryptocard from './components/Cryptocard';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Homepage from './pages/Homepage';
import News from './pages/News';

function App() {
	const arr = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			
			{/* {
				arr.map((el) => <Cryptocard text={el} />)
			} */}
			<div className="main">
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
					<Route path='/news' element={<News />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
