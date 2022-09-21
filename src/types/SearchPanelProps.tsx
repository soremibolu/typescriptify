import { ChangeEvent, FormEvent } from "react";

export type SearchPanelProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: FormEvent<HTMLFormElement>) => void;
  name: string;
  species: string;
  affiliation: string;
};
