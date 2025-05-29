import cn from 'clsx'
import { forwardRef } from "react";
import { TypeInputProps } from "./Field.types";

import styles from './Field.module.scss'


/** Кастомный input */
export const Field = forwardRef<HTMLInputElement, TypeInputProps> (
    ({ error, style, Icon, className, ...rest }, ref) => {
        return (
            <div className={cn(styles.field, className)} style={style}>
                {
                    Icon && (
                        <div className={styles.icon}>
                            <Icon />
                        </div>
                    )
                }

                <input ref={ref} {...rest} />
                {error && <div className={styles.error}> {error.message} </div>}
            </div>
        )
    }
)