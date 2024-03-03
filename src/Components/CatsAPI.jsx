import { useEffect, useState } from 'react'

function CatsAPI() {
  const  [catFact, setCatFact] = useState('');
  const [catImageUrl, setCatImageUrl] = useState('');
  // Define un efecto que se ejectua después de que el componente
  // se haya renderizado
  useEffect( 
    () => {
      const fetchCatFact = async() => {
        try{
            const token = '10160141112887644';
            const randomNumber = Math.floor(Math.random() * 731) + 1;
            const response = await fetch('https://catfact.ninja/fact');
          console.log('response=>', response);
          const data = await response.json();
          setCatFact(data.fact);
          console.log('dATA=>', data);
        }catch(error){
          console.error(error);
        }
      }
    fetchCatFact();
    }
  , []); //Array vacio, este efecto solo se ejecutará una vez 
  useEffect(
    () => { // Define otro efecto que se ejecuta cada vez catFact cambia
      if(catFact){
        const generateCatImage = async() => {
          try{
            const firstWord = catFact.split(' ', 3).join(' ');

            const response = await fetch(`https://cataas.com/cat/says/${firstWord}`); // alt+96
            if(response.ok){
              const data = await response.blob();
              const imageUrl = URL.createObjectURL(data);
              setCatImageUrl(imageUrl);
            }else{
              console.error('Error fetching cat image: ', response.statusText);
            }
          }catch(error){
            console.error(error);
          }
        };
        generateCatImage();
      }
    }, [catFact] //Este efecto se ejecutará cada vez que catFact cambie
  );
  return(
    <>
      <h1>Random Cat Fact</h1>
      {catFact && <p> {catFact} </p>}
      {
        catImageUrl &&  (<img src={catImageUrl} alt='Random cat' width={400} height={400}/>)
      }   
      {
        catImageUrl &&  <p>Image generated based on the first word of the fact</p>
      }      
    </>
  )
}

export default CatsAPI
