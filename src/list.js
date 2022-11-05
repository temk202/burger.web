import './burger.css';
import { useState } from "react";
import axios from "axios"
function Product() {

    const [mdqee, setMdqee] = useState()


       const blablabla = async()=>{

       const res = await axios.get("https://dummyjson.com/products/10")
       console.log(res)
       setMdqee(res.data)
       }
       

  return (
    <div className='burger'>
        {
            mdqee !== undefined ? (
                <div>
                    <h1>{mdqee.title}</h1>
                    <img src={mdqee.thumbnail} />
                </div>
            ) : <></>
        }

        <button onClick={() => { blablabla()}}>axios</button>

    </div>
  );
}

export default Product;