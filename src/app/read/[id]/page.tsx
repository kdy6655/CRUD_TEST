import { ReactNode } from "react";

interface LayoutProps{
    params: any;
    children: ReactNode;
}

export default async function Read(props:LayoutProps){
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`, { cache: 'no-store' });
    const topic = await resp.json();
    return(
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    )
}