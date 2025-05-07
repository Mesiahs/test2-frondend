export  interface Form {
  name_form:        string;
  description_form: string;
  id:               number;
  questions:        Question[];
}

export interface Question {
  id:            number;
  question_text: string;
  form_id:       number;
  choices:       Choice[];
}

export interface Choice {
  is_correct:  boolean;
  choice_text: string;
  question_id: number;
  id:          number;
}
