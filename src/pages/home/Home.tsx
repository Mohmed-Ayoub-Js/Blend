import Application from '../../Components/Applications/Application'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/about/About'
import Header from '../../Components/header/Home'
const Home = () => {
  return (
    <div className='flex flex-col'>
        <div>
            <Header />
        </div>
        <div className='flex justify-center items-center flex-col m-10 p-10'>
          <About />
          <Application />
        </div>
        <div>
        <Footer />
        </div>
    </div>
  )
}

export default Home