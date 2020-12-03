/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRetroBoard = /* GraphQL */ `
  subscription OnCreateRetroBoard {
    onCreateRetroBoard {
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
export const onUpdateRetroBoard = /* GraphQL */ `
  subscription OnUpdateRetroBoard {
    onUpdateRetroBoard {
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
export const onDeleteRetroBoard = /* GraphQL */ `
  subscription OnDeleteRetroBoard {
    onDeleteRetroBoard {
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
export const onCreateRitual = /* GraphQL */ `
  subscription OnCreateRitual {
    onCreateRitual {
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
export const onUpdateRitual = /* GraphQL */ `
  subscription OnUpdateRitual {
    onUpdateRitual {
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
export const onDeleteRitual = /* GraphQL */ `
  subscription OnDeleteRitual {
    onDeleteRitual {
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
export const onCreateActionItem = /* GraphQL */ `
  subscription OnCreateActionItem {
    onCreateActionItem {
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
export const onUpdateActionItem = /* GraphQL */ `
  subscription OnUpdateActionItem {
    onUpdateActionItem {
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
export const onDeleteActionItem = /* GraphQL */ `
  subscription OnDeleteActionItem {
    onDeleteActionItem {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote {
    onCreateVote {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote {
    onUpdateVote {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote {
    onDeleteVote {
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
export const onCreateIdea = /* GraphQL */ `
  subscription OnCreateIdea {
    onCreateIdea {
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
export const onUpdateIdea = /* GraphQL */ `
  subscription OnUpdateIdea {
    onUpdateIdea {
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
export const onDeleteIdea = /* GraphQL */ `
  subscription OnDeleteIdea {
    onDeleteIdea {
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
      ritualID
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
      ritualID
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
      ritualID
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
export const onCreatePersonRitual = /* GraphQL */ `
  subscription OnCreatePersonRitual {
    onCreatePersonRitual {
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
export const onUpdatePersonRitual = /* GraphQL */ `
  subscription OnUpdatePersonRitual {
    onUpdatePersonRitual {
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
export const onDeletePersonRitual = /* GraphQL */ `
  subscription OnDeletePersonRitual {
    onDeletePersonRitual {
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
