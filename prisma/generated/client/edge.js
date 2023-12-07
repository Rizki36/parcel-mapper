
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BranchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  branchCode: 'branchCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CourierScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  branchId: 'branchId',
  updatedAt: 'updatedAt'
};

exports.Prisma.BranchAdminScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  branchId: 'branchId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CentralAdminScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ParcelScalarFieldEnum = {
  id: 'id',
  recipientName: 'recipientName',
  recipientAddress: 'recipientAddress',
  status: 'status',
  longitude: 'longitude',
  latitude: 'latitude',
  courierId: 'courierId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ParcelStatus = exports.$Enums.ParcelStatus = {
  ON_THE_WAY: 'ON_THE_WAY',
  DELIVERED: 'DELIVERED',
  PENDING: 'PENDING'
};

exports.Prisma.ModelName = {
  User: 'User',
  Branch: 'Branch',
  Courier: 'Courier',
  BranchAdmin: 'BranchAdmin',
  CentralAdmin: 'CentralAdmin',
  Parcel: 'Parcel'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/fitra/Documents/GitHub/skripsi/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiUE9TVEdSRVNfUFJJU01BX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJQT1NUR1JFU19VUkxfTk9OX1BPT0xJTkciKSAvLyB1c2VzIGEgZGlyZWN0IGNvbm5lY3Rpb24KfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgIFN0cmluZyAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgbmFtZSAgICAgICAgIFN0cmluZz8KICBlbWFpbCAgICAgICAgU3RyaW5nICAgICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICBTdHJpbmcKICByb2xlICAgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICBEYXRlVGltZSAgICAgICBAdXBkYXRlZEF0CiAgQ291cmllciAgICAgIENvdXJpZXJbXQogIEJyYW5jaEFkbWluICBCcmFuY2hBZG1pbltdCiAgQ2VudHJhbEFkbWluIENlbnRyYWxBZG1pbltdCn0KCm1vZGVsIEJyYW5jaCB7CiAgaWQgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIG5hbWUgICAgICAgIFN0cmluZwogIGJyYW5jaENvZGUgIFN0cmluZwogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgICAgICBAdXBkYXRlZEF0CiAgQ291cmllciAgICAgQ291cmllcltdCiAgQnJhbmNoQWRtaW4gQnJhbmNoQWRtaW5bXQp9Cgptb2RlbCBDb3VyaWVyIHsKICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICB1c2VySWQgICAgU3RyaW5nCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIGJyYW5jaElkICBTdHJpbmcKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdAogIHVzZXIgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicmFuY2ggICAgQnJhbmNoICAgQHJlbGF0aW9uKGZpZWxkczogW2JyYW5jaElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBQYXJjZWwgICAgUGFyY2VsW10KfQoKbW9kZWwgQnJhbmNoQWRtaW4gewogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHVzZXJJZCAgICBTdHJpbmcKICBicmFuY2hJZCAgU3RyaW5nCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0CiAgdXNlciAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJyYW5jaCAgICBCcmFuY2ggICBAcmVsYXRpb24oZmllbGRzOiBbYnJhbmNoSWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cgptb2RlbCBDZW50cmFsQWRtaW4gewogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIHVzZXJJZCAgICBTdHJpbmcKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQKICB1c2VyICAgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIFBhcmNlbCB7CiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICByZWNpcGllbnROYW1lICAgIFN0cmluZwogIHJlY2lwaWVudEFkZHJlc3MgU3RyaW5nCiAgc3RhdHVzICAgICAgICAgICBQYXJjZWxTdGF0dXMKICBsb25naXR1ZGUgICAgICAgIEZsb2F0CiAgbGF0aXR1ZGUgICAgICAgICBGbG9hdAogIGNvdXJpZXJJZCAgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgQHVwZGF0ZWRBdAogIGNvdXJpZXIgICAgICAgICAgQ291cmllciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjb3VyaWVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9CgplbnVtIFBhcmNlbFN0YXR1cyB7CiAgT05fVEhFX1dBWQogIERFTElWRVJFRAogIFBFTkRJTkcKfQo=",
  "inlineSchemaHash": "e9f7fb9d7135bfce537ec9daa0386ba4625d052b7a80021c922391ed3c17535d"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Courier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Courier\",\"relationName\":\"CourierToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BranchAdmin\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BranchAdmin\",\"relationName\":\"BranchAdminToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CentralAdmin\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CentralAdmin\",\"relationName\":\"CentralAdminToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Branch\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Courier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Courier\",\"relationName\":\"BranchToCourier\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BranchAdmin\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BranchAdmin\",\"relationName\":\"BranchToBranchAdmin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Courier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CourierToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Branch\",\"relationName\":\"BranchToCourier\",\"relationFromFields\":[\"branchId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Parcel\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Parcel\",\"relationName\":\"CourierToParcel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BranchAdmin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BranchAdminToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Branch\",\"relationName\":\"BranchToBranchAdmin\",\"relationFromFields\":[\"branchId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CentralAdmin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CentralAdminToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Parcel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipientName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipientAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParcelStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"courier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Courier\",\"relationName\":\"CourierToParcel\",\"relationFromFields\":[\"courierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ParcelStatus\":{\"values\":[{\"name\":\"ON_THE_WAY\",\"dbName\":null},{\"name\":\"DELIVERED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

