export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}

export interface Folder {
  title: string;
  author: string;
}

export interface File {
  title: string;
  author: string;
}

export interface quickFile {
  title: string;
  author: string;
  lastEdited: string;
}
