import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"; // Import Link

export default function Login () {
    const [id, idChange] = useState('');
    const [password, passwordChange] = useState('');

    const navigate = useNavigate();

    const ProceedLogin= (e) => {
        e.preventDefault();
        if(validate()){
            // console.log('proceed');
            fetch('http://localhost:3001/users/'+id).then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp)
                alert('login succesful')
                navigate('/')
            }).catch((err)=>{
                alert("Login failed bruh"+err.message);
            })
        }
    }

    const validate=() =>{
        let result = true;
        if(id===''|| id===null) {
            result = false;
            alert('enter username');
        }
        if(password===''|| password===null) {
            result = false;
            alert('enter password');
        }
        return result;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form 
                className="w-[300px] h-auto border-1 border-black p-4"
                onSubmit={ProceedLogin}>
                <h2>Login disini bree</h2>
                <div className="border-2 p-4">
                <label>Username<span className="text-red-500">
                *</span></label>
                <input 
                    value={id}
                    onChange={e=>idChange(e.target.value)}
                    className="w-full h-full outline-none
                p-4 bg-green-200"></input>
                </div>

                <div className="border-2 p-4 my-4">
                <label>Password<span className="text-red-500">
                *</span></label>
                <input className="w-full h-full
                    outline-none p-4 bg-green-200"
                    value={password}
                    onChange={e=>passwordChange(e.target.value)}
                ></input>
                </div>

                <div className='flex flex-row'>
                    <button 
                        type='submit' 
                        className="bg-blue-400 p-4 mr-3">
                        Login</button>
                    <Link to={'/register'} 
                        className="bg-green-400 p-4" >
                        Register</Link>  
                </div>

            </form>
        </div>
    )
}