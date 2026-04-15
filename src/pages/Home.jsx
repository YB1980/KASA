import Banner from "../components/Banner"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Header from "../components/Header"
import image from "../assets/banner.png"

function Home() {
  
  return (
    <>
        <div>
            <Header />
            <Banner 
  imageUrl={image} 
  title="Chez vous, partout et ailleurs" 
  variant="banner-home"
/>
            <Card />
            <Footer />
        </div>   
    </>
  )
}

export default Home