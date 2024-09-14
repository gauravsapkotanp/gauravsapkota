import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { GrSecure } from "react-icons/gr";
import CryptoJS from "crypto-js";

const ChoosePayment = () => {
    const { props } = usePage();
    const { price } = props;

    const generateUUID = () => {
        // Generate a UUID version 4
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                const r = (Math.random() * 16) | 0,
                    v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    };
    const initiateEsewaPayment = () => {
        const params = {
            total_amount: price,
            transaction_uuid: generateUUID(),
            product_code: "EPAYTEST",
            amount: price,
            tax_amount: 0,
            product_service_charge: 0,
            product_delivery_charge: 0,
            success_url: "http://127.0.0.1:8000/home",
            failure_url: "http://127.0.0.1:8000/signup/planform",
            signed_field_names: "total_amount,transaction_uuid,product_code",
        };

        // Generate the signature
        const secret = "8gBm/:&EnhH.1/q";
        const fieldsToSign = params.signed_field_names.split(",");
        const queryString = fieldsToSign
            .map((field) => `${field}=${encodeURIComponent(params[field])}`)
            .join(",");

        console.log("Query String:", queryString);

        const hash = CryptoJS.HmacSHA256(queryString, secret);
        const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

        console.log("Signature:", hashInBase64);

        // Append the signature to params
        params.signature = hashInBase64;

        console.log("Payload:", params);

        // Create and submit the form
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

        Object.keys(params).forEach((key) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = params[key];
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    };
    const initiateKhaltiPayment = async () => {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        const requestPayload = {
            amount: price * 100,
            product_identity: generateUUID(),
            product_name: "Your Product Name",
            product_url: "http://yourwebsite.com/product",
        };

        try {
            const response = await fetch("/khalti/initiate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify(requestPayload),
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = data.paymentUrl;
            } else {
                console.error("Error initiating Khalti payment:", data.message);
            }
        } catch (error) {
            console.error("Network error initiating Khalti payment:", error);
        }
    };

    return (
        <>
            <div className=" bg-white">
                <div className="w-full py-2 px-16 border-b-2">
                    <div className="flex gap-10 items-center justify-between">
                        <div className="w-full py-2 px-16">
                            <div className="flex gap-10 items-center justify-between">
                                <div className="flex gap-5">
                                    <img
                                        src="/images/logo.png"
                                        className="mx-auto w-32 "
                                        alt=""
                                    />
                                </div>

                                <div className=" ">
                                    <Link href={route("getstarted")}>
                                        <button className="border-2  py-1.5 transition-all ease-in-out duration-300 delay-75  bg-sky-600 hover:border-sky-600 text-white px-7 rounded-full flex items-center justify-items-center gap-2">
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
                <div className="flex items-center justify-center  my-28 border-4 border-sky-500 rounded-xl mx-96  ">
                    <div className="text-start py-16">
                        <GrSecure className="text-5xl text-sky-500 mx-auto" />
                        <h1 className="uppercase py-5 text-center">
                            Step <span className="font-bold">3</span> of
                            <span className="font-bold"> 3</span>
                        </h1>

                        <h1 className="text-4xl font-bold text-center text-black tracking-wider">
                            Choose how to pay.
                        </h1>

                        <p className="py-5 text-center">
                            Your Payment is encrypted and you can manage how{" "}
                            <br /> you pay anytime.
                        </p>

                        <div className="grid grid-cols-2 gap-10">
                            <div className="pt-8">
                                <div
                                    onClick={initiateEsewaPayment}
                                    className="h-40 w-full object-cover rounded-xl hover:cursor-pointer"
                                >
                                    <img
                                        className=" object-cover h-full w-full  rounded-xl"
                                        src="/images/esewa.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pt-8">
                                <div
                                    onClick={initiateKhaltiPayment}
                                    className="h-40 w-full object-cover rounded-xl hover:cursor-pointer"
                                >
                                    <img
                                        className=" object-cover h-full w-full  rounded-xl"
                                        src="/images/khalti.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChoosePayment;
