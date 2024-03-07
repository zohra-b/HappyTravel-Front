"use client";
import { useEffect, useState } from "react";
import { getTripsByPage } from "@/services/";
import Card from "@/components/Card.jsx";
import Pagination from "@/components/Pagination";

export default function CardList() {
  const [trips, setTrips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTripsByPage(currentPage);
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrips();
  }, [currentPage]);

  return (
    <>
      <section className="lg:flex lg:flex-wrap lg:gap-[1rem] lg:max-w-[80%] lg:mx-auto lg:mt-[2rem]">
        {trips.map((trip) => (
          <Card key={trip.id} trip={trip} />
        ))}
      </section>
      <section>
        <Pagination />
      </section>
    </>
  );
}
