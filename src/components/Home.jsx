import girl from '../media/girl-standing.jpg';
import men from '../media/men-suits.jpg';
import store from '../media/store-main.jpg';
import rack from '../media/store-rack.jpg';

/* eslint-disable react/prop-types */
function Home() {

  const pictures = [ {url: girl, name: 'WOMEN'},
    {url: men, name: 'MEN'},
    {url: store, name: 'JEWELRY'},
   ]

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-100 h-full w-full">
        {pictures.map(item => {
          return (
            <div key={item} className="bg-slate-100 h-48 w-96 overflow-hidden text-left flex items-center" 
            style={{backgroundImage:`url(${item.url})`, 
              backgroundSize: '100%', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat'}}>
                <h2 className='text-7xl text-amber-200 p-2'>SHOP {item.name}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home