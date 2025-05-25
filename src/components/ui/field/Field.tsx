import { forwardRef } from "react";

// Сделать TypeInputProps
const Field = forwardRef<HTMLInputElement, TypeInputProps> (
    ({}, ref) => {
        return (
            <div>

            </div>
        )
    }
)