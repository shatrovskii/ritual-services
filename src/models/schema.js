export const schema = {
    "models": {
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
                "DECITION",
                "CLOSING"
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
        "TimeFrame": {
            "name": "TimeFrame",
            "values": [
                "ID",
                "SHORT",
                "NORMAL",
                "EXTENDED",
                "LARGE"
            ]
        }
    },
    "nonModels": {},
    "version": "c9e73d13850dc7494a87073f9442b34e"
};