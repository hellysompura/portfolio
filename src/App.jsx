import './App.css'
import Header from './pages/Header'
import Introduction from './pages/Introduction'
import Layout from './components/Layout'

function App() {
  return (
    <div className='max-w-7xl mx-auto my-5 px-5 md:px-0 lg:px-0'>

      <div className='my-7'><Header /></div>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5'>
        <div className='flex justify-center items-start md:m-3 lg:m-3'>
          <Introduction />
        </div>

        <div id='layout-container' className='md:m-3 lg:m-3 h-[calc(100vh-100px)] overflow-y-auto'>
          <Layout />
        </div>

      </div>
    </div>
  )
}

export default App
