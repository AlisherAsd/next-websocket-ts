import { InputHTMLAttributes } from "react";
import { Loader } from "../loader/Loader";
import styles from './Button.module.scss'

interface IButton extends InputHTMLAttributes<HTMLInputElement> {
    isLoading?: boolean
}

/**
 * Кнопка
 * @param isLoading - флаг для отображения загрузки
 * @param children - текст кнопки
*/
export default function Button( { isLoading, children}: IButton ) {
    return <button className={styles.button}>{isLoading ? <Loader /> : children}</button>
}