'use client'

import Button from "@/components/ui/button/Button"
import { Field } from "@/components/ui/field/Field"
import { AtSign, Lock } from "lucide-react"

interface IAuth {
    type?: 'login' | 'register',
}

export default function Auth( { type }: IAuth ) {
    return ( 
        <div className="flex w-screen h-full">
            <form className="m-auto block w-96 border-grey border  border-indigo-600 rounded-xl p-5">
                <h1 className="text-center my-5" >{type}</h1>
                <div className="text-center" >
                    <Field className="text-center mb-5" placeholder="Enter email" type="email" Icon={AtSign} />
                    <Field placeholder="Enter password" type="password" Icon={Lock} />
                </div>
                <div className="text-center my-3">
                    <Button isLoading={false} >{type}</Button>
                </div>
            </form>
        </div>
    )
}