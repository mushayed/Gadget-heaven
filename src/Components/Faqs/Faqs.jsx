import React from "react";

const Faqs = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-8 bg-[#9538E2] text-white">
        <h3 className="font-bold text-3xl text-center">FAQs</h3>
        <p className="text-base font-normal text-center">
          Here are some questions that people commonly have about Gadget Heaven.
          You might also find what you're looking for in the section.
        </p>
      </div>
      <div>
        <div className="w-full md:w-[80%] mx-auto p-9">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is the return policy for purchased products?
            </div>
            <div className="collapse-content">
              <p>
                We offer a 30-day return policy for unused and unopened
                products. If you wish to make a return, please contact our
                support team with your order details, and they’ll guide you
                through the process. Refunds are processed within 5-7 business
                days after we receive the returned item.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Do you offer warranties on your products?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer a 1-year limited warranty on all electronics
                purchased through our website. This covers any manufacturing
                defects but does not include accidental damage. Extended
                warranties may be available for certain products.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I track my order?
            </div>
            <div className="collapse-content">
              <p>
                Once your order has shipped, you will receive an email with a
                tracking number and a link to view the status of your delivery.
                You can also log in to your account on our website to check your
                order's progress.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I cancel my order after it's placed?
            </div>
            <div className="collapse-content">
              <p>
                Orders can be canceled within 24 hours of placing them, as long
                as they haven't shipped yet. Please reach out to our support
                team as soon as possible if you need to make a cancellation.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?
            </div>
            <div className="collapse-content">
              <p>
                We accept a variety of payment methods, including major credit
                cards (Visa, Mastercard, American Express), PayPal, and Apple
                Pay. For specific details or additional payment options, please
                refer to our checkout page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
