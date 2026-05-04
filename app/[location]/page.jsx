import { serviceLocations } from "@/Data";
import { notFound } from "next/navigation";
import Location from "./Location";

export async function generateMetadata({ params }) {
    const { location } = await params;

    const rawCity = location.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Packing Air Bag Manufacturer in ${cityName} | Dunnage Bag Supplier - Dpack `,
        description: `Dpack is a trusted packing air bag manufacturer in ${cityName} offering dunnage bags, air cushion bags, and air column bags. Bulk supply, wholesale pricing, and fast delivery available.`,
    };
}

const Page = async ({ params }) => {
    const { location } = await params;
    const validCity = serviceLocations.find(
        (c) => c.href.replace("/", "") === location
    );

    if (!validCity) {
        notFound();
    }

    return <Location location={location} />;
};

export default Page;