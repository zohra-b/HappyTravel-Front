import Skeleton from "./Skeleton";
export default function SkeletonCardList() {
  const array = Array.from({ length: 8 });

  return array.map((item, index) => <Skeleton key={index} />);
}
