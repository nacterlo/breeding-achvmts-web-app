'use client'
import { useParams } from "next/navigation";


export default function Page() {
    const params = useParams();
    const achievmentId = params.id;

    console.log(params);
    
    return (
        <div>
            <p>{achievmentId}</p>
        </div>
    )
}