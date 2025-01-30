import Title from "../Components/Title";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import contactUs from "../animations/contact us.json";
import successAnimation from "../animations/done.json";

function Contact() {
  // Formspree form
  const [state, handleSubmit] = useForm("mzzzlrvw");

  return (
    <section id="contact">
      <h1 className="text-center text-3xl py-8">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Contact us for more information and get notified when I pushlish
          something new.
        </p>
      </h1>

      <div id="form" className="flex justify-around mt-4">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mt-8 flex gap-2 items-center">
            <label className="text-gray-700" htmlFor="email">
              Email Address:
            </label>
            <input
              required
              autoComplete="off"
              className="border-gray-400 hover:border-gray-700 transition duration-300 border rounded-[4px] w-72 h-7"
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mt-8 flex gap-2 items-center">
            <label className="text-gray-700" htmlFor="message">
              Your Message:
            </label>
            <textarea
              autoComplete="off"
              className="border-gray-400 hover:border-gray-700 transition duration-300 border rounded-[4px] w-72 h-32"
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-gray-700 w-28 rounded-[6px] mt-7 py-3 items-center text-base text-white hover:bg-gray-800 transition duration-300"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="text-base text-gray-700 mt-6 flex items-center">
              <Lottie
                loop={false}
                className="h-[37px]"
                animationData={successAnimation}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>

        {/* animation */}
        <div id="animation">
          <Lottie className="h-[375px]" animationData={contactUs} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
