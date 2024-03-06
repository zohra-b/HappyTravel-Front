import Card from "./Card"
import { getAllTrips } from "@/service/service"
export default function CardList() {
  return (
<section className="lg:flex lg:flex-wrap lg:gap-[0.8rem] lg:w-[90%] lg:mx-auto">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
</section>
  )

}
