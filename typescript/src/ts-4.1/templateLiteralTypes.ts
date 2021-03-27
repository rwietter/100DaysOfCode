type techs = "Javascript" | "Typescript" | "React Native" | "Firebase";

type ProjectTech = `Este projeto usa ${techs} como principal tecnologia`;

const projectIntro: ProjectTech =
  "Este projeto usa Javascript como principal tecnologia"; // autocomplete seguro para ProjectTech + techs

const projectIntro2: ProjectTech = "Este projeto usa Flow"; // flow nõa tem assinatura de ProjectTech
