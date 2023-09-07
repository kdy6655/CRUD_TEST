import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props:LayoutProps) {
    return(
        <div>
            <form>
                <h2>Create</h2>
            </form>
            {props.children}
        </div>
    )
}