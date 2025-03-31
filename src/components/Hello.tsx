// src/components/Hello.tsx

type HelloProps = {
    readonly name: string;
}

export function Hello({name}: HelloProps){
    return <h1>Olá, {name}!</h1>
}