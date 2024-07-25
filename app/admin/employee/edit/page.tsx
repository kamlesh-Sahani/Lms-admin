import React from "react";

const editDetail = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="py-4">
        <h1 className="text-2xl font-bold mb-4">Edit Personal details</h1>
        <div className=" w-[96]">
          <div>
            <div className="bg-white rounded-lg shadow-md p-4 mt-4">
              <div className="flex space-x-4">
                <div className="w-1/2 pb-2">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="First name"
                    type="text"
                    name="firstname"
                    id="firstname"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last name"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div>
              </div>
              <label
                htmlFor="email"
                className="block my-2 text-gray-700 font-bold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email Address"
              />
              <div className="flex space-x-4 my-2">
                <div className="w-1/3">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="First name"
                    type="text"
                    name="firstname"
                    id="firstname"
                  />
                </div>
                <div className="w-1/3">
                  <input
                    className="shadow appearance-none border rounded w-full mt-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last name"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div>
                <div className="w-1/3">
                  <input
                    className="shadow appearance-none border rounded w-full mt-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last name"
                    type="text"
                    name="lastname"
                    id="lastname"
                  />
                </div>
              </div>

              <label
                htmlFor="city"
                className="block my-2 text-gray-700 font-bold"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your city"
              />
              <label
                htmlFor="streetAddress"
                className="block my-2 text-gray-700 font-bold"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your street address"
              />
              <label
                htmlFor="state"
                className="block my-2 text-gray-700 font-bold"
              >
                State/Province
              </label>
              <input
                type="text"
                id="state"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your state or province"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                Discard
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default editDetail;
