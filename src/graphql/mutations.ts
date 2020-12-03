/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
export const createSimpleTest = /* GraphQL */ `
  mutation CreateSimpleTest(
    $input: CreateSimpleTestInput!
    $condition: ModelSimpleTestConditionInput
  ) {
    createSimpleTest(input: $input, condition: $condition) {
      id
      S3_link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSimpleTest = /* GraphQL */ `
  mutation UpdateSimpleTest(
    $input: UpdateSimpleTestInput!
    $condition: ModelSimpleTestConditionInput
  ) {
    updateSimpleTest(input: $input, condition: $condition) {
      id
      S3_link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSimpleTest = /* GraphQL */ `
  mutation DeleteSimpleTest(
    $input: DeleteSimpleTestInput!
    $condition: ModelSimpleTestConditionInput
  ) {
    deleteSimpleTest(input: $input, condition: $condition) {
      id
      S3_link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSimpleTest2 = /* GraphQL */ `
  mutation CreateSimpleTest2(
    $input: CreateSimpleTest2Input!
    $condition: ModelSimpleTest2ConditionInput
  ) {
    createSimpleTest2(input: $input, condition: $condition) {
      id
      S3_link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSimpleTest2 = /* GraphQL */ `
  mutation UpdateSimpleTest2(
    $input: UpdateSimpleTest2Input!
    $condition: ModelSimpleTest2ConditionInput
  ) {
    updateSimpleTest2(input: $input, condition: $condition) {
      id
      S3_link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSimpleTest2 = /* GraphQL */ `
  mutation DeleteSimpleTest2(
    $input: DeleteSimpleTest2Input!
    $condition: ModelSimpleTest2ConditionInput
  ) {
    deleteSimpleTest2(input: $input, condition: $condition) {
      id
      S3_link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
