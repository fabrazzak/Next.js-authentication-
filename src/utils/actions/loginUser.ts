import { FormValues } from "@/app/login/page";


const loginUser = async (data: FormValues) => {
    console.log(data)
    const res = await fetch(`http://localhost:5000/api/v1/login`,{
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

export default loginUser;