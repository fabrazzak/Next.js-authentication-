"use server"

import { UserData } from "@/app/register/page";


const registerUser =async (data:UserData) => {
    console.log(data)
    const res = await fetch(`${process.env.SECRET_URL}/register`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        cache:"no-store"

    })
    const userInfo = await res.json();

    return  userInfo
};

export default registerUser;