import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



export default function Register () {
    const [id, idChange] = useState('');
    const [name, nameChange] = useState('');
    const [password, passwordChange] = useState('');
    const [email, emailChange] = useState('');
    const [phone, phoneChange] = useState('');
    const [country, countryChange] = useState('');
    const [address, addressChange] = useState('');
        
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj = {id,name,password, phone, email, country, address};
        // console.log(regobj);


        fetch("http://localhost:3001/users", {
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj),
        }).then((res)=> {
            alert('Register succes')
            navigate('/login')
        }).catch((err)=>{
            alert('Failed' + err.message)
        });

    }

    return (
        <div className="flex flex-col justify-center items-center">
        <form 
            onSubmit={handleSubmit}
            className="w-[300px] h-auto border-1 border-black p-4"
            >
            <h2>Daftar disini bree</h2>
            <div className="border-2 p-4">
            <label>Username<span className="text-red-500">
            *</span></label>
            <input type='text'
                className="w-full h-full outline-none
                p-4 bg-green-200"
                value={id} onChange={e=>idChange(e.target.value)}
            ></input>
            </div>

            <div className="border-2 p-4">
            <label>Full Name<span className="text-red-500">
            *</span></label>
            <input type='text'
                className="w-full h-full outline-none
                p-4 bg-green-200"
                value={name} onChange={e=>nameChange(e.target.value)}
            ></input>
            </div>

            <div className="border-2 p-4">
            <label>Email<span className="text-red-500">
            *</span></label>
            <input type='text'
                className="w-full h-full outline-none
                p-4 bg-green-200"
                value={email} onChange={e=>emailChange(e.target.value)}
            ></input>
            </div>

            <div className="border-2 p-4 my-4">
            <label>Password<span className="text-red-500">
            *</span></label>
            <input 
                type='password'
                className="w-full h-full
                outline-none p-4 bg-green-200"
                value={password} onChange={e=>passwordChange(e.target.value)}
            ></input>
            </div>

            <div className="border-2 p-4">
            <label>Phone<span className="text-red-500">
            *</span></label>
            <input type='text'
                className="w-full h-full outline-none
                p-4 bg-green-200"
                value={phone} onChange={e=>phoneChange(e.target.value)}
            ></input>
            </div>

            <div className="border-2 p-4">
            <label>Country<span className="text-red-500">
            *</span></label>
            <select
                className="w-full h-full outline-none
                p-4 bg-green-200"
                value={country} onChange={e=>countryChange(e.target.value)}
            >
                <option value='indoneia'>Indonesia</option>
                <option value='inggris'>Inggris</option>
                <option value='malaysia'>Malaysia</option>
            </select>
            </div>

            <div className="border-2 p-4">
            <label>Address<span className="text-red-500">
            *</span></label>
            <textarea type='text'
                className="w-full h-full outline-none
                p-4 bg-green-200"
                value={address} onChange={e=>addressChange(e.target.value)}
            ></textarea>
            </div>

            

            <div className='flex flex-row'>
                <button 
                    type='submit' 
                    className="bg-blue-400 p-4 mr-3">
                    Register</button>
                <Link to={'/register'} 
                    className="bg-green-400 p-4" >
                    Back</Link>  
            </div>

        </form>
    </div>
    )
}