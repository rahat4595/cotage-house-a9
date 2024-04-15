import { useContext } from "react";
import { AuthContext } from "../../providers/Context";


const Login = () => {


    const {signIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <div className="max-w-7xl mx-auto">
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
            <div className="mt-4 font-semibold lg:text-xl text-base text-slate-800 text-center"><i>Don&apos;t have an account?</i>{" "}
    <a className="text-blue-600 hover:underline hover:underline-offset-4" href="/register">Register Here</a>
        </div>
        </div>
    );
};

export default Login;