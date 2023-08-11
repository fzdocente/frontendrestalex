import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div>
      <div className={styles.cartItem}>
        <img src={item.img} alt={item.name} style={{width:60,height:60}}  />
        <div className={styles.dataContainer}>
          <div className={styles.left}>
            <p>{item.name}</p>
            <div className={styles.buttons}>
              <button onClick={() => editItemToCart(item._id, "add", amount)}>
                <p style={{ background: "green", fontSize: 15, padding: 2, width: 20, color: "white" }}>+</p>
              </button>
              <button onClick={() => editItemToCart(item._id, "del", amount)}>
                <p style={{ background: "red", fontSize: 15, padding: 2, width: 30, color: "white" }}>-</p>
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div>{item.amount}</div>
            <p>Subtotal: ${new Intl.NumberFormat('de-DE').format(item.amount * item.price)}</p>
          </div>
        </div>
      </div>   
    </div>
  );
};
