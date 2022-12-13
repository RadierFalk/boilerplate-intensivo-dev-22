import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content container">
        <div className="row">
          <div className="col-4">
          <div class="card">
            <img 
             src="https://picsum.photos/300/200"
             class="card-img-top" 
             alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    
    </div>
  )
}

export default App
