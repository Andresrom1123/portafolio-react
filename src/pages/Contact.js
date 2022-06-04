import Title from "../components/Title";

const ContactPage = () => {
  return (
    <section className="-section d-flex flex-column align-items-center">
      <div className="col-lg-6 col-10 rounded-top shadow px-3 py-5">
        <Title title="Contact me" center />
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div>
          <textarea className="form-control" placeholder="Message"></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="col-10 col-lg-6 border-0 text-white shadow rounded-bottom fs-4 btn-contact p-1"
      >
        Submit
      </button>
    </section>
  );
};

export default ContactPage;
