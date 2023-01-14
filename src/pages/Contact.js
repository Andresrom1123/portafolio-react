import { useState } from "react";
import axios from "axios";
import Title from "../components/Title";

const ContactPage = () => {
  const formSparkUrl = `https://submit-form.com/${process.env.REACT_APP_FORM_SPARK_ID}`;

  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({ type: "", show: false, msg: "" });
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const submitForm = async (event) => {
    event.preventDefault();
    if (data.name && data.email && data.message) {
      await postSubmission();
      setData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const postSubmission = async () => {
    setLoading(true);
    const payload = {
      ...data,
    };
    try {
      await axios.post(formSparkUrl, payload);
      showAlert(true, "alert-success", "Thanks for the message!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showAlert(true, "alert-danger", error.message);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setInfo({ show, type, msg });
  };

  return (
    <section className="-section ">
      <form
        onSubmit={submitForm}
        className="d-flex flex-column align-items-center"
      >
        <div
          className={`col-lg-6 col-10 rounded-top shadow px-3 py-5 position-relative ${
            loading && "loading-contact"
          }`}
        >
          {/* alert */}
          {info.show && (
            <div className={`alert ${info.type}`} role="alert">
              {info.msg}
            </div>
          )}

          {/* loading */}
          {loading && (
            <div
              className="d-flex justify-content-center position-absolute"
              style={{ top: "50%", left: "50%", color: "var(--clr-primary-5)" }}
            >
              <div className="spinner-border"></div>
            </div>
          )}
          {/* title */}
          <Title title="Contact me" center />
          <div className="mb-3">
            {/* inputs */}
            <input
              required
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              required
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <textarea
              required
              name="message"
              className="form-control"
              placeholder="Message"
              value={data.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="col-10 col-lg-6 border-0 text-white shadow rounded-bottom fs-4 btn-contact p-1"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
