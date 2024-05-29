import { HeroForm } from "@/core/domain/forms/servicesHero";
import { ApiInstance } from "../api";
import { parseHeroService } from "@/utilis/parsers";

export const updateHeroService = async (data: HeroForm) => {
  const parsed = parseHeroService(data)
  await ApiInstance.patch("/admin/cards/services-hero", parsed);
};
