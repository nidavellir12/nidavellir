import "./App.css"
import CompanyInfo from "./Components/CompanyInfo/CompanyInfo"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import HeroComponent from "./Components/HeroComponent/HeroComponent"
import MainContent from "./Components/MainContent/MainContent"
import MainForm from "./Components/MainForm/MainForm"
import ProductsList from "./Components/ProductsList/ProductsList"
import QuoteContainer from "./Components/QuoteContainer/QuoteContainer"
import Testimonials from "./Components/Testimonials/Testimonials"

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ProductsList />
      <CompanyInfo />
      <HeroComponent />
      <Testimonials />
      <QuoteContainer />
      <MainForm />
      <Footer />
    </div>
  )
}

export default App
