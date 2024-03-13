"use client";
import { useEffect, useState } from "react";
import { getTripsByPage, getSearchTrips } from "@/services/";
import Card from "@/components/Card.jsx";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import SkeletonCardList from "@/components/placeholder/SkeletonCardList";

export default function CardList() {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search");
  const [trips, setTrips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // OBTENER TRIPS CON PAGINACION
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTripsByPage(currentPage);
        setTrips(tripsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!searchText || searchText === "") {
      fetchTrips();
    }
  }, [currentPage, searchText]);

  // BUSQUEDA DE TRIPS
  useEffect(() => {
    const fetchSearchTrips = async () => {
      try {
        const searchTripsData = await getSearchTrips(searchText);
        setTrips(searchTripsData ?? []);
      } catch (error) {
        console.error("error:", error);
        if (error.response.status === 404) setTrips([]);
      }
    };

    if (searchText) fetchSearchTrips();
  }, [searchText]);

  const handlePagination = (newPage) => {
    setCurrentPage(newPage);
  };

  if (!!searchText && trips.length < 1)
    return (
      <section className="flex justify-center gap-[1rem] max-w-[80%] mx-auto  mt-[2rem] lg:mt-[4rem]">
        <h2 className="lg:text-[1.5rem] font-bold text-center text-[1rem]">
          No se encontraron resultados para tu busqueda:{" "}
          <span className="text-quaternary-blue lg:text-[1.8rem] ">
            "{searchText}"
          </span>
        </h2>
      </section>
    );

  return (
    <>
      <section className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center lg:gap-[1rem] lg:max-w-[80%] lg:mx-auto lg:mt-[2rem]">
        {isLoading ? (
          <SkeletonCardList />
        ) : (
          trips.map((trip) => <Card key={trip.id} trip={trip} />)
        )}
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
