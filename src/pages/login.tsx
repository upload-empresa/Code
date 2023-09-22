import { CardLogin } from "@/components/Card"
import { Stack } from "@chakra-ui/react"
import axios from 'axios';
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}



export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = async () => {
        try {
            await signIn('credentials', {
                email,
                password,
            });

            // router.push('/profiles');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Stack
            as="main"
            p={10}
            align={"center"}
        >
            <CardLogin id1={email} value1={email} onChange1={(e: any) => setEmail(e.target.value)} id2={password} value2={password} onChange2={(e: any) => setPassword(e.target.value)} onClick={login} />
        </Stack>
    )
}