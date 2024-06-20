
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'


function App() {

    return (
        <div className='App'>

            <Navigation />

            <main id='content'>
                <AppRoutes />
            </main>


        </div>
    )
}

export default App