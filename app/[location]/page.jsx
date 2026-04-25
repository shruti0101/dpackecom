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
        title: `${cityName}`,
        description: `${cityName}`,
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