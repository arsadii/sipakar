import React from "react";
import ModalRoot from "../ModalRoot";

export default function PatientForm() {
    return (
        <ModalRoot
            title={
                <h1 className="font-semibold text-gray-800 text-xl ">
                    Tambah Pasien
                </h1>
            }
        >
            <form className="flex flex-col space-y-3">
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">Nama Pasien</h1>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-gray-500 text-sm">Spesialis</h1>
                    <select
                        name="spesialis"
                        id="spesialis"
                        className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                    >
                        <option value="">-Pilih-</option>
                        <option value="Bedah">Bedah</option>
                        <option value="Anak">Anak</option>
                        <option value="KK">Kulit dan Kelamin</option>
                        <option value="THT">Telinga Hidung Tenggorokan</option>
                        <option value="Radiologi">Radiologi</option>
                    </select>
                </div>
                <div className="pt-2 flex">
                    <button className="bg-blue-500 text-white font-bold text-center py-2 rounded-lg w-full">
                        Simpan
                    </button>
                </div>
            </form>
        </ModalRoot>
    );
}
