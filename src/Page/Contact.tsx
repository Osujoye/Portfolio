const Contact = () => (
  <div className="max-w-[1440px] bg-amber-500 m-5 flex justify-around">
    <section className="p-10 border-2 bg-gray-900 rounded-2xl">
      <h1 className="mb-5">Contact Information</h1>
      <h2 className="mb-5">Address</h2>
      <address className="mb-5">Ikorodu, Lagos State</address>
      <h2>Phone Number</h2>
      <a href="tel:+234">+2349028963407</a>
      <h2 className="mt-5">Email</h2>
      <a href="mailto: ebunosujoye@gmail.com" className="text-amber-500">
        ebunosujoye@gmail.com
      </a>
    </section>
    <section className="px-30 py-3.5 bg-gray-900 border-2 rounded-2xl">
      <h2 className="text-3xl font-semibold mb-4"> Contact Me</h2>
      <form className="flex flex-col gap-4 text-amber-500 max-w-md">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Full-Name"
        />
        <input
          className="border p-2 rounded"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="border p-2 rounded"
          rows={5}
          placeholder="Your message"
        />
        <button className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-gray-900">
          Send
        </button>
      </form>
    </section>
  </div>
);

export default Contact;
