// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const StageType = {
  "ID": "ID",
  "SETUP": "SETUP",
  "PREVIEW": "PREVIEW",
  "GATHERING": "GATHERING",
  "DECISION": "DECISION",
  "CLOSING": "CLOSING"
};

const TimeFrame = {
  "ID": "ID",
  "SHORT": "SHORT",
  "NORMAL": "NORMAL",
  "EXTENDED": "EXTENDED",
  "LARGE": "LARGE"
};

const GroupSize = {
  "ID": "ID",
  "SMALL": "SMALL",
  "MEDIUM": "MEDIUM",
  "LARGE": "LARGE"
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

const { PatchedRitualBoard, PatchedRitual, RetroBoard, Ritual, ParticipantPreferences, Idea, Vote, ActionItem, PersonRitual, Person, Template, TemplateStage, Stage, TemplateIdeaType, IdeaType, TemplateArea } = initSchema(schema);

export {
  PatchedRitualBoard,
  PatchedRitual,
  RetroBoard,
  Ritual,
  ParticipantPreferences,
  Idea,
  Vote,
  ActionItem,
  PersonRitual,
  Person,
  Template,
  TemplateStage,
  Stage,
  TemplateIdeaType,
  IdeaType,
  TemplateArea,
  StageType,
  TimeFrame,
  GroupSize,
  Difficulty,
  Mood
};