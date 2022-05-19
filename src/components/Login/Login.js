import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [navigate, user, from]);

    if (loading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <div className='d-flex align-items-center justify-content-center my-3'>
                <div style={{ height: '2px' }} className='bg-danger w-25 me-3'></div>
                <p className='text-white mt-3'>Or Login With</p>
                <div style={{ height: '2px' }} className='bg-danger w-25 ms-3'></div>
            </div>
            {/* {getError} */}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success w-50'>
                    Google Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;