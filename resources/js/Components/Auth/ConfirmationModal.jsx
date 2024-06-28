// resources/js/Components/ConfirmationModal.jsx
import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm ,message}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-lg font-semibold mb-4 text-black text-center">Are You Sure to Delete?</h2>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
                    <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded-md">Yes, Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
