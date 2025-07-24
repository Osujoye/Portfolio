const Home = () => {
  return (
    <div className=" bg-amber-500 flex justify-around px-4 py-10">
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          I'm Ebunoluwa Osujoye Omovigho
        </h1>
        <p className="text-xl md:text-2xl text-gray-900 mb-6">
          Full-Stack Developer & Data Analyst
        </p>
        <p className="max-w-xl text-gray-900 text-md md:text-lg">
          I build responsive, user-friendly web applications and deliver
          data-driven insights using tools like React, Tailwind, R, and Excel.
          Passionate about clean code, clear visuals, and creative solutions.
        </p>
      </section>
      <main>
        <img src="public/dp.jpg" className="size-60 rounded-full" alt="" />
      </main>
    </div>
  );
};
export default Home;
