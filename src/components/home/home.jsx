import React, { useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "chart.js/auto";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data for Doughnut Chart
  const DoughnutData = {
    labels: ["Bajrilgan", "Jarayonda", "Bajrilmagan", "Bekor qilingan"],
    datasets: [
      {
        data: [21.62, 18.92, 16.22, 35.24], // example percentage data
        backgroundColor: ["#38A169", "#F6E05E", "#F56565", "#4299E1"],
      },
    ],
  };

  // Data for Bar Chart
  const barData = {
    labels: [
      "Administratsiya",
      "Inshaat ishlari",
      "Taminot va logistika",
      "Savdo va marketing",
      "Moliya va energetika",
      "Xujalik bo'limi",
      "Bugalteriya",
    ],
    datasets: [
      {
        label: "Yillik statistika",
        data: [1400, 1200, 1300, 1100, 900, 600, 800], // example data
        backgroundColor: "#319795",
      },
    ],
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6">
        <div className="text-2xl font-bold text-green-500 mb-10">MAGAZIN</div>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#bosh"
                className="text-blue-500 font-medium block p-2 rounded hover:bg-blue-100 hover:text-blue-600"
              >
                Bosh sahifa
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#barchasi"
                className="text-gray-600 block p-2 rounded hover:bg-gray-100 hover:text-gray-900"
              >
                Barcha vazifalar
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#bo'limlar"
                className="text-gray-600 block p-2 rounded hover:bg-gray-100 hover:text-gray-900"
              >
                Bo'limlar
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#Menejerlar"
                className="text-gray-600 block p-2 rounded hover:bg-gray-100 hover:text-gray-900"
              >
                Menejerlar
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#Xodimlar"
                className="text-gray-600 block p-2 rounded hover:bg-gray-100 hover:text-gray-900"
              >
                Xodimlar
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#Mening qaydlarim"
                className="text-gray-600 block p-2 rounded hover:bg-gray-100 hover:text-gray-900"
              >
                Mening qaydlarim
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          {/* Search Input */}
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-1/3">
            <svg
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Поиск ..."
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          {/* Date Picker, Notifications, and Profile */}
          <div className="flex items-center space-x-6">
            {/* Date Picker */}
            <div className="flex items-center space-x-2">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-6 8h6m2 10H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                ></path>
              </svg>
              <span className="text-gray-500">12.08.2021</span>
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>

            {/* Email Notification */}
            <div className="relative">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26c.67.45 1.56.45 2.22 0L21 8m-2 10V8a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2z"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-blue-500 rounded-full">
                2
              </span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a3 3 0 00-6 0v1.083A6 6 0 002 11v3.159c0 .538-.214 1.055-.595 1.437L0 17h15zm-7 4a3 3 0 006 0H8z"
                ></path>
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 text-xs font-bold text-white bg-blue-500 rounded-full">
                4
              </span>
            </div>

            {/* User Profile Button */}
            <button onClick={toggleModal} className="flex items-center space-x-2 bg-white p-2 rounded shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-gray-700">
                <span className="block">Abdullayev Abdulla</span>
                <span className="block text-sm text-gray-400">Hodim</span>
              </div>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold">4235</div>
            <div className="text-sm text-gray-500">Barchasi</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold">234</div>
            <div className="text-sm text-gray-500">Bajrilgan</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold">567</div>
            <div className="text-sm text-gray-500">Jarayonda</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold">324</div>
            <div className="text-sm text-gray-500">Bajrilmagan</div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-xl font-semibold">456</div>
            <div className="text-sm text-gray-500">Bekor qilingan</div>
          </div>
        </div>

        {/* Doughnut Chart Section */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Umumiy statistika</h2>
          <div className="flex">
            <div className="w-1/2">
              <Doughnut data={DoughnutData} />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <ul>
                <li className="flex items-center mb-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>{" "}
                  Bajrilgan - 21.62%
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>{" "}
                  Jarayonda - 18.92%
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>{" "}
                  Bajrilmagan - 16.22%
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>{" "}
                  Bekor qilingan - 35.24%
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">
            Yillik statistika diagrammasi
          </h2>
          <Bar data={barData} />
        </div>

        {/* Task Table */}
        <div className="bg-white p-6 rounded shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">BARCHASI</th>
                <th className="p-2">MUAMMO</th>
                <th className="p-2">YECHIM</th>
                <th className="p-2">BARCHASI</th>
                <th className="p-2">OXIRGI KUNLAR</th>
                <th className="p-2">XOLATI</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Taminot va logistika</td>
                <td className="p-2">
                  Tahlil chog’ida olingan plashmash savatlarida sirtas.
                </td>
                <td className="p-2">
                  Sifatli savatlarni yetkazib berish va tekshiruvdan o’tkazish.
                </td>
                <td className="p-2">Abdullayev Abdulla</td>
                <td className="p-2">2024.03.10</td>
                <td className="p-2 text-red-500">Bajrilmagan</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Taminot va logistika</td>
                <td className="p-2">
                  Taminotchilar bilan shartnomalar mavjud emas.
                </td>
                <td className="p-2">
                  Barcha taminotchilar bilan shartnomalarni qayta tuzish.
                </td>
                <td className="p-2">Ubaydullayev Sanjar</td>
                <td className="p-2">2024.03.10</td>
                <td className="p-2 text-red-500">Bajrilmagan</td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
            <button
              onClick={toggleModal}
              className="text-blue-500 hover:underline mb-4 block"
            >
              View Profile
            </button>
            <button
              onClick={() => {
                // Handle log out logic here
                alert("Logging out...");
                toggleModal();
              }}
              className="text-red-500 hover:underline mb-4 block"
            >
              Log Out
            </button>
            <button
              onClick={toggleModal}
              className="text-gray-500 hover:underline block"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
