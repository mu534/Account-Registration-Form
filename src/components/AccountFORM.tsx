const AccountFORM = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-md">
        <div className="bg-blue-500 text-white text-center py-3">
          <h1 className="text-lg font-semibold">Account Registration Form</h1>{" "}
        </div>
        {/* form */}
        <form className="mt-4 space-y-4">
          {/* full name & date of birth */}
          {/* Full Name & Date of Birth */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 bg-blue-100 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 bg-blue-100 rounded-md"
              />
            </div>
          </div>
          {/* phone number & email address */}
          <div className=" grid grid-cols-2 gap-4">
            <div>
              <label className="block fonts-semibold text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 bg-blue-100 rounded-md"
              />
            </div>
            <div>
              <label className="block fonts-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 bg-blue-100 rounded-md"
              />
            </div>
          </div>
          {/* residential address */}
          <div>
            <label className="block font-semibold text-gray-700">
              Residential address
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-blue-100 rounded-md"
            />
          </div>
          {/* preferred account type & preferred currency */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700">
                {" "}
                Areferred Account
              </label>
              <div className="space-x-3">
                <label>
                  <input type="radio" name="accountType" /> savings
                </label>
                <label>
                  <input type="radio" name="accountType" /> checking
                </label>
                <label>
                  <input type="radio" name="accountType" /> joint Account
                </label>
              </div>
            </div>
            <div>
              <label className=" bl;ock font-semibold text-gray-700">
                Preferred Currency
              </label>
              <div className="space-x-3">
                <label>
                  <input type="radio" name="currency" />
                  USD
                </label>
                <label>
                  <input type="radio" name="currency" />
                  EUR
                </label>
                <label>
                  <input type="radio" name="currency" /> other:
                  <input
                    type="text"
                    className="ml-2 w-16 p-1 border border-gray-300 bg-blue-100 rounded-md"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* initial deposite */}
          <div>
            <label className="block font-semibold text-gray-700">
              {" "}
              Initial Deposite Amount
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 bg-blue-100 rounded-md"
            />
          </div>
          {/* ID TYPE, ID NUMBER, OCCUPATION, EMPLOYER NAME */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700">
                ID Type
              </label>
              <input
                type="text"
                className="w-full p-2 border bprder-gray-300 bg-blue-100 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                ID Number
              </label>
              <input
                type="text"
                className="w-full p-2 border bprder-gray-300 bg-blue-100 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700">
                {" "}
                Occupation
              </label>
              <input
                type="text"
                className="w-full p-2 border bprder-gray-300 bg-blue-100 rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                {" "}
                Employer Name
              </label>
              <input
                type="text"
                className="w-full p-2 border bprder-gray-300 bg-blue-100 rounded-md"
              />
            </div>
          </div>
          {/* corfirmation text */}
          <p className="text-gray-600 text-sum">
            I confirm that the information provided is accurate and agree to the
            terms andconditions of the bank.
          </p>
          {/* signature & date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block fonts-semibold text-gray-700">
                {" "}
                signature
              </label>
              <input
                type="text"
                className="w-full p-8 border border-gray-300 bg-blue-100 rounded-md"
              />
            </div>
            <div>
              <label className=" block font-semibold text-gray-700">Date</label>
              <input
                type="date"
                className="w-full p-2 border border0-gray-300 bg-blue-100 rounded-md"
              />
            </div>
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        {/* footer */}
        <div className="bg-blue-600 text-white text-center py-3 rounded-b-lg mt-4">
          <p className="text-sm">ⓘ NATIONAL BANK</p>
        </div>
      </div>
    </>
  );
};

export default AccountFORM;
