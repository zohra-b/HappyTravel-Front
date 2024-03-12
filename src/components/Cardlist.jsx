"use client";
import { useEffect, useState } from "react";
import { getTripsByPage, getSearchTrips } from "@/services/";
import Card from "@/components/Card.jsx";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

export default function CardList() {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search");

  const [trips, setTrips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchNotFound, setSearchNotFound] = useState(false);

  // OBTENER TRIPS CON PAGINACION
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

  // BUSQUEDA DE TRIPS
  useEffect(() => {
    const fetchSearchTrips = async () => {
      try {
        const searchTripsData = await getSearchTrips(searchText);
        setTrips(searchTripsData ?? []);
      } catch (error) {
        console.error("error:", error);
        if (error.response.status == 404) setSearchNotFound(true);
      }
    };

    if (!searchText) {
      setSearchNotFound(false);
      setCurrentPage(1);
    }

    if (searchText) fetchSearchTrips();
  }, [searchText]);

  const handlePagination = (newPage) => {
    setCurrentPage(newPage);
  };

  if (searchNotFound) return <h1>No se encontraron resultados! :( </h1>;

  return (
    <>
      <section className="lg:flex lg:flex-wrap lg:gap-[1rem] lg:max-w-[80%] lg:mx-auto lg:mt-[2rem]">
        {trips.map((trip) => (
          <Card key={trip.id} trip={trip} />
        ))}
      </section>
      <section className="lg:flex lg:max-w-[80%] lg:mx-auto items-center justify-center lg:my-[2rem]">
        <Pagination
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
      </section>
    </>
  );
}
