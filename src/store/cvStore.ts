import { IProject } from "@/store/projects";
import { iAm } from "./aboutMe";
import { projects, certificates } from "./projects";
import { defineStore } from "pinia";

export const useCVStore = defineStore("cv", {
  state: () => ({
    iAm: {
      ...iAm,
      education: projects.find((p) => p.key === "ed_tnu") as IProject,
      certificates,
    },
    projects,
  }),
});
