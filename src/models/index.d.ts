import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum StageType {
  ID = "ID",
  SETUP = "SETUP",
  PREVIEW = "PREVIEW",
  GATHERING = "GATHERING",
  DECISION = "DECISION",
  CLOSING = "CLOSING"
}

export enum TimeFrame {
  ID = "ID",
  SHORT = "SHORT",
  NORMAL = "NORMAL",
  EXTENDED = "EXTENDED",
  LARGE = "LARGE"
}

export enum GroupSize {
  ID = "ID",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export enum Difficulty {
  ID = "ID",
  EASY = "EASY",
  WHATEVER = "WHATEVER",
  HARD = "HARD"
}

export enum Mood {
  ID = "ID",
  OVERWHELMED = "OVERWHELMED",
  LOWENERGY = "LOWENERGY",
  BALANCED = "BALANCED",
  HIGHENERGY = "HIGHENERGY",
  EXCITED = "EXCITED"
}



export declare class PatchedRitualBoard {
  readonly id: string;
  readonly boardKey?: string[];
  readonly patchedRitual?: PatchedRitual;
  constructor(init: ModelInit<PatchedRitualBoard>);
  static copyOf(source: PatchedRitualBoard, mutator: (draft: MutableModel<PatchedRitualBoard>) => MutableModel<PatchedRitualBoard> | void): PatchedRitualBoard;
}

export declare class PatchedRitual {
  readonly id: string;
  readonly name?: string[];
  readonly stage?: StageType[] | keyof typeof StageType;
  constructor(init: ModelInit<PatchedRitual>);
  static copyOf(source: PatchedRitual, mutator: (draft: MutableModel<PatchedRitual>) => MutableModel<PatchedRitual> | void): PatchedRitual;
}

export declare class RetroBoard {
  readonly id: string;
  readonly boardKey: string;
  readonly activeRitual?: Ritual;
  constructor(init: ModelInit<RetroBoard>);
  static copyOf(source: RetroBoard, mutator: (draft: MutableModel<RetroBoard>) => MutableModel<RetroBoard> | void): RetroBoard;
}

export declare class Ritual {
  readonly id: string;
  readonly stage?: StageType | keyof typeof StageType;
  readonly name?: string;
  readonly date?: string;
  readonly timeFrame?: TimeFrame | keyof typeof TimeFrame;
  readonly groupSize?: GroupSize | keyof typeof GroupSize;
  readonly frameId?: number;
  readonly participantPreferences?: (ParticipantPreferences | null)[];
  readonly templateId: string;
  readonly ideas?: (Idea | null)[];
  readonly votes?: (Vote | null)[];
  readonly actionItems?: (ActionItem | null)[];
  readonly personID: string;
  readonly persons?: (PersonRitual | null)[];
  constructor(init: ModelInit<Ritual>);
  static copyOf(source: Ritual, mutator: (draft: MutableModel<Ritual>) => MutableModel<Ritual> | void): Ritual;
}

export declare class ParticipantPreferences {
  readonly id: string;
  readonly difficulty?: Difficulty | keyof typeof Difficulty;
  readonly mood?: Mood | keyof typeof Mood;
  readonly surpriseMe?: boolean;
  readonly ritualID: string;
  constructor(init: ModelInit<ParticipantPreferences>);
  static copyOf(source: ParticipantPreferences, mutator: (draft: MutableModel<ParticipantPreferences>) => MutableModel<ParticipantPreferences> | void): ParticipantPreferences;
}

export declare class Idea {
  readonly id: string;
  readonly text?: string;
  readonly votes?: (Vote | null)[];
  readonly ritualID: string;
  readonly personID: string;
  constructor(init: ModelInit<Idea>);
  static copyOf(source: Idea, mutator: (draft: MutableModel<Idea>) => MutableModel<Idea> | void): Idea;
}

export declare class Vote {
  readonly id: string;
  readonly ideaId: string;
  readonly ritualID: string;
  readonly personID: string;
  constructor(init: ModelInit<Vote>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote>) => MutableModel<Vote> | void): Vote;
}

export declare class ActionItem {
  readonly id: string;
  readonly text?: string;
  readonly ritualID: string;
  readonly personID: string;
  constructor(init: ModelInit<ActionItem>);
  static copyOf(source: ActionItem, mutator: (draft: MutableModel<ActionItem>) => MutableModel<ActionItem> | void): ActionItem;
}

export declare class PersonRitual {
  readonly id: string;
  readonly person: Person;
  readonly ritual: Ritual;
  constructor(init: ModelInit<PersonRitual>);
  static copyOf(source: PersonRitual, mutator: (draft: MutableModel<PersonRitual>) => MutableModel<PersonRitual> | void): PersonRitual;
}

export declare class Person {
  readonly id: string;
  readonly miroUserId?: number;
  readonly stickyColor?: string;
  readonly startedRituals?: (Ritual | null)[];
  readonly visitedRituals?: (PersonRitual | null)[];
  readonly assignedActionItems?: (ActionItem | null)[];
  readonly votes?: (Vote | null)[];
  readonly ideas?: (Idea | null)[];
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

export declare class Template {
  readonly id: string;
  readonly boardKey?: string;
  readonly description?: string;
  readonly stages?: (TemplateStage | null)[];
  readonly ideaTypes?: (TemplateIdeaType | null)[];
  readonly areas?: (TemplateArea | null)[];
  readonly rituals?: (Ritual | null)[];
  constructor(init: ModelInit<Template>);
  static copyOf(source: Template, mutator: (draft: MutableModel<Template>) => MutableModel<Template> | void): Template;
}

export declare class TemplateStage {
  readonly id: string;
  readonly template: Template;
  readonly stage: Stage;
  constructor(init: ModelInit<TemplateStage>);
  static copyOf(source: TemplateStage, mutator: (draft: MutableModel<TemplateStage>) => MutableModel<TemplateStage> | void): TemplateStage;
}

export declare class Stage {
  readonly id: string;
  readonly type?: StageType | keyof typeof StageType;
  readonly name?: string;
  readonly description?: string;
  readonly duration?: number;
  readonly templates?: (TemplateStage | null)[];
  constructor(init: ModelInit<Stage>);
  static copyOf(source: Stage, mutator: (draft: MutableModel<Stage>) => MutableModel<Stage> | void): Stage;
}

export declare class TemplateIdeaType {
  readonly id: string;
  readonly template: Template;
  readonly ideatype: IdeaType;
  constructor(init: ModelInit<TemplateIdeaType>);
  static copyOf(source: TemplateIdeaType, mutator: (draft: MutableModel<TemplateIdeaType>) => MutableModel<TemplateIdeaType> | void): TemplateIdeaType;
}

export declare class IdeaType {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly templateAreas?: (TemplateArea | null)[];
  readonly templates?: (TemplateIdeaType | null)[];
  constructor(init: ModelInit<IdeaType>);
  static copyOf(source: IdeaType, mutator: (draft: MutableModel<IdeaType>) => MutableModel<IdeaType> | void): IdeaType;
}

export declare class TemplateArea {
  readonly id: string;
  readonly x?: number;
  readonly y?: number;
  readonly width?: number;
  readonly height?: number;
  readonly typeId: string;
  readonly templateID: string;
  constructor(init: ModelInit<TemplateArea>);
  static copyOf(source: TemplateArea, mutator: (draft: MutableModel<TemplateArea>) => MutableModel<TemplateArea> | void): TemplateArea;
}