import { ArticleContato, ArticleFaleConosco } from "@/components/Article"
import { Stack } from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useState } from "react"

export default function Contato() {
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
    const router = useRouter()

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()
        try {
            const response = await fetch('/api/contato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, name, lastname, email, number })


            }
            )
            if (!response.ok) {
                const error = await response.text()
                throw new Error(error)
            }

            toast({
                title: `Sua mensagem foi enviada com sucesso!`,
                status: 'success',
                isClosable: true
            })
        } catch (error) {
            // setError(error.message)
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <Stack
                as="main"
            >
                <ArticleFaleConosco />
                <ArticleContato value1={name} value2={lastname} value3={email} value4={number} onChange1={(e: any) => setName(e.target.value)} onChange2={(e: any) => setLastname(e.target.value)} onChange3={(e: any) => setEmail(e.target.value)} onChange4={(e: any) => setNumber(e.target.value)} id1={name} id2={lastname} id3={email} id4={number} type5={"message"} value5={message} onChange5={(e: any) => setMessage(e.target.value)} id5={message} />

            </Stack>
        </form>

    )
}