import React, { useContext } from "react";
import Cart from "../Cart";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";



const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <>
    <Cart/>
    <div className={styles.productsContainer}>
      {products &&
        products.map((product, i) => (
          <div key={i} className={styles.product}>
            <img src={product.img} title={product.name} width={200} height={200} />
            <div>
              <p>
                {product.name} - ${new Intl.NumberFormat('de-DE').format(product.price)}
              </p>
            </div>
            {!product.inCart ? (
              <button style={{background:'green', borderRadius:10}} onClick={() => addItemToCart(product)}>
                <p style={{padding:5,color:'white'}}>Agregar al carrito</p>
              </button>
            ) : (
              <button style={{background:'red', borderRadius:10}}>
                <p style={{padding:5,color:'white'}}>En carrito</p>
              </button>
            )}
          </div>
        ))}
    </div>
    </>
  );
};

export default Products;
