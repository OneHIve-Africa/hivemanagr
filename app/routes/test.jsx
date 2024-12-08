export default function BeeAliveLandingPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-orange-500 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Bee Alive</h1>
        <h2 className="text-2xl">One Hive, One Tree</h2>
        <p className="mt-4">
          Empower Lives. Protect Nature. Harvest the Future.
        </p>
      </header>

      <section className="bg-green-600 text-white p-8 text-center">
        <h3 className="text-3xl font-semibold">Why Invest in Beekeeping?</h3>
        <p className="mt-4">
          Beekeeping is essential for biodiversity and sustainable agriculture.
        </p>
      </section>

      <section className="bg-white text-black p-8 text-center">
        <h3 className="text-3xl font-semibold">Be a Catalyst for Change</h3>
        <p className="mt-4">
          Join us in making a difference for the environment and communities.
        </p>
      </section>

      <section className="bg-white text-black p-8 text-center">
        <h3 className="text-3xl font-semibold">
          Invest in Nature, Reap the Rewards
        </h3>
        <p className="mt-4">
          Your investment helps create sustainable ecosystems.
        </p>
      </section>

      <section className="bg-white text-black p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=🌱"
            alt="Sustainable Practices"
          />
          <p className="mt-2">Sustainable Practices</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=📈"
            alt="Transparent Tracking"
          />
          <p className="mt-2">Transparent Tracking</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=🤝"
            alt="Community Support"
          />
          <p className="mt-2">Community Support</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=🍯"
            alt="Quality Products"
          />
          <p className="mt-2">Quality Products</p>
        </div>
      </section>

      <footer className="bg-orange-500 text-white p-8 text-center">
        <h3 className="text-3xl font-semibold">Join Us in Harvesting Hope</h3>
        <p className="mt-4">
          Together, we can make a difference. Join our mission today!
        </p>
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-4 p-2 rounded-lg">
          Learn More
        </button>
      </footer>
    </div>
  );
}
