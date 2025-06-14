import Auth from "@/components/screens/auth/Auth"
import { NO_INDEX_PAGE } from "@/constants/seo.constants"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Register",
    ...NO_INDEX_PAGE
}

/**
 * Страница регистрации
 * Использует переиспользуемый компонент Auth
*/
export default function RegisterPage() {
    return <Auth type="register" />
}