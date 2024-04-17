import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Helmet>
            <title>Error | Cotage House</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">OPPS!</h1>
                        <p className="py-6">Looks Like you have come to the wrong place</p>
                        <Link to='/'>
                            <button className="btn btn-primary">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;