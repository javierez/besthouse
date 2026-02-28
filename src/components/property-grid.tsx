import { getListingsForGrid } from "~/server/queries/listings";
import { getPropertiesConfig } from "~/server/queries/website-config";
import { PropertyHeader } from "./propertygrid/PropertyHeader";
import { PropertyGridContent } from "./propertygrid/PropertyGridContent";
import { PropertyButton } from "./propertygrid/PropertyButton";
import { PropertyGridWrapper } from "./propertygrid/PropertyGridWrapper";

export async function PropertyGrid() {
  // Fetch listings and configuration data from the database
  const [listings, config] = await Promise.all([
    getListingsForGrid(12),
    getPropertiesConfig(),
  ]);

  
  // Get configuration from database
  const { title, subtitle, buttonText } = config;

  return (
    <PropertyGridWrapper>
      <section className="pb-4 pt-16 sm:pb-8 lg:pb-12" id="properties">
        <div className="container">
          <PropertyHeader title={title} subtitle={subtitle} />
          <PropertyGridContent listings={listings} />
          {listings.length > 0 && <PropertyButton text={buttonText} />}
        </div>
      </section>
    </PropertyGridWrapper>
  );
}
