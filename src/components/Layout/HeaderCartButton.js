import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import CartContext from "../store/cart-context";


const HeaderCartButton = props => {
    const [btnAnimated, setBtnAnimated] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnAnimated ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnAnimated(true);

        const timer = setTimeout(() => {
            setBtnAnimated(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
    </button>

};

export default HeaderCartButton;