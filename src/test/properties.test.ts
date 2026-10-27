import { describe, expect, it } from "vitest";

import { properties } from "@/data/properties";

describe("Sahiwal listings", () => {
  it("shows nine listings across the city", () => {
    expect(properties).toHaveLength(9);
  });

  it("prices range from 1.6 to 5.4 crore", () => {
    for (const property of properties) {
      const crore = parseFloat(property.price);
      expect(crore).toBeGreaterThanOrEqual(1.6);
      expect(crore).toBeLessThanOrEqual(5.4);
    }
  });

  it("covers the areas the business named", () => {
    const areas = properties.map((p) => p.location.split(",")[0]);
    for (const area of ["Farid Town", "Razzaq Royals", "Jeewan City", "Sahiwal City"]) {
      expect(areas).toContain(area);
    }
  });

  it("every listing has a location and is for sale", () => {
    for (const property of properties) {
      expect(property.location.trim().length).toBeGreaterThan(0);
      expect(property.purpose).toBe("Buy");
    }
  });
});
