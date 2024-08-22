import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
const Sigin = () => {
  return (
    <div className='CutHalf'>
    
    <div className='LogIn'>
        <div className='RegisterText'>
        <h1>Kirish</h1>
        <p>Registratsiya qilish uchun pastdagi malumotlarni kiriting</p>
        </div>
        <div className='LoginInputs'>
            <input   type="text"  placeholder='Ism'></input>
           
          
            <input   type="password"  placeholder='Parol'></input>
           
            <div className='Royxatdan_Otish_Tugmasi'><button>Kirish</button></div>
            <div className='Allaqchon_royxatdan_otkan'>
                <p>Akkaount mavjud emas?</p>
                <Link to={"/Login"}>
                <p className='linktxt'>Ro'yxatdan o'tish</p>
                </Link>
            </div>
        </div>
      
    </div>
    <div className='ColorPart'>    
    </div>
    </div>
  )
}

export default Sigin
