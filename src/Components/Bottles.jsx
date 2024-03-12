import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { addToValues } from "./Utlitis/Storage";
import { getStorageValues } from "./Utlitis/Storage";


const Bottles = () => {
    const [bottle, setBottle] = useState([]);
    const [cart, setCart] = useState([]);

    const handleCart = bottle => {
        setCart([...cart, bottle]);
        addToValues(bottle.id)
    }
    useEffect(() => {
        fetch("Bottles.json")
            .then(res => res.json())
            .then(data => setBottle(data.bottles))
    }, [])

    useEffect(() => {
        
        if (bottle.length) {
            const storedValue = getStorageValues();
            const matchedCart = [];
            for (const id of storedValue) {
                const findBottleId = bottle.find(bottleId => bottleId.id === id)
                if (findBottleId) {
                    matchedCart.push(findBottleId)
                }
            }
            setCart(matchedCart)
        }
    },[bottle])

    return (
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-4 gap-5 container mx-auto">
            <h1>Added items : {cart.length}</h1>
            {
                bottle.map(bottle => <Bottle
                    key={bottle.id}
                    bottles={bottle}
                    handleCart={handleCart}
                />)
            }
        </div>
    )
} 
export default Bottles;