/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate {
    onCreateTemplate {
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
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate {
    onUpdateTemplate {
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
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate {
    onDeleteTemplate {
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
export const onCreateTemplateArea = /* GraphQL */ `
  subscription OnCreateTemplateArea {
    onCreateTemplateArea {
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
export const onUpdateTemplateArea = /* GraphQL */ `
  subscription OnUpdateTemplateArea {
    onUpdateTemplateArea {
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
export const onDeleteTemplateArea = /* GraphQL */ `
  subscription OnDeleteTemplateArea {
    onDeleteTemplateArea {
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
export const onCreateIdeaType = /* GraphQL */ `
  subscription OnCreateIdeaType {
    onCreateIdeaType {
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
export const onUpdateIdeaType = /* GraphQL */ `
  subscription OnUpdateIdeaType {
    onUpdateIdeaType {
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
export const onDeleteIdeaType = /* GraphQL */ `
  subscription OnDeleteIdeaType {
    onDeleteIdeaType {
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
export const onCreateStage = /* GraphQL */ `
  subscription OnCreateStage {
    onCreateStage {
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
export const onUpdateStage = /* GraphQL */ `
  subscription OnUpdateStage {
    onUpdateStage {
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
export const onDeleteStage = /* GraphQL */ `
  subscription OnDeleteStage {
    onDeleteStage {
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
export const onCreateParticipantPreferences = /* GraphQL */ `
  subscription OnCreateParticipantPreferences {
    onCreateParticipantPreferences {
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
export const onUpdateParticipantPreferences = /* GraphQL */ `
  subscription OnUpdateParticipantPreferences {
    onUpdateParticipantPreferences {
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
export const onDeleteParticipantPreferences = /* GraphQL */ `
  subscription OnDeleteParticipantPreferences {
    onDeleteParticipantPreferences {
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
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
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
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
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
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
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
export const onCreateSimpleTest = /* GraphQL */ `
  subscription OnCreateSimpleTest {
    onCreateSimpleTest {
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
export const onUpdateSimpleTest = /* GraphQL */ `
  subscription OnUpdateSimpleTest {
    onUpdateSimpleTest {
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
export const onDeleteSimpleTest = /* GraphQL */ `
  subscription OnDeleteSimpleTest {
    onDeleteSimpleTest {
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
export const onCreateSimpleTest2 = /* GraphQL */ `
  subscription OnCreateSimpleTest2 {
    onCreateSimpleTest2 {
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
export const onUpdateSimpleTest2 = /* GraphQL */ `
  subscription OnUpdateSimpleTest2 {
    onUpdateSimpleTest2 {
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
export const onDeleteSimpleTest2 = /* GraphQL */ `
  subscription OnDeleteSimpleTest2 {
    onDeleteSimpleTest2 {
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
export const onCreateTemplateStage = /* GraphQL */ `
  subscription OnCreateTemplateStage {
    onCreateTemplateStage {
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
export const onUpdateTemplateStage = /* GraphQL */ `
  subscription OnUpdateTemplateStage {
    onUpdateTemplateStage {
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
export const onDeleteTemplateStage = /* GraphQL */ `
  subscription OnDeleteTemplateStage {
    onDeleteTemplateStage {
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
export const onCreateTemplateIdeaType = /* GraphQL */ `
  subscription OnCreateTemplateIdeaType {
    onCreateTemplateIdeaType {
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
export const onUpdateTemplateIdeaType = /* GraphQL */ `
  subscription OnUpdateTemplateIdeaType {
    onUpdateTemplateIdeaType {
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
export const onDeleteTemplateIdeaType = /* GraphQL */ `
  subscription OnDeleteTemplateIdeaType {
    onDeleteTemplateIdeaType {
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
