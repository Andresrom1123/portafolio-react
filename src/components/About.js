const AboutComponent = () => {
  	const stack = ["html", "css", "python/django", "js/react"];

	return (
		<>
			<p className="mb-5">
				I have 1 year of experience in web development. I have knowledge using technologies such as:
				React.js, JS, Python, Django.

				With availability to new projects. I seek to apply all my skills to the web development industry, to satisfy the company with the highest quality.	        </p>
	        <div>
	          {stack.map((item, index) => {
	            return (
	              <span
	                key={index}
	                className="rounded shadow m-2 p-2 text-uppercase text-muted my-lg-0 d-inline-block"
	              >
	                {item}
	              </span>
	            );
	          })}
	        </div>
		</>
	)
}

export default AboutComponent
