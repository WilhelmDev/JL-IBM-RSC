import { ServiceSectionForm, HeroForm } from "@/core/domain/forms/services";
import { ApiInstance } from "../api";
import { parseHeroService, parseServiceSection } from "@/utilis/parsers";

export const updateHeroService = async (data: HeroForm) => {
  const parsed = parseHeroService(data);
  await ApiInstance.patch("/admin/cards/services-hero", parsed);
};

export const updateDiagnosticService = async (data: ServiceSectionForm) => {
  const parsed = parseServiceSection(data);
  await ApiInstance.patch("/admin/cards/services-diagnosis", parsed);
};

export const updateMaintenanceService = async (data: ServiceSectionForm) => {
  const parsed = parseServiceSection(data);
  await ApiInstance.patch("/admin/cards/services-maintenance", parsed);
};

export const updateBuildingsService = async (data: ServiceSectionForm) => {
  const parsed = parseServiceSection(data);
  await ApiInstance.patch("/admin/cards/services-construction", parsed);
};
