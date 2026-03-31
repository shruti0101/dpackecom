import React from "react";
import { serviceLocations } from "../Data"
import Link from "next/link";

const Loactions = () => {
    return (
        <div className="px-3 overflow-hidden mb-10 md:px-8 lg:px-26 bg-white">
            <h2 className="text-3xl md:text-5xl font-bold md:my-5 mb-8">
                Our Supply Network
            </h2>
            <div className="flex gap-2 flex-wrap">
                {serviceLocations?.map(({ href, label, id }) => {
                    return (
                        <Link href={href} key={id} className="hover:font-bold hover:underline">
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Loactions;