import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/admin");
  };

  return (
    <div className="CutHalf">
      <div className="ColorPart"></div>
      <div className="LogIn">
        <div className="RegisterText">
          <h1>Regestratsiya</h1>
          <p>Registratsiya qilish uchun pastdagi malumotlarni kiriting</p>
        </div>
        <div className="LoginInputs">
          <input type="text" placeholder="Ism" />
          <input type="text" placeholder="Familiya" />
          <input type="number" placeholder="Tel" />
          <input type="password" placeholder="Parol" />
          <div className="chekbox">
            <input type="checkbox" />{" "}
            <p>
              Royxatdan otish orqali siz bizning <a className="decoration-solid underline text-blue-500 cursor-pointer">maxfiylik siyosatimiz bilan bogliq shartlarimiz</a>ga rozilik bildirasiz
            </p>
          </div>
          <div className="Royxatdan_Otish_Tugmasi">
            <button onClick={handleRegisterClick}>Ro'yxatdan o'tish</button>
          </div>
          <div className="Allaqchon_royxatdan_otkan">
            <p>Siz Allaqachon ro'yxatdan o'tkanmisiz?</p>
            <Link to={"/Sigin"}>
              <p className="linktxt">Kirish</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
