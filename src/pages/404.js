import Image404 from "../assets/images/404.webp";

const Page404 = () => {
  return (
    <section className="d-flex justify-content-center p-5">
      <div className="col-12 col-lg-6">
        <img style={{ width: "100%" }} src={Image404} alt="404" />
      </div>
    </section>
  );
};

export default Page404;
