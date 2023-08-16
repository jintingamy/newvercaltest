import React, { useState } from 'react'
import axios from 'axios'
export default function Login() {
    const [user, setuser] = useState({
        fullname: '',
        password: ''
    })
    const sub = (e) => {
        e.preventDefault()
        axios.post('https://sneat3.onrender.com/api/v1/login', user).then((resopense) => {
            console.log('登录成功');
            console.log(resopense.data);
        }).catch((error) => {
            console.log('登录失败');
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
            <h1>登录</h1>
            <form action="" method="post" onSubmit={sub}>
                <input type="text" name='fullname' onChange={handlechange} />
                <input type="password" name="password" onChange={handlechange} />
                <button type="submit">登录</button>
            </form>
        </div>
    )
}
