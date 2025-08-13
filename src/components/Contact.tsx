import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data for Firebase:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <section id="contact" className="section bg-brand-50/40 px-4">
        <div className="container max-w-2xl text-center card p-10">
          <h3 className="text-2xl font-semibold">Thanks! 🎉</h3>
          <p className="muted mt-2">
            We’ve received your request and will contact you shortly.
          </p>
          <button
            className="btn-primary mt-6"
            onClick={() => setSubmitted(false)}
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section bg-brand-50/40 px-4">
      <div className="container grid tab:grid-cols-2 gap-8">
        <div>
          <h2 className="section-title">Get a Free Quote</h2>
          <p className="muted mt-3">
            Tell us about your space and preferred schedule. We’ll respond
            within 1 business day.
          </p>
          <div className="mt-6 card p-6">
            <p className="text-sm">
              <strong>Call:</strong>{" "}
              <a className="text-brand" href="tel:+2348000000000">
                +234 800 000 0000
              </a>
            </p>
            <p className="text-sm mt-2">
              <strong>Email:</strong>{" "}
              <a className="text-brand" href="mailto:hello@DemoClean.com.ng">
                hello@DemoClean.com.ng
              </a>
            </p>
            <p className="text-sm mt-2">
              <strong>Hours:</strong> Mon–Sat, 8am–6pm
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card p-6 grid gap-4"
          noValidate
        >
          <div className="grid tab:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                {...register("name", { required: "Your name is required" })}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-brand focus:ring-brand"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-brand focus:ring-brand"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid tab:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^\+?\d{7,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                placeholder="+234..."
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-brand focus:ring-brand"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">Service</label>
              <select
                {...register("service", { required: "Select a service" })}
                className="mt-1 w-full rounded-lg border-gray-300 focus:border-brand focus:ring-brand"
              >
                <option value="">Select…</option>
                <option>Residential Cleaning</option>
                <option>Office/Janitorial</option>
                <option>Post-Construction</option>
                <option>Move-in / Move-out</option>
                <option>Upholstery & Carpet</option>
                <option>Pest Control</option>
              </select>
              {errors.service && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-brand focus:ring-brand"
            />
            {errors.address && (
              <p className="text-sm text-red-600 mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Additional Details</label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Bedrooms, bathrooms, preferred date/time…"
              className="mt-1 w-full rounded-lg border-gray-300 focus:border-brand focus:ring-brand"
            />
          </div>

          <button className="btn-primary">Request Quote</button>
        </form>
      </div>
    </section>
  );
}
