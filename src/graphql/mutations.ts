/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRetroBoard = /* GraphQL */ `
  mutation CreateRetroBoard(
    $input: CreateRetroBoardInput!
    $condition: ModelRetroBoardConditionInput
  ) {
    createRetroBoard(input: $input, condition: $condition) {
      id
      boardKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      activeRitual {
        id
        stage
        name
        date
        timeFrame
        groupSize
        frameId
        templateId
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        actionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        participantPreferences {
          items {
            id
            difficulty
            mood
            surpriseMe
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        persons {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateRetroBoard = /* GraphQL */ `
  mutation UpdateRetroBoard(
    $input: UpdateRetroBoardInput!
    $condition: ModelRetroBoardConditionInput
  ) {
    updateRetroBoard(input: $input, condition: $condition) {
      id
      boardKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      activeRitual {
        id
        stage
        name
        date
        timeFrame
        groupSize
        frameId
        templateId
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        actionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        participantPreferences {
          items {
            id
            difficulty
            mood
            surpriseMe
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        persons {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteRetroBoard = /* GraphQL */ `
  mutation DeleteRetroBoard(
    $input: DeleteRetroBoardInput!
    $condition: ModelRetroBoardConditionInput
  ) {
    deleteRetroBoard(input: $input, condition: $condition) {
      id
      boardKey
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      activeRitual {
        id
        stage
        name
        date
        timeFrame
        groupSize
        frameId
        templateId
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        actionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        participantPreferences {
          items {
            id
            difficulty
            mood
            surpriseMe
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        persons {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createRitual = /* GraphQL */ `
  mutation CreateRitual(
    $input: CreateRitualInput!
    $condition: ModelRitualConditionInput
  ) {
    createRitual(input: $input, condition: $condition) {
      id
      stage
      name
      date
      timeFrame
      groupSize
      frameId
      templateId
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      actionItems {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ideas {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          votes {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      participantPreferences {
        items {
          id
          difficulty
          mood
          surpriseMe
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      persons {
        items {
          id
          personID
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          ritual {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          person {
            id
            miroUserId
            stickyColor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateRitual = /* GraphQL */ `
  mutation UpdateRitual(
    $input: UpdateRitualInput!
    $condition: ModelRitualConditionInput
  ) {
    updateRitual(input: $input, condition: $condition) {
      id
      stage
      name
      date
      timeFrame
      groupSize
      frameId
      templateId
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      actionItems {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ideas {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          votes {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      participantPreferences {
        items {
          id
          difficulty
          mood
          surpriseMe
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      persons {
        items {
          id
          personID
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          ritual {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          person {
            id
            miroUserId
            stickyColor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteRitual = /* GraphQL */ `
  mutation DeleteRitual(
    $input: DeleteRitualInput!
    $condition: ModelRitualConditionInput
  ) {
    deleteRitual(input: $input, condition: $condition) {
      id
      stage
      name
      date
      timeFrame
      groupSize
      frameId
      templateId
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      actionItems {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ideas {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          votes {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      participantPreferences {
        items {
          id
          difficulty
          mood
          surpriseMe
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      persons {
        items {
          id
          personID
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          ritual {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          person {
            id
            miroUserId
            stickyColor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createActionItem = /* GraphQL */ `
  mutation CreateActionItem(
    $input: CreateActionItemInput!
    $condition: ModelActionItemConditionInput
  ) {
    createActionItem(input: $input, condition: $condition) {
      id
      text
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateActionItem = /* GraphQL */ `
  mutation UpdateActionItem(
    $input: UpdateActionItemInput!
    $condition: ModelActionItemConditionInput
  ) {
    updateActionItem(input: $input, condition: $condition) {
      id
      text
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteActionItem = /* GraphQL */ `
  mutation DeleteActionItem(
    $input: DeleteActionItemInput!
    $condition: ModelActionItemConditionInput
  ) {
    deleteActionItem(input: $input, condition: $condition) {
      id
      text
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      ideaId
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      ideaId
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      ideaId
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createIdea = /* GraphQL */ `
  mutation CreateIdea(
    $input: CreateIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    createIdea(input: $input, condition: $condition) {
      id
      text
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateIdea = /* GraphQL */ `
  mutation UpdateIdea(
    $input: UpdateIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    updateIdea(input: $input, condition: $condition) {
      id
      text
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteIdea = /* GraphQL */ `
  mutation DeleteIdea(
    $input: DeleteIdeaInput!
    $condition: ModelIdeaConditionInput
  ) {
    deleteIdea(input: $input, condition: $condition) {
      id
      text
      ritualID
      personID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
      id
      boardKey
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      rituals {
        items {
          id
          stage
          name
          date
          timeFrame
          groupSize
          frameId
          templateId
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          actionItems {
            nextToken
            startedAt
          }
          votes {
            nextToken
            startedAt
          }
          ideas {
            nextToken
            startedAt
          }
          participantPreferences {
            nextToken
            startedAt
          }
          persons {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      areas {
        items {
          id
          x
          y
          width
          height
          typeId
          templateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      stages {
        items {
          id
          templateID
          stageID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          stage {
            id
            type
            name
            description
            duration
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      ideaTypes {
        items {
          id
          templateID
          ideatypeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          ideatype {
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
      id
      boardKey
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      rituals {
        items {
          id
          stage
          name
          date
          timeFrame
          groupSize
          frameId
          templateId
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          actionItems {
            nextToken
            startedAt
          }
          votes {
            nextToken
            startedAt
          }
          ideas {
            nextToken
            startedAt
          }
          participantPreferences {
            nextToken
            startedAt
          }
          persons {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      areas {
        items {
          id
          x
          y
          width
          height
          typeId
          templateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      stages {
        items {
          id
          templateID
          stageID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          stage {
            id
            type
            name
            description
            duration
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      ideaTypes {
        items {
          id
          templateID
          ideatypeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          ideatype {
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
      id
      boardKey
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      rituals {
        items {
          id
          stage
          name
          date
          timeFrame
          groupSize
          frameId
          templateId
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          actionItems {
            nextToken
            startedAt
          }
          votes {
            nextToken
            startedAt
          }
          ideas {
            nextToken
            startedAt
          }
          participantPreferences {
            nextToken
            startedAt
          }
          persons {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      areas {
        items {
          id
          x
          y
          width
          height
          typeId
          templateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      stages {
        items {
          id
          templateID
          stageID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          stage {
            id
            type
            name
            description
            duration
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      ideaTypes {
        items {
          id
          templateID
          ideatypeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          ideatype {
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTemplateArea = /* GraphQL */ `
  mutation CreateTemplateArea(
    $input: CreateTemplateAreaInput!
    $condition: ModelTemplateAreaConditionInput
  ) {
    createTemplateArea(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      typeId
      templateID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTemplateArea = /* GraphQL */ `
  mutation UpdateTemplateArea(
    $input: UpdateTemplateAreaInput!
    $condition: ModelTemplateAreaConditionInput
  ) {
    updateTemplateArea(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      typeId
      templateID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTemplateArea = /* GraphQL */ `
  mutation DeleteTemplateArea(
    $input: DeleteTemplateAreaInput!
    $condition: ModelTemplateAreaConditionInput
  ) {
    deleteTemplateArea(input: $input, condition: $condition) {
      id
      x
      y
      width
      height
      typeId
      templateID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createIdeaType = /* GraphQL */ `
  mutation CreateIdeaType(
    $input: CreateIdeaTypeInput!
    $condition: ModelIdeaTypeConditionInput
  ) {
    createIdeaType(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      templateAreas {
        items {
          id
          x
          y
          width
          height
          typeId
          templateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      templates {
        items {
          id
          templateID
          ideatypeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          ideatype {
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateIdeaType = /* GraphQL */ `
  mutation UpdateIdeaType(
    $input: UpdateIdeaTypeInput!
    $condition: ModelIdeaTypeConditionInput
  ) {
    updateIdeaType(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      templateAreas {
        items {
          id
          x
          y
          width
          height
          typeId
          templateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      templates {
        items {
          id
          templateID
          ideatypeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          ideatype {
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteIdeaType = /* GraphQL */ `
  mutation DeleteIdeaType(
    $input: DeleteIdeaTypeInput!
    $condition: ModelIdeaTypeConditionInput
  ) {
    deleteIdeaType(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      templateAreas {
        items {
          id
          x
          y
          width
          height
          typeId
          templateID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      templates {
        items {
          id
          templateID
          ideatypeID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          ideatype {
            id
            name
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createStage = /* GraphQL */ `
  mutation CreateStage(
    $input: CreateStageInput!
    $condition: ModelStageConditionInput
  ) {
    createStage(input: $input, condition: $condition) {
      id
      type
      name
      description
      duration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      templates {
        items {
          id
          templateID
          stageID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          stage {
            id
            type
            name
            description
            duration
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateStage = /* GraphQL */ `
  mutation UpdateStage(
    $input: UpdateStageInput!
    $condition: ModelStageConditionInput
  ) {
    updateStage(input: $input, condition: $condition) {
      id
      type
      name
      description
      duration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      templates {
        items {
          id
          templateID
          stageID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          stage {
            id
            type
            name
            description
            duration
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteStage = /* GraphQL */ `
  mutation DeleteStage(
    $input: DeleteStageInput!
    $condition: ModelStageConditionInput
  ) {
    deleteStage(input: $input, condition: $condition) {
      id
      type
      name
      description
      duration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      templates {
        items {
          id
          templateID
          stageID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          template {
            id
            boardKey
            description
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          stage {
            id
            type
            name
            description
            duration
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createParticipantPreferences = /* GraphQL */ `
  mutation CreateParticipantPreferences(
    $input: CreateParticipantPreferencesInput!
    $condition: ModelParticipantPreferencesConditionInput
  ) {
    createParticipantPreferences(input: $input, condition: $condition) {
      id
      difficulty
      mood
      surpriseMe
      ritualID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateParticipantPreferences = /* GraphQL */ `
  mutation UpdateParticipantPreferences(
    $input: UpdateParticipantPreferencesInput!
    $condition: ModelParticipantPreferencesConditionInput
  ) {
    updateParticipantPreferences(input: $input, condition: $condition) {
      id
      difficulty
      mood
      surpriseMe
      ritualID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteParticipantPreferences = /* GraphQL */ `
  mutation DeleteParticipantPreferences(
    $input: DeleteParticipantPreferencesInput!
    $condition: ModelParticipantPreferencesConditionInput
  ) {
    deleteParticipantPreferences(input: $input, condition: $condition) {
      id
      difficulty
      mood
      surpriseMe
      ritualID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      miroUserId
      stickyColor
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      startedRituals {
        items {
          id
          stage
          name
          date
          timeFrame
          groupSize
          frameId
          templateId
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          actionItems {
            nextToken
            startedAt
          }
          votes {
            nextToken
            startedAt
          }
          ideas {
            nextToken
            startedAt
          }
          participantPreferences {
            nextToken
            startedAt
          }
          persons {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      assignedActionItems {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ideas {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          votes {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      visitedRituals {
        items {
          id
          personID
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          ritual {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          person {
            id
            miroUserId
            stickyColor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      miroUserId
      stickyColor
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      startedRituals {
        items {
          id
          stage
          name
          date
          timeFrame
          groupSize
          frameId
          templateId
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          actionItems {
            nextToken
            startedAt
          }
          votes {
            nextToken
            startedAt
          }
          ideas {
            nextToken
            startedAt
          }
          participantPreferences {
            nextToken
            startedAt
          }
          persons {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      assignedActionItems {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ideas {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          votes {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      visitedRituals {
        items {
          id
          personID
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          ritual {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          person {
            id
            miroUserId
            stickyColor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      miroUserId
      stickyColor
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      startedRituals {
        items {
          id
          stage
          name
          date
          timeFrame
          groupSize
          frameId
          templateId
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          actionItems {
            nextToken
            startedAt
          }
          votes {
            nextToken
            startedAt
          }
          ideas {
            nextToken
            startedAt
          }
          participantPreferences {
            nextToken
            startedAt
          }
          persons {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      assignedActionItems {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      votes {
        items {
          id
          ideaId
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ideas {
        items {
          id
          text
          ritualID
          personID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          votes {
            nextToken
            startedAt
          }
        }
        nextToken
        startedAt
      }
      visitedRituals {
        items {
          id
          personID
          ritualID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          ritual {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          person {
            id
            miroUserId
            stickyColor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTemplateStage = /* GraphQL */ `
  mutation CreateTemplateStage(
    $input: CreateTemplateStageInput!
    $condition: ModelTemplateStageConditionInput
  ) {
    createTemplateStage(input: $input, condition: $condition) {
      id
      templateID
      stageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      template {
        id
        boardKey
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        rituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        areas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        stages {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideaTypes {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      stage {
        id
        type
        name
        description
        duration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        templates {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTemplateStage = /* GraphQL */ `
  mutation UpdateTemplateStage(
    $input: UpdateTemplateStageInput!
    $condition: ModelTemplateStageConditionInput
  ) {
    updateTemplateStage(input: $input, condition: $condition) {
      id
      templateID
      stageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      template {
        id
        boardKey
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        rituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        areas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        stages {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideaTypes {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      stage {
        id
        type
        name
        description
        duration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        templates {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTemplateStage = /* GraphQL */ `
  mutation DeleteTemplateStage(
    $input: DeleteTemplateStageInput!
    $condition: ModelTemplateStageConditionInput
  ) {
    deleteTemplateStage(input: $input, condition: $condition) {
      id
      templateID
      stageID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      template {
        id
        boardKey
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        rituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        areas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        stages {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideaTypes {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      stage {
        id
        type
        name
        description
        duration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        templates {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTemplateIdeaType = /* GraphQL */ `
  mutation CreateTemplateIdeaType(
    $input: CreateTemplateIdeaTypeInput!
    $condition: ModelTemplateIdeaTypeConditionInput
  ) {
    createTemplateIdeaType(input: $input, condition: $condition) {
      id
      templateID
      ideatypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      template {
        id
        boardKey
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        rituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        areas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        stages {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideaTypes {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      ideatype {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        templateAreas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        templates {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTemplateIdeaType = /* GraphQL */ `
  mutation UpdateTemplateIdeaType(
    $input: UpdateTemplateIdeaTypeInput!
    $condition: ModelTemplateIdeaTypeConditionInput
  ) {
    updateTemplateIdeaType(input: $input, condition: $condition) {
      id
      templateID
      ideatypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      template {
        id
        boardKey
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        rituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        areas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        stages {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideaTypes {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      ideatype {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        templateAreas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        templates {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTemplateIdeaType = /* GraphQL */ `
  mutation DeleteTemplateIdeaType(
    $input: DeleteTemplateIdeaTypeInput!
    $condition: ModelTemplateIdeaTypeConditionInput
  ) {
    deleteTemplateIdeaType(input: $input, condition: $condition) {
      id
      templateID
      ideatypeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      template {
        id
        boardKey
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        rituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        areas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        stages {
          items {
            id
            templateID
            stageID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideaTypes {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      ideatype {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        templateAreas {
          items {
            id
            x
            y
            width
            height
            typeId
            templateID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        templates {
          items {
            id
            templateID
            ideatypeID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createPersonRitual = /* GraphQL */ `
  mutation CreatePersonRitual(
    $input: CreatePersonRitualInput!
    $condition: ModelPersonRitualConditionInput
  ) {
    createPersonRitual(input: $input, condition: $condition) {
      id
      personID
      ritualID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ritual {
        id
        stage
        name
        date
        timeFrame
        groupSize
        frameId
        templateId
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        actionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        participantPreferences {
          items {
            id
            difficulty
            mood
            surpriseMe
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        persons {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      person {
        id
        miroUserId
        stickyColor
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        startedRituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        assignedActionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        visitedRituals {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updatePersonRitual = /* GraphQL */ `
  mutation UpdatePersonRitual(
    $input: UpdatePersonRitualInput!
    $condition: ModelPersonRitualConditionInput
  ) {
    updatePersonRitual(input: $input, condition: $condition) {
      id
      personID
      ritualID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ritual {
        id
        stage
        name
        date
        timeFrame
        groupSize
        frameId
        templateId
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        actionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        participantPreferences {
          items {
            id
            difficulty
            mood
            surpriseMe
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        persons {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      person {
        id
        miroUserId
        stickyColor
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        startedRituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        assignedActionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        visitedRituals {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deletePersonRitual = /* GraphQL */ `
  mutation DeletePersonRitual(
    $input: DeletePersonRitualInput!
    $condition: ModelPersonRitualConditionInput
  ) {
    deletePersonRitual(input: $input, condition: $condition) {
      id
      personID
      ritualID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ritual {
        id
        stage
        name
        date
        timeFrame
        groupSize
        frameId
        templateId
        personID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        actionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        participantPreferences {
          items {
            id
            difficulty
            mood
            surpriseMe
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        persons {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
      person {
        id
        miroUserId
        stickyColor
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        startedRituals {
          items {
            id
            stage
            name
            date
            timeFrame
            groupSize
            frameId
            templateId
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        assignedActionItems {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        votes {
          items {
            id
            ideaId
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        ideas {
          items {
            id
            text
            ritualID
            personID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        visitedRituals {
          items {
            id
            personID
            ritualID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
