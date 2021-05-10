// import Head from 'next/head'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Container from './components/container'



export default function Home() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <Container />         
        </div>
      </div> 
    </div>
  )
}

