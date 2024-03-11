"use client";
import { useEffect, useState } from "react";
import { getTripsByPage, getAllTrips } from "@/services/";
import Card from "@/components/Card.jsx";
import Pagination from "@/components/Pagination";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, desktop: 1000 };

export default function CardList() {
  const [trips, setTrips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTripsByPage(currentPage);
        setTrips(tripsData.data);
        setTotalPages(Math.ceil(tripsData.total / 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (breakpoint === "desktop") fetchTrips();
  }, [currentPage, breakpoint]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getAllTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (breakpoint === "mobile") fetchTrips();
  }, [breakpoint]);

  const handlePagination = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <section className="lg:flex lg:flex-wrap lg:gap-[1rem] lg:max-w-[80%] lg:mx-auto lg:mt-[2rem]">
        {trips?.map((trip) => (
          <Card key={trip.id} trip={trip} totalPages={totalPages} />
        ))}
      </section>
      <section className="lg:flex lg:max-w-[80%] lg:mx-auto items-center justify-center lg:my-[2rem]">
        {breakpoint === "desktop" && (
          <Pagination
            handlePagination={handlePagination}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </section>
    </>
  );
}
