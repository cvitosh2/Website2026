
import Navbar from "@/Components/Navbar";
import EventCard from "@/Components/EventCard";
import wedding from "@/assets/pics/wedding.jpeg";
import church from "@/assets/pics/church.jpeg";
import birthdaycake from "@/assets/pics/birthdaycake.jpg";
import reunion from "@/assets/pics/reunion.jpeg";
import Footer from "@/Components/Footer";

const eventData = [
  {
    title: "Family Reunion",
    date: "July 20, 2026",
    location: "Stupno, Czech Republic",
    description: "A gathering of cousins, relatives, and friends.",
    image: reunion,
  },
  {
    title: "Birthday Celebration",
    date: "August 14, 2026",
    location: "Ujezd u Svateho Krize",
    description: "A big birthday party.",
    image: birthdaycake,
  },
  {
    title: "Funeral",
    date: "December 12, 2026",
    location: "Chicago, Illinois",
    description: "In memory of a loved one.",
    image: church,
  },
  {
    title: "Wedding",
    date: "March 15, 2026",
    location: "Chicago, Illinois",
    description: "Wedding for x and y.",
    image: wedding,
  },
];

const Events = () => {
  const now = new Date();
  const upcomingEvents = eventData.filter(
    (event) => new Date(event.date) >= now
  );
  const pastEvents = eventData.filter(
    (event) => new Date(event.date) < now
  );

  return (
    <>
      <Navbar />

      <main className="events-page">
        <header className="events-header">
   
        </header>

        <section className="events-section">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.title}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </section>

        <section className="events-section">
          <h2>Past Events</h2>
          <div className="events-grid">
            {pastEvents.map((event) => (
              <EventCard
                key={event.title}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </section>
      </main>
       <Footer />
    </>
  );
};

export default Events;
