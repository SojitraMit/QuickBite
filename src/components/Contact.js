import { useState } from "react";

const Contact = () => {
  const [check, setCheck] = useState(false);

  const handleSubmit = () => {
    setCheck(true);
  };

  return check ? (
    <h1 className="text-xl text-center mt-12 font-bold">
      We will contact you as soon as possible.
    </h1>
  ) : (
    <div>
      <h1 className="m-5 font-bold text-2xl">Contact us</h1>
      <form>
        <input
          type="text"
          className="m-5 border border-black"
          placeholder="Name"
        />
        <input
          type="text"
          className="m-5 border border-black"
          placeholder="Message"
        />
        <button
          type="submit"
          className="p-1 border border-black bg-gray-100 rounded-lg"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
