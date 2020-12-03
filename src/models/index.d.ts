import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum StageType {
  ID = "ID",
  SETUP = "SETUP",
  PREVIEW = "PREVIEW",
  GATHERING = "GATHERING",
  DECITION = "DECITION",
  CLOSING = "CLOSING"
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

export enum GroupSize {
  ID = "ID",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export enum TimeFrame {
  ID = "ID",
  SHORT = "SHORT",
  NORMAL = "NORMAL",
  EXTENDED = "EXTENDED",
  LARGE = "LARGE"
}



export declare class Idea {
  readonly id: string;
  readonly text?: string;
  constructor(init: ModelInit<Idea>);
  static copyOf(source: Idea, mutator: (draft: MutableModel<Idea>) => MutableModel<Idea> | void): Idea;
}

export declare class Template {
  readonly id: string;
  readonly boardKey?: string;
  readonly description?: string;
  readonly stages?: (TemplateStage | null)[];
  readonly ideaTypes?: (TemplateIdeaType | null)[];
  readonly areas?: (TemplateArea | null)[];
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

export declare class ParticipantPreferences {
  readonly id: string;
  readonly difficulty?: Difficulty | keyof typeof Difficulty;
  readonly mood?: Mood | keyof typeof Mood;
  readonly surpriseMe?: boolean;
  constructor(init: ModelInit<ParticipantPreferences>);
  static copyOf(source: ParticipantPreferences, mutator: (draft: MutableModel<ParticipantPreferences>) => MutableModel<ParticipantPreferences> | void): ParticipantPreferences;
}

export declare class Person {
  readonly id: string;
  readonly miroUserId?: number;
  readonly stickyColor?: string;
  constructor(init: ModelInit<Person>);
  static copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}