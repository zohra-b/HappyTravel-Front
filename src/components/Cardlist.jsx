"use client";
import { useEffect, useState } from 'react';
import { getTripsByPage } from '../service/service.jsx';


export default function CardList() {
  const [trips, setTrips] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrips = async () => {
   
    try {
  
        const tripsData = await getTripsByPage(CurrentPage);
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrips();
 
  }, [CurrentPage]);
  console.log(trips);
  return (
    <section className="lg:flex lg:flex-wrap lg:gap-[0.8rem] lg:w-[90%] lg:mx-auto">
      {trips.map((trip) => (
        <Card key={trip.id} trip={trip} />
      ))}
    </section>
  );
}