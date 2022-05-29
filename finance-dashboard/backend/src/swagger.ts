export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Dashboard API",
      version: "1.0.0",
      description: "Information about all endpoints in Finance Dashboard application."
    },
    servers: [
      {
        url: "http://localhost:5000/api"
      }
    ],
    paths: {
      "/users": {
        "get": {
          "summary": "Returns the list of all users",
          "description": "Gets all users",
          "tags": [
            "Users"
          ],
          "responses": {
            "200": {
              "description": "Gets an array of users",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/users/{id}": {
        "get": {
          "summary": "Returns user",
          "description": "Gets a users",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "The user ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Gets a user",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "/goals": {
        "get": {
          "summary": "Returns the list of all goals",
          "description": "Gets all goals",
          "tags": [
            "Goals"
          ],
          "responses": {
            "200": {
              "description": "Gets an array of goals",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Goal"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a goal.",
          "tags": [
            "Goals"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "number"
                    },
                    "date": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Creates a goal",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Goal"
                    }
                  }
                }
              }
            }
          }
        },
        "put": {
          "summary": "Update a goal.",
          "tags": [
            "Goals"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "_id": {
                      "type": "string"
                    },
                    "title": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "number"
                    },
                    "date": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Updates a goal",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Goal"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/goals/{id}": {
        "get": {
          "summary": "Returns goal",
          "description": "Gets a goal",
          "tags": [
            "Goals"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "The goal ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Gets a goal",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Goal"
                    }
                  }
                }
              }
            }
          }
        },
        "delete": {
          "summary": "Delete goal",
          "description": "Delete a goal",
          "tags": [
            "Goals"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "The goal ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Gets a goal",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Goal"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/transactions": {
        "get": {
          "summary": "Returns the list of all transactions",
          "description": "Gets all transactions",
          "tags": [
            "Transactions"
          ],
          "responses": {
            "200": {
              "description": "Gets an array of transactions",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Transactions"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a transaction.",
          "tags": [
            "Transactions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "reciever": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "number"
                    },
                    "date": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Creates a transaction",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Transactions"
                    }
                  }
                }
              }
            }
          }
        },
        "put": {
          "summary": "Update a transaction.",
          "tags": [
            "Transactions"
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "_id": {
                      "type": "string"
                    },
                    "reciever": {
                      "type": "string"
                    },
                    "amount": {
                      "type": "number"
                    },
                    "date": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Updates a transaction",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Transactions"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/transactions/{id}": {
        "get": {
          "summary": "Returns transaction",
          "description": "Gets a transaction",
          "tags": [
            "Transactions"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "The transaction ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Gets a transaction",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Transactions"
                    }
                  }
                }
              }
            }
          }
        },
        "delete": {
          "summary": "Delete transaction",
          "description": "Delete transaction",
          "tags": [
            "Transactions"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "The transaction ID",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Gets a transaction",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Transactions"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      "schemas": {
        "User": {
          "properties": {
            "_id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "Goal": {
          "properties": {
            "_id": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "amount": {
              "type": "number"
            },
            "date": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        },
        "Transactions": {
          "properties": {
            "_id": {
              "type": "string"
            },
            "reciever": {
              "type": "string"
            },
            "amount": {
              "type": "number"
            },
            "date": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        }
      }
    },
    tags: [
      {
        "name": "Users",
        "description": "Working with users"
      },
      {
        "name": "Goals",
        "description": "Working with goals"
      },
      {
        "name": "Transactions",
        "description": "Working with transactions"
      }
    ]
},
apis: ["./routes/api/*.ts"]
}
