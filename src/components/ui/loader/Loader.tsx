import { Loader2 } from "lucide-react";
import style from './Loader.module.scss'

/**
 * Компонент для отображения загрузки
*/
export function Loader() {
    return <Loader2 className={style.loader} />
}