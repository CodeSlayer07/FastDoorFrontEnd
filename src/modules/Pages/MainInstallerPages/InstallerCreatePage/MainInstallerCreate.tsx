import React, {useRef} from 'react';
import '../../SellerPages/SellerCreatePage/createSellerPage.css';
import {useNavigate} from "react-router-dom";
export const MainInstallerCreate = () => {

    const navigate = useNavigate();

    const refs = {
        fullName: useRef<HTMLInputElement>(null),
        phone: useRef<HTMLInputElement>(null),
    }

    const sendDataInstaller = async (e: {preventDefault: () => void;}) => {
        e.preventDefault()
        const fullName = refs.fullName.current?.value || '';
        const phone = refs.phone.current?.value || '';

        try {
            await fetch(`/api/listInstallers/create?fullName=${encodeURIComponent(fullName)}&phone=${encodeURIComponent(phone)}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            })

            navigate("/home/mainInstaller")
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="sellerCreatePage">
            <form onSubmit={sendDataInstaller} className="form-container">
                <h1>Добавление установщика</h1>
                <h3 className="subtitleInput">Укажите данные установщика</h3>

                <div className="input-group">
                    <label htmlFor="fullName">ФИО: </label>
                    <input
                        type="text"
                        className="input_SellerPage"
                        id="fullName"
                        required
                        ref={refs.fullName}
                        placeholder="ФИО"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="phone">Номер телефона: </label>
                    <input
                        type="text"
                        className="input_SellerPage"
                        id="phone"
                        required
                        ref={refs.phone}
                        placeholder="Номер телефона"
                    />
                </div>


                <button id="submitButton" type="submit" className="submitInstallers">Добавить</button>
            </form>
        </div>
    );
};
