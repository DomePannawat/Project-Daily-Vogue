import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now & get 10% off
      </p>
      <p className="text-gray-400 mt-3">
        Join us today and enjoy 10% off your first purchase. Style
        awaits—subscribe now !
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-xl"
      >
        <input
          className="w-full sm:flex-1 outline-none rounded-l-xl "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-r-xl"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
