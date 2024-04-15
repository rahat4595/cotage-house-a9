import { useContext } from "react";

import { AuthContext } from "../../providers/Context";
import { Helmet } from "react-helmet-async";


const UpdateUser = () => {

  // Using context with AuthContext
  const { user, loading, updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photoURL = form.get('photoURL');
    console.log(name, photoURL);

    // Update profile
    await updateUserProfile(name, photoURL)

  }

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }


  return (

    <div className="flex justify-around shadow-2xl bg-stone-50 w-10/12 border-none p-4 m-auto rounded-2xl items-center mt-14 mb-16">

<Helmet>
        <title>Update Profile | Cotage House</title>
    </Helmet>
      

      <div>
        <div>
          <div className=" py-6">
            <div>
              {
                user && <img className="w-32 mb-4 h-32 rounded-full border-4 border-blue-600 p-1 mx-auto" src={user?.photoURL || "https://i.ibb.co/8bP1kvZ/user-profile-icon-free-vector.jpg"} />
              }
            </div>
            <div>
              {
                user &&
                <>
                  <h3 className="text-center text-[24px] text-gray-900 font-bold">{user?.displayName || 'Username not found'}</h3>
                  <h3 className="text-center mt-3 text-lg text-gray-900 font-medium">{user?.email || 'Email: not found'}</h3>
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleUpdateProfile} className="text-center">
        <h1 className="text-2xl font-bold">Update Your profile</h1>
        <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 mt-6 px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="name" placeholder="Your Name" defaultValue={user.displayName} />

        <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-6 py-2 rounded placeholder-pink-600" type="text" name="photoURL" placeholder="Photo URL" defaultValue={user.photoURL} />

        <input className="text-lg border-neutral-300 border font-medium outline-pink-500 md:w-3/4 px-4 mb-3 py-2 rounded placeholder-pink-600" type="email" name="email" placeholder="Your Email Address" readOnly defaultValue={user.email} />

        <br></br>

        <input className='btn md:text-lg text-base font-medium mt-5 mb-4 hover:bg-indigo-700 bg-indigo-600 text-white' type="submit" value="Update Profile" />

      </form>
    </div>
  );
};

export default UpdateUser;