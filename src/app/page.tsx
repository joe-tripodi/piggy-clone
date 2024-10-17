export default function Home() {
  return (
    <div
      className="justify-center place-items-center text-center mx-auto lg:w-4/8 xl:w-3/4 z-10"
    >
      <div
        className="justify-center place-items-center text-center mx-auto lg:w-4/8 xl:w-3/4 z-10 pt-10"
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
      <div className="w-6/6 mx-auto my-auto pt-10 pb-10">
        <picture>
          <source
            srcSet="https://www.datocms-assets.com/54615/1674116454-frame-3967.jpg?dpr=0.25&fm=webp 1216w, https://www.datocms-assets.com/54615/1674116454-frame-3967.jpg?dpr=0.5&fm=webp 2432w, https://www.datocms-assets.com/54615/1674116454-frame-3967.jpg?dpr=0.75&fm=webp 3648w, https://www.datocms-assets.com/54615/1674116454-frame-3967.jpg?fm=webp 4864w"
            sizes="(max-width: 4864px) 100vw, 4864px"
            type="image/webp"
          />
          <img src="fallback.jpg" alt="description" />
        </picture>
      </div>
      <div>
        <p>Join the 10.000+ companies growing loyalty globally</p>
      </div>

    </div>
  );
}
