const Contact = () => {
  return (
    <div>
      <h1 className="m-5 font-bold text-2xl">Contact us</h1>
      <form>
        <input
          type="text"
          className="m-5 border border-black"
          placeholder="Name"></input>
        <input
          type="text"
          className="m-5 border border-black"
          placeholder="Massage"></input>
        <button className="p-1 border border-black bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
