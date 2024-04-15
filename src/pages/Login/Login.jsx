import { useContext, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {


    const { signIn, signInWithGoogle, githubLogin } = useContext(AuthContext);

    const [loginSuccess, setLoginSuccess] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        setLoginSuccess('')
        setLoginError('')

        // login existing uset
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setLoginSuccess('User logged in Successfully');
                // Reset form field after login
                e.target.reset();

                // After login go to clicked state otherwish go to home page
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError('Please check your Email or Password again :(')
            })

    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                // After Google login go to clicked state otherwish go to home page
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    //   github login
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                //  Go to Home page after github Login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="max-w-7xl mx-auto">

            <div>
                <i><h1 className="lg:text-3xl text-2xl text-red-800 font-bold md:mb-4 mb-2 lg:mb-6">Please Login Now!</h1></i>
                <label className="mr-1 text-xl lg:text-2xl font-bold lg:font-semibold">Sign in with</label>

                <button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
                    <FcGoogle onClick={handleGoogleLogin} size={30} className="flex -mb-1 justify-center items-center w-full" /></button>

                <button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
                    <FaGithub onClick={handleGithubLogin} size={30} className="flex -mb-1 justify-center items-center w-full" /></button>
            </div>
            <form onSubmit={handleLogin}>
                <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded" type="email" name="email" placeholder="Email Address" required />

                <input className="text-lg font-semibold w-full px-4 py-2 border border-gray-400 rounded mt-4" type="password" name="password" placeholder="Password" />

                <div className="md:mt-5 mt-6 flex justify-between font-semibold lg:text-lg text-base md:text-sm">
                    <p className="flex text-slate-900">
                        <input className="mr-2" type="checkbox" />
                        <span>Remember Me</span>
                    </p>
                    <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Lost Password?</a>
                </div>
                <div className="text-center">
                    <input className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2
 text-white rounded text-lg font-semibold" type="submit" name="submit" value="Login to your account" />
                </div>
            </form>

            {
                loginSuccess && <p className='text-xl font-bold text-center pt-6 pb-2 text-green-600'>{loginSuccess}</p>
            }
            {
                loginError && <p className='text-xl font-bold text-center pt-6 pb-2 text-red-600'>{loginError}</p>
            }
            <div className="mt-4 font-semibold lg:text-xl text-base text-slate-800 text-center"><i>Don&apos;t have an account?</i>{" "}
                <a className="text-blue-600 hover:underline hover:underline-offset-4" href="/register">Register Here</a>
            </div>
        </div>
    );
};

export default Login;