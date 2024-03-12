

const Bottle = ({ bottles,handleCart }) => { 
    const {id,image_id,name,description } = bottles;
    return (
        <div className="container mx-auto border-2 border-red-400 px-10 py-5">
            <img src='https://pngtree.com/freepng/water-bottle_8462512.html 'alt="" />
            <h1>Bottle Name : {name}</h1>
            <h2>Bottle Id : {id}</h2>
            <p>{description}</p>
            <button onClick={() => handleCart(bottles)} className="bg-gray-900 text-white px-3 py-1 rounded-xl">ADD TO CART</button>
        </div>
    )
}
export default Bottle;