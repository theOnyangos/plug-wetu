const AppDescription = () => {
  return (
    <section className="md:container md:mx-auto mt-5 mb-20">
      <div className="w-full bg-darken p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
        <h1 className="text-lg md:text-xl leading-none text-slate-200 dark:text-bold">
          Welcome to the Fusion Dealers of Kenya.
        </h1>
      </div>

      <div className="w-full bg-white dark:bg-dark p-5 md:rounded-b-md shadow-md">
        <h3 className="site-logo dark:text-slate-100 mb-3">
          Plug<span className="text-primary">Wetu</span>
        </h3>
        <p className="text-sm md:base dark:text-slate-200">
          Plug-wetu is an innovative fusion dealer&apos;s application designed
          to streamline the showcasing process for dealers and enhance the
          shopping experience for clients. <br />
          <br /> Dealers can effortlessly display their extensive catalog of
          fusion wares, presenting them to clients for marketing purposes.
          Through the app, clients gain access to a diverse array of fusion
          products, enabling them to browse, evaluate, and make informed
          decisions about potential purchases. <br />
          <br /> With Plug-wetu, the purchasing journey becomes intuitive and
          seamless, empowering clients to explore options and engage with
          dealers with ease.
        </p>
      </div>
    </section>
  );
};

export default AppDescription;
