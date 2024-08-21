import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='CutHalf'>
    <div className='ColorPart'>    
    </div>
    <div className='LogIn'>
        <div className='RegisterText'>
        <h1>Regestratsiya</h1>
        <p>Registratsiya qilish uchun pastdagi malumotlarni kiriting</p>
        </div>
        <div className='LoginInputs'>
            <input   type="text"  placeholder='Ism'></input>
            <input   type="text"  placeholder='Familiya'></input>
            <input   type="number"  placeholder='Tel'></input>
            <input   type="password"  placeholder='Parol'></input>
            <div className='chekbox'>
            <input type="checkbox"  /> <p>Royxatdan otish orqali siz bizning  maxfiylik siyosatimiz bilan bogliq shartlarimizga rozilik bildirasiz</p>
            </div>
            <div className='Royxatdan_Otish_Tugmasi'><button>Ro'yxatdan o'tish</button></div>
            <div className='Allaqchon_royxatdan_otkan'>
                <p>Siz Allaqachon ro'yxatdan o'tkanmisiz?</p>
                <Link to={"/Sigin"}>
                <p className='linktxt'>Kirish</p>
                </Link>
            </div>
        </div>
      
    </div>
    
    </div>
  )
}

export default Login
