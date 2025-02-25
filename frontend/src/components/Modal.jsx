import React, { useState, useRef } from "react";
import { axiosInstance } from "../lib/axios";

const Modal = ({ isOpen, onClose }) => {
    const modalRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await axiosInstance.post("/referrals/submit-referral", formData);
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
                setIsSuccess(false);
                setFormData({ name: "", email: "", phone: "" });
            }, 3000);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Referral already exists. Please try with different details.");
            } else {
                alert("Failed to submit referral. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            onClick={handleCloseModal}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
            <div className="relative bg-white shadow-lg rounded-lg p-6 w-96 max-w-full">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 text-2xl">
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isSuccess ? "Thanks for referring!" : "Refer your friend!"}
                </h2>

                {isSuccess ? (
                    <div className="text-center py-6">
                        <p className="text-lg mb-4">Your referral has been successfully submitted!</p>
                        <p className="text-gray-600">This window will close in a few seconds...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter friend's name"
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter friend's email"
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="mb-6 flex">
                            <div className="bg-gray-50 p-2 border text-gray-500">+91</div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Friend's phone number"
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Modal;
