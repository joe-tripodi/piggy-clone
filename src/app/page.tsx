export default function Home() {
  return (
    <div
      className="justify-center place-items-center text-center mx-auto lg:w-4/8 xl:w-3/4 z-10"
    >
      <div
        className="justify-center place-items-center text-center mx-auto lg:w-4/8 xl:w-3/4 z-10"
      >
        <h2
          className="text-4xl lg:text-5xl tracking-tight mb-4 lg:mb-6 text-gray-900 font-bold overflow-ellipsis"
        >
          Grow your business with loyalty
        </h2>
      </div>
      <div
        className="text-lg xl:text-xl mb-8 xl:mb-10 lg:w-4/5 xl:w-3/4 2xl:w-3/4 mx-auto"
      >
        <p
          className="structured-text font-light text-center text-gray-500 mx-auto"
        >
          Loyalty and engagement software to encourage behaviors in customers and
          employees alike. Drive behaviors and communicate effortlessly from your
          all-in-one dashboard.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-3 text-lg">
        <button className="bg-secondary text-primary rounded-xl py-3.5 px-5">Book a demo</button>
        <button className="bg-primary text-white rounded-xl py-3.5 px-5">Try for free</button>
      </div>
    </div>
  );
}
