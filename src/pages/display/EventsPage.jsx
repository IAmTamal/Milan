import React, { useEffect, useState } from "react";
import SingleClub from "../../components/SingleClub";
import "../../styles/ClubsPage.css";
import Navbar from "../../components/Navbar";
import { GetAllClubs, GetAllEvents } from "../../service/MilanApi";
import SingleEvent from "../../components/SingleEvent";
import Eventspic from "../../assets/pictures/EventsPagefloating.svg";

const EventsPage = () => {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchClubData = async () => {
      const response = await GetAllEvents();
      console.log(response);
      setClubData(response);
    };
    fetchClubData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="eventspageintro_parent d-flex flex-column flex-lg-row justify-lg-content-center">
        <div className="eventspageintro_imgdiv">
          <img src={Eventspic} alt="events" />
        </div>
        <div className="eventspageintro_textdiv">
          <h2>Welcome to the events page</h2>
          <p>
            All our partnered NGOs , hosts various events be it educational,
            cleaning mother earth, funding events, health camps and many more !!
          </p>
          <p>Join us at the events, and help the community !! </p>
        </div>
      </div>

      <hr className="container" />

      <div className="cards justify-content-center">
        {clubData.map((club) => {
          return <SingleEvent key={club._id} club={club} />;
        })}
      </div>
    </>
  );
};

export default EventsPage;
