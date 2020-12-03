/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      }
      nextToken
      startedAt
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getSimpleTest = /* GraphQL */ `
  query GetSimpleTest($id: ID!) {
    getSimpleTest(id: $id) {
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
export const listSimpleTests = /* GraphQL */ `
  query ListSimpleTests(
    $filter: ModelSimpleTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimpleTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        S3_link
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
export const syncSimpleTests = /* GraphQL */ `
  query SyncSimpleTests(
    $filter: ModelSimpleTestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSimpleTests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        S3_link
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
export const getSimpleTest2 = /* GraphQL */ `
  query GetSimpleTest2($id: ID!) {
    getSimpleTest2(id: $id) {
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
export const listSimpleTest2s = /* GraphQL */ `
  query ListSimpleTest2s(
    $filter: ModelSimpleTest2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSimpleTest2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        S3_link
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
export const syncSimpleTest2s = /* GraphQL */ `
  query SyncSimpleTest2s(
    $filter: ModelSimpleTest2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSimpleTest2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        S3_link
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
