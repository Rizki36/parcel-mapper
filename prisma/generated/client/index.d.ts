
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Courier
 * 
 */
export type Courier = $Result.DefaultSelection<Prisma.$CourierPayload>
/**
 * Model BranchAdmin
 * 
 */
export type BranchAdmin = $Result.DefaultSelection<Prisma.$BranchAdminPayload>
/**
 * Model CentralAdmin
 * 
 */
export type CentralAdmin = $Result.DefaultSelection<Prisma.$CentralAdminPayload>
/**
 * Model Parcel
 * 
 */
export type Parcel = $Result.DefaultSelection<Prisma.$ParcelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ParcelStatus: {
  PENDING: 'PENDING',
  ON_THE_WAY: 'ON_THE_WAY',
  DELIVERED: 'DELIVERED'
};

export type ParcelStatus = (typeof ParcelStatus)[keyof typeof ParcelStatus]

}

export type ParcelStatus = $Enums.ParcelStatus

export const ParcelStatus: typeof $Enums.ParcelStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs>;

  /**
   * `prisma.courier`: Exposes CRUD operations for the **Courier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couriers
    * const couriers = await prisma.courier.findMany()
    * ```
    */
  get courier(): Prisma.CourierDelegate<ExtArgs>;

  /**
   * `prisma.branchAdmin`: Exposes CRUD operations for the **BranchAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BranchAdmins
    * const branchAdmins = await prisma.branchAdmin.findMany()
    * ```
    */
  get branchAdmin(): Prisma.BranchAdminDelegate<ExtArgs>;

  /**
   * `prisma.centralAdmin`: Exposes CRUD operations for the **CentralAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CentralAdmins
    * const centralAdmins = await prisma.centralAdmin.findMany()
    * ```
    */
  get centralAdmin(): Prisma.CentralAdminDelegate<ExtArgs>;

  /**
   * `prisma.parcel`: Exposes CRUD operations for the **Parcel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcels
    * const parcels = await prisma.parcel.findMany()
    * ```
    */
  get parcel(): Prisma.ParcelDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Branch: 'Branch',
    Courier: 'Courier',
    BranchAdmin: 'BranchAdmin',
    CentralAdmin: 'CentralAdmin',
    Parcel: 'Parcel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'branch' | 'courier' | 'branchAdmin' | 'centralAdmin' | 'parcel'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>,
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Courier: {
        payload: Prisma.$CourierPayload<ExtArgs>
        fields: Prisma.CourierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findFirst: {
            args: Prisma.CourierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findMany: {
            args: Prisma.CourierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          create: {
            args: Prisma.CourierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          createMany: {
            args: Prisma.CourierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          update: {
            args: Prisma.CourierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          deleteMany: {
            args: Prisma.CourierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          aggregate: {
            args: Prisma.CourierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourier>
          }
          groupBy: {
            args: Prisma.CourierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourierGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourierCountArgs<ExtArgs>,
            result: $Utils.Optional<CourierCountAggregateOutputType> | number
          }
        }
      }
      BranchAdmin: {
        payload: Prisma.$BranchAdminPayload<ExtArgs>
        fields: Prisma.BranchAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchAdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchAdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>
          }
          findFirst: {
            args: Prisma.BranchAdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchAdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>
          }
          findMany: {
            args: Prisma.BranchAdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>[]
          }
          create: {
            args: Prisma.BranchAdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>
          }
          createMany: {
            args: Prisma.BranchAdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BranchAdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>
          }
          update: {
            args: Prisma.BranchAdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>
          }
          deleteMany: {
            args: Prisma.BranchAdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BranchAdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BranchAdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchAdminPayload>
          }
          aggregate: {
            args: Prisma.BranchAdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBranchAdmin>
          }
          groupBy: {
            args: Prisma.BranchAdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BranchAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchAdminCountArgs<ExtArgs>,
            result: $Utils.Optional<BranchAdminCountAggregateOutputType> | number
          }
        }
      }
      CentralAdmin: {
        payload: Prisma.$CentralAdminPayload<ExtArgs>
        fields: Prisma.CentralAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CentralAdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CentralAdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>
          }
          findFirst: {
            args: Prisma.CentralAdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CentralAdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>
          }
          findMany: {
            args: Prisma.CentralAdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>[]
          }
          create: {
            args: Prisma.CentralAdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>
          }
          createMany: {
            args: Prisma.CentralAdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CentralAdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>
          }
          update: {
            args: Prisma.CentralAdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>
          }
          deleteMany: {
            args: Prisma.CentralAdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CentralAdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CentralAdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CentralAdminPayload>
          }
          aggregate: {
            args: Prisma.CentralAdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCentralAdmin>
          }
          groupBy: {
            args: Prisma.CentralAdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CentralAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.CentralAdminCountArgs<ExtArgs>,
            result: $Utils.Optional<CentralAdminCountAggregateOutputType> | number
          }
        }
      }
      Parcel: {
        payload: Prisma.$ParcelPayload<ExtArgs>
        fields: Prisma.ParcelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findFirst: {
            args: Prisma.ParcelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          findMany: {
            args: Prisma.ParcelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>[]
          }
          create: {
            args: Prisma.ParcelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          createMany: {
            args: Prisma.ParcelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParcelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          update: {
            args: Prisma.ParcelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          deleteMany: {
            args: Prisma.ParcelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParcelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParcelPayload>
          }
          aggregate: {
            args: Prisma.ParcelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParcel>
          }
          groupBy: {
            args: Prisma.ParcelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParcelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelCountArgs<ExtArgs>,
            result: $Utils.Optional<ParcelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Courier: number
    BranchAdmin: number
    CentralAdmin: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courier?: boolean | UserCountOutputTypeCountCourierArgs
    BranchAdmin?: boolean | UserCountOutputTypeCountBranchAdminArgs
    CentralAdmin?: boolean | UserCountOutputTypeCountCentralAdminArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBranchAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchAdminWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCentralAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentralAdminWhereInput
  }



  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    Courier: number
    BranchAdmin: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courier?: boolean | BranchCountOutputTypeCountCourierArgs
    BranchAdmin?: boolean | BranchCountOutputTypeCountBranchAdminArgs
  }

  // Custom InputTypes

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountCourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
  }


  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountBranchAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchAdminWhereInput
  }



  /**
   * Count Type CourierCountOutputType
   */

  export type CourierCountOutputType = {
    Parcel: number
  }

  export type CourierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parcel?: boolean | CourierCountOutputTypeCountParcelArgs
  }

  // Custom InputTypes

  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierCountOutputType
     */
    select?: CourierCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeCountParcelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Courier?: boolean | User$CourierArgs<ExtArgs>
    BranchAdmin?: boolean | User$BranchAdminArgs<ExtArgs>
    CentralAdmin?: boolean | User$CentralAdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courier?: boolean | User$CourierArgs<ExtArgs>
    BranchAdmin?: boolean | User$BranchAdminArgs<ExtArgs>
    CentralAdmin?: boolean | User$CentralAdminArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Courier: Prisma.$CourierPayload<ExtArgs>[]
      BranchAdmin: Prisma.$BranchAdminPayload<ExtArgs>[]
      CentralAdmin: Prisma.$CentralAdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Courier<T extends User$CourierArgs<ExtArgs> = {}>(args?: Subset<T, User$CourierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'> | Null>;

    BranchAdmin<T extends User$BranchAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$BranchAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findMany'> | Null>;

    CentralAdmin<T extends User$CentralAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$CentralAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Courier
   */
  export type User$CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    cursor?: CourierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * User.BranchAdmin
   */
  export type User$BranchAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    where?: BranchAdminWhereInput
    orderBy?: BranchAdminOrderByWithRelationInput | BranchAdminOrderByWithRelationInput[]
    cursor?: BranchAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchAdminScalarFieldEnum | BranchAdminScalarFieldEnum[]
  }


  /**
   * User.CentralAdmin
   */
  export type User$CentralAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    where?: CentralAdminWhereInput
    orderBy?: CentralAdminOrderByWithRelationInput | CentralAdminOrderByWithRelationInput[]
    cursor?: CentralAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CentralAdminScalarFieldEnum | CentralAdminScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    branchCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    branchCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    branchCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    branchCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    branchCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    branchCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    branchCode: string
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branchCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Courier?: boolean | Branch$CourierArgs<ExtArgs>
    BranchAdmin?: boolean | Branch$BranchAdminArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    branchCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Courier?: boolean | Branch$CourierArgs<ExtArgs>
    BranchAdmin?: boolean | Branch$BranchAdminArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      Courier: Prisma.$CourierPayload<ExtArgs>[]
      BranchAdmin: Prisma.$BranchAdminPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      branchCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }


  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BranchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Branch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BranchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BranchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
    **/
    create<T extends BranchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchCreateArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Branches.
     *     @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     *     @example
     *     // Create many Branches
     *     const branch = await prisma.branch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BranchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
    **/
    delete<T extends BranchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BranchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BranchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BranchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
    **/
    upsert<T extends BranchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Courier<T extends Branch$CourierArgs<ExtArgs> = {}>(args?: Subset<T, Branch$CourierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'> | Null>;

    BranchAdmin<T extends Branch$BranchAdminArgs<ExtArgs> = {}>(args?: Subset<T, Branch$BranchAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Branch model
   */ 
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly branchCode: FieldRef<"Branch", 'String'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }


  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
  }


  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }


  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
  }


  /**
   * Branch.Courier
   */
  export type Branch$CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    cursor?: CourierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Branch.BranchAdmin
   */
  export type Branch$BranchAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    where?: BranchAdminWhereInput
    orderBy?: BranchAdminOrderByWithRelationInput | BranchAdminOrderByWithRelationInput[]
    cursor?: BranchAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchAdminScalarFieldEnum | BranchAdminScalarFieldEnum[]
  }


  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
  }



  /**
   * Model Courier
   */

  export type AggregateCourier = {
    _count: CourierCountAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  export type CourierMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourierCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourierMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourierMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourierCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courier to aggregate.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couriers
    **/
    _count?: true | CourierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourierMaxAggregateInputType
  }

  export type GetCourierAggregateType<T extends CourierAggregateArgs> = {
        [P in keyof T & keyof AggregateCourier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourier[P]>
      : GetScalarType<T[P], AggregateCourier[P]>
  }




  export type CourierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithAggregationInput | CourierOrderByWithAggregationInput[]
    by: CourierScalarFieldEnum[] | CourierScalarFieldEnum
    having?: CourierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourierCountAggregateInputType | true
    _min?: CourierMinAggregateInputType
    _max?: CourierMaxAggregateInputType
  }

  export type CourierGroupByOutputType = {
    id: string
    name: string
    userId: string | null
    branchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourierCountAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  type GetCourierGroupByPayload<T extends CourierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourierGroupByOutputType[P]>
            : GetScalarType<T[P], CourierGroupByOutputType[P]>
        }
      >
    >


  export type CourierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Courier$userArgs<ExtArgs>
    branch?: boolean | Courier$branchArgs<ExtArgs>
    Parcel?: boolean | Courier$ParcelArgs<ExtArgs>
    _count?: boolean | CourierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Courier$userArgs<ExtArgs>
    branch?: boolean | Courier$branchArgs<ExtArgs>
    Parcel?: boolean | Courier$ParcelArgs<ExtArgs>
    _count?: boolean | CourierCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CourierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courier"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      branch: Prisma.$BranchPayload<ExtArgs> | null
      Parcel: Prisma.$ParcelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string | null
      branchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courier"]>
    composites: {}
  }


  type CourierGetPayload<S extends boolean | null | undefined | CourierDefaultArgs> = $Result.GetResult<Prisma.$CourierPayload, S>

  type CourierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourierFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CourierCountAggregateInputType | true
    }

  export interface CourierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courier'], meta: { name: 'Courier' } }
    /**
     * Find zero or one Courier that matches the filter.
     * @param {CourierFindUniqueArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourierFindUniqueArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Courier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourierFindUniqueOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Courier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindFirstArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Courier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Couriers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couriers
     * const couriers = await prisma.courier.findMany()
     * 
     * // Get first 10 Couriers
     * const couriers = await prisma.courier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courierWithIdOnly = await prisma.courier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Courier.
     * @param {CourierCreateArgs} args - Arguments to create a Courier.
     * @example
     * // Create one Courier
     * const Courier = await prisma.courier.create({
     *   data: {
     *     // ... data to create a Courier
     *   }
     * })
     * 
    **/
    create<T extends CourierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourierCreateArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Couriers.
     *     @param {CourierCreateManyArgs} args - Arguments to create many Couriers.
     *     @example
     *     // Create many Couriers
     *     const courier = await prisma.courier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Courier.
     * @param {CourierDeleteArgs} args - Arguments to delete one Courier.
     * @example
     * // Delete one Courier
     * const Courier = await prisma.courier.delete({
     *   where: {
     *     // ... filter to delete one Courier
     *   }
     * })
     * 
    **/
    delete<T extends CourierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourierDeleteArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Courier.
     * @param {CourierUpdateArgs} args - Arguments to update one Courier.
     * @example
     * // Update one Courier
     * const courier = await prisma.courier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourierUpdateArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Couriers.
     * @param {CourierDeleteManyArgs} args - Arguments to filter Couriers to delete.
     * @example
     * // Delete a few Couriers
     * const { count } = await prisma.courier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couriers
     * const courier = await prisma.courier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courier.
     * @param {CourierUpsertArgs} args - Arguments to update or create a Courier.
     * @example
     * // Update or create a Courier
     * const courier = await prisma.courier.upsert({
     *   create: {
     *     // ... data to create a Courier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courier we want to update
     *   }
     * })
    **/
    upsert<T extends CourierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourierUpsertArgs<ExtArgs>>
    ): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierCountArgs} args - Arguments to filter Couriers to count.
     * @example
     * // Count the number of Couriers
     * const count = await prisma.courier.count({
     *   where: {
     *     // ... the filter for the Couriers we want to count
     *   }
     * })
    **/
    count<T extends CourierCountArgs>(
      args?: Subset<T, CourierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourierAggregateArgs>(args: Subset<T, CourierAggregateArgs>): Prisma.PrismaPromise<GetCourierAggregateType<T>>

    /**
     * Group by Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourierGroupByArgs['orderBy'] }
        : { orderBy?: CourierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courier model
   */
  readonly fields: CourierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Courier$userArgs<ExtArgs> = {}>(args?: Subset<T, Courier$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    branch<T extends Courier$branchArgs<ExtArgs> = {}>(args?: Subset<T, Courier$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Parcel<T extends Courier$ParcelArgs<ExtArgs> = {}>(args?: Subset<T, Courier$ParcelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Courier model
   */ 
  interface CourierFieldRefs {
    readonly id: FieldRef<"Courier", 'String'>
    readonly name: FieldRef<"Courier", 'String'>
    readonly userId: FieldRef<"Courier", 'String'>
    readonly branchId: FieldRef<"Courier", 'String'>
    readonly createdAt: FieldRef<"Courier", 'DateTime'>
    readonly updatedAt: FieldRef<"Courier", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Courier findUnique
   */
  export type CourierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier findUniqueOrThrow
   */
  export type CourierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier findFirst
   */
  export type CourierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Courier findFirstOrThrow
   */
  export type CourierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Courier findMany
   */
  export type CourierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Couriers to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }


  /**
   * Courier create
   */
  export type CourierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to create a Courier.
     */
    data: XOR<CourierCreateInput, CourierUncheckedCreateInput>
  }


  /**
   * Courier createMany
   */
  export type CourierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couriers.
     */
    data: CourierCreateManyInput | CourierCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Courier update
   */
  export type CourierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to update a Courier.
     */
    data: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
    /**
     * Choose, which Courier to update.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier updateMany
   */
  export type CourierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couriers.
     */
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyInput>
    /**
     * Filter which Couriers to update
     */
    where?: CourierWhereInput
  }


  /**
   * Courier upsert
   */
  export type CourierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The filter to search for the Courier to update in case it exists.
     */
    where: CourierWhereUniqueInput
    /**
     * In case the Courier found by the `where` argument doesn't exist, create a new Courier with this data.
     */
    create: XOR<CourierCreateInput, CourierUncheckedCreateInput>
    /**
     * In case the Courier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
  }


  /**
   * Courier delete
   */
  export type CourierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter which Courier to delete.
     */
    where: CourierWhereUniqueInput
  }


  /**
   * Courier deleteMany
   */
  export type CourierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couriers to delete
     */
    where?: CourierWhereInput
  }


  /**
   * Courier.user
   */
  export type Courier$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Courier.branch
   */
  export type Courier$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }


  /**
   * Courier.Parcel
   */
  export type Courier$ParcelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    cursor?: ParcelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }


  /**
   * Courier without action
   */
  export type CourierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
  }



  /**
   * Model BranchAdmin
   */

  export type AggregateBranchAdmin = {
    _count: BranchAdminCountAggregateOutputType | null
    _min: BranchAdminMinAggregateOutputType | null
    _max: BranchAdminMaxAggregateOutputType | null
  }

  export type BranchAdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchAdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchAdminCountAggregateOutputType = {
    id: number
    userId: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchAdminMinAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchAdminMaxAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchAdminCountAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchAdmin to aggregate.
     */
    where?: BranchAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchAdmins to fetch.
     */
    orderBy?: BranchAdminOrderByWithRelationInput | BranchAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BranchAdmins
    **/
    _count?: true | BranchAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchAdminMaxAggregateInputType
  }

  export type GetBranchAdminAggregateType<T extends BranchAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateBranchAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranchAdmin[P]>
      : GetScalarType<T[P], AggregateBranchAdmin[P]>
  }




  export type BranchAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchAdminWhereInput
    orderBy?: BranchAdminOrderByWithAggregationInput | BranchAdminOrderByWithAggregationInput[]
    by: BranchAdminScalarFieldEnum[] | BranchAdminScalarFieldEnum
    having?: BranchAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchAdminCountAggregateInputType | true
    _min?: BranchAdminMinAggregateInputType
    _max?: BranchAdminMaxAggregateInputType
  }

  export type BranchAdminGroupByOutputType = {
    id: string
    userId: string
    branchId: string
    createdAt: Date
    updatedAt: Date
    _count: BranchAdminCountAggregateOutputType | null
    _min: BranchAdminMinAggregateOutputType | null
    _max: BranchAdminMaxAggregateOutputType | null
  }

  type GetBranchAdminGroupByPayload<T extends BranchAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchAdminGroupByOutputType[P]>
            : GetScalarType<T[P], BranchAdminGroupByOutputType[P]>
        }
      >
    >


  export type BranchAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchAdmin"]>

  export type BranchAdminSelectScalar = {
    id?: boolean
    userId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }


  export type $BranchAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BranchAdmin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      branchId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branchAdmin"]>
    composites: {}
  }


  type BranchAdminGetPayload<S extends boolean | null | undefined | BranchAdminDefaultArgs> = $Result.GetResult<Prisma.$BranchAdminPayload, S>

  type BranchAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchAdminFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BranchAdminCountAggregateInputType | true
    }

  export interface BranchAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BranchAdmin'], meta: { name: 'BranchAdmin' } }
    /**
     * Find zero or one BranchAdmin that matches the filter.
     * @param {BranchAdminFindUniqueArgs} args - Arguments to find a BranchAdmin
     * @example
     * // Get one BranchAdmin
     * const branchAdmin = await prisma.branchAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BranchAdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BranchAdminFindUniqueArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BranchAdmin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BranchAdminFindUniqueOrThrowArgs} args - Arguments to find a BranchAdmin
     * @example
     * // Get one BranchAdmin
     * const branchAdmin = await prisma.branchAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BranchAdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchAdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BranchAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminFindFirstArgs} args - Arguments to find a BranchAdmin
     * @example
     * // Get one BranchAdmin
     * const branchAdmin = await prisma.branchAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BranchAdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchAdminFindFirstArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BranchAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminFindFirstOrThrowArgs} args - Arguments to find a BranchAdmin
     * @example
     * // Get one BranchAdmin
     * const branchAdmin = await prisma.branchAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BranchAdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchAdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BranchAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchAdmins
     * const branchAdmins = await prisma.branchAdmin.findMany()
     * 
     * // Get first 10 BranchAdmins
     * const branchAdmins = await prisma.branchAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchAdminWithIdOnly = await prisma.branchAdmin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BranchAdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchAdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BranchAdmin.
     * @param {BranchAdminCreateArgs} args - Arguments to create a BranchAdmin.
     * @example
     * // Create one BranchAdmin
     * const BranchAdmin = await prisma.branchAdmin.create({
     *   data: {
     *     // ... data to create a BranchAdmin
     *   }
     * })
     * 
    **/
    create<T extends BranchAdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchAdminCreateArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BranchAdmins.
     *     @param {BranchAdminCreateManyArgs} args - Arguments to create many BranchAdmins.
     *     @example
     *     // Create many BranchAdmins
     *     const branchAdmin = await prisma.branchAdmin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BranchAdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchAdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BranchAdmin.
     * @param {BranchAdminDeleteArgs} args - Arguments to delete one BranchAdmin.
     * @example
     * // Delete one BranchAdmin
     * const BranchAdmin = await prisma.branchAdmin.delete({
     *   where: {
     *     // ... filter to delete one BranchAdmin
     *   }
     * })
     * 
    **/
    delete<T extends BranchAdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BranchAdminDeleteArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BranchAdmin.
     * @param {BranchAdminUpdateArgs} args - Arguments to update one BranchAdmin.
     * @example
     * // Update one BranchAdmin
     * const branchAdmin = await prisma.branchAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BranchAdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchAdminUpdateArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BranchAdmins.
     * @param {BranchAdminDeleteManyArgs} args - Arguments to filter BranchAdmins to delete.
     * @example
     * // Delete a few BranchAdmins
     * const { count } = await prisma.branchAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BranchAdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchAdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchAdmins
     * const branchAdmin = await prisma.branchAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BranchAdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BranchAdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BranchAdmin.
     * @param {BranchAdminUpsertArgs} args - Arguments to update or create a BranchAdmin.
     * @example
     * // Update or create a BranchAdmin
     * const branchAdmin = await prisma.branchAdmin.upsert({
     *   create: {
     *     // ... data to create a BranchAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchAdmin we want to update
     *   }
     * })
    **/
    upsert<T extends BranchAdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BranchAdminUpsertArgs<ExtArgs>>
    ): Prisma__BranchAdminClient<$Result.GetResult<Prisma.$BranchAdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BranchAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminCountArgs} args - Arguments to filter BranchAdmins to count.
     * @example
     * // Count the number of BranchAdmins
     * const count = await prisma.branchAdmin.count({
     *   where: {
     *     // ... the filter for the BranchAdmins we want to count
     *   }
     * })
    **/
    count<T extends BranchAdminCountArgs>(
      args?: Subset<T, BranchAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BranchAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAdminAggregateArgs>(args: Subset<T, BranchAdminAggregateArgs>): Prisma.PrismaPromise<GetBranchAdminAggregateType<T>>

    /**
     * Group by BranchAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchAdminGroupByArgs['orderBy'] }
        : { orderBy?: BranchAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BranchAdmin model
   */
  readonly fields: BranchAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BranchAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BranchAdmin model
   */ 
  interface BranchAdminFieldRefs {
    readonly id: FieldRef<"BranchAdmin", 'String'>
    readonly userId: FieldRef<"BranchAdmin", 'String'>
    readonly branchId: FieldRef<"BranchAdmin", 'String'>
    readonly createdAt: FieldRef<"BranchAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"BranchAdmin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BranchAdmin findUnique
   */
  export type BranchAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * Filter, which BranchAdmin to fetch.
     */
    where: BranchAdminWhereUniqueInput
  }


  /**
   * BranchAdmin findUniqueOrThrow
   */
  export type BranchAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * Filter, which BranchAdmin to fetch.
     */
    where: BranchAdminWhereUniqueInput
  }


  /**
   * BranchAdmin findFirst
   */
  export type BranchAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * Filter, which BranchAdmin to fetch.
     */
    where?: BranchAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchAdmins to fetch.
     */
    orderBy?: BranchAdminOrderByWithRelationInput | BranchAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchAdmins.
     */
    cursor?: BranchAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchAdmins.
     */
    distinct?: BranchAdminScalarFieldEnum | BranchAdminScalarFieldEnum[]
  }


  /**
   * BranchAdmin findFirstOrThrow
   */
  export type BranchAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * Filter, which BranchAdmin to fetch.
     */
    where?: BranchAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchAdmins to fetch.
     */
    orderBy?: BranchAdminOrderByWithRelationInput | BranchAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchAdmins.
     */
    cursor?: BranchAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchAdmins.
     */
    distinct?: BranchAdminScalarFieldEnum | BranchAdminScalarFieldEnum[]
  }


  /**
   * BranchAdmin findMany
   */
  export type BranchAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * Filter, which BranchAdmins to fetch.
     */
    where?: BranchAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchAdmins to fetch.
     */
    orderBy?: BranchAdminOrderByWithRelationInput | BranchAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BranchAdmins.
     */
    cursor?: BranchAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchAdmins.
     */
    skip?: number
    distinct?: BranchAdminScalarFieldEnum | BranchAdminScalarFieldEnum[]
  }


  /**
   * BranchAdmin create
   */
  export type BranchAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a BranchAdmin.
     */
    data: XOR<BranchAdminCreateInput, BranchAdminUncheckedCreateInput>
  }


  /**
   * BranchAdmin createMany
   */
  export type BranchAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BranchAdmins.
     */
    data: BranchAdminCreateManyInput | BranchAdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BranchAdmin update
   */
  export type BranchAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a BranchAdmin.
     */
    data: XOR<BranchAdminUpdateInput, BranchAdminUncheckedUpdateInput>
    /**
     * Choose, which BranchAdmin to update.
     */
    where: BranchAdminWhereUniqueInput
  }


  /**
   * BranchAdmin updateMany
   */
  export type BranchAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BranchAdmins.
     */
    data: XOR<BranchAdminUpdateManyMutationInput, BranchAdminUncheckedUpdateManyInput>
    /**
     * Filter which BranchAdmins to update
     */
    where?: BranchAdminWhereInput
  }


  /**
   * BranchAdmin upsert
   */
  export type BranchAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the BranchAdmin to update in case it exists.
     */
    where: BranchAdminWhereUniqueInput
    /**
     * In case the BranchAdmin found by the `where` argument doesn't exist, create a new BranchAdmin with this data.
     */
    create: XOR<BranchAdminCreateInput, BranchAdminUncheckedCreateInput>
    /**
     * In case the BranchAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchAdminUpdateInput, BranchAdminUncheckedUpdateInput>
  }


  /**
   * BranchAdmin delete
   */
  export type BranchAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
    /**
     * Filter which BranchAdmin to delete.
     */
    where: BranchAdminWhereUniqueInput
  }


  /**
   * BranchAdmin deleteMany
   */
  export type BranchAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchAdmins to delete
     */
    where?: BranchAdminWhereInput
  }


  /**
   * BranchAdmin without action
   */
  export type BranchAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchAdmin
     */
    select?: BranchAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchAdminInclude<ExtArgs> | null
  }



  /**
   * Model CentralAdmin
   */

  export type AggregateCentralAdmin = {
    _count: CentralAdminCountAggregateOutputType | null
    _min: CentralAdminMinAggregateOutputType | null
    _max: CentralAdminMaxAggregateOutputType | null
  }

  export type CentralAdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CentralAdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CentralAdminCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CentralAdminMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CentralAdminMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CentralAdminCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CentralAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentralAdmin to aggregate.
     */
    where?: CentralAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralAdmins to fetch.
     */
    orderBy?: CentralAdminOrderByWithRelationInput | CentralAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CentralAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CentralAdmins
    **/
    _count?: true | CentralAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentralAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentralAdminMaxAggregateInputType
  }

  export type GetCentralAdminAggregateType<T extends CentralAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateCentralAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentralAdmin[P]>
      : GetScalarType<T[P], AggregateCentralAdmin[P]>
  }




  export type CentralAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentralAdminWhereInput
    orderBy?: CentralAdminOrderByWithAggregationInput | CentralAdminOrderByWithAggregationInput[]
    by: CentralAdminScalarFieldEnum[] | CentralAdminScalarFieldEnum
    having?: CentralAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentralAdminCountAggregateInputType | true
    _min?: CentralAdminMinAggregateInputType
    _max?: CentralAdminMaxAggregateInputType
  }

  export type CentralAdminGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CentralAdminCountAggregateOutputType | null
    _min: CentralAdminMinAggregateOutputType | null
    _max: CentralAdminMaxAggregateOutputType | null
  }

  type GetCentralAdminGroupByPayload<T extends CentralAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentralAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentralAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentralAdminGroupByOutputType[P]>
            : GetScalarType<T[P], CentralAdminGroupByOutputType[P]>
        }
      >
    >


  export type CentralAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["centralAdmin"]>

  export type CentralAdminSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CentralAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CentralAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CentralAdmin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["centralAdmin"]>
    composites: {}
  }


  type CentralAdminGetPayload<S extends boolean | null | undefined | CentralAdminDefaultArgs> = $Result.GetResult<Prisma.$CentralAdminPayload, S>

  type CentralAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CentralAdminFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CentralAdminCountAggregateInputType | true
    }

  export interface CentralAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CentralAdmin'], meta: { name: 'CentralAdmin' } }
    /**
     * Find zero or one CentralAdmin that matches the filter.
     * @param {CentralAdminFindUniqueArgs} args - Arguments to find a CentralAdmin
     * @example
     * // Get one CentralAdmin
     * const centralAdmin = await prisma.centralAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CentralAdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CentralAdminFindUniqueArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CentralAdmin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CentralAdminFindUniqueOrThrowArgs} args - Arguments to find a CentralAdmin
     * @example
     * // Get one CentralAdmin
     * const centralAdmin = await prisma.centralAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CentralAdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CentralAdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CentralAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminFindFirstArgs} args - Arguments to find a CentralAdmin
     * @example
     * // Get one CentralAdmin
     * const centralAdmin = await prisma.centralAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CentralAdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CentralAdminFindFirstArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CentralAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminFindFirstOrThrowArgs} args - Arguments to find a CentralAdmin
     * @example
     * // Get one CentralAdmin
     * const centralAdmin = await prisma.centralAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CentralAdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CentralAdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CentralAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CentralAdmins
     * const centralAdmins = await prisma.centralAdmin.findMany()
     * 
     * // Get first 10 CentralAdmins
     * const centralAdmins = await prisma.centralAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centralAdminWithIdOnly = await prisma.centralAdmin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CentralAdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CentralAdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CentralAdmin.
     * @param {CentralAdminCreateArgs} args - Arguments to create a CentralAdmin.
     * @example
     * // Create one CentralAdmin
     * const CentralAdmin = await prisma.centralAdmin.create({
     *   data: {
     *     // ... data to create a CentralAdmin
     *   }
     * })
     * 
    **/
    create<T extends CentralAdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CentralAdminCreateArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CentralAdmins.
     *     @param {CentralAdminCreateManyArgs} args - Arguments to create many CentralAdmins.
     *     @example
     *     // Create many CentralAdmins
     *     const centralAdmin = await prisma.centralAdmin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CentralAdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CentralAdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CentralAdmin.
     * @param {CentralAdminDeleteArgs} args - Arguments to delete one CentralAdmin.
     * @example
     * // Delete one CentralAdmin
     * const CentralAdmin = await prisma.centralAdmin.delete({
     *   where: {
     *     // ... filter to delete one CentralAdmin
     *   }
     * })
     * 
    **/
    delete<T extends CentralAdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CentralAdminDeleteArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CentralAdmin.
     * @param {CentralAdminUpdateArgs} args - Arguments to update one CentralAdmin.
     * @example
     * // Update one CentralAdmin
     * const centralAdmin = await prisma.centralAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CentralAdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CentralAdminUpdateArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CentralAdmins.
     * @param {CentralAdminDeleteManyArgs} args - Arguments to filter CentralAdmins to delete.
     * @example
     * // Delete a few CentralAdmins
     * const { count } = await prisma.centralAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CentralAdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CentralAdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CentralAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CentralAdmins
     * const centralAdmin = await prisma.centralAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CentralAdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CentralAdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CentralAdmin.
     * @param {CentralAdminUpsertArgs} args - Arguments to update or create a CentralAdmin.
     * @example
     * // Update or create a CentralAdmin
     * const centralAdmin = await prisma.centralAdmin.upsert({
     *   create: {
     *     // ... data to create a CentralAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CentralAdmin we want to update
     *   }
     * })
    **/
    upsert<T extends CentralAdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CentralAdminUpsertArgs<ExtArgs>>
    ): Prisma__CentralAdminClient<$Result.GetResult<Prisma.$CentralAdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CentralAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminCountArgs} args - Arguments to filter CentralAdmins to count.
     * @example
     * // Count the number of CentralAdmins
     * const count = await prisma.centralAdmin.count({
     *   where: {
     *     // ... the filter for the CentralAdmins we want to count
     *   }
     * })
    **/
    count<T extends CentralAdminCountArgs>(
      args?: Subset<T, CentralAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentralAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CentralAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CentralAdminAggregateArgs>(args: Subset<T, CentralAdminAggregateArgs>): Prisma.PrismaPromise<GetCentralAdminAggregateType<T>>

    /**
     * Group by CentralAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentralAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CentralAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CentralAdminGroupByArgs['orderBy'] }
        : { orderBy?: CentralAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CentralAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentralAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CentralAdmin model
   */
  readonly fields: CentralAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CentralAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CentralAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CentralAdmin model
   */ 
  interface CentralAdminFieldRefs {
    readonly id: FieldRef<"CentralAdmin", 'String'>
    readonly userId: FieldRef<"CentralAdmin", 'String'>
    readonly createdAt: FieldRef<"CentralAdmin", 'DateTime'>
    readonly updatedAt: FieldRef<"CentralAdmin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CentralAdmin findUnique
   */
  export type CentralAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * Filter, which CentralAdmin to fetch.
     */
    where: CentralAdminWhereUniqueInput
  }


  /**
   * CentralAdmin findUniqueOrThrow
   */
  export type CentralAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * Filter, which CentralAdmin to fetch.
     */
    where: CentralAdminWhereUniqueInput
  }


  /**
   * CentralAdmin findFirst
   */
  export type CentralAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * Filter, which CentralAdmin to fetch.
     */
    where?: CentralAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralAdmins to fetch.
     */
    orderBy?: CentralAdminOrderByWithRelationInput | CentralAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentralAdmins.
     */
    cursor?: CentralAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentralAdmins.
     */
    distinct?: CentralAdminScalarFieldEnum | CentralAdminScalarFieldEnum[]
  }


  /**
   * CentralAdmin findFirstOrThrow
   */
  export type CentralAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * Filter, which CentralAdmin to fetch.
     */
    where?: CentralAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralAdmins to fetch.
     */
    orderBy?: CentralAdminOrderByWithRelationInput | CentralAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentralAdmins.
     */
    cursor?: CentralAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentralAdmins.
     */
    distinct?: CentralAdminScalarFieldEnum | CentralAdminScalarFieldEnum[]
  }


  /**
   * CentralAdmin findMany
   */
  export type CentralAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * Filter, which CentralAdmins to fetch.
     */
    where?: CentralAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentralAdmins to fetch.
     */
    orderBy?: CentralAdminOrderByWithRelationInput | CentralAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CentralAdmins.
     */
    cursor?: CentralAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentralAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentralAdmins.
     */
    skip?: number
    distinct?: CentralAdminScalarFieldEnum | CentralAdminScalarFieldEnum[]
  }


  /**
   * CentralAdmin create
   */
  export type CentralAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a CentralAdmin.
     */
    data: XOR<CentralAdminCreateInput, CentralAdminUncheckedCreateInput>
  }


  /**
   * CentralAdmin createMany
   */
  export type CentralAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CentralAdmins.
     */
    data: CentralAdminCreateManyInput | CentralAdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CentralAdmin update
   */
  export type CentralAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a CentralAdmin.
     */
    data: XOR<CentralAdminUpdateInput, CentralAdminUncheckedUpdateInput>
    /**
     * Choose, which CentralAdmin to update.
     */
    where: CentralAdminWhereUniqueInput
  }


  /**
   * CentralAdmin updateMany
   */
  export type CentralAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CentralAdmins.
     */
    data: XOR<CentralAdminUpdateManyMutationInput, CentralAdminUncheckedUpdateManyInput>
    /**
     * Filter which CentralAdmins to update
     */
    where?: CentralAdminWhereInput
  }


  /**
   * CentralAdmin upsert
   */
  export type CentralAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the CentralAdmin to update in case it exists.
     */
    where: CentralAdminWhereUniqueInput
    /**
     * In case the CentralAdmin found by the `where` argument doesn't exist, create a new CentralAdmin with this data.
     */
    create: XOR<CentralAdminCreateInput, CentralAdminUncheckedCreateInput>
    /**
     * In case the CentralAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CentralAdminUpdateInput, CentralAdminUncheckedUpdateInput>
  }


  /**
   * CentralAdmin delete
   */
  export type CentralAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
    /**
     * Filter which CentralAdmin to delete.
     */
    where: CentralAdminWhereUniqueInput
  }


  /**
   * CentralAdmin deleteMany
   */
  export type CentralAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentralAdmins to delete
     */
    where?: CentralAdminWhereInput
  }


  /**
   * CentralAdmin without action
   */
  export type CentralAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentralAdmin
     */
    select?: CentralAdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CentralAdminInclude<ExtArgs> | null
  }



  /**
   * Model Parcel
   */

  export type AggregateParcel = {
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  export type ParcelAvgAggregateOutputType = {
    longitude: number | null
    latitude: number | null
  }

  export type ParcelSumAggregateOutputType = {
    longitude: number | null
    latitude: number | null
  }

  export type ParcelMinAggregateOutputType = {
    id: string | null
    recipientName: string | null
    recipientAddress: string | null
    status: $Enums.ParcelStatus | null
    longitude: number | null
    latitude: number | null
    courierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelMaxAggregateOutputType = {
    id: string | null
    recipientName: string | null
    recipientAddress: string | null
    status: $Enums.ParcelStatus | null
    longitude: number | null
    latitude: number | null
    courierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelCountAggregateOutputType = {
    id: number
    recipientName: number
    recipientAddress: number
    status: number
    longitude: number
    latitude: number
    courierId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParcelAvgAggregateInputType = {
    longitude?: true
    latitude?: true
  }

  export type ParcelSumAggregateInputType = {
    longitude?: true
    latitude?: true
  }

  export type ParcelMinAggregateInputType = {
    id?: true
    recipientName?: true
    recipientAddress?: true
    status?: true
    longitude?: true
    latitude?: true
    courierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelMaxAggregateInputType = {
    id?: true
    recipientName?: true
    recipientAddress?: true
    status?: true
    longitude?: true
    latitude?: true
    courierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelCountAggregateInputType = {
    id?: true
    recipientName?: true
    recipientAddress?: true
    status?: true
    longitude?: true
    latitude?: true
    courierId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParcelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcel to aggregate.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcels
    **/
    _count?: true | ParcelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelMaxAggregateInputType
  }

  export type GetParcelAggregateType<T extends ParcelAggregateArgs> = {
        [P in keyof T & keyof AggregateParcel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcel[P]>
      : GetScalarType<T[P], AggregateParcel[P]>
  }




  export type ParcelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelWhereInput
    orderBy?: ParcelOrderByWithAggregationInput | ParcelOrderByWithAggregationInput[]
    by: ParcelScalarFieldEnum[] | ParcelScalarFieldEnum
    having?: ParcelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelCountAggregateInputType | true
    _avg?: ParcelAvgAggregateInputType
    _sum?: ParcelSumAggregateInputType
    _min?: ParcelMinAggregateInputType
    _max?: ParcelMaxAggregateInputType
  }

  export type ParcelGroupByOutputType = {
    id: string
    recipientName: string
    recipientAddress: string | null
    status: $Enums.ParcelStatus
    longitude: number | null
    latitude: number | null
    courierId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ParcelCountAggregateOutputType | null
    _avg: ParcelAvgAggregateOutputType | null
    _sum: ParcelSumAggregateOutputType | null
    _min: ParcelMinAggregateOutputType | null
    _max: ParcelMaxAggregateOutputType | null
  }

  type GetParcelGroupByPayload<T extends ParcelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelGroupByOutputType[P]>
        }
      >
    >


  export type ParcelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientName?: boolean
    recipientAddress?: boolean
    status?: boolean
    longitude?: boolean
    latitude?: boolean
    courierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courier?: boolean | Parcel$courierArgs<ExtArgs>
  }, ExtArgs["result"]["parcel"]>

  export type ParcelSelectScalar = {
    id?: boolean
    recipientName?: boolean
    recipientAddress?: boolean
    status?: boolean
    longitude?: boolean
    latitude?: boolean
    courierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParcelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courier?: boolean | Parcel$courierArgs<ExtArgs>
  }


  export type $ParcelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcel"
    objects: {
      courier: Prisma.$CourierPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipientName: string
      recipientAddress: string | null
      status: $Enums.ParcelStatus
      longitude: number | null
      latitude: number | null
      courierId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parcel"]>
    composites: {}
  }


  type ParcelGetPayload<S extends boolean | null | undefined | ParcelDefaultArgs> = $Result.GetResult<Prisma.$ParcelPayload, S>

  type ParcelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParcelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ParcelCountAggregateInputType | true
    }

  export interface ParcelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcel'], meta: { name: 'Parcel' } }
    /**
     * Find zero or one Parcel that matches the filter.
     * @param {ParcelFindUniqueArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParcelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParcelFindUniqueArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Parcel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParcelFindUniqueOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParcelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParcelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Parcel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParcelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParcelFindFirstArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Parcel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindFirstOrThrowArgs} args - Arguments to find a Parcel
     * @example
     * // Get one Parcel
     * const parcel = await prisma.parcel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParcelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParcelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcels
     * const parcels = await prisma.parcel.findMany()
     * 
     * // Get first 10 Parcels
     * const parcels = await prisma.parcel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelWithIdOnly = await prisma.parcel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParcelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParcelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Parcel.
     * @param {ParcelCreateArgs} args - Arguments to create a Parcel.
     * @example
     * // Create one Parcel
     * const Parcel = await prisma.parcel.create({
     *   data: {
     *     // ... data to create a Parcel
     *   }
     * })
     * 
    **/
    create<T extends ParcelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParcelCreateArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Parcels.
     *     @param {ParcelCreateManyArgs} args - Arguments to create many Parcels.
     *     @example
     *     // Create many Parcels
     *     const parcel = await prisma.parcel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParcelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParcelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parcel.
     * @param {ParcelDeleteArgs} args - Arguments to delete one Parcel.
     * @example
     * // Delete one Parcel
     * const Parcel = await prisma.parcel.delete({
     *   where: {
     *     // ... filter to delete one Parcel
     *   }
     * })
     * 
    **/
    delete<T extends ParcelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParcelDeleteArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Parcel.
     * @param {ParcelUpdateArgs} args - Arguments to update one Parcel.
     * @example
     * // Update one Parcel
     * const parcel = await prisma.parcel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParcelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParcelUpdateArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Parcels.
     * @param {ParcelDeleteManyArgs} args - Arguments to filter Parcels to delete.
     * @example
     * // Delete a few Parcels
     * const { count } = await prisma.parcel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParcelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParcelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcels
     * const parcel = await prisma.parcel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParcelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParcelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parcel.
     * @param {ParcelUpsertArgs} args - Arguments to update or create a Parcel.
     * @example
     * // Update or create a Parcel
     * const parcel = await prisma.parcel.upsert({
     *   create: {
     *     // ... data to create a Parcel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcel we want to update
     *   }
     * })
    **/
    upsert<T extends ParcelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParcelUpsertArgs<ExtArgs>>
    ): Prisma__ParcelClient<$Result.GetResult<Prisma.$ParcelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelCountArgs} args - Arguments to filter Parcels to count.
     * @example
     * // Count the number of Parcels
     * const count = await prisma.parcel.count({
     *   where: {
     *     // ... the filter for the Parcels we want to count
     *   }
     * })
    **/
    count<T extends ParcelCountArgs>(
      args?: Subset<T, ParcelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParcelAggregateArgs>(args: Subset<T, ParcelAggregateArgs>): Prisma.PrismaPromise<GetParcelAggregateType<T>>

    /**
     * Group by Parcel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParcelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelGroupByArgs['orderBy'] }
        : { orderBy?: ParcelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParcelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcel model
   */
  readonly fields: ParcelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    courier<T extends Parcel$courierArgs<ExtArgs> = {}>(args?: Subset<T, Parcel$courierArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Parcel model
   */ 
  interface ParcelFieldRefs {
    readonly id: FieldRef<"Parcel", 'String'>
    readonly recipientName: FieldRef<"Parcel", 'String'>
    readonly recipientAddress: FieldRef<"Parcel", 'String'>
    readonly status: FieldRef<"Parcel", 'ParcelStatus'>
    readonly longitude: FieldRef<"Parcel", 'Float'>
    readonly latitude: FieldRef<"Parcel", 'Float'>
    readonly courierId: FieldRef<"Parcel", 'String'>
    readonly createdAt: FieldRef<"Parcel", 'DateTime'>
    readonly updatedAt: FieldRef<"Parcel", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Parcel findUnique
   */
  export type ParcelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }


  /**
   * Parcel findUniqueOrThrow
   */
  export type ParcelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where: ParcelWhereUniqueInput
  }


  /**
   * Parcel findFirst
   */
  export type ParcelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }


  /**
   * Parcel findFirstOrThrow
   */
  export type ParcelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcel to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcels.
     */
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }


  /**
   * Parcel findMany
   */
  export type ParcelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter, which Parcels to fetch.
     */
    where?: ParcelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcels to fetch.
     */
    orderBy?: ParcelOrderByWithRelationInput | ParcelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcels.
     */
    cursor?: ParcelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcels.
     */
    skip?: number
    distinct?: ParcelScalarFieldEnum | ParcelScalarFieldEnum[]
  }


  /**
   * Parcel create
   */
  export type ParcelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcel.
     */
    data: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
  }


  /**
   * Parcel createMany
   */
  export type ParcelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcels.
     */
    data: ParcelCreateManyInput | ParcelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Parcel update
   */
  export type ParcelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcel.
     */
    data: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
    /**
     * Choose, which Parcel to update.
     */
    where: ParcelWhereUniqueInput
  }


  /**
   * Parcel updateMany
   */
  export type ParcelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcels.
     */
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyInput>
    /**
     * Filter which Parcels to update
     */
    where?: ParcelWhereInput
  }


  /**
   * Parcel upsert
   */
  export type ParcelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcel to update in case it exists.
     */
    where: ParcelWhereUniqueInput
    /**
     * In case the Parcel found by the `where` argument doesn't exist, create a new Parcel with this data.
     */
    create: XOR<ParcelCreateInput, ParcelUncheckedCreateInput>
    /**
     * In case the Parcel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelUpdateInput, ParcelUncheckedUpdateInput>
  }


  /**
   * Parcel delete
   */
  export type ParcelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
    /**
     * Filter which Parcel to delete.
     */
    where: ParcelWhereUniqueInput
  }


  /**
   * Parcel deleteMany
   */
  export type ParcelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcels to delete
     */
    where?: ParcelWhereInput
  }


  /**
   * Parcel.courier
   */
  export type Parcel$courierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
  }


  /**
   * Parcel without action
   */
  export type ParcelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcel
     */
    select?: ParcelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParcelInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branchCode: 'branchCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CourierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum]


  export const BranchAdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchAdminScalarFieldEnum = (typeof BranchAdminScalarFieldEnum)[keyof typeof BranchAdminScalarFieldEnum]


  export const CentralAdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CentralAdminScalarFieldEnum = (typeof CentralAdminScalarFieldEnum)[keyof typeof CentralAdminScalarFieldEnum]


  export const ParcelScalarFieldEnum: {
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

  export type ParcelScalarFieldEnum = (typeof ParcelScalarFieldEnum)[keyof typeof ParcelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ParcelStatus'
   */
  export type EnumParcelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParcelStatus'>
    


  /**
   * Reference to a field of type 'ParcelStatus[]'
   */
  export type ListEnumParcelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParcelStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Courier?: CourierListRelationFilter
    BranchAdmin?: BranchAdminListRelationFilter
    CentralAdmin?: CentralAdminListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Courier?: CourierOrderByRelationAggregateInput
    BranchAdmin?: BranchAdminOrderByRelationAggregateInput
    CentralAdmin?: CentralAdminOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Courier?: CourierListRelationFilter
    BranchAdmin?: BranchAdminListRelationFilter
    CentralAdmin?: CentralAdminListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    branchCode?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    Courier?: CourierListRelationFilter
    BranchAdmin?: BranchAdminListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branchCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Courier?: CourierOrderByRelationAggregateInput
    BranchAdmin?: BranchAdminOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    branchCode?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    Courier?: CourierListRelationFilter
    BranchAdmin?: BranchAdminListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branchCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    branchCode?: StringWithAggregatesFilter<"Branch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type CourierWhereInput = {
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    id?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    userId?: StringNullableFilter<"Courier"> | string | null
    branchId?: StringNullableFilter<"Courier"> | string | null
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    updatedAt?: DateTimeFilter<"Courier"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    Parcel?: ParcelListRelationFilter
  }

  export type CourierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    Parcel?: ParcelOrderByRelationAggregateInput
  }

  export type CourierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    name?: StringFilter<"Courier"> | string
    userId?: StringNullableFilter<"Courier"> | string | null
    branchId?: StringNullableFilter<"Courier"> | string | null
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    updatedAt?: DateTimeFilter<"Courier"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    Parcel?: ParcelListRelationFilter
  }, "id">

  export type CourierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourierCountOrderByAggregateInput
    _max?: CourierMaxOrderByAggregateInput
    _min?: CourierMinOrderByAggregateInput
  }

  export type CourierScalarWhereWithAggregatesInput = {
    AND?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    OR?: CourierScalarWhereWithAggregatesInput[]
    NOT?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courier"> | string
    name?: StringWithAggregatesFilter<"Courier"> | string
    userId?: StringNullableWithAggregatesFilter<"Courier"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"Courier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Courier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Courier"> | Date | string
  }

  export type BranchAdminWhereInput = {
    AND?: BranchAdminWhereInput | BranchAdminWhereInput[]
    OR?: BranchAdminWhereInput[]
    NOT?: BranchAdminWhereInput | BranchAdminWhereInput[]
    id?: StringFilter<"BranchAdmin"> | string
    userId?: StringFilter<"BranchAdmin"> | string
    branchId?: StringFilter<"BranchAdmin"> | string
    createdAt?: DateTimeFilter<"BranchAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"BranchAdmin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
  }

  export type BranchAdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type BranchAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchAdminWhereInput | BranchAdminWhereInput[]
    OR?: BranchAdminWhereInput[]
    NOT?: BranchAdminWhereInput | BranchAdminWhereInput[]
    userId?: StringFilter<"BranchAdmin"> | string
    branchId?: StringFilter<"BranchAdmin"> | string
    createdAt?: DateTimeFilter<"BranchAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"BranchAdmin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
  }, "id">

  export type BranchAdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchAdminCountOrderByAggregateInput
    _max?: BranchAdminMaxOrderByAggregateInput
    _min?: BranchAdminMinOrderByAggregateInput
  }

  export type BranchAdminScalarWhereWithAggregatesInput = {
    AND?: BranchAdminScalarWhereWithAggregatesInput | BranchAdminScalarWhereWithAggregatesInput[]
    OR?: BranchAdminScalarWhereWithAggregatesInput[]
    NOT?: BranchAdminScalarWhereWithAggregatesInput | BranchAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BranchAdmin"> | string
    userId?: StringWithAggregatesFilter<"BranchAdmin"> | string
    branchId?: StringWithAggregatesFilter<"BranchAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BranchAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BranchAdmin"> | Date | string
  }

  export type CentralAdminWhereInput = {
    AND?: CentralAdminWhereInput | CentralAdminWhereInput[]
    OR?: CentralAdminWhereInput[]
    NOT?: CentralAdminWhereInput | CentralAdminWhereInput[]
    id?: StringFilter<"CentralAdmin"> | string
    userId?: StringFilter<"CentralAdmin"> | string
    createdAt?: DateTimeFilter<"CentralAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"CentralAdmin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CentralAdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CentralAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CentralAdminWhereInput | CentralAdminWhereInput[]
    OR?: CentralAdminWhereInput[]
    NOT?: CentralAdminWhereInput | CentralAdminWhereInput[]
    userId?: StringFilter<"CentralAdmin"> | string
    createdAt?: DateTimeFilter<"CentralAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"CentralAdmin"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CentralAdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CentralAdminCountOrderByAggregateInput
    _max?: CentralAdminMaxOrderByAggregateInput
    _min?: CentralAdminMinOrderByAggregateInput
  }

  export type CentralAdminScalarWhereWithAggregatesInput = {
    AND?: CentralAdminScalarWhereWithAggregatesInput | CentralAdminScalarWhereWithAggregatesInput[]
    OR?: CentralAdminScalarWhereWithAggregatesInput[]
    NOT?: CentralAdminScalarWhereWithAggregatesInput | CentralAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CentralAdmin"> | string
    userId?: StringWithAggregatesFilter<"CentralAdmin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CentralAdmin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CentralAdmin"> | Date | string
  }

  export type ParcelWhereInput = {
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    id?: StringFilter<"Parcel"> | string
    recipientName?: StringFilter<"Parcel"> | string
    recipientAddress?: StringNullableFilter<"Parcel"> | string | null
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    longitude?: FloatNullableFilter<"Parcel"> | number | null
    latitude?: FloatNullableFilter<"Parcel"> | number | null
    courierId?: StringNullableFilter<"Parcel"> | string | null
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    courier?: XOR<CourierNullableRelationFilter, CourierWhereInput> | null
  }

  export type ParcelOrderByWithRelationInput = {
    id?: SortOrder
    recipientName?: SortOrder
    recipientAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    courierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courier?: CourierOrderByWithRelationInput
  }

  export type ParcelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParcelWhereInput | ParcelWhereInput[]
    OR?: ParcelWhereInput[]
    NOT?: ParcelWhereInput | ParcelWhereInput[]
    recipientName?: StringFilter<"Parcel"> | string
    recipientAddress?: StringNullableFilter<"Parcel"> | string | null
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    longitude?: FloatNullableFilter<"Parcel"> | number | null
    latitude?: FloatNullableFilter<"Parcel"> | number | null
    courierId?: StringNullableFilter<"Parcel"> | string | null
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
    courier?: XOR<CourierNullableRelationFilter, CourierWhereInput> | null
  }, "id">

  export type ParcelOrderByWithAggregationInput = {
    id?: SortOrder
    recipientName?: SortOrder
    recipientAddress?: SortOrderInput | SortOrder
    status?: SortOrder
    longitude?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    courierId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParcelCountOrderByAggregateInput
    _avg?: ParcelAvgOrderByAggregateInput
    _max?: ParcelMaxOrderByAggregateInput
    _min?: ParcelMinOrderByAggregateInput
    _sum?: ParcelSumOrderByAggregateInput
  }

  export type ParcelScalarWhereWithAggregatesInput = {
    AND?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    OR?: ParcelScalarWhereWithAggregatesInput[]
    NOT?: ParcelScalarWhereWithAggregatesInput | ParcelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parcel"> | string
    recipientName?: StringWithAggregatesFilter<"Parcel"> | string
    recipientAddress?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    status?: EnumParcelStatusWithAggregatesFilter<"Parcel"> | $Enums.ParcelStatus
    longitude?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    latitude?: FloatNullableWithAggregatesFilter<"Parcel"> | number | null
    courierId?: StringNullableWithAggregatesFilter<"Parcel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parcel"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierCreateNestedManyWithoutUserInput
    BranchAdmin?: BranchAdminCreateNestedManyWithoutUserInput
    CentralAdmin?: CentralAdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    BranchAdmin?: BranchAdminUncheckedCreateNestedManyWithoutUserInput
    CentralAdmin?: CentralAdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutUserNestedInput
    BranchAdmin?: BranchAdminUpdateManyWithoutUserNestedInput
    CentralAdmin?: CentralAdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    BranchAdmin?: BranchAdminUncheckedUpdateManyWithoutUserNestedInput
    CentralAdmin?: CentralAdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierCreateNestedManyWithoutBranchInput
    BranchAdmin?: BranchAdminCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutBranchInput
    BranchAdmin?: BranchAdminUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutBranchNestedInput
    BranchAdmin?: BranchAdminUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutBranchNestedInput
    BranchAdmin?: BranchAdminUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCourierInput
    branch?: BranchCreateNestedOneWithoutCourierInput
    Parcel?: ParcelCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateInput = {
    id?: string
    name: string
    userId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Parcel?: ParcelUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCourierNestedInput
    branch?: BranchUpdateOneWithoutCourierNestedInput
    Parcel?: ParcelUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parcel?: ParcelUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierCreateManyInput = {
    id?: string
    name: string
    userId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBranchAdminInput
    branch: BranchCreateNestedOneWithoutBranchAdminInput
  }

  export type BranchAdminUncheckedCreateInput = {
    id?: string
    userId: string
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBranchAdminNestedInput
    branch?: BranchUpdateOneRequiredWithoutBranchAdminNestedInput
  }

  export type BranchAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminCreateManyInput = {
    id?: string
    userId: string
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralAdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCentralAdminInput
  }

  export type CentralAdminUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCentralAdminNestedInput
  }

  export type CentralAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralAdminCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelCreateInput = {
    id?: string
    recipientName: string
    recipientAddress?: string | null
    status?: $Enums.ParcelStatus
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courier?: CourierCreateNestedOneWithoutParcelInput
  }

  export type ParcelUncheckedCreateInput = {
    id?: string
    recipientName: string
    recipientAddress?: string | null
    status?: $Enums.ParcelStatus
    longitude?: number | null
    latitude?: number | null
    courierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courier?: CourierUpdateOneWithoutParcelNestedInput
  }

  export type ParcelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelCreateManyInput = {
    id?: string
    recipientName: string
    recipientAddress?: string | null
    status?: $Enums.ParcelStatus
    longitude?: number | null
    latitude?: number | null
    courierId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    courierId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourierListRelationFilter = {
    every?: CourierWhereInput
    some?: CourierWhereInput
    none?: CourierWhereInput
  }

  export type BranchAdminListRelationFilter = {
    every?: BranchAdminWhereInput
    some?: BranchAdminWhereInput
    none?: BranchAdminWhereInput
  }

  export type CentralAdminListRelationFilter = {
    every?: CentralAdminWhereInput
    some?: CentralAdminWhereInput
    none?: CentralAdminWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CentralAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branchCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BranchNullableRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type ParcelListRelationFilter = {
    every?: ParcelWhereInput
    some?: ParcelWhereInput
    none?: ParcelWhereInput
  }

  export type ParcelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BranchRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type BranchAdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralAdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CentralAdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumParcelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusFilter<$PrismaModel> | $Enums.ParcelStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CourierNullableRelationFilter = {
    is?: CourierWhereInput | null
    isNot?: CourierWhereInput | null
  }

  export type ParcelCountOrderByAggregateInput = {
    id?: SortOrder
    recipientName?: SortOrder
    recipientAddress?: SortOrder
    status?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    courierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelAvgOrderByAggregateInput = {
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type ParcelMaxOrderByAggregateInput = {
    id?: SortOrder
    recipientName?: SortOrder
    recipientAddress?: SortOrder
    status?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    courierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelMinOrderByAggregateInput = {
    id?: SortOrder
    recipientName?: SortOrder
    recipientAddress?: SortOrder
    status?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    courierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelSumOrderByAggregateInput = {
    longitude?: SortOrder
    latitude?: SortOrder
  }

  export type EnumParcelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParcelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParcelStatusFilter<$PrismaModel>
    _max?: NestedEnumParcelStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CourierCreateNestedManyWithoutUserInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type BranchAdminCreateNestedManyWithoutUserInput = {
    create?: XOR<BranchAdminCreateWithoutUserInput, BranchAdminUncheckedCreateWithoutUserInput> | BranchAdminCreateWithoutUserInput[] | BranchAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutUserInput | BranchAdminCreateOrConnectWithoutUserInput[]
    createMany?: BranchAdminCreateManyUserInputEnvelope
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
  }

  export type CentralAdminCreateNestedManyWithoutUserInput = {
    create?: XOR<CentralAdminCreateWithoutUserInput, CentralAdminUncheckedCreateWithoutUserInput> | CentralAdminCreateWithoutUserInput[] | CentralAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CentralAdminCreateOrConnectWithoutUserInput | CentralAdminCreateOrConnectWithoutUserInput[]
    createMany?: CentralAdminCreateManyUserInputEnvelope
    connect?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
  }

  export type CourierUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type BranchAdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BranchAdminCreateWithoutUserInput, BranchAdminUncheckedCreateWithoutUserInput> | BranchAdminCreateWithoutUserInput[] | BranchAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutUserInput | BranchAdminCreateOrConnectWithoutUserInput[]
    createMany?: BranchAdminCreateManyUserInputEnvelope
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
  }

  export type CentralAdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CentralAdminCreateWithoutUserInput, CentralAdminUncheckedCreateWithoutUserInput> | CentralAdminCreateWithoutUserInput[] | CentralAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CentralAdminCreateOrConnectWithoutUserInput | CentralAdminCreateOrConnectWithoutUserInput[]
    createMany?: CentralAdminCreateManyUserInputEnvelope
    connect?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourierUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutUserInput | CourierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutUserInput | CourierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutUserInput | CourierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type BranchAdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<BranchAdminCreateWithoutUserInput, BranchAdminUncheckedCreateWithoutUserInput> | BranchAdminCreateWithoutUserInput[] | BranchAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutUserInput | BranchAdminCreateOrConnectWithoutUserInput[]
    upsert?: BranchAdminUpsertWithWhereUniqueWithoutUserInput | BranchAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BranchAdminCreateManyUserInputEnvelope
    set?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    disconnect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    delete?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    update?: BranchAdminUpdateWithWhereUniqueWithoutUserInput | BranchAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BranchAdminUpdateManyWithWhereWithoutUserInput | BranchAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BranchAdminScalarWhereInput | BranchAdminScalarWhereInput[]
  }

  export type CentralAdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<CentralAdminCreateWithoutUserInput, CentralAdminUncheckedCreateWithoutUserInput> | CentralAdminCreateWithoutUserInput[] | CentralAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CentralAdminCreateOrConnectWithoutUserInput | CentralAdminCreateOrConnectWithoutUserInput[]
    upsert?: CentralAdminUpsertWithWhereUniqueWithoutUserInput | CentralAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CentralAdminCreateManyUserInputEnvelope
    set?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    disconnect?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    delete?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    connect?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    update?: CentralAdminUpdateWithWhereUniqueWithoutUserInput | CentralAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CentralAdminUpdateManyWithWhereWithoutUserInput | CentralAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CentralAdminScalarWhereInput | CentralAdminScalarWhereInput[]
  }

  export type CourierUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput> | CourierCreateWithoutUserInput[] | CourierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutUserInput | CourierCreateOrConnectWithoutUserInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutUserInput | CourierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourierCreateManyUserInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutUserInput | CourierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutUserInput | CourierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type BranchAdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BranchAdminCreateWithoutUserInput, BranchAdminUncheckedCreateWithoutUserInput> | BranchAdminCreateWithoutUserInput[] | BranchAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutUserInput | BranchAdminCreateOrConnectWithoutUserInput[]
    upsert?: BranchAdminUpsertWithWhereUniqueWithoutUserInput | BranchAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BranchAdminCreateManyUserInputEnvelope
    set?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    disconnect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    delete?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    update?: BranchAdminUpdateWithWhereUniqueWithoutUserInput | BranchAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BranchAdminUpdateManyWithWhereWithoutUserInput | BranchAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BranchAdminScalarWhereInput | BranchAdminScalarWhereInput[]
  }

  export type CentralAdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CentralAdminCreateWithoutUserInput, CentralAdminUncheckedCreateWithoutUserInput> | CentralAdminCreateWithoutUserInput[] | CentralAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CentralAdminCreateOrConnectWithoutUserInput | CentralAdminCreateOrConnectWithoutUserInput[]
    upsert?: CentralAdminUpsertWithWhereUniqueWithoutUserInput | CentralAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CentralAdminCreateManyUserInputEnvelope
    set?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    disconnect?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    delete?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    connect?: CentralAdminWhereUniqueInput | CentralAdminWhereUniqueInput[]
    update?: CentralAdminUpdateWithWhereUniqueWithoutUserInput | CentralAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CentralAdminUpdateManyWithWhereWithoutUserInput | CentralAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CentralAdminScalarWhereInput | CentralAdminScalarWhereInput[]
  }

  export type CourierCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourierCreateWithoutBranchInput, CourierUncheckedCreateWithoutBranchInput> | CourierCreateWithoutBranchInput[] | CourierUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutBranchInput | CourierCreateOrConnectWithoutBranchInput[]
    createMany?: CourierCreateManyBranchInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type BranchAdminCreateNestedManyWithoutBranchInput = {
    create?: XOR<BranchAdminCreateWithoutBranchInput, BranchAdminUncheckedCreateWithoutBranchInput> | BranchAdminCreateWithoutBranchInput[] | BranchAdminUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutBranchInput | BranchAdminCreateOrConnectWithoutBranchInput[]
    createMany?: BranchAdminCreateManyBranchInputEnvelope
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
  }

  export type CourierUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourierCreateWithoutBranchInput, CourierUncheckedCreateWithoutBranchInput> | CourierCreateWithoutBranchInput[] | CourierUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutBranchInput | CourierCreateOrConnectWithoutBranchInput[]
    createMany?: CourierCreateManyBranchInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type BranchAdminUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<BranchAdminCreateWithoutBranchInput, BranchAdminUncheckedCreateWithoutBranchInput> | BranchAdminCreateWithoutBranchInput[] | BranchAdminUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutBranchInput | BranchAdminCreateOrConnectWithoutBranchInput[]
    createMany?: BranchAdminCreateManyBranchInputEnvelope
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
  }

  export type CourierUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CourierCreateWithoutBranchInput, CourierUncheckedCreateWithoutBranchInput> | CourierCreateWithoutBranchInput[] | CourierUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutBranchInput | CourierCreateOrConnectWithoutBranchInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutBranchInput | CourierUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CourierCreateManyBranchInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutBranchInput | CourierUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutBranchInput | CourierUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type BranchAdminUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BranchAdminCreateWithoutBranchInput, BranchAdminUncheckedCreateWithoutBranchInput> | BranchAdminCreateWithoutBranchInput[] | BranchAdminUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutBranchInput | BranchAdminCreateOrConnectWithoutBranchInput[]
    upsert?: BranchAdminUpsertWithWhereUniqueWithoutBranchInput | BranchAdminUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BranchAdminCreateManyBranchInputEnvelope
    set?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    disconnect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    delete?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    update?: BranchAdminUpdateWithWhereUniqueWithoutBranchInput | BranchAdminUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BranchAdminUpdateManyWithWhereWithoutBranchInput | BranchAdminUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BranchAdminScalarWhereInput | BranchAdminScalarWhereInput[]
  }

  export type CourierUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CourierCreateWithoutBranchInput, CourierUncheckedCreateWithoutBranchInput> | CourierCreateWithoutBranchInput[] | CourierUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutBranchInput | CourierCreateOrConnectWithoutBranchInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutBranchInput | CourierUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CourierCreateManyBranchInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutBranchInput | CourierUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutBranchInput | CourierUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type BranchAdminUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BranchAdminCreateWithoutBranchInput, BranchAdminUncheckedCreateWithoutBranchInput> | BranchAdminCreateWithoutBranchInput[] | BranchAdminUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchAdminCreateOrConnectWithoutBranchInput | BranchAdminCreateOrConnectWithoutBranchInput[]
    upsert?: BranchAdminUpsertWithWhereUniqueWithoutBranchInput | BranchAdminUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BranchAdminCreateManyBranchInputEnvelope
    set?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    disconnect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    delete?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    connect?: BranchAdminWhereUniqueInput | BranchAdminWhereUniqueInput[]
    update?: BranchAdminUpdateWithWhereUniqueWithoutBranchInput | BranchAdminUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BranchAdminUpdateManyWithWhereWithoutBranchInput | BranchAdminUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BranchAdminScalarWhereInput | BranchAdminScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCourierInput = {
    create?: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourierInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutCourierInput = {
    create?: XOR<BranchCreateWithoutCourierInput, BranchUncheckedCreateWithoutCourierInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCourierInput
    connect?: BranchWhereUniqueInput
  }

  export type ParcelCreateNestedManyWithoutCourierInput = {
    create?: XOR<ParcelCreateWithoutCourierInput, ParcelUncheckedCreateWithoutCourierInput> | ParcelCreateWithoutCourierInput[] | ParcelUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutCourierInput | ParcelCreateOrConnectWithoutCourierInput[]
    createMany?: ParcelCreateManyCourierInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type ParcelUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<ParcelCreateWithoutCourierInput, ParcelUncheckedCreateWithoutCourierInput> | ParcelCreateWithoutCourierInput[] | ParcelUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutCourierInput | ParcelCreateOrConnectWithoutCourierInput[]
    createMany?: ParcelCreateManyCourierInputEnvelope
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCourierNestedInput = {
    create?: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourierInput
    upsert?: UserUpsertWithoutCourierInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourierInput, UserUpdateWithoutCourierInput>, UserUncheckedUpdateWithoutCourierInput>
  }

  export type BranchUpdateOneWithoutCourierNestedInput = {
    create?: XOR<BranchCreateWithoutCourierInput, BranchUncheckedCreateWithoutCourierInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCourierInput
    upsert?: BranchUpsertWithoutCourierInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutCourierInput, BranchUpdateWithoutCourierInput>, BranchUncheckedUpdateWithoutCourierInput>
  }

  export type ParcelUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ParcelCreateWithoutCourierInput, ParcelUncheckedCreateWithoutCourierInput> | ParcelCreateWithoutCourierInput[] | ParcelUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutCourierInput | ParcelCreateOrConnectWithoutCourierInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutCourierInput | ParcelUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ParcelCreateManyCourierInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutCourierInput | ParcelUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutCourierInput | ParcelUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type ParcelUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ParcelCreateWithoutCourierInput, ParcelUncheckedCreateWithoutCourierInput> | ParcelCreateWithoutCourierInput[] | ParcelUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ParcelCreateOrConnectWithoutCourierInput | ParcelCreateOrConnectWithoutCourierInput[]
    upsert?: ParcelUpsertWithWhereUniqueWithoutCourierInput | ParcelUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ParcelCreateManyCourierInputEnvelope
    set?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    disconnect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    delete?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    connect?: ParcelWhereUniqueInput | ParcelWhereUniqueInput[]
    update?: ParcelUpdateWithWhereUniqueWithoutCourierInput | ParcelUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ParcelUpdateManyWithWhereWithoutCourierInput | ParcelUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBranchAdminInput = {
    create?: XOR<UserCreateWithoutBranchAdminInput, UserUncheckedCreateWithoutBranchAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutBranchAdminInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutBranchAdminInput = {
    create?: XOR<BranchCreateWithoutBranchAdminInput, BranchUncheckedCreateWithoutBranchAdminInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBranchAdminInput
    connect?: BranchWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBranchAdminNestedInput = {
    create?: XOR<UserCreateWithoutBranchAdminInput, UserUncheckedCreateWithoutBranchAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutBranchAdminInput
    upsert?: UserUpsertWithoutBranchAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBranchAdminInput, UserUpdateWithoutBranchAdminInput>, UserUncheckedUpdateWithoutBranchAdminInput>
  }

  export type BranchUpdateOneRequiredWithoutBranchAdminNestedInput = {
    create?: XOR<BranchCreateWithoutBranchAdminInput, BranchUncheckedCreateWithoutBranchAdminInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBranchAdminInput
    upsert?: BranchUpsertWithoutBranchAdminInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutBranchAdminInput, BranchUpdateWithoutBranchAdminInput>, BranchUncheckedUpdateWithoutBranchAdminInput>
  }

  export type UserCreateNestedOneWithoutCentralAdminInput = {
    create?: XOR<UserCreateWithoutCentralAdminInput, UserUncheckedCreateWithoutCentralAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutCentralAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCentralAdminNestedInput = {
    create?: XOR<UserCreateWithoutCentralAdminInput, UserUncheckedCreateWithoutCentralAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutCentralAdminInput
    upsert?: UserUpsertWithoutCentralAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCentralAdminInput, UserUpdateWithoutCentralAdminInput>, UserUncheckedUpdateWithoutCentralAdminInput>
  }

  export type CourierCreateNestedOneWithoutParcelInput = {
    create?: XOR<CourierCreateWithoutParcelInput, CourierUncheckedCreateWithoutParcelInput>
    connectOrCreate?: CourierCreateOrConnectWithoutParcelInput
    connect?: CourierWhereUniqueInput
  }

  export type EnumParcelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParcelStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourierUpdateOneWithoutParcelNestedInput = {
    create?: XOR<CourierCreateWithoutParcelInput, CourierUncheckedCreateWithoutParcelInput>
    connectOrCreate?: CourierCreateOrConnectWithoutParcelInput
    upsert?: CourierUpsertWithoutParcelInput
    disconnect?: CourierWhereInput | boolean
    delete?: CourierWhereInput | boolean
    connect?: CourierWhereUniqueInput
    update?: XOR<XOR<CourierUpdateToOneWithWhereWithoutParcelInput, CourierUpdateWithoutParcelInput>, CourierUncheckedUpdateWithoutParcelInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumParcelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusFilter<$PrismaModel> | $Enums.ParcelStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParcelStatus | EnumParcelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParcelStatus[] | ListEnumParcelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParcelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParcelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParcelStatusFilter<$PrismaModel>
    _max?: NestedEnumParcelStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CourierCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutCourierInput
    Parcel?: ParcelCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Parcel?: ParcelUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutUserInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput>
  }

  export type CourierCreateManyUserInputEnvelope = {
    data: CourierCreateManyUserInput | CourierCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BranchAdminCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutBranchAdminInput
  }

  export type BranchAdminUncheckedCreateWithoutUserInput = {
    id?: string
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchAdminCreateOrConnectWithoutUserInput = {
    where: BranchAdminWhereUniqueInput
    create: XOR<BranchAdminCreateWithoutUserInput, BranchAdminUncheckedCreateWithoutUserInput>
  }

  export type BranchAdminCreateManyUserInputEnvelope = {
    data: BranchAdminCreateManyUserInput | BranchAdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CentralAdminCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralAdminUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralAdminCreateOrConnectWithoutUserInput = {
    where: CentralAdminWhereUniqueInput
    create: XOR<CentralAdminCreateWithoutUserInput, CentralAdminUncheckedCreateWithoutUserInput>
  }

  export type CentralAdminCreateManyUserInputEnvelope = {
    data: CentralAdminCreateManyUserInput | CentralAdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourierUpsertWithWhereUniqueWithoutUserInput = {
    where: CourierWhereUniqueInput
    update: XOR<CourierUpdateWithoutUserInput, CourierUncheckedUpdateWithoutUserInput>
    create: XOR<CourierCreateWithoutUserInput, CourierUncheckedCreateWithoutUserInput>
  }

  export type CourierUpdateWithWhereUniqueWithoutUserInput = {
    where: CourierWhereUniqueInput
    data: XOR<CourierUpdateWithoutUserInput, CourierUncheckedUpdateWithoutUserInput>
  }

  export type CourierUpdateManyWithWhereWithoutUserInput = {
    where: CourierScalarWhereInput
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyWithoutUserInput>
  }

  export type CourierScalarWhereInput = {
    AND?: CourierScalarWhereInput | CourierScalarWhereInput[]
    OR?: CourierScalarWhereInput[]
    NOT?: CourierScalarWhereInput | CourierScalarWhereInput[]
    id?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    userId?: StringNullableFilter<"Courier"> | string | null
    branchId?: StringNullableFilter<"Courier"> | string | null
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    updatedAt?: DateTimeFilter<"Courier"> | Date | string
  }

  export type BranchAdminUpsertWithWhereUniqueWithoutUserInput = {
    where: BranchAdminWhereUniqueInput
    update: XOR<BranchAdminUpdateWithoutUserInput, BranchAdminUncheckedUpdateWithoutUserInput>
    create: XOR<BranchAdminCreateWithoutUserInput, BranchAdminUncheckedCreateWithoutUserInput>
  }

  export type BranchAdminUpdateWithWhereUniqueWithoutUserInput = {
    where: BranchAdminWhereUniqueInput
    data: XOR<BranchAdminUpdateWithoutUserInput, BranchAdminUncheckedUpdateWithoutUserInput>
  }

  export type BranchAdminUpdateManyWithWhereWithoutUserInput = {
    where: BranchAdminScalarWhereInput
    data: XOR<BranchAdminUpdateManyMutationInput, BranchAdminUncheckedUpdateManyWithoutUserInput>
  }

  export type BranchAdminScalarWhereInput = {
    AND?: BranchAdminScalarWhereInput | BranchAdminScalarWhereInput[]
    OR?: BranchAdminScalarWhereInput[]
    NOT?: BranchAdminScalarWhereInput | BranchAdminScalarWhereInput[]
    id?: StringFilter<"BranchAdmin"> | string
    userId?: StringFilter<"BranchAdmin"> | string
    branchId?: StringFilter<"BranchAdmin"> | string
    createdAt?: DateTimeFilter<"BranchAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"BranchAdmin"> | Date | string
  }

  export type CentralAdminUpsertWithWhereUniqueWithoutUserInput = {
    where: CentralAdminWhereUniqueInput
    update: XOR<CentralAdminUpdateWithoutUserInput, CentralAdminUncheckedUpdateWithoutUserInput>
    create: XOR<CentralAdminCreateWithoutUserInput, CentralAdminUncheckedCreateWithoutUserInput>
  }

  export type CentralAdminUpdateWithWhereUniqueWithoutUserInput = {
    where: CentralAdminWhereUniqueInput
    data: XOR<CentralAdminUpdateWithoutUserInput, CentralAdminUncheckedUpdateWithoutUserInput>
  }

  export type CentralAdminUpdateManyWithWhereWithoutUserInput = {
    where: CentralAdminScalarWhereInput
    data: XOR<CentralAdminUpdateManyMutationInput, CentralAdminUncheckedUpdateManyWithoutUserInput>
  }

  export type CentralAdminScalarWhereInput = {
    AND?: CentralAdminScalarWhereInput | CentralAdminScalarWhereInput[]
    OR?: CentralAdminScalarWhereInput[]
    NOT?: CentralAdminScalarWhereInput | CentralAdminScalarWhereInput[]
    id?: StringFilter<"CentralAdmin"> | string
    userId?: StringFilter<"CentralAdmin"> | string
    createdAt?: DateTimeFilter<"CentralAdmin"> | Date | string
    updatedAt?: DateTimeFilter<"CentralAdmin"> | Date | string
  }

  export type CourierCreateWithoutBranchInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCourierInput
    Parcel?: ParcelCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Parcel?: ParcelUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutBranchInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutBranchInput, CourierUncheckedCreateWithoutBranchInput>
  }

  export type CourierCreateManyBranchInputEnvelope = {
    data: CourierCreateManyBranchInput | CourierCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type BranchAdminCreateWithoutBranchInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBranchAdminInput
  }

  export type BranchAdminUncheckedCreateWithoutBranchInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchAdminCreateOrConnectWithoutBranchInput = {
    where: BranchAdminWhereUniqueInput
    create: XOR<BranchAdminCreateWithoutBranchInput, BranchAdminUncheckedCreateWithoutBranchInput>
  }

  export type BranchAdminCreateManyBranchInputEnvelope = {
    data: BranchAdminCreateManyBranchInput | BranchAdminCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CourierUpsertWithWhereUniqueWithoutBranchInput = {
    where: CourierWhereUniqueInput
    update: XOR<CourierUpdateWithoutBranchInput, CourierUncheckedUpdateWithoutBranchInput>
    create: XOR<CourierCreateWithoutBranchInput, CourierUncheckedCreateWithoutBranchInput>
  }

  export type CourierUpdateWithWhereUniqueWithoutBranchInput = {
    where: CourierWhereUniqueInput
    data: XOR<CourierUpdateWithoutBranchInput, CourierUncheckedUpdateWithoutBranchInput>
  }

  export type CourierUpdateManyWithWhereWithoutBranchInput = {
    where: CourierScalarWhereInput
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyWithoutBranchInput>
  }

  export type BranchAdminUpsertWithWhereUniqueWithoutBranchInput = {
    where: BranchAdminWhereUniqueInput
    update: XOR<BranchAdminUpdateWithoutBranchInput, BranchAdminUncheckedUpdateWithoutBranchInput>
    create: XOR<BranchAdminCreateWithoutBranchInput, BranchAdminUncheckedCreateWithoutBranchInput>
  }

  export type BranchAdminUpdateWithWhereUniqueWithoutBranchInput = {
    where: BranchAdminWhereUniqueInput
    data: XOR<BranchAdminUpdateWithoutBranchInput, BranchAdminUncheckedUpdateWithoutBranchInput>
  }

  export type BranchAdminUpdateManyWithWhereWithoutBranchInput = {
    where: BranchAdminScalarWhereInput
    data: XOR<BranchAdminUpdateManyMutationInput, BranchAdminUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserCreateWithoutCourierInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BranchAdmin?: BranchAdminCreateNestedManyWithoutUserInput
    CentralAdmin?: CentralAdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourierInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BranchAdmin?: BranchAdminUncheckedCreateNestedManyWithoutUserInput
    CentralAdmin?: CentralAdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
  }

  export type BranchCreateWithoutCourierInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BranchAdmin?: BranchAdminCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCourierInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    BranchAdmin?: BranchAdminUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCourierInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCourierInput, BranchUncheckedCreateWithoutCourierInput>
  }

  export type ParcelCreateWithoutCourierInput = {
    id?: string
    recipientName: string
    recipientAddress?: string | null
    status?: $Enums.ParcelStatus
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUncheckedCreateWithoutCourierInput = {
    id?: string
    recipientName: string
    recipientAddress?: string | null
    status?: $Enums.ParcelStatus
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelCreateOrConnectWithoutCourierInput = {
    where: ParcelWhereUniqueInput
    create: XOR<ParcelCreateWithoutCourierInput, ParcelUncheckedCreateWithoutCourierInput>
  }

  export type ParcelCreateManyCourierInputEnvelope = {
    data: ParcelCreateManyCourierInput | ParcelCreateManyCourierInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCourierInput = {
    update: XOR<UserUpdateWithoutCourierInput, UserUncheckedUpdateWithoutCourierInput>
    create: XOR<UserCreateWithoutCourierInput, UserUncheckedCreateWithoutCourierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourierInput, UserUncheckedUpdateWithoutCourierInput>
  }

  export type UserUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchAdmin?: BranchAdminUpdateManyWithoutUserNestedInput
    CentralAdmin?: CentralAdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchAdmin?: BranchAdminUncheckedUpdateManyWithoutUserNestedInput
    CentralAdmin?: CentralAdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BranchUpsertWithoutCourierInput = {
    update: XOR<BranchUpdateWithoutCourierInput, BranchUncheckedUpdateWithoutCourierInput>
    create: XOR<BranchCreateWithoutCourierInput, BranchUncheckedCreateWithoutCourierInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutCourierInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutCourierInput, BranchUncheckedUpdateWithoutCourierInput>
  }

  export type BranchUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchAdmin?: BranchAdminUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    BranchAdmin?: BranchAdminUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type ParcelUpsertWithWhereUniqueWithoutCourierInput = {
    where: ParcelWhereUniqueInput
    update: XOR<ParcelUpdateWithoutCourierInput, ParcelUncheckedUpdateWithoutCourierInput>
    create: XOR<ParcelCreateWithoutCourierInput, ParcelUncheckedCreateWithoutCourierInput>
  }

  export type ParcelUpdateWithWhereUniqueWithoutCourierInput = {
    where: ParcelWhereUniqueInput
    data: XOR<ParcelUpdateWithoutCourierInput, ParcelUncheckedUpdateWithoutCourierInput>
  }

  export type ParcelUpdateManyWithWhereWithoutCourierInput = {
    where: ParcelScalarWhereInput
    data: XOR<ParcelUpdateManyMutationInput, ParcelUncheckedUpdateManyWithoutCourierInput>
  }

  export type ParcelScalarWhereInput = {
    AND?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    OR?: ParcelScalarWhereInput[]
    NOT?: ParcelScalarWhereInput | ParcelScalarWhereInput[]
    id?: StringFilter<"Parcel"> | string
    recipientName?: StringFilter<"Parcel"> | string
    recipientAddress?: StringNullableFilter<"Parcel"> | string | null
    status?: EnumParcelStatusFilter<"Parcel"> | $Enums.ParcelStatus
    longitude?: FloatNullableFilter<"Parcel"> | number | null
    latitude?: FloatNullableFilter<"Parcel"> | number | null
    courierId?: StringNullableFilter<"Parcel"> | string | null
    createdAt?: DateTimeFilter<"Parcel"> | Date | string
    updatedAt?: DateTimeFilter<"Parcel"> | Date | string
  }

  export type UserCreateWithoutBranchAdminInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierCreateNestedManyWithoutUserInput
    CentralAdmin?: CentralAdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBranchAdminInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    CentralAdmin?: CentralAdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBranchAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchAdminInput, UserUncheckedCreateWithoutBranchAdminInput>
  }

  export type BranchCreateWithoutBranchAdminInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutBranchAdminInput = {
    id?: string
    name: string
    branchCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutBranchAdminInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutBranchAdminInput, BranchUncheckedCreateWithoutBranchAdminInput>
  }

  export type UserUpsertWithoutBranchAdminInput = {
    update: XOR<UserUpdateWithoutBranchAdminInput, UserUncheckedUpdateWithoutBranchAdminInput>
    create: XOR<UserCreateWithoutBranchAdminInput, UserUncheckedCreateWithoutBranchAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBranchAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBranchAdminInput, UserUncheckedUpdateWithoutBranchAdminInput>
  }

  export type UserUpdateWithoutBranchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutUserNestedInput
    CentralAdmin?: CentralAdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    CentralAdmin?: CentralAdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BranchUpsertWithoutBranchAdminInput = {
    update: XOR<BranchUpdateWithoutBranchAdminInput, BranchUncheckedUpdateWithoutBranchAdminInput>
    create: XOR<BranchCreateWithoutBranchAdminInput, BranchUncheckedCreateWithoutBranchAdminInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutBranchAdminInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutBranchAdminInput, BranchUncheckedUpdateWithoutBranchAdminInput>
  }

  export type BranchUpdateWithoutBranchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutBranchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserCreateWithoutCentralAdminInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierCreateNestedManyWithoutUserInput
    BranchAdmin?: BranchAdminCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCentralAdminInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Courier?: CourierUncheckedCreateNestedManyWithoutUserInput
    BranchAdmin?: BranchAdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCentralAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCentralAdminInput, UserUncheckedCreateWithoutCentralAdminInput>
  }

  export type UserUpsertWithoutCentralAdminInput = {
    update: XOR<UserUpdateWithoutCentralAdminInput, UserUncheckedUpdateWithoutCentralAdminInput>
    create: XOR<UserCreateWithoutCentralAdminInput, UserUncheckedCreateWithoutCentralAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCentralAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCentralAdminInput, UserUncheckedUpdateWithoutCentralAdminInput>
  }

  export type UserUpdateWithoutCentralAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUpdateManyWithoutUserNestedInput
    BranchAdmin?: BranchAdminUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCentralAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Courier?: CourierUncheckedUpdateManyWithoutUserNestedInput
    BranchAdmin?: BranchAdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourierCreateWithoutParcelInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCourierInput
    branch?: BranchCreateNestedOneWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutParcelInput = {
    id?: string
    name: string
    userId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierCreateOrConnectWithoutParcelInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutParcelInput, CourierUncheckedCreateWithoutParcelInput>
  }

  export type CourierUpsertWithoutParcelInput = {
    update: XOR<CourierUpdateWithoutParcelInput, CourierUncheckedUpdateWithoutParcelInput>
    create: XOR<CourierCreateWithoutParcelInput, CourierUncheckedCreateWithoutParcelInput>
    where?: CourierWhereInput
  }

  export type CourierUpdateToOneWithWhereWithoutParcelInput = {
    where?: CourierWhereInput
    data: XOR<CourierUpdateWithoutParcelInput, CourierUncheckedUpdateWithoutParcelInput>
  }

  export type CourierUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCourierNestedInput
    branch?: BranchUpdateOneWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutParcelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierCreateManyUserInput = {
    id?: string
    name: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchAdminCreateManyUserInput = {
    id?: string
    branchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CentralAdminCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutCourierNestedInput
    Parcel?: ParcelUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parcel?: ParcelUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutBranchAdminNestedInput
  }

  export type BranchAdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralAdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralAdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentralAdminUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierCreateManyBranchInput = {
    id?: string
    name: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchAdminCreateManyBranchInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCourierNestedInput
    Parcel?: ParcelUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Parcel?: ParcelUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBranchAdminNestedInput
  }

  export type BranchAdminUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchAdminUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelCreateManyCourierInput = {
    id?: string
    recipientName: string
    recipientAddress?: string | null
    status?: $Enums.ParcelStatus
    longitude?: number | null
    latitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientAddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumParcelStatusFieldUpdateOperationsInput | $Enums.ParcelStatus
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchCountOutputTypeDefaultArgs instead
     */
    export type BranchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierCountOutputTypeDefaultArgs instead
     */
    export type CourierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchDefaultArgs instead
     */
    export type BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierDefaultArgs instead
     */
    export type CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchAdminDefaultArgs instead
     */
    export type BranchAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CentralAdminDefaultArgs instead
     */
    export type CentralAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CentralAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParcelDefaultArgs instead
     */
    export type ParcelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParcelDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}