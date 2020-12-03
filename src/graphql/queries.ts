/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRetroBoard = /* GraphQL */ `
  query GetRetroBoard($id: ID!) {
    getRetroBoard(id: $id) {
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
export const listRetroBoards = /* GraphQL */ `
  query ListRetroBoards(
    $filter: ModelRetroBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRetroBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRetroBoards = /* GraphQL */ `
  query SyncRetroBoards(
    $filter: ModelRetroBoardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRetroBoards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const listRituals = /* GraphQL */ `
  query ListRituals(
    $filter: ModelRitualFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRituals(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const getRitual = /* GraphQL */ `
  query GetRitual($id: ID!) {
    getRitual(id: $id) {
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
export const syncRituals = /* GraphQL */ `
  query SyncRituals(
    $filter: ModelRitualFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRituals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getActionItem = /* GraphQL */ `
  query GetActionItem($id: ID!) {
    getActionItem(id: $id) {
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
export const listActionItems = /* GraphQL */ `
  query ListActionItems(
    $filter: ModelActionItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncActionItems = /* GraphQL */ `
  query SyncActionItems(
    $filter: ModelActionItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActionItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
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
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const syncVotes = /* GraphQL */ `
  query SyncVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
`;
export const getIdea = /* GraphQL */ `
  query GetIdea($id: ID!) {
    getIdea(id: $id) {
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
export const listIdeas = /* GraphQL */ `
  query ListIdeas(
    $filter: ModelIdeaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdeas(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncIdeas = /* GraphQL */ `
  query SyncIdeas(
    $filter: ModelIdeaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIdeas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
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
export const syncTemplates = /* GraphQL */ `
  query SyncTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTemplateArea = /* GraphQL */ `
  query GetTemplateArea($id: ID!) {
    getTemplateArea(id: $id) {
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
export const listTemplateAreas = /* GraphQL */ `
  query ListTemplateAreas(
    $filter: ModelTemplateAreaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplateAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncTemplateAreas = /* GraphQL */ `
  query SyncTemplateAreas(
    $filter: ModelTemplateAreaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTemplateAreas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const listIdeaTypes = /* GraphQL */ `
  query ListIdeaTypes(
    $filter: ModelIdeaTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdeaTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getIdeaType = /* GraphQL */ `
  query GetIdeaType($id: ID!) {
    getIdeaType(id: $id) {
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
export const syncIdeaTypes = /* GraphQL */ `
  query SyncIdeaTypes(
    $filter: ModelIdeaTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncIdeaTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listStages = /* GraphQL */ `
  query ListStages(
    $filter: ModelStageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStage = /* GraphQL */ `
  query GetStage($id: ID!) {
    getStage(id: $id) {
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
export const syncStages = /* GraphQL */ `
  query SyncStages(
    $filter: ModelStageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getParticipantPreferences = /* GraphQL */ `
  query GetParticipantPreferences($id: ID!) {
    getParticipantPreferences(id: $id) {
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
export const listParticipantPreferencess = /* GraphQL */ `
  query ListParticipantPreferencess(
    $filter: ModelParticipantPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipantPreferencess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const syncParticipantPreferences = /* GraphQL */ `
  query SyncParticipantPreferences(
    $filter: ModelParticipantPreferencesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParticipantPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
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
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTemplateStages = /* GraphQL */ `
  query SyncTemplateStages(
    $filter: ModelTemplateStageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTemplateStages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          rituals {
            nextToken
            startedAt
          }
          areas {
            nextToken
            startedAt
          }
          stages {
            nextToken
            startedAt
          }
          ideaTypes {
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
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTemplateIdeaTypes = /* GraphQL */ `
  query SyncTemplateIdeaTypes(
    $filter: ModelTemplateIdeaTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTemplateIdeaTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          rituals {
            nextToken
            startedAt
          }
          areas {
            nextToken
            startedAt
          }
          stages {
            nextToken
            startedAt
          }
          ideaTypes {
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
            nextToken
            startedAt
          }
          templates {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPersonRituals = /* GraphQL */ `
  query SyncPersonRituals(
    $filter: ModelPersonRitualFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPersonRituals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
            nextToken
            startedAt
          }
          assignedActionItems {
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
          visitedRituals {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
