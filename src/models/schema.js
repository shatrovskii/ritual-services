export const schema = {
    "models": {
        "PatchedRitualBoard": {
            "name": "PatchedRitualBoard",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "boardKey": {
                    "name": "boardKey",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "patchedRitual": {
                    "name": "patchedRitual",
                    "isArray": false,
                    "type": {
                        "model": "PatchedRitual"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "patchedRitualBoardPatchedRitualId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "PatchedRitualBoards",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PatchedRitual": {
            "name": "PatchedRitual",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "stage": {
                    "name": "stage",
                    "isArray": true,
                    "type": {
                        "enum": "StageType"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true
                }
            },
            "syncable": true,
            "pluralName": "PatchedRituals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RetroBoard": {
            "name": "RetroBoard",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "boardKey": {
                    "name": "boardKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "activeRitual": {
                    "name": "activeRitual",
                    "isArray": false,
                    "type": {
                        "model": "Ritual"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "retroBoardActiveRitualId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "RetroBoards",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Ritual": {
            "name": "Ritual",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "stage": {
                    "name": "stage",
                    "isArray": false,
                    "type": {
                        "enum": "StageType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "timeFrame": {
                    "name": "timeFrame",
                    "isArray": false,
                    "type": {
                        "enum": "TimeFrame"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "groupSize": {
                    "name": "groupSize",
                    "isArray": false,
                    "type": {
                        "enum": "GroupSize"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "frameId": {
                    "name": "frameId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "participantPreferences": {
                    "name": "participantPreferences",
                    "isArray": true,
                    "type": {
                        "model": "ParticipantPreferences"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ritualID"
                    }
                },
                "templateId": {
                    "name": "templateId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ideas": {
                    "name": "ideas",
                    "isArray": true,
                    "type": {
                        "model": "Idea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ritualID"
                    }
                },
                "votes": {
                    "name": "votes",
                    "isArray": true,
                    "type": {
                        "model": "Vote"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ritualID"
                    }
                },
                "actionItems": {
                    "name": "actionItems",
                    "isArray": true,
                    "type": {
                        "model": "ActionItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ritualID"
                    }
                },
                "personID": {
                    "name": "personID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "persons": {
                    "name": "persons",
                    "isArray": true,
                    "type": {
                        "model": "PersonRitual"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ritual"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Rituals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTemplate",
                        "fields": [
                            "templateId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPerson",
                        "fields": [
                            "personID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ParticipantPreferences": {
            "name": "ParticipantPreferences",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "difficulty": {
                    "name": "difficulty",
                    "isArray": false,
                    "type": {
                        "enum": "Difficulty"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "mood": {
                    "name": "mood",
                    "isArray": false,
                    "type": {
                        "enum": "Mood"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "surpriseMe": {
                    "name": "surpriseMe",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ritualID": {
                    "name": "ritualID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ParticipantPreferences",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRitual",
                        "fields": [
                            "ritualID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Idea": {
            "name": "Idea",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "text": {
                    "name": "text",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "votes": {
                    "name": "votes",
                    "isArray": true,
                    "type": {
                        "model": "Vote"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ideaId"
                    }
                },
                "ritualID": {
                    "name": "ritualID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "personID": {
                    "name": "personID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Ideas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRitual",
                        "fields": [
                            "ritualID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPerson",
                        "fields": [
                            "personID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Vote": {
            "name": "Vote",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ideaId": {
                    "name": "ideaId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ritualID": {
                    "name": "ritualID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "personID": {
                    "name": "personID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Votes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byIdea",
                        "fields": [
                            "ideaId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRitual",
                        "fields": [
                            "ritualID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPerson",
                        "fields": [
                            "personID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ActionItem": {
            "name": "ActionItem",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "text": {
                    "name": "text",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ritualID": {
                    "name": "ritualID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "personID": {
                    "name": "personID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ActionItems",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRitual",
                        "fields": [
                            "ritualID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPerson",
                        "fields": [
                            "personID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PersonRitual": {
            "name": "PersonRitual",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "person": {
                    "name": "person",
                    "isArray": false,
                    "type": {
                        "model": "Person"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "personID"
                    }
                },
                "ritual": {
                    "name": "ritual",
                    "isArray": false,
                    "type": {
                        "model": "Ritual"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "ritualID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "PersonRituals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPerson",
                        "fields": [
                            "personID",
                            "ritualID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRitual",
                        "fields": [
                            "ritualID",
                            "personID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Person": {
            "name": "Person",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "miroUserId": {
                    "name": "miroUserId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "stickyColor": {
                    "name": "stickyColor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedRituals": {
                    "name": "startedRituals",
                    "isArray": true,
                    "type": {
                        "model": "Ritual"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "personID"
                    }
                },
                "visitedRituals": {
                    "name": "visitedRituals",
                    "isArray": true,
                    "type": {
                        "model": "PersonRitual"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "person"
                    }
                },
                "assignedActionItems": {
                    "name": "assignedActionItems",
                    "isArray": true,
                    "type": {
                        "model": "ActionItem"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "personID"
                    }
                },
                "votes": {
                    "name": "votes",
                    "isArray": true,
                    "type": {
                        "model": "Vote"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "personID"
                    }
                },
                "ideas": {
                    "name": "ideas",
                    "isArray": true,
                    "type": {
                        "model": "Idea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "personID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "People",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Template": {
            "name": "Template",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "boardKey": {
                    "name": "boardKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "stages": {
                    "name": "stages",
                    "isArray": true,
                    "type": {
                        "model": "TemplateStage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "template"
                    }
                },
                "ideaTypes": {
                    "name": "ideaTypes",
                    "isArray": true,
                    "type": {
                        "model": "TemplateIdeaType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "template"
                    }
                },
                "areas": {
                    "name": "areas",
                    "isArray": true,
                    "type": {
                        "model": "TemplateArea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "templateID"
                    }
                },
                "rituals": {
                    "name": "rituals",
                    "isArray": true,
                    "type": {
                        "model": "Ritual"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "templateId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Templates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TemplateStage": {
            "name": "TemplateStage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "template": {
                    "name": "template",
                    "isArray": false,
                    "type": {
                        "model": "Template"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "templateID"
                    }
                },
                "stage": {
                    "name": "stage",
                    "isArray": false,
                    "type": {
                        "model": "Stage"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "stageID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "TemplateStages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTemplate",
                        "fields": [
                            "templateID",
                            "stageID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byStage",
                        "fields": [
                            "stageID",
                            "templateID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Stage": {
            "name": "Stage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "StageType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "templates": {
                    "name": "templates",
                    "isArray": true,
                    "type": {
                        "model": "TemplateStage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "stage"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Stages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TemplateIdeaType": {
            "name": "TemplateIdeaType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "template": {
                    "name": "template",
                    "isArray": false,
                    "type": {
                        "model": "Template"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "templateID"
                    }
                },
                "ideatype": {
                    "name": "ideatype",
                    "isArray": false,
                    "type": {
                        "model": "IdeaType"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "ideatypeID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "TemplateIdeaTypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTemplate",
                        "fields": [
                            "templateID",
                            "ideatypeID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byIdeaType",
                        "fields": [
                            "ideatypeID",
                            "templateID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "IdeaType": {
            "name": "IdeaType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "templateAreas": {
                    "name": "templateAreas",
                    "isArray": true,
                    "type": {
                        "model": "TemplateArea"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "typeId"
                    }
                },
                "templates": {
                    "name": "templates",
                    "isArray": true,
                    "type": {
                        "model": "TemplateIdeaType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "ideatype"
                    }
                }
            },
            "syncable": true,
            "pluralName": "IdeaTypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TemplateArea": {
            "name": "TemplateArea",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "x": {
                    "name": "x",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "y": {
                    "name": "y",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "width": {
                    "name": "width",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "height": {
                    "name": "height",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "typeId": {
                    "name": "typeId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "templateID": {
                    "name": "templateID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "TemplateAreas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byIdeaType",
                        "fields": [
                            "typeId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTemplate",
                        "fields": [
                            "templateID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "StageType": {
            "name": "StageType",
            "values": [
                "ID",
                "SETUP",
                "PREVIEW",
                "GATHERING",
                "DECISION",
                "CLOSING"
            ]
        },
        "TimeFrame": {
            "name": "TimeFrame",
            "values": [
                "ID",
                "SHORT",
                "NORMAL",
                "EXTENDED",
                "LARGE"
            ]
        },
        "GroupSize": {
            "name": "GroupSize",
            "values": [
                "ID",
                "SMALL",
                "MEDIUM",
                "LARGE"
            ]
        },
        "Difficulty": {
            "name": "Difficulty",
            "values": [
                "ID",
                "EASY",
                "WHATEVER",
                "HARD"
            ]
        },
        "Mood": {
            "name": "Mood",
            "values": [
                "ID",
                "OVERWHELMED",
                "LOWENERGY",
                "BALANCED",
                "HIGHENERGY",
                "EXCITED"
            ]
        }
    },
    "nonModels": {},
    "version": "5923dca19e19abbb0b2bda602f9b902c"
};