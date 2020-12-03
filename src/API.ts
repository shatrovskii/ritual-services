/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTemplateInput = {
  id?: string | null,
  boardKey?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelTemplateConditionInput = {
  boardKey?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum StageType {
  ID = "ID",
  SETUP = "SETUP",
  PREVIEW = "PREVIEW",
  GATHERING = "GATHERING",
  DECITION = "DECITION",
  CLOSING = "CLOSING",
}


export type UpdateTemplateInput = {
  id: string,
  boardKey?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTemplateInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTemplateAreaInput = {
  id?: string | null,
  x?: number | null,
  y?: number | null,
  width?: number | null,
  height?: number | null,
  typeId: string,
  templateID: string,
  _version?: number | null,
};

export type ModelTemplateAreaConditionInput = {
  x?: ModelIntInput | null,
  y?: ModelIntInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  typeId?: ModelIDInput | null,
  templateID?: ModelIDInput | null,
  and?: Array< ModelTemplateAreaConditionInput | null > | null,
  or?: Array< ModelTemplateAreaConditionInput | null > | null,
  not?: ModelTemplateAreaConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTemplateAreaInput = {
  id: string,
  x?: number | null,
  y?: number | null,
  width?: number | null,
  height?: number | null,
  typeId?: string | null,
  templateID?: string | null,
  _version?: number | null,
};

export type DeleteTemplateAreaInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateIdeaTypeInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelIdeaTypeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelIdeaTypeConditionInput | null > | null,
  or?: Array< ModelIdeaTypeConditionInput | null > | null,
  not?: ModelIdeaTypeConditionInput | null,
};

export type UpdateIdeaTypeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteIdeaTypeInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateStageInput = {
  id?: string | null,
  type?: StageType | null,
  name?: string | null,
  description?: string | null,
  duration?: number | null,
  _version?: number | null,
};

export type ModelStageConditionInput = {
  type?: ModelStageTypeInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelStageConditionInput | null > | null,
  or?: Array< ModelStageConditionInput | null > | null,
  not?: ModelStageConditionInput | null,
};

export type ModelStageTypeInput = {
  eq?: StageType | null,
  ne?: StageType | null,
};

export type UpdateStageInput = {
  id: string,
  type?: StageType | null,
  name?: string | null,
  description?: string | null,
  duration?: number | null,
  _version?: number | null,
};

export type DeleteStageInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateParticipantPreferencesInput = {
  id?: string | null,
  difficulty?: Difficulty | null,
  mood?: Mood | null,
  surpriseMe?: boolean | null,
  _version?: number | null,
};

export enum Difficulty {
  ID = "ID",
  EASY = "EASY",
  WHATEVER = "WHATEVER",
  HARD = "HARD",
}


export enum Mood {
  ID = "ID",
  OVERWHELMED = "OVERWHELMED",
  LOWENERGY = "LOWENERGY",
  BALANCED = "BALANCED",
  HIGHENERGY = "HIGHENERGY",
  EXCITED = "EXCITED",
}


export type ModelParticipantPreferencesConditionInput = {
  difficulty?: ModelDifficultyInput | null,
  mood?: ModelMoodInput | null,
  surpriseMe?: ModelBooleanInput | null,
  and?: Array< ModelParticipantPreferencesConditionInput | null > | null,
  or?: Array< ModelParticipantPreferencesConditionInput | null > | null,
  not?: ModelParticipantPreferencesConditionInput | null,
};

export type ModelDifficultyInput = {
  eq?: Difficulty | null,
  ne?: Difficulty | null,
};

export type ModelMoodInput = {
  eq?: Mood | null,
  ne?: Mood | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateParticipantPreferencesInput = {
  id: string,
  difficulty?: Difficulty | null,
  mood?: Mood | null,
  surpriseMe?: boolean | null,
  _version?: number | null,
};

export type DeleteParticipantPreferencesInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreatePersonInput = {
  id?: string | null,
  miroUserId?: number | null,
  stickyColor?: string | null,
  _version?: number | null,
};

export type ModelPersonConditionInput = {
  miroUserId?: ModelIntInput | null,
  stickyColor?: ModelStringInput | null,
  and?: Array< ModelPersonConditionInput | null > | null,
  or?: Array< ModelPersonConditionInput | null > | null,
  not?: ModelPersonConditionInput | null,
};

export type UpdatePersonInput = {
  id: string,
  miroUserId?: number | null,
  stickyColor?: string | null,
  _version?: number | null,
};

export type DeletePersonInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSimpleTestInput = {
  id?: string | null,
  S3_link: string,
  _version?: number | null,
};

export type ModelSimpleTestConditionInput = {
  S3_link?: ModelStringInput | null,
  and?: Array< ModelSimpleTestConditionInput | null > | null,
  or?: Array< ModelSimpleTestConditionInput | null > | null,
  not?: ModelSimpleTestConditionInput | null,
};

export type UpdateSimpleTestInput = {
  id: string,
  S3_link?: string | null,
  _version?: number | null,
};

export type DeleteSimpleTestInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSimpleTest2Input = {
  id?: string | null,
  S3_link: string,
  _version?: number | null,
};

export type ModelSimpleTest2ConditionInput = {
  S3_link?: ModelStringInput | null,
  and?: Array< ModelSimpleTest2ConditionInput | null > | null,
  or?: Array< ModelSimpleTest2ConditionInput | null > | null,
  not?: ModelSimpleTest2ConditionInput | null,
};

export type UpdateSimpleTest2Input = {
  id: string,
  S3_link?: string | null,
  _version?: number | null,
};

export type DeleteSimpleTest2Input = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTemplateStageInput = {
  id?: string | null,
  templateID: string,
  stageID: string,
  _version?: number | null,
};

export type ModelTemplateStageConditionInput = {
  templateID?: ModelIDInput | null,
  stageID?: ModelIDInput | null,
  and?: Array< ModelTemplateStageConditionInput | null > | null,
  or?: Array< ModelTemplateStageConditionInput | null > | null,
  not?: ModelTemplateStageConditionInput | null,
};

export type UpdateTemplateStageInput = {
  id: string,
  templateID?: string | null,
  stageID?: string | null,
  _version?: number | null,
};

export type DeleteTemplateStageInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTemplateIdeaTypeInput = {
  id?: string | null,
  templateID: string,
  ideatypeID: string,
  _version?: number | null,
};

export type ModelTemplateIdeaTypeConditionInput = {
  templateID?: ModelIDInput | null,
  ideatypeID?: ModelIDInput | null,
  and?: Array< ModelTemplateIdeaTypeConditionInput | null > | null,
  or?: Array< ModelTemplateIdeaTypeConditionInput | null > | null,
  not?: ModelTemplateIdeaTypeConditionInput | null,
};

export type UpdateTemplateIdeaTypeInput = {
  id: string,
  templateID?: string | null,
  ideatypeID?: string | null,
  _version?: number | null,
};

export type DeleteTemplateIdeaTypeInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  boardKey?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
};

export type ModelTemplateAreaFilterInput = {
  id?: ModelIDInput | null,
  x?: ModelIntInput | null,
  y?: ModelIntInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  typeId?: ModelIDInput | null,
  templateID?: ModelIDInput | null,
  and?: Array< ModelTemplateAreaFilterInput | null > | null,
  or?: Array< ModelTemplateAreaFilterInput | null > | null,
  not?: ModelTemplateAreaFilterInput | null,
};

export type ModelIdeaTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelIdeaTypeFilterInput | null > | null,
  or?: Array< ModelIdeaTypeFilterInput | null > | null,
  not?: ModelIdeaTypeFilterInput | null,
};

export type ModelStageFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStageTypeInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelStageFilterInput | null > | null,
  or?: Array< ModelStageFilterInput | null > | null,
  not?: ModelStageFilterInput | null,
};

export type ModelParticipantPreferencesFilterInput = {
  id?: ModelIDInput | null,
  difficulty?: ModelDifficultyInput | null,
  mood?: ModelMoodInput | null,
  surpriseMe?: ModelBooleanInput | null,
  and?: Array< ModelParticipantPreferencesFilterInput | null > | null,
  or?: Array< ModelParticipantPreferencesFilterInput | null > | null,
  not?: ModelParticipantPreferencesFilterInput | null,
};

export type ModelPersonFilterInput = {
  id?: ModelIDInput | null,
  miroUserId?: ModelIntInput | null,
  stickyColor?: ModelStringInput | null,
  and?: Array< ModelPersonFilterInput | null > | null,
  or?: Array< ModelPersonFilterInput | null > | null,
  not?: ModelPersonFilterInput | null,
};

export type ModelSimpleTestFilterInput = {
  id?: ModelIDInput | null,
  S3_link?: ModelStringInput | null,
  and?: Array< ModelSimpleTestFilterInput | null > | null,
  or?: Array< ModelSimpleTestFilterInput | null > | null,
  not?: ModelSimpleTestFilterInput | null,
};

export type ModelSimpleTest2FilterInput = {
  id?: ModelIDInput | null,
  S3_link?: ModelStringInput | null,
  and?: Array< ModelSimpleTest2FilterInput | null > | null,
  or?: Array< ModelSimpleTest2FilterInput | null > | null,
  not?: ModelSimpleTest2FilterInput | null,
};

export type ModelTemplateStageFilterInput = {
  id?: ModelIDInput | null,
  templateID?: ModelIDInput | null,
  stageID?: ModelIDInput | null,
  and?: Array< ModelTemplateStageFilterInput | null > | null,
  or?: Array< ModelTemplateStageFilterInput | null > | null,
  not?: ModelTemplateStageFilterInput | null,
};

export type ModelTemplateIdeaTypeFilterInput = {
  id?: ModelIDInput | null,
  templateID?: ModelIDInput | null,
  ideatypeID?: ModelIDInput | null,
  and?: Array< ModelTemplateIdeaTypeFilterInput | null > | null,
  or?: Array< ModelTemplateIdeaTypeFilterInput | null > | null,
  not?: ModelTemplateIdeaTypeFilterInput | null,
};

export type CreateTemplateMutationVariables = {
  input: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type CreateTemplateAreaMutationVariables = {
  input: CreateTemplateAreaInput,
  condition?: ModelTemplateAreaConditionInput | null,
};

export type CreateTemplateAreaMutation = {
  createTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTemplateAreaMutationVariables = {
  input: UpdateTemplateAreaInput,
  condition?: ModelTemplateAreaConditionInput | null,
};

export type UpdateTemplateAreaMutation = {
  updateTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTemplateAreaMutationVariables = {
  input: DeleteTemplateAreaInput,
  condition?: ModelTemplateAreaConditionInput | null,
};

export type DeleteTemplateAreaMutation = {
  deleteTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIdeaTypeMutationVariables = {
  input: CreateIdeaTypeInput,
  condition?: ModelIdeaTypeConditionInput | null,
};

export type CreateIdeaTypeMutation = {
  createIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateIdeaTypeMutationVariables = {
  input: UpdateIdeaTypeInput,
  condition?: ModelIdeaTypeConditionInput | null,
};

export type UpdateIdeaTypeMutation = {
  updateIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteIdeaTypeMutationVariables = {
  input: DeleteIdeaTypeInput,
  condition?: ModelIdeaTypeConditionInput | null,
};

export type DeleteIdeaTypeMutation = {
  deleteIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type CreateStageMutationVariables = {
  input: CreateStageInput,
  condition?: ModelStageConditionInput | null,
};

export type CreateStageMutation = {
  createStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type UpdateStageMutationVariables = {
  input: UpdateStageInput,
  condition?: ModelStageConditionInput | null,
};

export type UpdateStageMutation = {
  updateStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type DeleteStageMutationVariables = {
  input: DeleteStageInput,
  condition?: ModelStageConditionInput | null,
};

export type DeleteStageMutation = {
  deleteStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type CreateParticipantPreferencesMutationVariables = {
  input: CreateParticipantPreferencesInput,
  condition?: ModelParticipantPreferencesConditionInput | null,
};

export type CreateParticipantPreferencesMutation = {
  createParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateParticipantPreferencesMutationVariables = {
  input: UpdateParticipantPreferencesInput,
  condition?: ModelParticipantPreferencesConditionInput | null,
};

export type UpdateParticipantPreferencesMutation = {
  updateParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteParticipantPreferencesMutationVariables = {
  input: DeleteParticipantPreferencesInput,
  condition?: ModelParticipantPreferencesConditionInput | null,
};

export type DeleteParticipantPreferencesMutation = {
  deleteParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePersonMutationVariables = {
  input: CreatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type CreatePersonMutation = {
  createPerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: UpdatePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type UpdatePersonMutation = {
  updatePerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePersonMutationVariables = {
  input: DeletePersonInput,
  condition?: ModelPersonConditionInput | null,
};

export type DeletePersonMutation = {
  deletePerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSimpleTestMutationVariables = {
  input: CreateSimpleTestInput,
  condition?: ModelSimpleTestConditionInput | null,
};

export type CreateSimpleTestMutation = {
  createSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSimpleTestMutationVariables = {
  input: UpdateSimpleTestInput,
  condition?: ModelSimpleTestConditionInput | null,
};

export type UpdateSimpleTestMutation = {
  updateSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSimpleTestMutationVariables = {
  input: DeleteSimpleTestInput,
  condition?: ModelSimpleTestConditionInput | null,
};

export type DeleteSimpleTestMutation = {
  deleteSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSimpleTest2MutationVariables = {
  input: CreateSimpleTest2Input,
  condition?: ModelSimpleTest2ConditionInput | null,
};

export type CreateSimpleTest2Mutation = {
  createSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSimpleTest2MutationVariables = {
  input: UpdateSimpleTest2Input,
  condition?: ModelSimpleTest2ConditionInput | null,
};

export type UpdateSimpleTest2Mutation = {
  updateSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSimpleTest2MutationVariables = {
  input: DeleteSimpleTest2Input,
  condition?: ModelSimpleTest2ConditionInput | null,
};

export type DeleteSimpleTest2Mutation = {
  deleteSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTemplateStageMutationVariables = {
  input: CreateTemplateStageInput,
  condition?: ModelTemplateStageConditionInput | null,
};

export type CreateTemplateStageMutation = {
  createTemplateStage:  {
    __typename: "TemplateStage",
    id: string,
    templateID: string,
    stageID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    stage:  {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type UpdateTemplateStageMutationVariables = {
  input: UpdateTemplateStageInput,
  condition?: ModelTemplateStageConditionInput | null,
};

export type UpdateTemplateStageMutation = {
  updateTemplateStage:  {
    __typename: "TemplateStage",
    id: string,
    templateID: string,
    stageID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    stage:  {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type DeleteTemplateStageMutationVariables = {
  input: DeleteTemplateStageInput,
  condition?: ModelTemplateStageConditionInput | null,
};

export type DeleteTemplateStageMutation = {
  deleteTemplateStage:  {
    __typename: "TemplateStage",
    id: string,
    templateID: string,
    stageID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    stage:  {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type CreateTemplateIdeaTypeMutationVariables = {
  input: CreateTemplateIdeaTypeInput,
  condition?: ModelTemplateIdeaTypeConditionInput | null,
};

export type CreateTemplateIdeaTypeMutation = {
  createTemplateIdeaType:  {
    __typename: "TemplateIdeaType",
    id: string,
    templateID: string,
    ideatypeID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    ideatype:  {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type UpdateTemplateIdeaTypeMutationVariables = {
  input: UpdateTemplateIdeaTypeInput,
  condition?: ModelTemplateIdeaTypeConditionInput | null,
};

export type UpdateTemplateIdeaTypeMutation = {
  updateTemplateIdeaType:  {
    __typename: "TemplateIdeaType",
    id: string,
    templateID: string,
    ideatypeID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    ideatype:  {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type DeleteTemplateIdeaTypeMutationVariables = {
  input: DeleteTemplateIdeaTypeInput,
  condition?: ModelTemplateIdeaTypeConditionInput | null,
};

export type DeleteTemplateIdeaTypeMutation = {
  deleteTemplateIdeaType:  {
    __typename: "TemplateIdeaType",
    id: string,
    templateID: string,
    ideatypeID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    ideatype:  {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id: string,
};

export type GetTemplateQuery = {
  getTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type SyncTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTemplatesQuery = {
  syncTemplates:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTemplateAreaQueryVariables = {
  id: string,
};

export type GetTemplateAreaQuery = {
  getTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTemplateAreasQueryVariables = {
  filter?: ModelTemplateAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplateAreasQuery = {
  listTemplateAreas:  {
    __typename: "ModelTemplateAreaConnection",
    items:  Array< {
      __typename: "TemplateArea",
      id: string,
      x: number | null,
      y: number | null,
      width: number | null,
      height: number | null,
      typeId: string,
      templateID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTemplateAreasQueryVariables = {
  filter?: ModelTemplateAreaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTemplateAreasQuery = {
  syncTemplateAreas:  {
    __typename: "ModelTemplateAreaConnection",
    items:  Array< {
      __typename: "TemplateArea",
      id: string,
      x: number | null,
      y: number | null,
      width: number | null,
      height: number | null,
      typeId: string,
      templateID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type ListIdeaTypesQueryVariables = {
  filter?: ModelIdeaTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIdeaTypesQuery = {
  listIdeaTypes:  {
    __typename: "ModelIdeaTypeConnection",
    items:  Array< {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetIdeaTypeQueryVariables = {
  id: string,
};

export type GetIdeaTypeQuery = {
  getIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type SyncIdeaTypesQueryVariables = {
  filter?: ModelIdeaTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncIdeaTypesQuery = {
  syncIdeaTypes:  {
    __typename: "ModelIdeaTypeConnection",
    items:  Array< {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type ListStagesQueryVariables = {
  filter?: ModelStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStagesQuery = {
  listStages:  {
    __typename: "ModelStageConnection",
    items:  Array< {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetStageQueryVariables = {
  id: string,
};

export type GetStageQuery = {
  getStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type SyncStagesQueryVariables = {
  filter?: ModelStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStagesQuery = {
  syncStages:  {
    __typename: "ModelStageConnection",
    items:  Array< {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetParticipantPreferencesQueryVariables = {
  id: string,
};

export type GetParticipantPreferencesQuery = {
  getParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListParticipantPreferencessQueryVariables = {
  filter?: ModelParticipantPreferencesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantPreferencessQuery = {
  listParticipantPreferencess:  {
    __typename: "ModelParticipantPreferencesConnection",
    items:  Array< {
      __typename: "ParticipantPreferences",
      id: string,
      difficulty: Difficulty | null,
      mood: Mood | null,
      surpriseMe: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncParticipantPreferencesQueryVariables = {
  filter?: ModelParticipantPreferencesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncParticipantPreferencesQuery = {
  syncParticipantPreferences:  {
    __typename: "ModelParticipantPreferencesConnection",
    items:  Array< {
      __typename: "ParticipantPreferences",
      id: string,
      difficulty: Difficulty | null,
      mood: Mood | null,
      surpriseMe: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetPersonQueryVariables = {
  id: string,
};

export type GetPersonQuery = {
  getPerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPersonsQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPersonsQuery = {
  listPersons:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      miroUserId: number | null,
      stickyColor: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncPeopleQueryVariables = {
  filter?: ModelPersonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPeopleQuery = {
  syncPeople:  {
    __typename: "ModelPersonConnection",
    items:  Array< {
      __typename: "Person",
      id: string,
      miroUserId: number | null,
      stickyColor: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetSimpleTestQueryVariables = {
  id: string,
};

export type GetSimpleTestQuery = {
  getSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSimpleTestsQueryVariables = {
  filter?: ModelSimpleTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSimpleTestsQuery = {
  listSimpleTests:  {
    __typename: "ModelSimpleTestConnection",
    items:  Array< {
      __typename: "SimpleTest",
      id: string,
      S3_link: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSimpleTestsQueryVariables = {
  filter?: ModelSimpleTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSimpleTestsQuery = {
  syncSimpleTests:  {
    __typename: "ModelSimpleTestConnection",
    items:  Array< {
      __typename: "SimpleTest",
      id: string,
      S3_link: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetSimpleTest2QueryVariables = {
  id: string,
};

export type GetSimpleTest2Query = {
  getSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSimpleTest2sQueryVariables = {
  filter?: ModelSimpleTest2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSimpleTest2sQuery = {
  listSimpleTest2s:  {
    __typename: "ModelSimpleTest2Connection",
    items:  Array< {
      __typename: "SimpleTest2",
      id: string,
      S3_link: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSimpleTest2sQueryVariables = {
  filter?: ModelSimpleTest2FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSimpleTest2sQuery = {
  syncSimpleTest2s:  {
    __typename: "ModelSimpleTest2Connection",
    items:  Array< {
      __typename: "SimpleTest2",
      id: string,
      S3_link: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTemplateStagesQueryVariables = {
  filter?: ModelTemplateStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTemplateStagesQuery = {
  syncTemplateStages:  {
    __typename: "ModelTemplateStageConnection",
    items:  Array< {
      __typename: "TemplateStage",
      id: string,
      templateID: string,
      stageID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      template:  {
        __typename: "Template",
        id: string,
        boardKey: string | null,
        description: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        areas:  {
          __typename: "ModelTemplateAreaConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
        stages:  {
          __typename: "ModelTemplateStageConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
        ideaTypes:  {
          __typename: "ModelTemplateIdeaTypeConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
      },
      stage:  {
        __typename: "Stage",
        id: string,
        type: StageType | null,
        name: string | null,
        description: string | null,
        duration: number | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        templates:  {
          __typename: "ModelTemplateStageConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
      },
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTemplateIdeaTypesQueryVariables = {
  filter?: ModelTemplateIdeaTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTemplateIdeaTypesQuery = {
  syncTemplateIdeaTypes:  {
    __typename: "ModelTemplateIdeaTypeConnection",
    items:  Array< {
      __typename: "TemplateIdeaType",
      id: string,
      templateID: string,
      ideatypeID: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      template:  {
        __typename: "Template",
        id: string,
        boardKey: string | null,
        description: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        areas:  {
          __typename: "ModelTemplateAreaConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
        stages:  {
          __typename: "ModelTemplateStageConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
        ideaTypes:  {
          __typename: "ModelTemplateIdeaTypeConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
      },
      ideatype:  {
        __typename: "IdeaType",
        id: string,
        name: string | null,
        description: string | null,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        templateAreas:  {
          __typename: "ModelTemplateAreaConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
        templates:  {
          __typename: "ModelTemplateIdeaTypeConnection",
          nextToken: string | null,
          startedAt: number | null,
        } | null,
      },
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate:  {
    __typename: "Template",
    id: string,
    boardKey: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    areas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    stages:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    ideaTypes:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnCreateTemplateAreaSubscription = {
  onCreateTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTemplateAreaSubscription = {
  onUpdateTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTemplateAreaSubscription = {
  onDeleteTemplateArea:  {
    __typename: "TemplateArea",
    id: string,
    x: number | null,
    y: number | null,
    width: number | null,
    height: number | null,
    typeId: string,
    templateID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIdeaTypeSubscription = {
  onCreateIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateIdeaTypeSubscription = {
  onUpdateIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteIdeaTypeSubscription = {
  onDeleteIdeaType:  {
    __typename: "IdeaType",
    id: string,
    name: string | null,
    description: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templateAreas:  {
      __typename: "ModelTemplateAreaConnection",
      items:  Array< {
        __typename: "TemplateArea",
        id: string,
        x: number | null,
        y: number | null,
        width: number | null,
        height: number | null,
        typeId: string,
        templateID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    templates:  {
      __typename: "ModelTemplateIdeaTypeConnection",
      items:  Array< {
        __typename: "TemplateIdeaType",
        id: string,
        templateID: string,
        ideatypeID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        ideatype:  {
          __typename: "IdeaType",
          id: string,
          name: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnCreateStageSubscription = {
  onCreateStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnUpdateStageSubscription = {
  onUpdateStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnDeleteStageSubscription = {
  onDeleteStage:  {
    __typename: "Stage",
    id: string,
    type: StageType | null,
    name: string | null,
    description: string | null,
    duration: number | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    templates:  {
      __typename: "ModelTemplateStageConnection",
      items:  Array< {
        __typename: "TemplateStage",
        id: string,
        templateID: string,
        stageID: string,
        _version: number,
        _deleted: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        template:  {
          __typename: "Template",
          id: string,
          boardKey: string | null,
          description: string | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
        stage:  {
          __typename: "Stage",
          id: string,
          type: StageType | null,
          name: string | null,
          description: string | null,
          duration: number | null,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken: string | null,
      startedAt: number | null,
    } | null,
  } | null,
};

export type OnCreateParticipantPreferencesSubscription = {
  onCreateParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipantPreferencesSubscription = {
  onUpdateParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipantPreferencesSubscription = {
  onDeleteParticipantPreferences:  {
    __typename: "ParticipantPreferences",
    id: string,
    difficulty: Difficulty | null,
    mood: Mood | null,
    surpriseMe: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePersonSubscription = {
  onCreatePerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePersonSubscription = {
  onUpdatePerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePersonSubscription = {
  onDeletePerson:  {
    __typename: "Person",
    id: string,
    miroUserId: number | null,
    stickyColor: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSimpleTestSubscription = {
  onCreateSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSimpleTestSubscription = {
  onUpdateSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSimpleTestSubscription = {
  onDeleteSimpleTest:  {
    __typename: "SimpleTest",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSimpleTest2Subscription = {
  onCreateSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSimpleTest2Subscription = {
  onUpdateSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSimpleTest2Subscription = {
  onDeleteSimpleTest2:  {
    __typename: "SimpleTest2",
    id: string,
    S3_link: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTemplateStageSubscription = {
  onCreateTemplateStage:  {
    __typename: "TemplateStage",
    id: string,
    templateID: string,
    stageID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    stage:  {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdateTemplateStageSubscription = {
  onUpdateTemplateStage:  {
    __typename: "TemplateStage",
    id: string,
    templateID: string,
    stageID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    stage:  {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnDeleteTemplateStageSubscription = {
  onDeleteTemplateStage:  {
    __typename: "TemplateStage",
    id: string,
    templateID: string,
    stageID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    stage:  {
      __typename: "Stage",
      id: string,
      type: StageType | null,
      name: string | null,
      description: string | null,
      duration: number | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templates:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnCreateTemplateIdeaTypeSubscription = {
  onCreateTemplateIdeaType:  {
    __typename: "TemplateIdeaType",
    id: string,
    templateID: string,
    ideatypeID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    ideatype:  {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdateTemplateIdeaTypeSubscription = {
  onUpdateTemplateIdeaType:  {
    __typename: "TemplateIdeaType",
    id: string,
    templateID: string,
    ideatypeID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    ideatype:  {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};

export type OnDeleteTemplateIdeaTypeSubscription = {
  onDeleteTemplateIdeaType:  {
    __typename: "TemplateIdeaType",
    id: string,
    templateID: string,
    ideatypeID: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    template:  {
      __typename: "Template",
      id: string,
      boardKey: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      areas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      stages:  {
        __typename: "ModelTemplateStageConnection",
        items:  Array< {
          __typename: "TemplateStage",
          id: string,
          templateID: string,
          stageID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      ideaTypes:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
    ideatype:  {
      __typename: "IdeaType",
      id: string,
      name: string | null,
      description: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      templateAreas:  {
        __typename: "ModelTemplateAreaConnection",
        items:  Array< {
          __typename: "TemplateArea",
          id: string,
          x: number | null,
          y: number | null,
          width: number | null,
          height: number | null,
          typeId: string,
          templateID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
      templates:  {
        __typename: "ModelTemplateIdeaTypeConnection",
        items:  Array< {
          __typename: "TemplateIdeaType",
          id: string,
          templateID: string,
          ideatypeID: string,
          _version: number,
          _deleted: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
        startedAt: number | null,
      } | null,
    },
  } | null,
};
