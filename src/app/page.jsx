"use client";
import CardList from "@/components/TripCardList";
import Logout from "@/components/Logout";
export default function Home() {
  return (
    <main>
      <CardList />
      <Logout/>
    </main>
  );
}
