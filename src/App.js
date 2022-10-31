import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard';
import './output.css';

function App() {
  const [images,setimages] = useState([])
  const [isloading,setIsLoading] = useState(true)
  const [term,setTerm] = useState('')


  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setimages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  },[])

  return (
   <div className='container mx-auto'>
    <div className='grid grid-cols-3 gap-4'>
      {images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
      })}
    </div>
   </div>
  );
}

export default App;
