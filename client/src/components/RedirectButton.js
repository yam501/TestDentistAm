import React from 'react';

const RedirectButton = ({type}) => {
    return (
        <button className={type}>
            <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2.53503 1.07601L10.4493 9.48836C10.6707 9.76508 10.8367 10.0971 10.8367 10.3739C10.8367 10.7059 10.6707 11.038 10.4493 11.3147L2.53503 19.7271C2.03693 20.2805 1.20676 20.2805 0.653319 19.7824C0.0998743 19.2843 0.0998743 18.4542 0.597974 17.9007L7.68206 10.3739L0.597974 2.90237C0.0998743 2.34893 0.0998743 1.51876 0.653319 1.02066C1.20676 0.522561 2.03693 0.522561 2.53503 1.07601Z"
                    fill="#E21F4D"/>
            </svg>
        </button>
    );
};

export default RedirectButton;