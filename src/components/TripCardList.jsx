"use client";
import { useEffect, useState } from "react";
import { getTripsByPage, getSearchTrips, getAllTrips } from "@/services/";
import Card from "@/components/Card.jsx";
import { useSearchParams, useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";
import useBreakpoint from "use-breakpoint";
import SkeletonCardList from "@/components/placeholder/SkeletonCardList";
import { sortDataByUserId } from "@/app/utils/";

const BREAKPOINTS = { mobile: 0, desktop: 1000 };

export default function CardList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchText = searchParams.get("search");
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const userId = parseInt(localStorage.getItem("userId"));
  // OBTENER TRIPS CON PAGINACION
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTripsByPage(currentPage);
        const tripsDataOrdered = sortDataByUserId(tripsData.data, userId);
        setTrips(tripsDataOrdered);
        setTotalPages(Math.ceil(tripsData.total / 8));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (breakpoint === "desktop") fetchTrips();
    if ((!searchText || searchText === "") && breakpoint !== "mobile") {
      console.log("HERE!!!");
      fetchTrips();
    }
  }, [currentPage, searchText, breakpoint]);
  //TODOS LOS VIAJES
  useEffect(() => {
    const fetchTripsAll = async () => {
      console.log("HERE MOBILE!!");
      try {
        const tripsData = await getAllTrips();
        const tripsDataOrdered = sortDataByUserId(tripsData, userId);
        setTrips(tripsDataOrdered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (breakpoint === "mobile") {
      fetchTripsAll();
      setIsLoading(false);
    }
  }, [breakpoint]);
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
    router.push(`/?page=${newPage}`);
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
      <section className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-start lg:justify-center lg:gap-[1rem] lg:max-w-[80%] lg:mx-auto lg:mt-[2rem]">
        {isLoading ? (
          <SkeletonCardList />
        ) : (
          trips.map((trip) => (
            <Card key={trip.id} trip={trip} setTotalPages={setTotalPages} />
          ))
        )}
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
