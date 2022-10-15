// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

import { useRouter } from "next/router";

// const SignleUser = ({userData}) => {
//     // const [user, setUser] = useState()
//     // const router = useRouter()
//     // const {id} = router.query
//     // useEffect(()=>{
//     //     const getUser = async () => { 
//     //         try {
//     //             const ahmet = await fetch('https://jsonplaceholder.typicode.com/users')
//     //             const data = await ahmet.json()
//     //             setUser(userData && userData.find((user)=>user.id === Number(id)))
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     }
//     //     getUser()
//     // },[id,userData])
//     // console.log(userData);
//     return (
//         <div>
//             <h1>Single User</h1>
//             <p>
//                 <b>Full Name</b> : {userData?.name}
//                 <b>Full Name</b> : {userData?.username} {''}
//                 <b>Full Name</b> : {userData?.email}
//             </p>
//         </div>
//     )
// }


// export const getServersideProps = async (context) => {
//     const ahmet = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
//     const userData = await ahmet.json()
//     console.log(context);
//     return {
//         props: {
//             userData
//         }
//     }
// }
// export default SignleUser

// import React from 'react'

const SingleUser = ({userData}) => {
    const router = useRouter()
    console.log(router);
    return (
        <div>
            <h1>User Item</h1> 
            <p style={{color:'green'}}>
                <b>Full name:</b> {userData?.name} {''}
            </p>
            <p>
                <b>email</b> {userData?.email} {''}
            </p>
            <p>
                <b>adress</b> {userData?.address.street} {''}
            </p>
        </div>
    )
}

export default SingleUser;
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const userData = await res.json()
    return {
        props: {
            userData,
        }
    }
}

export const getStaticPaths = async () => {
    const ahmet = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await ahmet.json()
    const ids = users.map((user)=>user.id)
    const paths = ids.map((id)=>({params:{id:id.toString()}}))
    console.log(paths);
    return {
        paths,
        fallback:false
    }
}