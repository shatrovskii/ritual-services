// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StageType = {
  "ID": "ID",
  "SETUP": "SETUP",
  "PREVIEW": "PREVIEW",
  "GATHERING": "GATHERING",
  "DECITION": "DECITION",
  "CLOSING": "CLOSING"
};

const Difficulty = {
  "ID": "ID",
  "EASY": "EASY",
  "WHATEVER": "WHATEVER",
  "HARD": "HARD"
};

const Mood = {
  "ID": "ID",
  "OVERWHELMED": "OVERWHELMED",
  "LOWENERGY": "LOWENERGY",
  "BALANCED": "BALANCED",
  "HIGHENERGY": "HIGHENERGY",
  "EXCITED": "EXCITED"
};

const GroupSize = {
  "ID": "ID",
  "SMALL": "SMALL",
  "MEDIUM": "MEDIUM",
  "LARGE": "LARGE"
};

const TimeFrame = {
  "ID": "ID",
  "SHORT": "SHORT",
  "NORMAL": "NORMAL",
  "EXTENDED": "EXTENDED",
  "LARGE": "LARGE"
};

const { Idea, Template, TemplateStage, Stage, TemplateIdeaType, IdeaType, TemplateArea, ParticipantPreferences, Person } = initSchema(schema);

export {
  Idea,
  Template,
  TemplateStage,
  Stage,
  TemplateIdeaType,
  IdeaType,
  TemplateArea,
  ParticipantPreferences,
  Person,
  StageType,
  Difficulty,
  Mood,
  GroupSize,
  TimeFrame
};