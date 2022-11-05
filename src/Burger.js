import './burger.css';
import { useState } from "react";
import axios from "axios"
function Burger() {
    const [ingredients, setIngredients] = useState([])

    const [mdqee, setMdqee] = useState()

    const addNames =(item)=>{
        var array = [...ingredients]
        array.push(item)
        setIngredients(array)
        console.log(array)
       }
       const removeNames = (item) => {
        const array = [...ingredients]
        const found = array.findIndex(a => a === item)

         if(found >= 0) {
            array.splice(found, 1)
            setIngredients(array)

         }
       }

       const blablabla = async()=>{

       const res = await axios.get("https://dummyjson.com/products/10")
       console.log(res)
       setMdqee(res.data)
       }
       

  return (
    <div className='burger'>
        {
            mdqee != undefined ? (
                <div>
                    <h1>{mdqee?.title}</h1>
                    <img src={mdqee.thumbnail} />
                </div>
            ) : <></>
        }
        <div className='topbread'></div>
        {
            ingredients.map((item, i) => (
                <div className={item} key={i}></div>
            ))
        }
        <div className='bottombread'></div>

        <div className='buttons'>
            <p>Tomato</p>
            <button onClick={() => { addNames('tomato')}}>Add</button>
            <button onClick={() => { removeNames('tomato')}}>Remove</button>
        </div>
        <div className='buttons'>
            <p>Cheese</p>
            <button onClick={() => { addNames('cheese')}}>Add</button>
            <button onClick={() => { removeNames('cheese')}}>Remove</button>
        </div>
        <div className='buttons'>
            <p>Meat</p>
            <button onClick={() => { addNames('meat')}}>Add</button>
            <button onClick={() => { removeNames('meat')}}>Remove</button>
        </div>
        <div className='buttons'>
            <p>Vegetable</p>
            <button onClick={() => { addNames('vegetable')}}>Add</button>
            <button onClick={() => { removeNames('vegetable')}}>Remove</button>
        </div>

        <button onClick={() => { blablabla()}}>axios</button>

    </div>
  );
}

export default Burger;