import { useContext } from "react";
import { AuthContext } from "../../providers/Context";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Register = () => {

    const { createUser, signInWithGoogle , githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('photoURL');
        console.log(form.get('email'))
        console.log(name, photoURL, email, password);


        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })

    }

    // google login

    const handleGoogleLogIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    // github login
    const handleGithubLogin = () => {
        githubLogin()
        .then(result =>{
          console.log(result.user);
          //  Go to Home page after github Login
          navigate(location?.state ? location.state : '/' );
      })
      .catch(error => {
          console.error(error);
      })
    }




    return (
        <div className="max-w-7xl mx-auto">

            <div className="md:pt-10 pt-8 pb-8 md:pb-10">
                <img className="mx-auto md:w-[400px] w-[500px] rounded-3xl" alt="" />
            </div>

            <div className='text-center'>
                <p className="mb-8 text-center text-2xl md:text-3xl font-semibold">Please Register an account!</p>

                <label className="mr-1 ml-auto text-2xl text-orange-600 lg:text-2xl font-bold lg:font-semibold">Register with</label>

                <button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
                    <FcGoogle  onClick={handleGoogleLogIn} size={30} className="flex -mb-1 justify-center items-center w-full" /></button>

                <button className="lg:mx-4 mx-2 h-8 w-8 rounded-full">
                    <FaGithub  onClick={handleGithubLogin} size={30} className="flex -mb-1 justify-center items-center w-full" /></button>
            </div>

            <div className="my-8 flex text-center border-b-2 border-dashed border-y-2 border-slate-300">
                <p className="mx-auto text-2xl font-semibold text-black"><i>Or</i></p>
            </div>
            <form onSubmit={handleRegister} className="text-center">

                <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="name" placeholder="Your Name" required />

                <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Your Email Address" required />

                <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="photoURL" placeholder="Photo URL" />

                <input className="text-lg border-neutral-300 border  font-medium outline-pink-500 md:w-3/4 px-4 py-2 mb-6 rounded placeholder-pink-600" type="password" name="password" placeholder="Password" required />

                <div className="md:flex md:space-x-0 space-x-3 items-center gap-3 justify-center">
                    <input className='md:h-4 md:w-4' type="checkbox" name="terms" id="terms" />

                    <label htmlFor='terms' className="md:text-xl font-medium">I accept the Terms and Conditions</label>
                </div>
                <input className='btn max-w-7xl md:text-lg text-base font-medium mt-5 mb-4 hover:bg-indigo-700 bg-indigo-600 text-white' type="submit" value="Create an Account" />
            </form>

            <div className="pb-8 font-semibold md:text-xl text-base text-slate-800 text-center"><i>Already have an account?</i>{" "}
                <a className="text-blue-600 hover:underline hover:underline-offset-4" href="/login">Login Here</a>
            </div>



        </div>


    );
};

export default Register;