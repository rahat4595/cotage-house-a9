import { useContext } from "react";
import { AuthContext } from "../../providers/Context";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoURL = form.get('photoURL');
        console.log(form.get('email'))
        console.log(name, photoURL,email, password);


         // Create user
         createUser(email, password)
         .then(result => {
             console.log(result.user)
         })
         .catch(error => {
             console.error(error)
         })
       
    }


       

    return (
        <div className="max-w-7xl mx-auto">
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