import React, { useState } from 'react'
import axios from 'axios'
export default function Register() {
    const [user, setuser] = useState({
        fullname: '',
        password: ''
    })
    const sub = (e) => {
        e.preventDefault()
        axios.post('https://sneat3.onrender.com/api/v1/register', user).then((resopense) => {
            console.log('注册成功');
            console.log(resopense.data);
        }).catch((error) => {
            console.log('注册失败');
            console.log(error);
        })
    }
    const handlechange = (e) => {
        const title = e.target.name
        const value = e.target.value
        setuser({ ...user, [title]: value })
    }
    return (
        <div>
            <h1>注册</h1>
            <form action="" method="post" onSubmit={sub}>
                <input type="text" name='fullname' onChange={handlechange} />
                <input type="password" name="password" onChange={handlechange} />
                <button type="submit">注册</button>
            </form>
        </div>
    )
}
