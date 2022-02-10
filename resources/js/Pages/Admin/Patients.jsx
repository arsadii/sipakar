import React from "react";
import PatientForm from "../../Components/Patient/PatientForm";
import PatientTable from "../../Components/Patient/PatientTable";
import Admin from "../../Layouts/Admin";
import * as MdIcons from "react-icons/md";
import { modalToggle } from "../../Store/Modal";
import { useRecoilState } from "recoil";

export default function Patients() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);

    return (
        <Admin judul="Pasien">
            <PatientForm />
            <div className="p-4 space-y-3">
                <button
                    onClick={() => {
                        setShowModal(true);
                    }}
                    className="text-blue-600 border-2 border-blue-600 px-3 py-1 rounded-xl focus:ring focus:outline-none focus:ring-blue-200 hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center space-x-2"
                >
                    <MdIcons.MdAddCircle size={16} />
                    <h1>Tambah</h1>
                </button>
                <PatientTable />
            </div>
        </Admin>
    );
}
