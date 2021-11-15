import Link from "next/link";
import Carousel from "react-multi-carousel";

export const CustomCarousel = ({ items, responsive }) => {
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={[
        "table",
        "mobile",
        "desktop",
        "superLargeDesktop",
      ]}
      infinite={true}
      autoPlay={true}
    >
      {Object.entries(items).map(([title, path]) => (
        <Link href={path} key={title}>
          <a className="text-xs">{title.toUpperCase()}</a>
        </Link>
      ))}
    </Carousel>
  );
};
