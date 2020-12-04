export enum StageType {
  PARTICIPANTS_COUNT = "PARTICIPANTS_COUNT",
  MOOD_SELECTION = "MOOD_SELECTION",
  RETRO_BUILD = "RETRO_BUILD",
  EXECUTION = "EXECUTION",
  DECISION = "DECISION",
  FEEDBACK = "FEEDBACK"
}

export enum TimeFrame {
  SHORT = "SHORT",
  NORMAL = "NORMAL",
  EXTENDED = "EXTENDED",
  LARGE = "LARGE"
}

export enum GroupSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export enum Difficulty {
  EASY = "EASY",
  WHATEVER = "WHATEVER",
  HARD = "HARD"
}

export enum Mood {
  OVERWHELMED = "OVERWHELMED",
  LOW_ENERGY = "LOW_ENERGY",
  BALANCED = "BALANCED",
  HIGH_ENERGY = "HIGH_ENERGY",
  EXCITED = "EXCITED"
}

export type RetroBoard = {
  activeRitual?: Ritual,
}

export type Ritual = {
  stage?: StageType,
  name?: string,
  date?: string,
  timeFrame?: TimeFrame,
  groupSize?: GroupSize,
  frameId?: number,
  participantPreferences?: ParticipantPreferences[],
  template?: Template,
  ideas?: Idea[],
  votes?: Vote[],
  actionItems?: ActionItem[],
  initiator?: Person,
  participants?: Person[],
}

export type ParticipantPreferences = {
  difficulty?: Difficulty,
  mood?: Mood,
  surpriseMe?: boolean,
}

export type Idea = {
  text?: string,
  votes?: Vote[],
  createdBy?: Person,
}

export type Vote = {
  createdBy?: Person,
}

export type ActionItem = {
  text?: string,
  createdBy?: Person,
}

export type Person = {
  miroUserId?: number,
  stickyColor?: string,
}

export type Template = {
  boardKey?: string,
  description?: string,
  stages?: Stage[],
  ideaTypes?: IdeaType[],
  areas?: TemplateArea[],
}

export type Stage = {
  type?: StageType,
  name?: string,
  description?: string,
  duration?: number,
}

export type IdeaType = {
  name?: string,
  description?: string,
}

export type TemplateArea = {
  x?: number,
  y?: number,
  width?: number,
  height?: number,
  type?: IdeaType,
}