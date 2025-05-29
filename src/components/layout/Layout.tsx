import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import styles from './Layout.module.scss'

/**
 * Основной компонент для разметки страниц
 * Использует компонент Sidebar для отображения боковой панели
 * и секции для отображения контента страницы
 * Ипользуется в качестве обертки для всех страниц приложения в файле app/layout.tsx
*/
export default function LayoutClient({children}: PropsWithChildren<unknown>) {
    return (
        <main className={styles.layout}>
            <Sidebar />
            <section>{children}</section>
        </main>
    )
}