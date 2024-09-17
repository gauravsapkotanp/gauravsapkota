import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";

const SignUpStep2 = () => {
    // Get email from previous page (MainPage)
    const { email } = usePage().props;

    // Handle form submission
    const { data, setData, post } = useForm({
        email: email || "", // Set email from props or fallback to an empty string
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("signupstep3")); // Submit the form to signup/step3
    };

    return (
        <>
            <div className="bg-white">
                <div className="w-full py-2 px-16 border-b-2">
                    <div className="flex gap-10 items-center justify-between">
                        <div className="w-full py-2 px-16">
                            <div className="flex gap-10 items-center justify-between">
                                <div className="flex gap-5">
                                    <img
                                        src="/images/logo.png"
                                        className="mx-auto w-32"
                                        alt="Logo"
                                    />
                                </div>

                                <div className="">
                                    <Link href={route("getstarted")}>
                                        <button className="border-2 py-1.5 transition-all ease-in-out duration-300 delay-75 bg-sky-600 hover:border-sky-600 text-white px-7 rounded-full flex items-center justify-items-center gap-2">
                                            <h1 className="text-white">
                                                Login
                                            </h1>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2 of 3 */}
                <div className="flex items-center justify-center my-36">
                    <div className="text-start">
                        <h1 className="uppercase py-5">
                            Step <span className="font-bold">2</span> of
                            <span className="font-bold"> 3</span>
                        </h1>

                        <h1 className="text-4xl font-bold text-black tracking-wider">
                            Create a password to start <br /> your membership
                        </h1>
                        <p className="text-black text-base py-5">
                            Just a few more steps and you're done! <br /> We
                            hate paperwork, too.
                        </p>

                        {/* Form for email and password */}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={data.email} // Set the email from data
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    } // Update email if needed
                                    className="bg-white w-full text-black ring-0 focus:ring-0 focus:outline-none placeholder-gray-500 px-3 py-5 rounded-lg"
                                    disabled // Disable the email field
                                />
                            </div>
                            <div className="py-8">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={data.password} // Bind the password to the state
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    } // Update password state
                                    className="bg-white w-full text-black ring-0 focus:ring-0 focus:outline-none placeholder-gray-500 px-3 py-5 rounded-lg"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-indigo-500 text-2xl px-8 py-5 w-full rounded-lg hover:bg-indigo-300 transition-all ease-in-out duration-300 delay-75 text-white font-bold"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUpStep2;
