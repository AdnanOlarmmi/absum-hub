import Header from './components/Nav';
import Slider from './components/Slider';
import Main from './components/Main';
import ThankYou from './components/ThankYou';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Header />
								<Slider />
								<Main />
							</>
						}
					/>

					<Route path='/thankyou' element={<ThankYou />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

