
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model MusicSheet
 * 
 */
export type MusicSheet = $Result.DefaultSelection<Prisma.$MusicSheetPayload>
/**
 * Model MusicSheetCategory
 * 
 */
export type MusicSheetCategory = $Result.DefaultSelection<Prisma.$MusicSheetCategoryPayload>
/**
 * Model MusicSheetInstrument
 * 
 */
export type MusicSheetInstrument = $Result.DefaultSelection<Prisma.$MusicSheetInstrumentPayload>
/**
 * Model MusicSheetVersion
 * 
 */
export type MusicSheetVersion = $Result.DefaultSelection<Prisma.$MusicSheetVersionPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicSheet`: Exposes CRUD operations for the **MusicSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicSheets
    * const musicSheets = await prisma.musicSheet.findMany()
    * ```
    */
  get musicSheet(): Prisma.MusicSheetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicSheetCategory`: Exposes CRUD operations for the **MusicSheetCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicSheetCategories
    * const musicSheetCategories = await prisma.musicSheetCategory.findMany()
    * ```
    */
  get musicSheetCategory(): Prisma.MusicSheetCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicSheetInstrument`: Exposes CRUD operations for the **MusicSheetInstrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicSheetInstruments
    * const musicSheetInstruments = await prisma.musicSheetInstrument.findMany()
    * ```
    */
  get musicSheetInstrument(): Prisma.MusicSheetInstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musicSheetVersion`: Exposes CRUD operations for the **MusicSheetVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MusicSheetVersions
    * const musicSheetVersions = await prisma.musicSheetVersion.findMany()
    * ```
    */
  get musicSheetVersion(): Prisma.MusicSheetVersionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    MusicSheet: 'MusicSheet',
    MusicSheetCategory: 'MusicSheetCategory',
    MusicSheetInstrument: 'MusicSheetInstrument',
    MusicSheetVersion: 'MusicSheetVersion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "musicSheet" | "musicSheetCategory" | "musicSheetInstrument" | "musicSheetVersion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MusicSheet: {
        payload: Prisma.$MusicSheetPayload<ExtArgs>
        fields: Prisma.MusicSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>
          }
          findFirst: {
            args: Prisma.MusicSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>
          }
          findMany: {
            args: Prisma.MusicSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>[]
          }
          create: {
            args: Prisma.MusicSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>
          }
          createMany: {
            args: Prisma.MusicSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>[]
          }
          delete: {
            args: Prisma.MusicSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>
          }
          update: {
            args: Prisma.MusicSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>
          }
          deleteMany: {
            args: Prisma.MusicSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MusicSheetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>[]
          }
          upsert: {
            args: Prisma.MusicSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetPayload>
          }
          aggregate: {
            args: Prisma.MusicSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicSheet>
          }
          groupBy: {
            args: Prisma.MusicSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicSheetCountArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetCountAggregateOutputType> | number
          }
        }
      }
      MusicSheetCategory: {
        payload: Prisma.$MusicSheetCategoryPayload<ExtArgs>
        fields: Prisma.MusicSheetCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicSheetCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicSheetCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>
          }
          findFirst: {
            args: Prisma.MusicSheetCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicSheetCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>
          }
          findMany: {
            args: Prisma.MusicSheetCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>[]
          }
          create: {
            args: Prisma.MusicSheetCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>
          }
          createMany: {
            args: Prisma.MusicSheetCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicSheetCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>[]
          }
          delete: {
            args: Prisma.MusicSheetCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>
          }
          update: {
            args: Prisma.MusicSheetCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MusicSheetCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicSheetCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MusicSheetCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MusicSheetCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetCategoryPayload>
          }
          aggregate: {
            args: Prisma.MusicSheetCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicSheetCategory>
          }
          groupBy: {
            args: Prisma.MusicSheetCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicSheetCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetCategoryCountAggregateOutputType> | number
          }
        }
      }
      MusicSheetInstrument: {
        payload: Prisma.$MusicSheetInstrumentPayload<ExtArgs>
        fields: Prisma.MusicSheetInstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicSheetInstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicSheetInstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>
          }
          findFirst: {
            args: Prisma.MusicSheetInstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicSheetInstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>
          }
          findMany: {
            args: Prisma.MusicSheetInstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>[]
          }
          create: {
            args: Prisma.MusicSheetInstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>
          }
          createMany: {
            args: Prisma.MusicSheetInstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicSheetInstrumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>[]
          }
          delete: {
            args: Prisma.MusicSheetInstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>
          }
          update: {
            args: Prisma.MusicSheetInstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>
          }
          deleteMany: {
            args: Prisma.MusicSheetInstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicSheetInstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MusicSheetInstrumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>[]
          }
          upsert: {
            args: Prisma.MusicSheetInstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetInstrumentPayload>
          }
          aggregate: {
            args: Prisma.MusicSheetInstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicSheetInstrument>
          }
          groupBy: {
            args: Prisma.MusicSheetInstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetInstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicSheetInstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetInstrumentCountAggregateOutputType> | number
          }
        }
      }
      MusicSheetVersion: {
        payload: Prisma.$MusicSheetVersionPayload<ExtArgs>
        fields: Prisma.MusicSheetVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicSheetVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicSheetVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>
          }
          findFirst: {
            args: Prisma.MusicSheetVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicSheetVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>
          }
          findMany: {
            args: Prisma.MusicSheetVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>[]
          }
          create: {
            args: Prisma.MusicSheetVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>
          }
          createMany: {
            args: Prisma.MusicSheetVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicSheetVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>[]
          }
          delete: {
            args: Prisma.MusicSheetVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>
          }
          update: {
            args: Prisma.MusicSheetVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>
          }
          deleteMany: {
            args: Prisma.MusicSheetVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicSheetVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MusicSheetVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>[]
          }
          upsert: {
            args: Prisma.MusicSheetVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicSheetVersionPayload>
          }
          aggregate: {
            args: Prisma.MusicSheetVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusicSheetVersion>
          }
          groupBy: {
            args: Prisma.MusicSheetVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicSheetVersionCountArgs<ExtArgs>
            result: $Utils.Optional<MusicSheetVersionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    musicSheet?: MusicSheetOmit
    musicSheetCategory?: MusicSheetCategoryOmit
    musicSheetInstrument?: MusicSheetInstrumentOmit
    musicSheetVersion?: MusicSheetVersionOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
    musicSheets: number
    musicSheetCategories: number
    musicSheetInstruments: number
    musicSheetVersions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheets?: boolean | UserCountOutputTypeCountMusicSheetsArgs
    musicSheetCategories?: boolean | UserCountOutputTypeCountMusicSheetCategoriesArgs
    musicSheetInstruments?: boolean | UserCountOutputTypeCountMusicSheetInstrumentsArgs
    musicSheetVersions?: boolean | UserCountOutputTypeCountMusicSheetVersionsArgs
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
  export type UserCountOutputTypeCountMusicSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMusicSheetCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMusicSheetInstrumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetInstrumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMusicSheetVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetVersionWhereInput
  }


  /**
   * Count Type MusicSheetCountOutputType
   */

  export type MusicSheetCountOutputType = {
    versions: number
  }

  export type MusicSheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | MusicSheetCountOutputTypeCountVersionsArgs
  }

  // Custom InputTypes
  /**
   * MusicSheetCountOutputType without action
   */
  export type MusicSheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCountOutputType
     */
    select?: MusicSheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicSheetCountOutputType without action
   */
  export type MusicSheetCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetVersionWhereInput
  }


  /**
   * Count Type MusicSheetCategoryCountOutputType
   */

  export type MusicSheetCategoryCountOutputType = {
    musicSheets: number
    musicSheetVersions: number
  }

  export type MusicSheetCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheets?: boolean | MusicSheetCategoryCountOutputTypeCountMusicSheetsArgs
    musicSheetVersions?: boolean | MusicSheetCategoryCountOutputTypeCountMusicSheetVersionsArgs
  }

  // Custom InputTypes
  /**
   * MusicSheetCategoryCountOutputType without action
   */
  export type MusicSheetCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategoryCountOutputType
     */
    select?: MusicSheetCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicSheetCategoryCountOutputType without action
   */
  export type MusicSheetCategoryCountOutputTypeCountMusicSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetWhereInput
  }

  /**
   * MusicSheetCategoryCountOutputType without action
   */
  export type MusicSheetCategoryCountOutputTypeCountMusicSheetVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetVersionWhereInput
  }


  /**
   * Count Type MusicSheetInstrumentCountOutputType
   */

  export type MusicSheetInstrumentCountOutputType = {
    musicSheets: number
    musicSheetVersions: number
  }

  export type MusicSheetInstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheets?: boolean | MusicSheetInstrumentCountOutputTypeCountMusicSheetsArgs
    musicSheetVersions?: boolean | MusicSheetInstrumentCountOutputTypeCountMusicSheetVersionsArgs
  }

  // Custom InputTypes
  /**
   * MusicSheetInstrumentCountOutputType without action
   */
  export type MusicSheetInstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrumentCountOutputType
     */
    select?: MusicSheetInstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicSheetInstrumentCountOutputType without action
   */
  export type MusicSheetInstrumentCountOutputTypeCountMusicSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetWhereInput
  }

  /**
   * MusicSheetInstrumentCountOutputType without action
   */
  export type MusicSheetInstrumentCountOutputTypeCountMusicSheetVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetVersionWhereInput
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
    email: string | null
    password: string | null
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
    createdAt?: boolean
    updatedAt?: boolean
    musicSheets?: boolean | User$musicSheetsArgs<ExtArgs>
    musicSheetCategories?: boolean | User$musicSheetCategoriesArgs<ExtArgs>
    musicSheetInstruments?: boolean | User$musicSheetInstrumentsArgs<ExtArgs>
    musicSheetVersions?: boolean | User$musicSheetVersionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheets?: boolean | User$musicSheetsArgs<ExtArgs>
    musicSheetCategories?: boolean | User$musicSheetCategoriesArgs<ExtArgs>
    musicSheetInstruments?: boolean | User$musicSheetInstrumentsArgs<ExtArgs>
    musicSheetVersions?: boolean | User$musicSheetVersionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      musicSheets: Prisma.$MusicSheetPayload<ExtArgs>[]
      musicSheetCategories: Prisma.$MusicSheetCategoryPayload<ExtArgs>[]
      musicSheetInstruments: Prisma.$MusicSheetInstrumentPayload<ExtArgs>[]
      musicSheetVersions: Prisma.$MusicSheetVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    musicSheets<T extends User$musicSheetsArgs<ExtArgs> = {}>(args?: Subset<T, User$musicSheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    musicSheetCategories<T extends User$musicSheetCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$musicSheetCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    musicSheetInstruments<T extends User$musicSheetInstrumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$musicSheetInstrumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    musicSheetVersions<T extends User$musicSheetVersionsArgs<ExtArgs> = {}>(args?: Subset<T, User$musicSheetVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.musicSheets
   */
  export type User$musicSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    where?: MusicSheetWhereInput
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    cursor?: MusicSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetScalarFieldEnum | MusicSheetScalarFieldEnum[]
  }

  /**
   * User.musicSheetCategories
   */
  export type User$musicSheetCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    where?: MusicSheetCategoryWhereInput
    orderBy?: MusicSheetCategoryOrderByWithRelationInput | MusicSheetCategoryOrderByWithRelationInput[]
    cursor?: MusicSheetCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetCategoryScalarFieldEnum | MusicSheetCategoryScalarFieldEnum[]
  }

  /**
   * User.musicSheetInstruments
   */
  export type User$musicSheetInstrumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    where?: MusicSheetInstrumentWhereInput
    orderBy?: MusicSheetInstrumentOrderByWithRelationInput | MusicSheetInstrumentOrderByWithRelationInput[]
    cursor?: MusicSheetInstrumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetInstrumentScalarFieldEnum | MusicSheetInstrumentScalarFieldEnum[]
  }

  /**
   * User.musicSheetVersions
   */
  export type User$musicSheetVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    where?: MusicSheetVersionWhereInput
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    cursor?: MusicSheetVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MusicSheet
   */

  export type AggregateMusicSheet = {
    _count: MusicSheetCountAggregateOutputType | null
    _min: MusicSheetMinAggregateOutputType | null
    _max: MusicSheetMaxAggregateOutputType | null
  }

  export type MusicSheetMinAggregateOutputType = {
    id: string | null
    name: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
    instrumentId: string | null
  }

  export type MusicSheetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    file: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    categoryId: string | null
    instrumentId: string | null
  }

  export type MusicSheetCountAggregateOutputType = {
    id: number
    name: number
    file: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    instrumentId: number
    _all: number
  }


  export type MusicSheetMinAggregateInputType = {
    id?: true
    name?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    instrumentId?: true
  }

  export type MusicSheetMaxAggregateInputType = {
    id?: true
    name?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    instrumentId?: true
  }

  export type MusicSheetCountAggregateInputType = {
    id?: true
    name?: true
    file?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    instrumentId?: true
    _all?: true
  }

  export type MusicSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheet to aggregate.
     */
    where?: MusicSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheets to fetch.
     */
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicSheets
    **/
    _count?: true | MusicSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicSheetMaxAggregateInputType
  }

  export type GetMusicSheetAggregateType<T extends MusicSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicSheet[P]>
      : GetScalarType<T[P], AggregateMusicSheet[P]>
  }




  export type MusicSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetWhereInput
    orderBy?: MusicSheetOrderByWithAggregationInput | MusicSheetOrderByWithAggregationInput[]
    by: MusicSheetScalarFieldEnum[] | MusicSheetScalarFieldEnum
    having?: MusicSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicSheetCountAggregateInputType | true
    _min?: MusicSheetMinAggregateInputType
    _max?: MusicSheetMaxAggregateInputType
  }

  export type MusicSheetGroupByOutputType = {
    id: string
    name: string
    file: string
    createdAt: Date
    updatedAt: Date
    userId: string
    categoryId: string | null
    instrumentId: string | null
    _count: MusicSheetCountAggregateOutputType | null
    _min: MusicSheetMinAggregateOutputType | null
    _max: MusicSheetMaxAggregateOutputType | null
  }

  type GetMusicSheetGroupByPayload<T extends MusicSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicSheetGroupByOutputType[P]>
            : GetScalarType<T[P], MusicSheetGroupByOutputType[P]>
        }
      >
    >


  export type MusicSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    instrumentId?: boolean
    versions?: boolean | MusicSheet$versionsArgs<ExtArgs>
    user?: boolean | MusicSheet$userArgs<ExtArgs>
    category?: boolean | MusicSheet$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheet$instrumentArgs<ExtArgs>
    _count?: boolean | MusicSheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheet"]>

  export type MusicSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    instrumentId?: boolean
    user?: boolean | MusicSheet$userArgs<ExtArgs>
    category?: boolean | MusicSheet$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheet$instrumentArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheet"]>

  export type MusicSheetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    instrumentId?: boolean
    user?: boolean | MusicSheet$userArgs<ExtArgs>
    category?: boolean | MusicSheet$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheet$instrumentArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheet"]>

  export type MusicSheetSelectScalar = {
    id?: boolean
    name?: boolean
    file?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    instrumentId?: boolean
  }

  export type MusicSheetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "file" | "createdAt" | "updatedAt" | "userId" | "categoryId" | "instrumentId", ExtArgs["result"]["musicSheet"]>
  export type MusicSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | MusicSheet$versionsArgs<ExtArgs>
    user?: boolean | MusicSheet$userArgs<ExtArgs>
    category?: boolean | MusicSheet$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheet$instrumentArgs<ExtArgs>
    _count?: boolean | MusicSheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MusicSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MusicSheet$userArgs<ExtArgs>
    category?: boolean | MusicSheet$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheet$instrumentArgs<ExtArgs>
  }
  export type MusicSheetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MusicSheet$userArgs<ExtArgs>
    category?: boolean | MusicSheet$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheet$instrumentArgs<ExtArgs>
  }

  export type $MusicSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicSheet"
    objects: {
      versions: Prisma.$MusicSheetVersionPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$MusicSheetCategoryPayload<ExtArgs> | null
      instrument: Prisma.$MusicSheetInstrumentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      file: string
      createdAt: Date
      updatedAt: Date
      userId: string
      categoryId: string | null
      instrumentId: string | null
    }, ExtArgs["result"]["musicSheet"]>
    composites: {}
  }

  type MusicSheetGetPayload<S extends boolean | null | undefined | MusicSheetDefaultArgs> = $Result.GetResult<Prisma.$MusicSheetPayload, S>

  type MusicSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicSheetCountAggregateInputType | true
    }

  export interface MusicSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicSheet'], meta: { name: 'MusicSheet' } }
    /**
     * Find zero or one MusicSheet that matches the filter.
     * @param {MusicSheetFindUniqueArgs} args - Arguments to find a MusicSheet
     * @example
     * // Get one MusicSheet
     * const musicSheet = await prisma.musicSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicSheetFindUniqueArgs>(args: SelectSubset<T, MusicSheetFindUniqueArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicSheet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicSheetFindUniqueOrThrowArgs} args - Arguments to find a MusicSheet
     * @example
     * // Get one MusicSheet
     * const musicSheet = await prisma.musicSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetFindFirstArgs} args - Arguments to find a MusicSheet
     * @example
     * // Get one MusicSheet
     * const musicSheet = await prisma.musicSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicSheetFindFirstArgs>(args?: SelectSubset<T, MusicSheetFindFirstArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetFindFirstOrThrowArgs} args - Arguments to find a MusicSheet
     * @example
     * // Get one MusicSheet
     * const musicSheet = await prisma.musicSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicSheets
     * const musicSheets = await prisma.musicSheet.findMany()
     * 
     * // Get first 10 MusicSheets
     * const musicSheets = await prisma.musicSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicSheetWithIdOnly = await prisma.musicSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicSheetFindManyArgs>(args?: SelectSubset<T, MusicSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicSheet.
     * @param {MusicSheetCreateArgs} args - Arguments to create a MusicSheet.
     * @example
     * // Create one MusicSheet
     * const MusicSheet = await prisma.musicSheet.create({
     *   data: {
     *     // ... data to create a MusicSheet
     *   }
     * })
     * 
     */
    create<T extends MusicSheetCreateArgs>(args: SelectSubset<T, MusicSheetCreateArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicSheets.
     * @param {MusicSheetCreateManyArgs} args - Arguments to create many MusicSheets.
     * @example
     * // Create many MusicSheets
     * const musicSheet = await prisma.musicSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicSheetCreateManyArgs>(args?: SelectSubset<T, MusicSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MusicSheets and returns the data saved in the database.
     * @param {MusicSheetCreateManyAndReturnArgs} args - Arguments to create many MusicSheets.
     * @example
     * // Create many MusicSheets
     * const musicSheet = await prisma.musicSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MusicSheets and only return the `id`
     * const musicSheetWithIdOnly = await prisma.musicSheet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MusicSheet.
     * @param {MusicSheetDeleteArgs} args - Arguments to delete one MusicSheet.
     * @example
     * // Delete one MusicSheet
     * const MusicSheet = await prisma.musicSheet.delete({
     *   where: {
     *     // ... filter to delete one MusicSheet
     *   }
     * })
     * 
     */
    delete<T extends MusicSheetDeleteArgs>(args: SelectSubset<T, MusicSheetDeleteArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicSheet.
     * @param {MusicSheetUpdateArgs} args - Arguments to update one MusicSheet.
     * @example
     * // Update one MusicSheet
     * const musicSheet = await prisma.musicSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicSheetUpdateArgs>(args: SelectSubset<T, MusicSheetUpdateArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicSheets.
     * @param {MusicSheetDeleteManyArgs} args - Arguments to filter MusicSheets to delete.
     * @example
     * // Delete a few MusicSheets
     * const { count } = await prisma.musicSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicSheetDeleteManyArgs>(args?: SelectSubset<T, MusicSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicSheets
     * const musicSheet = await prisma.musicSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicSheetUpdateManyArgs>(args: SelectSubset<T, MusicSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheets and returns the data updated in the database.
     * @param {MusicSheetUpdateManyAndReturnArgs} args - Arguments to update many MusicSheets.
     * @example
     * // Update many MusicSheets
     * const musicSheet = await prisma.musicSheet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MusicSheets and only return the `id`
     * const musicSheetWithIdOnly = await prisma.musicSheet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MusicSheetUpdateManyAndReturnArgs>(args: SelectSubset<T, MusicSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MusicSheet.
     * @param {MusicSheetUpsertArgs} args - Arguments to update or create a MusicSheet.
     * @example
     * // Update or create a MusicSheet
     * const musicSheet = await prisma.musicSheet.upsert({
     *   create: {
     *     // ... data to create a MusicSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicSheet we want to update
     *   }
     * })
     */
    upsert<T extends MusicSheetUpsertArgs>(args: SelectSubset<T, MusicSheetUpsertArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MusicSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCountArgs} args - Arguments to filter MusicSheets to count.
     * @example
     * // Count the number of MusicSheets
     * const count = await prisma.musicSheet.count({
     *   where: {
     *     // ... the filter for the MusicSheets we want to count
     *   }
     * })
    **/
    count<T extends MusicSheetCountArgs>(
      args?: Subset<T, MusicSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicSheetAggregateArgs>(args: Subset<T, MusicSheetAggregateArgs>): Prisma.PrismaPromise<GetMusicSheetAggregateType<T>>

    /**
     * Group by MusicSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetGroupByArgs} args - Group by arguments.
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
      T extends MusicSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicSheetGroupByArgs['orderBy'] }
        : { orderBy?: MusicSheetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicSheet model
   */
  readonly fields: MusicSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    versions<T extends MusicSheet$versionsArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheet$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends MusicSheet$userArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheet$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends MusicSheet$categoryArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheet$categoryArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    instrument<T extends MusicSheet$instrumentArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheet$instrumentArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MusicSheet model
   */
  interface MusicSheetFieldRefs {
    readonly id: FieldRef<"MusicSheet", 'String'>
    readonly name: FieldRef<"MusicSheet", 'String'>
    readonly file: FieldRef<"MusicSheet", 'String'>
    readonly createdAt: FieldRef<"MusicSheet", 'DateTime'>
    readonly updatedAt: FieldRef<"MusicSheet", 'DateTime'>
    readonly userId: FieldRef<"MusicSheet", 'String'>
    readonly categoryId: FieldRef<"MusicSheet", 'String'>
    readonly instrumentId: FieldRef<"MusicSheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MusicSheet findUnique
   */
  export type MusicSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheet to fetch.
     */
    where: MusicSheetWhereUniqueInput
  }

  /**
   * MusicSheet findUniqueOrThrow
   */
  export type MusicSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheet to fetch.
     */
    where: MusicSheetWhereUniqueInput
  }

  /**
   * MusicSheet findFirst
   */
  export type MusicSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheet to fetch.
     */
    where?: MusicSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheets to fetch.
     */
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheets.
     */
    cursor?: MusicSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheets.
     */
    distinct?: MusicSheetScalarFieldEnum | MusicSheetScalarFieldEnum[]
  }

  /**
   * MusicSheet findFirstOrThrow
   */
  export type MusicSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheet to fetch.
     */
    where?: MusicSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheets to fetch.
     */
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheets.
     */
    cursor?: MusicSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheets.
     */
    distinct?: MusicSheetScalarFieldEnum | MusicSheetScalarFieldEnum[]
  }

  /**
   * MusicSheet findMany
   */
  export type MusicSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheets to fetch.
     */
    where?: MusicSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheets to fetch.
     */
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicSheets.
     */
    cursor?: MusicSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheets.
     */
    skip?: number
    distinct?: MusicSheetScalarFieldEnum | MusicSheetScalarFieldEnum[]
  }

  /**
   * MusicSheet create
   */
  export type MusicSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a MusicSheet.
     */
    data: XOR<MusicSheetCreateInput, MusicSheetUncheckedCreateInput>
  }

  /**
   * MusicSheet createMany
   */
  export type MusicSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicSheets.
     */
    data: MusicSheetCreateManyInput | MusicSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicSheet createManyAndReturn
   */
  export type MusicSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * The data used to create many MusicSheets.
     */
    data: MusicSheetCreateManyInput | MusicSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheet update
   */
  export type MusicSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a MusicSheet.
     */
    data: XOR<MusicSheetUpdateInput, MusicSheetUncheckedUpdateInput>
    /**
     * Choose, which MusicSheet to update.
     */
    where: MusicSheetWhereUniqueInput
  }

  /**
   * MusicSheet updateMany
   */
  export type MusicSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicSheets.
     */
    data: XOR<MusicSheetUpdateManyMutationInput, MusicSheetUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheets to update
     */
    where?: MusicSheetWhereInput
    /**
     * Limit how many MusicSheets to update.
     */
    limit?: number
  }

  /**
   * MusicSheet updateManyAndReturn
   */
  export type MusicSheetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * The data used to update MusicSheets.
     */
    data: XOR<MusicSheetUpdateManyMutationInput, MusicSheetUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheets to update
     */
    where?: MusicSheetWhereInput
    /**
     * Limit how many MusicSheets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheet upsert
   */
  export type MusicSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the MusicSheet to update in case it exists.
     */
    where: MusicSheetWhereUniqueInput
    /**
     * In case the MusicSheet found by the `where` argument doesn't exist, create a new MusicSheet with this data.
     */
    create: XOR<MusicSheetCreateInput, MusicSheetUncheckedCreateInput>
    /**
     * In case the MusicSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicSheetUpdateInput, MusicSheetUncheckedUpdateInput>
  }

  /**
   * MusicSheet delete
   */
  export type MusicSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    /**
     * Filter which MusicSheet to delete.
     */
    where: MusicSheetWhereUniqueInput
  }

  /**
   * MusicSheet deleteMany
   */
  export type MusicSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheets to delete
     */
    where?: MusicSheetWhereInput
    /**
     * Limit how many MusicSheets to delete.
     */
    limit?: number
  }

  /**
   * MusicSheet.versions
   */
  export type MusicSheet$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    where?: MusicSheetVersionWhereInput
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    cursor?: MusicSheetVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
  }

  /**
   * MusicSheet.user
   */
  export type MusicSheet$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MusicSheet.category
   */
  export type MusicSheet$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    where?: MusicSheetCategoryWhereInput
  }

  /**
   * MusicSheet.instrument
   */
  export type MusicSheet$instrumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    where?: MusicSheetInstrumentWhereInput
  }

  /**
   * MusicSheet without action
   */
  export type MusicSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
  }


  /**
   * Model MusicSheetCategory
   */

  export type AggregateMusicSheetCategory = {
    _count: MusicSheetCategoryCountAggregateOutputType | null
    _min: MusicSheetCategoryMinAggregateOutputType | null
    _max: MusicSheetCategoryMaxAggregateOutputType | null
  }

  export type MusicSheetCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MusicSheetCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MusicSheetCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MusicSheetCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MusicSheetCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MusicSheetCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MusicSheetCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheetCategory to aggregate.
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetCategories to fetch.
     */
    orderBy?: MusicSheetCategoryOrderByWithRelationInput | MusicSheetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicSheetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicSheetCategories
    **/
    _count?: true | MusicSheetCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicSheetCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicSheetCategoryMaxAggregateInputType
  }

  export type GetMusicSheetCategoryAggregateType<T extends MusicSheetCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicSheetCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicSheetCategory[P]>
      : GetScalarType<T[P], AggregateMusicSheetCategory[P]>
  }




  export type MusicSheetCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetCategoryWhereInput
    orderBy?: MusicSheetCategoryOrderByWithAggregationInput | MusicSheetCategoryOrderByWithAggregationInput[]
    by: MusicSheetCategoryScalarFieldEnum[] | MusicSheetCategoryScalarFieldEnum
    having?: MusicSheetCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicSheetCategoryCountAggregateInputType | true
    _min?: MusicSheetCategoryMinAggregateInputType
    _max?: MusicSheetCategoryMaxAggregateInputType
  }

  export type MusicSheetCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: MusicSheetCategoryCountAggregateOutputType | null
    _min: MusicSheetCategoryMinAggregateOutputType | null
    _max: MusicSheetCategoryMaxAggregateOutputType | null
  }

  type GetMusicSheetCategoryGroupByPayload<T extends MusicSheetCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicSheetCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicSheetCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicSheetCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MusicSheetCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MusicSheetCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    musicSheets?: boolean | MusicSheetCategory$musicSheetsArgs<ExtArgs>
    user?: boolean | MusicSheetCategory$userArgs<ExtArgs>
    musicSheetVersions?: boolean | MusicSheetCategory$musicSheetVersionsArgs<ExtArgs>
    _count?: boolean | MusicSheetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetCategory"]>

  export type MusicSheetCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | MusicSheetCategory$userArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetCategory"]>

  export type MusicSheetCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | MusicSheetCategory$userArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetCategory"]>

  export type MusicSheetCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MusicSheetCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["musicSheetCategory"]>
  export type MusicSheetCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheets?: boolean | MusicSheetCategory$musicSheetsArgs<ExtArgs>
    user?: boolean | MusicSheetCategory$userArgs<ExtArgs>
    musicSheetVersions?: boolean | MusicSheetCategory$musicSheetVersionsArgs<ExtArgs>
    _count?: boolean | MusicSheetCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MusicSheetCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MusicSheetCategory$userArgs<ExtArgs>
  }
  export type MusicSheetCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MusicSheetCategory$userArgs<ExtArgs>
  }

  export type $MusicSheetCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicSheetCategory"
    objects: {
      musicSheets: Prisma.$MusicSheetPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      musicSheetVersions: Prisma.$MusicSheetVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["musicSheetCategory"]>
    composites: {}
  }

  type MusicSheetCategoryGetPayload<S extends boolean | null | undefined | MusicSheetCategoryDefaultArgs> = $Result.GetResult<Prisma.$MusicSheetCategoryPayload, S>

  type MusicSheetCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicSheetCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicSheetCategoryCountAggregateInputType | true
    }

  export interface MusicSheetCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicSheetCategory'], meta: { name: 'MusicSheetCategory' } }
    /**
     * Find zero or one MusicSheetCategory that matches the filter.
     * @param {MusicSheetCategoryFindUniqueArgs} args - Arguments to find a MusicSheetCategory
     * @example
     * // Get one MusicSheetCategory
     * const musicSheetCategory = await prisma.musicSheetCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicSheetCategoryFindUniqueArgs>(args: SelectSubset<T, MusicSheetCategoryFindUniqueArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicSheetCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicSheetCategoryFindUniqueOrThrowArgs} args - Arguments to find a MusicSheetCategory
     * @example
     * // Get one MusicSheetCategory
     * const musicSheetCategory = await prisma.musicSheetCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicSheetCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicSheetCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheetCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryFindFirstArgs} args - Arguments to find a MusicSheetCategory
     * @example
     * // Get one MusicSheetCategory
     * const musicSheetCategory = await prisma.musicSheetCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicSheetCategoryFindFirstArgs>(args?: SelectSubset<T, MusicSheetCategoryFindFirstArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheetCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryFindFirstOrThrowArgs} args - Arguments to find a MusicSheetCategory
     * @example
     * // Get one MusicSheetCategory
     * const musicSheetCategory = await prisma.musicSheetCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicSheetCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicSheetCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicSheetCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicSheetCategories
     * const musicSheetCategories = await prisma.musicSheetCategory.findMany()
     * 
     * // Get first 10 MusicSheetCategories
     * const musicSheetCategories = await prisma.musicSheetCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicSheetCategoryWithIdOnly = await prisma.musicSheetCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicSheetCategoryFindManyArgs>(args?: SelectSubset<T, MusicSheetCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicSheetCategory.
     * @param {MusicSheetCategoryCreateArgs} args - Arguments to create a MusicSheetCategory.
     * @example
     * // Create one MusicSheetCategory
     * const MusicSheetCategory = await prisma.musicSheetCategory.create({
     *   data: {
     *     // ... data to create a MusicSheetCategory
     *   }
     * })
     * 
     */
    create<T extends MusicSheetCategoryCreateArgs>(args: SelectSubset<T, MusicSheetCategoryCreateArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicSheetCategories.
     * @param {MusicSheetCategoryCreateManyArgs} args - Arguments to create many MusicSheetCategories.
     * @example
     * // Create many MusicSheetCategories
     * const musicSheetCategory = await prisma.musicSheetCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicSheetCategoryCreateManyArgs>(args?: SelectSubset<T, MusicSheetCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MusicSheetCategories and returns the data saved in the database.
     * @param {MusicSheetCategoryCreateManyAndReturnArgs} args - Arguments to create many MusicSheetCategories.
     * @example
     * // Create many MusicSheetCategories
     * const musicSheetCategory = await prisma.musicSheetCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MusicSheetCategories and only return the `id`
     * const musicSheetCategoryWithIdOnly = await prisma.musicSheetCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicSheetCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicSheetCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MusicSheetCategory.
     * @param {MusicSheetCategoryDeleteArgs} args - Arguments to delete one MusicSheetCategory.
     * @example
     * // Delete one MusicSheetCategory
     * const MusicSheetCategory = await prisma.musicSheetCategory.delete({
     *   where: {
     *     // ... filter to delete one MusicSheetCategory
     *   }
     * })
     * 
     */
    delete<T extends MusicSheetCategoryDeleteArgs>(args: SelectSubset<T, MusicSheetCategoryDeleteArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicSheetCategory.
     * @param {MusicSheetCategoryUpdateArgs} args - Arguments to update one MusicSheetCategory.
     * @example
     * // Update one MusicSheetCategory
     * const musicSheetCategory = await prisma.musicSheetCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicSheetCategoryUpdateArgs>(args: SelectSubset<T, MusicSheetCategoryUpdateArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicSheetCategories.
     * @param {MusicSheetCategoryDeleteManyArgs} args - Arguments to filter MusicSheetCategories to delete.
     * @example
     * // Delete a few MusicSheetCategories
     * const { count } = await prisma.musicSheetCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicSheetCategoryDeleteManyArgs>(args?: SelectSubset<T, MusicSheetCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicSheetCategories
     * const musicSheetCategory = await prisma.musicSheetCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicSheetCategoryUpdateManyArgs>(args: SelectSubset<T, MusicSheetCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheetCategories and returns the data updated in the database.
     * @param {MusicSheetCategoryUpdateManyAndReturnArgs} args - Arguments to update many MusicSheetCategories.
     * @example
     * // Update many MusicSheetCategories
     * const musicSheetCategory = await prisma.musicSheetCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MusicSheetCategories and only return the `id`
     * const musicSheetCategoryWithIdOnly = await prisma.musicSheetCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MusicSheetCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MusicSheetCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MusicSheetCategory.
     * @param {MusicSheetCategoryUpsertArgs} args - Arguments to update or create a MusicSheetCategory.
     * @example
     * // Update or create a MusicSheetCategory
     * const musicSheetCategory = await prisma.musicSheetCategory.upsert({
     *   create: {
     *     // ... data to create a MusicSheetCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicSheetCategory we want to update
     *   }
     * })
     */
    upsert<T extends MusicSheetCategoryUpsertArgs>(args: SelectSubset<T, MusicSheetCategoryUpsertArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MusicSheetCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryCountArgs} args - Arguments to filter MusicSheetCategories to count.
     * @example
     * // Count the number of MusicSheetCategories
     * const count = await prisma.musicSheetCategory.count({
     *   where: {
     *     // ... the filter for the MusicSheetCategories we want to count
     *   }
     * })
    **/
    count<T extends MusicSheetCategoryCountArgs>(
      args?: Subset<T, MusicSheetCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicSheetCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicSheetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicSheetCategoryAggregateArgs>(args: Subset<T, MusicSheetCategoryAggregateArgs>): Prisma.PrismaPromise<GetMusicSheetCategoryAggregateType<T>>

    /**
     * Group by MusicSheetCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetCategoryGroupByArgs} args - Group by arguments.
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
      T extends MusicSheetCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicSheetCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MusicSheetCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicSheetCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicSheetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicSheetCategory model
   */
  readonly fields: MusicSheetCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicSheetCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicSheetCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    musicSheets<T extends MusicSheetCategory$musicSheetsArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetCategory$musicSheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends MusicSheetCategory$userArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetCategory$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    musicSheetVersions<T extends MusicSheetCategory$musicSheetVersionsArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetCategory$musicSheetVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MusicSheetCategory model
   */
  interface MusicSheetCategoryFieldRefs {
    readonly id: FieldRef<"MusicSheetCategory", 'String'>
    readonly name: FieldRef<"MusicSheetCategory", 'String'>
    readonly createdAt: FieldRef<"MusicSheetCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MusicSheetCategory", 'DateTime'>
    readonly userId: FieldRef<"MusicSheetCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MusicSheetCategory findUnique
   */
  export type MusicSheetCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetCategory to fetch.
     */
    where: MusicSheetCategoryWhereUniqueInput
  }

  /**
   * MusicSheetCategory findUniqueOrThrow
   */
  export type MusicSheetCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetCategory to fetch.
     */
    where: MusicSheetCategoryWhereUniqueInput
  }

  /**
   * MusicSheetCategory findFirst
   */
  export type MusicSheetCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetCategory to fetch.
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetCategories to fetch.
     */
    orderBy?: MusicSheetCategoryOrderByWithRelationInput | MusicSheetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheetCategories.
     */
    cursor?: MusicSheetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheetCategories.
     */
    distinct?: MusicSheetCategoryScalarFieldEnum | MusicSheetCategoryScalarFieldEnum[]
  }

  /**
   * MusicSheetCategory findFirstOrThrow
   */
  export type MusicSheetCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetCategory to fetch.
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetCategories to fetch.
     */
    orderBy?: MusicSheetCategoryOrderByWithRelationInput | MusicSheetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheetCategories.
     */
    cursor?: MusicSheetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheetCategories.
     */
    distinct?: MusicSheetCategoryScalarFieldEnum | MusicSheetCategoryScalarFieldEnum[]
  }

  /**
   * MusicSheetCategory findMany
   */
  export type MusicSheetCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetCategories to fetch.
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetCategories to fetch.
     */
    orderBy?: MusicSheetCategoryOrderByWithRelationInput | MusicSheetCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicSheetCategories.
     */
    cursor?: MusicSheetCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetCategories.
     */
    skip?: number
    distinct?: MusicSheetCategoryScalarFieldEnum | MusicSheetCategoryScalarFieldEnum[]
  }

  /**
   * MusicSheetCategory create
   */
  export type MusicSheetCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MusicSheetCategory.
     */
    data: XOR<MusicSheetCategoryCreateInput, MusicSheetCategoryUncheckedCreateInput>
  }

  /**
   * MusicSheetCategory createMany
   */
  export type MusicSheetCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicSheetCategories.
     */
    data: MusicSheetCategoryCreateManyInput | MusicSheetCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicSheetCategory createManyAndReturn
   */
  export type MusicSheetCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MusicSheetCategories.
     */
    data: MusicSheetCategoryCreateManyInput | MusicSheetCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheetCategory update
   */
  export type MusicSheetCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MusicSheetCategory.
     */
    data: XOR<MusicSheetCategoryUpdateInput, MusicSheetCategoryUncheckedUpdateInput>
    /**
     * Choose, which MusicSheetCategory to update.
     */
    where: MusicSheetCategoryWhereUniqueInput
  }

  /**
   * MusicSheetCategory updateMany
   */
  export type MusicSheetCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicSheetCategories.
     */
    data: XOR<MusicSheetCategoryUpdateManyMutationInput, MusicSheetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheetCategories to update
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * Limit how many MusicSheetCategories to update.
     */
    limit?: number
  }

  /**
   * MusicSheetCategory updateManyAndReturn
   */
  export type MusicSheetCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MusicSheetCategories.
     */
    data: XOR<MusicSheetCategoryUpdateManyMutationInput, MusicSheetCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheetCategories to update
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * Limit how many MusicSheetCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheetCategory upsert
   */
  export type MusicSheetCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MusicSheetCategory to update in case it exists.
     */
    where: MusicSheetCategoryWhereUniqueInput
    /**
     * In case the MusicSheetCategory found by the `where` argument doesn't exist, create a new MusicSheetCategory with this data.
     */
    create: XOR<MusicSheetCategoryCreateInput, MusicSheetCategoryUncheckedCreateInput>
    /**
     * In case the MusicSheetCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicSheetCategoryUpdateInput, MusicSheetCategoryUncheckedUpdateInput>
  }

  /**
   * MusicSheetCategory delete
   */
  export type MusicSheetCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    /**
     * Filter which MusicSheetCategory to delete.
     */
    where: MusicSheetCategoryWhereUniqueInput
  }

  /**
   * MusicSheetCategory deleteMany
   */
  export type MusicSheetCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheetCategories to delete
     */
    where?: MusicSheetCategoryWhereInput
    /**
     * Limit how many MusicSheetCategories to delete.
     */
    limit?: number
  }

  /**
   * MusicSheetCategory.musicSheets
   */
  export type MusicSheetCategory$musicSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    where?: MusicSheetWhereInput
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    cursor?: MusicSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetScalarFieldEnum | MusicSheetScalarFieldEnum[]
  }

  /**
   * MusicSheetCategory.user
   */
  export type MusicSheetCategory$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MusicSheetCategory.musicSheetVersions
   */
  export type MusicSheetCategory$musicSheetVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    where?: MusicSheetVersionWhereInput
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    cursor?: MusicSheetVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
  }

  /**
   * MusicSheetCategory without action
   */
  export type MusicSheetCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MusicSheetInstrument
   */

  export type AggregateMusicSheetInstrument = {
    _count: MusicSheetInstrumentCountAggregateOutputType | null
    _min: MusicSheetInstrumentMinAggregateOutputType | null
    _max: MusicSheetInstrumentMaxAggregateOutputType | null
  }

  export type MusicSheetInstrumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MusicSheetInstrumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type MusicSheetInstrumentCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MusicSheetInstrumentMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MusicSheetInstrumentMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MusicSheetInstrumentCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MusicSheetInstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheetInstrument to aggregate.
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetInstruments to fetch.
     */
    orderBy?: MusicSheetInstrumentOrderByWithRelationInput | MusicSheetInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicSheetInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetInstruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicSheetInstruments
    **/
    _count?: true | MusicSheetInstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicSheetInstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicSheetInstrumentMaxAggregateInputType
  }

  export type GetMusicSheetInstrumentAggregateType<T extends MusicSheetInstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicSheetInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicSheetInstrument[P]>
      : GetScalarType<T[P], AggregateMusicSheetInstrument[P]>
  }




  export type MusicSheetInstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetInstrumentWhereInput
    orderBy?: MusicSheetInstrumentOrderByWithAggregationInput | MusicSheetInstrumentOrderByWithAggregationInput[]
    by: MusicSheetInstrumentScalarFieldEnum[] | MusicSheetInstrumentScalarFieldEnum
    having?: MusicSheetInstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicSheetInstrumentCountAggregateInputType | true
    _min?: MusicSheetInstrumentMinAggregateInputType
    _max?: MusicSheetInstrumentMaxAggregateInputType
  }

  export type MusicSheetInstrumentGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: MusicSheetInstrumentCountAggregateOutputType | null
    _min: MusicSheetInstrumentMinAggregateOutputType | null
    _max: MusicSheetInstrumentMaxAggregateOutputType | null
  }

  type GetMusicSheetInstrumentGroupByPayload<T extends MusicSheetInstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicSheetInstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicSheetInstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicSheetInstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], MusicSheetInstrumentGroupByOutputType[P]>
        }
      >
    >


  export type MusicSheetInstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    musicSheets?: boolean | MusicSheetInstrument$musicSheetsArgs<ExtArgs>
    user?: boolean | MusicSheetInstrument$userArgs<ExtArgs>
    musicSheetVersions?: boolean | MusicSheetInstrument$musicSheetVersionsArgs<ExtArgs>
    _count?: boolean | MusicSheetInstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetInstrument"]>

  export type MusicSheetInstrumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | MusicSheetInstrument$userArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetInstrument"]>

  export type MusicSheetInstrumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | MusicSheetInstrument$userArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetInstrument"]>

  export type MusicSheetInstrumentSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MusicSheetInstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["musicSheetInstrument"]>
  export type MusicSheetInstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheets?: boolean | MusicSheetInstrument$musicSheetsArgs<ExtArgs>
    user?: boolean | MusicSheetInstrument$userArgs<ExtArgs>
    musicSheetVersions?: boolean | MusicSheetInstrument$musicSheetVersionsArgs<ExtArgs>
    _count?: boolean | MusicSheetInstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MusicSheetInstrumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MusicSheetInstrument$userArgs<ExtArgs>
  }
  export type MusicSheetInstrumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MusicSheetInstrument$userArgs<ExtArgs>
  }

  export type $MusicSheetInstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicSheetInstrument"
    objects: {
      musicSheets: Prisma.$MusicSheetPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      musicSheetVersions: Prisma.$MusicSheetVersionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["musicSheetInstrument"]>
    composites: {}
  }

  type MusicSheetInstrumentGetPayload<S extends boolean | null | undefined | MusicSheetInstrumentDefaultArgs> = $Result.GetResult<Prisma.$MusicSheetInstrumentPayload, S>

  type MusicSheetInstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicSheetInstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicSheetInstrumentCountAggregateInputType | true
    }

  export interface MusicSheetInstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicSheetInstrument'], meta: { name: 'MusicSheetInstrument' } }
    /**
     * Find zero or one MusicSheetInstrument that matches the filter.
     * @param {MusicSheetInstrumentFindUniqueArgs} args - Arguments to find a MusicSheetInstrument
     * @example
     * // Get one MusicSheetInstrument
     * const musicSheetInstrument = await prisma.musicSheetInstrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicSheetInstrumentFindUniqueArgs>(args: SelectSubset<T, MusicSheetInstrumentFindUniqueArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicSheetInstrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicSheetInstrumentFindUniqueOrThrowArgs} args - Arguments to find a MusicSheetInstrument
     * @example
     * // Get one MusicSheetInstrument
     * const musicSheetInstrument = await prisma.musicSheetInstrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicSheetInstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicSheetInstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheetInstrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentFindFirstArgs} args - Arguments to find a MusicSheetInstrument
     * @example
     * // Get one MusicSheetInstrument
     * const musicSheetInstrument = await prisma.musicSheetInstrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicSheetInstrumentFindFirstArgs>(args?: SelectSubset<T, MusicSheetInstrumentFindFirstArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheetInstrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentFindFirstOrThrowArgs} args - Arguments to find a MusicSheetInstrument
     * @example
     * // Get one MusicSheetInstrument
     * const musicSheetInstrument = await prisma.musicSheetInstrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicSheetInstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicSheetInstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicSheetInstruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicSheetInstruments
     * const musicSheetInstruments = await prisma.musicSheetInstrument.findMany()
     * 
     * // Get first 10 MusicSheetInstruments
     * const musicSheetInstruments = await prisma.musicSheetInstrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicSheetInstrumentWithIdOnly = await prisma.musicSheetInstrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicSheetInstrumentFindManyArgs>(args?: SelectSubset<T, MusicSheetInstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicSheetInstrument.
     * @param {MusicSheetInstrumentCreateArgs} args - Arguments to create a MusicSheetInstrument.
     * @example
     * // Create one MusicSheetInstrument
     * const MusicSheetInstrument = await prisma.musicSheetInstrument.create({
     *   data: {
     *     // ... data to create a MusicSheetInstrument
     *   }
     * })
     * 
     */
    create<T extends MusicSheetInstrumentCreateArgs>(args: SelectSubset<T, MusicSheetInstrumentCreateArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicSheetInstruments.
     * @param {MusicSheetInstrumentCreateManyArgs} args - Arguments to create many MusicSheetInstruments.
     * @example
     * // Create many MusicSheetInstruments
     * const musicSheetInstrument = await prisma.musicSheetInstrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicSheetInstrumentCreateManyArgs>(args?: SelectSubset<T, MusicSheetInstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MusicSheetInstruments and returns the data saved in the database.
     * @param {MusicSheetInstrumentCreateManyAndReturnArgs} args - Arguments to create many MusicSheetInstruments.
     * @example
     * // Create many MusicSheetInstruments
     * const musicSheetInstrument = await prisma.musicSheetInstrument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MusicSheetInstruments and only return the `id`
     * const musicSheetInstrumentWithIdOnly = await prisma.musicSheetInstrument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicSheetInstrumentCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicSheetInstrumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MusicSheetInstrument.
     * @param {MusicSheetInstrumentDeleteArgs} args - Arguments to delete one MusicSheetInstrument.
     * @example
     * // Delete one MusicSheetInstrument
     * const MusicSheetInstrument = await prisma.musicSheetInstrument.delete({
     *   where: {
     *     // ... filter to delete one MusicSheetInstrument
     *   }
     * })
     * 
     */
    delete<T extends MusicSheetInstrumentDeleteArgs>(args: SelectSubset<T, MusicSheetInstrumentDeleteArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicSheetInstrument.
     * @param {MusicSheetInstrumentUpdateArgs} args - Arguments to update one MusicSheetInstrument.
     * @example
     * // Update one MusicSheetInstrument
     * const musicSheetInstrument = await prisma.musicSheetInstrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicSheetInstrumentUpdateArgs>(args: SelectSubset<T, MusicSheetInstrumentUpdateArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicSheetInstruments.
     * @param {MusicSheetInstrumentDeleteManyArgs} args - Arguments to filter MusicSheetInstruments to delete.
     * @example
     * // Delete a few MusicSheetInstruments
     * const { count } = await prisma.musicSheetInstrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicSheetInstrumentDeleteManyArgs>(args?: SelectSubset<T, MusicSheetInstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheetInstruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicSheetInstruments
     * const musicSheetInstrument = await prisma.musicSheetInstrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicSheetInstrumentUpdateManyArgs>(args: SelectSubset<T, MusicSheetInstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheetInstruments and returns the data updated in the database.
     * @param {MusicSheetInstrumentUpdateManyAndReturnArgs} args - Arguments to update many MusicSheetInstruments.
     * @example
     * // Update many MusicSheetInstruments
     * const musicSheetInstrument = await prisma.musicSheetInstrument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MusicSheetInstruments and only return the `id`
     * const musicSheetInstrumentWithIdOnly = await prisma.musicSheetInstrument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MusicSheetInstrumentUpdateManyAndReturnArgs>(args: SelectSubset<T, MusicSheetInstrumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MusicSheetInstrument.
     * @param {MusicSheetInstrumentUpsertArgs} args - Arguments to update or create a MusicSheetInstrument.
     * @example
     * // Update or create a MusicSheetInstrument
     * const musicSheetInstrument = await prisma.musicSheetInstrument.upsert({
     *   create: {
     *     // ... data to create a MusicSheetInstrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicSheetInstrument we want to update
     *   }
     * })
     */
    upsert<T extends MusicSheetInstrumentUpsertArgs>(args: SelectSubset<T, MusicSheetInstrumentUpsertArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MusicSheetInstruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentCountArgs} args - Arguments to filter MusicSheetInstruments to count.
     * @example
     * // Count the number of MusicSheetInstruments
     * const count = await prisma.musicSheetInstrument.count({
     *   where: {
     *     // ... the filter for the MusicSheetInstruments we want to count
     *   }
     * })
    **/
    count<T extends MusicSheetInstrumentCountArgs>(
      args?: Subset<T, MusicSheetInstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicSheetInstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicSheetInstrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicSheetInstrumentAggregateArgs>(args: Subset<T, MusicSheetInstrumentAggregateArgs>): Prisma.PrismaPromise<GetMusicSheetInstrumentAggregateType<T>>

    /**
     * Group by MusicSheetInstrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetInstrumentGroupByArgs} args - Group by arguments.
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
      T extends MusicSheetInstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicSheetInstrumentGroupByArgs['orderBy'] }
        : { orderBy?: MusicSheetInstrumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicSheetInstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicSheetInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicSheetInstrument model
   */
  readonly fields: MusicSheetInstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicSheetInstrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicSheetInstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    musicSheets<T extends MusicSheetInstrument$musicSheetsArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetInstrument$musicSheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends MusicSheetInstrument$userArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetInstrument$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    musicSheetVersions<T extends MusicSheetInstrument$musicSheetVersionsArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetInstrument$musicSheetVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MusicSheetInstrument model
   */
  interface MusicSheetInstrumentFieldRefs {
    readonly id: FieldRef<"MusicSheetInstrument", 'String'>
    readonly name: FieldRef<"MusicSheetInstrument", 'String'>
    readonly createdAt: FieldRef<"MusicSheetInstrument", 'DateTime'>
    readonly updatedAt: FieldRef<"MusicSheetInstrument", 'DateTime'>
    readonly userId: FieldRef<"MusicSheetInstrument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MusicSheetInstrument findUnique
   */
  export type MusicSheetInstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetInstrument to fetch.
     */
    where: MusicSheetInstrumentWhereUniqueInput
  }

  /**
   * MusicSheetInstrument findUniqueOrThrow
   */
  export type MusicSheetInstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetInstrument to fetch.
     */
    where: MusicSheetInstrumentWhereUniqueInput
  }

  /**
   * MusicSheetInstrument findFirst
   */
  export type MusicSheetInstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetInstrument to fetch.
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetInstruments to fetch.
     */
    orderBy?: MusicSheetInstrumentOrderByWithRelationInput | MusicSheetInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheetInstruments.
     */
    cursor?: MusicSheetInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetInstruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheetInstruments.
     */
    distinct?: MusicSheetInstrumentScalarFieldEnum | MusicSheetInstrumentScalarFieldEnum[]
  }

  /**
   * MusicSheetInstrument findFirstOrThrow
   */
  export type MusicSheetInstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetInstrument to fetch.
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetInstruments to fetch.
     */
    orderBy?: MusicSheetInstrumentOrderByWithRelationInput | MusicSheetInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheetInstruments.
     */
    cursor?: MusicSheetInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetInstruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheetInstruments.
     */
    distinct?: MusicSheetInstrumentScalarFieldEnum | MusicSheetInstrumentScalarFieldEnum[]
  }

  /**
   * MusicSheetInstrument findMany
   */
  export type MusicSheetInstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetInstruments to fetch.
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetInstruments to fetch.
     */
    orderBy?: MusicSheetInstrumentOrderByWithRelationInput | MusicSheetInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicSheetInstruments.
     */
    cursor?: MusicSheetInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetInstruments.
     */
    skip?: number
    distinct?: MusicSheetInstrumentScalarFieldEnum | MusicSheetInstrumentScalarFieldEnum[]
  }

  /**
   * MusicSheetInstrument create
   */
  export type MusicSheetInstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a MusicSheetInstrument.
     */
    data: XOR<MusicSheetInstrumentCreateInput, MusicSheetInstrumentUncheckedCreateInput>
  }

  /**
   * MusicSheetInstrument createMany
   */
  export type MusicSheetInstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicSheetInstruments.
     */
    data: MusicSheetInstrumentCreateManyInput | MusicSheetInstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicSheetInstrument createManyAndReturn
   */
  export type MusicSheetInstrumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * The data used to create many MusicSheetInstruments.
     */
    data: MusicSheetInstrumentCreateManyInput | MusicSheetInstrumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheetInstrument update
   */
  export type MusicSheetInstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a MusicSheetInstrument.
     */
    data: XOR<MusicSheetInstrumentUpdateInput, MusicSheetInstrumentUncheckedUpdateInput>
    /**
     * Choose, which MusicSheetInstrument to update.
     */
    where: MusicSheetInstrumentWhereUniqueInput
  }

  /**
   * MusicSheetInstrument updateMany
   */
  export type MusicSheetInstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicSheetInstruments.
     */
    data: XOR<MusicSheetInstrumentUpdateManyMutationInput, MusicSheetInstrumentUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheetInstruments to update
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * Limit how many MusicSheetInstruments to update.
     */
    limit?: number
  }

  /**
   * MusicSheetInstrument updateManyAndReturn
   */
  export type MusicSheetInstrumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * The data used to update MusicSheetInstruments.
     */
    data: XOR<MusicSheetInstrumentUpdateManyMutationInput, MusicSheetInstrumentUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheetInstruments to update
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * Limit how many MusicSheetInstruments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheetInstrument upsert
   */
  export type MusicSheetInstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the MusicSheetInstrument to update in case it exists.
     */
    where: MusicSheetInstrumentWhereUniqueInput
    /**
     * In case the MusicSheetInstrument found by the `where` argument doesn't exist, create a new MusicSheetInstrument with this data.
     */
    create: XOR<MusicSheetInstrumentCreateInput, MusicSheetInstrumentUncheckedCreateInput>
    /**
     * In case the MusicSheetInstrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicSheetInstrumentUpdateInput, MusicSheetInstrumentUncheckedUpdateInput>
  }

  /**
   * MusicSheetInstrument delete
   */
  export type MusicSheetInstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    /**
     * Filter which MusicSheetInstrument to delete.
     */
    where: MusicSheetInstrumentWhereUniqueInput
  }

  /**
   * MusicSheetInstrument deleteMany
   */
  export type MusicSheetInstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheetInstruments to delete
     */
    where?: MusicSheetInstrumentWhereInput
    /**
     * Limit how many MusicSheetInstruments to delete.
     */
    limit?: number
  }

  /**
   * MusicSheetInstrument.musicSheets
   */
  export type MusicSheetInstrument$musicSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    where?: MusicSheetWhereInput
    orderBy?: MusicSheetOrderByWithRelationInput | MusicSheetOrderByWithRelationInput[]
    cursor?: MusicSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetScalarFieldEnum | MusicSheetScalarFieldEnum[]
  }

  /**
   * MusicSheetInstrument.user
   */
  export type MusicSheetInstrument$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MusicSheetInstrument.musicSheetVersions
   */
  export type MusicSheetInstrument$musicSheetVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    where?: MusicSheetVersionWhereInput
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    cursor?: MusicSheetVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
  }

  /**
   * MusicSheetInstrument without action
   */
  export type MusicSheetInstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
  }


  /**
   * Model MusicSheetVersion
   */

  export type AggregateMusicSheetVersion = {
    _count: MusicSheetVersionCountAggregateOutputType | null
    _avg: MusicSheetVersionAvgAggregateOutputType | null
    _sum: MusicSheetVersionSumAggregateOutputType | null
    _min: MusicSheetVersionMinAggregateOutputType | null
    _max: MusicSheetVersionMaxAggregateOutputType | null
  }

  export type MusicSheetVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type MusicSheetVersionSumAggregateOutputType = {
    version: number | null
  }

  export type MusicSheetVersionMinAggregateOutputType = {
    id: string | null
    name: string | null
    file: string | null
    action: string | null
    musicSheetId: string | null
    userId: string | null
    createdAt: Date | null
    version: number | null
    categoryId: string | null
    instrumentId: string | null
  }

  export type MusicSheetVersionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    file: string | null
    action: string | null
    musicSheetId: string | null
    userId: string | null
    createdAt: Date | null
    version: number | null
    categoryId: string | null
    instrumentId: string | null
  }

  export type MusicSheetVersionCountAggregateOutputType = {
    id: number
    name: number
    file: number
    action: number
    musicSheetId: number
    userId: number
    createdAt: number
    version: number
    categoryId: number
    instrumentId: number
    _all: number
  }


  export type MusicSheetVersionAvgAggregateInputType = {
    version?: true
  }

  export type MusicSheetVersionSumAggregateInputType = {
    version?: true
  }

  export type MusicSheetVersionMinAggregateInputType = {
    id?: true
    name?: true
    file?: true
    action?: true
    musicSheetId?: true
    userId?: true
    createdAt?: true
    version?: true
    categoryId?: true
    instrumentId?: true
  }

  export type MusicSheetVersionMaxAggregateInputType = {
    id?: true
    name?: true
    file?: true
    action?: true
    musicSheetId?: true
    userId?: true
    createdAt?: true
    version?: true
    categoryId?: true
    instrumentId?: true
  }

  export type MusicSheetVersionCountAggregateInputType = {
    id?: true
    name?: true
    file?: true
    action?: true
    musicSheetId?: true
    userId?: true
    createdAt?: true
    version?: true
    categoryId?: true
    instrumentId?: true
    _all?: true
  }

  export type MusicSheetVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheetVersion to aggregate.
     */
    where?: MusicSheetVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetVersions to fetch.
     */
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicSheetVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MusicSheetVersions
    **/
    _count?: true | MusicSheetVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicSheetVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicSheetVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicSheetVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicSheetVersionMaxAggregateInputType
  }

  export type GetMusicSheetVersionAggregateType<T extends MusicSheetVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateMusicSheetVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusicSheetVersion[P]>
      : GetScalarType<T[P], AggregateMusicSheetVersion[P]>
  }




  export type MusicSheetVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicSheetVersionWhereInput
    orderBy?: MusicSheetVersionOrderByWithAggregationInput | MusicSheetVersionOrderByWithAggregationInput[]
    by: MusicSheetVersionScalarFieldEnum[] | MusicSheetVersionScalarFieldEnum
    having?: MusicSheetVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicSheetVersionCountAggregateInputType | true
    _avg?: MusicSheetVersionAvgAggregateInputType
    _sum?: MusicSheetVersionSumAggregateInputType
    _min?: MusicSheetVersionMinAggregateInputType
    _max?: MusicSheetVersionMaxAggregateInputType
  }

  export type MusicSheetVersionGroupByOutputType = {
    id: string
    name: string
    file: string
    action: string
    musicSheetId: string | null
    userId: string | null
    createdAt: Date
    version: number
    categoryId: string | null
    instrumentId: string | null
    _count: MusicSheetVersionCountAggregateOutputType | null
    _avg: MusicSheetVersionAvgAggregateOutputType | null
    _sum: MusicSheetVersionSumAggregateOutputType | null
    _min: MusicSheetVersionMinAggregateOutputType | null
    _max: MusicSheetVersionMaxAggregateOutputType | null
  }

  type GetMusicSheetVersionGroupByPayload<T extends MusicSheetVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicSheetVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicSheetVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicSheetVersionGroupByOutputType[P]>
            : GetScalarType<T[P], MusicSheetVersionGroupByOutputType[P]>
        }
      >
    >


  export type MusicSheetVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    action?: boolean
    musicSheetId?: boolean
    userId?: boolean
    createdAt?: boolean
    version?: boolean
    categoryId?: boolean
    instrumentId?: boolean
    musicSheet?: boolean | MusicSheetVersion$musicSheetArgs<ExtArgs>
    user?: boolean | MusicSheetVersion$userArgs<ExtArgs>
    category?: boolean | MusicSheetVersion$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheetVersion$instrumentArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetVersion"]>

  export type MusicSheetVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    action?: boolean
    musicSheetId?: boolean
    userId?: boolean
    createdAt?: boolean
    version?: boolean
    categoryId?: boolean
    instrumentId?: boolean
    musicSheet?: boolean | MusicSheetVersion$musicSheetArgs<ExtArgs>
    user?: boolean | MusicSheetVersion$userArgs<ExtArgs>
    category?: boolean | MusicSheetVersion$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheetVersion$instrumentArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetVersion"]>

  export type MusicSheetVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    file?: boolean
    action?: boolean
    musicSheetId?: boolean
    userId?: boolean
    createdAt?: boolean
    version?: boolean
    categoryId?: boolean
    instrumentId?: boolean
    musicSheet?: boolean | MusicSheetVersion$musicSheetArgs<ExtArgs>
    user?: boolean | MusicSheetVersion$userArgs<ExtArgs>
    category?: boolean | MusicSheetVersion$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheetVersion$instrumentArgs<ExtArgs>
  }, ExtArgs["result"]["musicSheetVersion"]>

  export type MusicSheetVersionSelectScalar = {
    id?: boolean
    name?: boolean
    file?: boolean
    action?: boolean
    musicSheetId?: boolean
    userId?: boolean
    createdAt?: boolean
    version?: boolean
    categoryId?: boolean
    instrumentId?: boolean
  }

  export type MusicSheetVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "file" | "action" | "musicSheetId" | "userId" | "createdAt" | "version" | "categoryId" | "instrumentId", ExtArgs["result"]["musicSheetVersion"]>
  export type MusicSheetVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheet?: boolean | MusicSheetVersion$musicSheetArgs<ExtArgs>
    user?: boolean | MusicSheetVersion$userArgs<ExtArgs>
    category?: boolean | MusicSheetVersion$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheetVersion$instrumentArgs<ExtArgs>
  }
  export type MusicSheetVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheet?: boolean | MusicSheetVersion$musicSheetArgs<ExtArgs>
    user?: boolean | MusicSheetVersion$userArgs<ExtArgs>
    category?: boolean | MusicSheetVersion$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheetVersion$instrumentArgs<ExtArgs>
  }
  export type MusicSheetVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicSheet?: boolean | MusicSheetVersion$musicSheetArgs<ExtArgs>
    user?: boolean | MusicSheetVersion$userArgs<ExtArgs>
    category?: boolean | MusicSheetVersion$categoryArgs<ExtArgs>
    instrument?: boolean | MusicSheetVersion$instrumentArgs<ExtArgs>
  }

  export type $MusicSheetVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MusicSheetVersion"
    objects: {
      musicSheet: Prisma.$MusicSheetPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      category: Prisma.$MusicSheetCategoryPayload<ExtArgs> | null
      instrument: Prisma.$MusicSheetInstrumentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      file: string
      action: string
      musicSheetId: string | null
      userId: string | null
      createdAt: Date
      version: number
      categoryId: string | null
      instrumentId: string | null
    }, ExtArgs["result"]["musicSheetVersion"]>
    composites: {}
  }

  type MusicSheetVersionGetPayload<S extends boolean | null | undefined | MusicSheetVersionDefaultArgs> = $Result.GetResult<Prisma.$MusicSheetVersionPayload, S>

  type MusicSheetVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicSheetVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicSheetVersionCountAggregateInputType | true
    }

  export interface MusicSheetVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MusicSheetVersion'], meta: { name: 'MusicSheetVersion' } }
    /**
     * Find zero or one MusicSheetVersion that matches the filter.
     * @param {MusicSheetVersionFindUniqueArgs} args - Arguments to find a MusicSheetVersion
     * @example
     * // Get one MusicSheetVersion
     * const musicSheetVersion = await prisma.musicSheetVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicSheetVersionFindUniqueArgs>(args: SelectSubset<T, MusicSheetVersionFindUniqueArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MusicSheetVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicSheetVersionFindUniqueOrThrowArgs} args - Arguments to find a MusicSheetVersion
     * @example
     * // Get one MusicSheetVersion
     * const musicSheetVersion = await prisma.musicSheetVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicSheetVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicSheetVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheetVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionFindFirstArgs} args - Arguments to find a MusicSheetVersion
     * @example
     * // Get one MusicSheetVersion
     * const musicSheetVersion = await prisma.musicSheetVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicSheetVersionFindFirstArgs>(args?: SelectSubset<T, MusicSheetVersionFindFirstArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MusicSheetVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionFindFirstOrThrowArgs} args - Arguments to find a MusicSheetVersion
     * @example
     * // Get one MusicSheetVersion
     * const musicSheetVersion = await prisma.musicSheetVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicSheetVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicSheetVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MusicSheetVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MusicSheetVersions
     * const musicSheetVersions = await prisma.musicSheetVersion.findMany()
     * 
     * // Get first 10 MusicSheetVersions
     * const musicSheetVersions = await prisma.musicSheetVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicSheetVersionWithIdOnly = await prisma.musicSheetVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicSheetVersionFindManyArgs>(args?: SelectSubset<T, MusicSheetVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MusicSheetVersion.
     * @param {MusicSheetVersionCreateArgs} args - Arguments to create a MusicSheetVersion.
     * @example
     * // Create one MusicSheetVersion
     * const MusicSheetVersion = await prisma.musicSheetVersion.create({
     *   data: {
     *     // ... data to create a MusicSheetVersion
     *   }
     * })
     * 
     */
    create<T extends MusicSheetVersionCreateArgs>(args: SelectSubset<T, MusicSheetVersionCreateArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MusicSheetVersions.
     * @param {MusicSheetVersionCreateManyArgs} args - Arguments to create many MusicSheetVersions.
     * @example
     * // Create many MusicSheetVersions
     * const musicSheetVersion = await prisma.musicSheetVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicSheetVersionCreateManyArgs>(args?: SelectSubset<T, MusicSheetVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MusicSheetVersions and returns the data saved in the database.
     * @param {MusicSheetVersionCreateManyAndReturnArgs} args - Arguments to create many MusicSheetVersions.
     * @example
     * // Create many MusicSheetVersions
     * const musicSheetVersion = await prisma.musicSheetVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MusicSheetVersions and only return the `id`
     * const musicSheetVersionWithIdOnly = await prisma.musicSheetVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicSheetVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicSheetVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MusicSheetVersion.
     * @param {MusicSheetVersionDeleteArgs} args - Arguments to delete one MusicSheetVersion.
     * @example
     * // Delete one MusicSheetVersion
     * const MusicSheetVersion = await prisma.musicSheetVersion.delete({
     *   where: {
     *     // ... filter to delete one MusicSheetVersion
     *   }
     * })
     * 
     */
    delete<T extends MusicSheetVersionDeleteArgs>(args: SelectSubset<T, MusicSheetVersionDeleteArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MusicSheetVersion.
     * @param {MusicSheetVersionUpdateArgs} args - Arguments to update one MusicSheetVersion.
     * @example
     * // Update one MusicSheetVersion
     * const musicSheetVersion = await prisma.musicSheetVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicSheetVersionUpdateArgs>(args: SelectSubset<T, MusicSheetVersionUpdateArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MusicSheetVersions.
     * @param {MusicSheetVersionDeleteManyArgs} args - Arguments to filter MusicSheetVersions to delete.
     * @example
     * // Delete a few MusicSheetVersions
     * const { count } = await prisma.musicSheetVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicSheetVersionDeleteManyArgs>(args?: SelectSubset<T, MusicSheetVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheetVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MusicSheetVersions
     * const musicSheetVersion = await prisma.musicSheetVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicSheetVersionUpdateManyArgs>(args: SelectSubset<T, MusicSheetVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MusicSheetVersions and returns the data updated in the database.
     * @param {MusicSheetVersionUpdateManyAndReturnArgs} args - Arguments to update many MusicSheetVersions.
     * @example
     * // Update many MusicSheetVersions
     * const musicSheetVersion = await prisma.musicSheetVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MusicSheetVersions and only return the `id`
     * const musicSheetVersionWithIdOnly = await prisma.musicSheetVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MusicSheetVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, MusicSheetVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MusicSheetVersion.
     * @param {MusicSheetVersionUpsertArgs} args - Arguments to update or create a MusicSheetVersion.
     * @example
     * // Update or create a MusicSheetVersion
     * const musicSheetVersion = await prisma.musicSheetVersion.upsert({
     *   create: {
     *     // ... data to create a MusicSheetVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MusicSheetVersion we want to update
     *   }
     * })
     */
    upsert<T extends MusicSheetVersionUpsertArgs>(args: SelectSubset<T, MusicSheetVersionUpsertArgs<ExtArgs>>): Prisma__MusicSheetVersionClient<$Result.GetResult<Prisma.$MusicSheetVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MusicSheetVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionCountArgs} args - Arguments to filter MusicSheetVersions to count.
     * @example
     * // Count the number of MusicSheetVersions
     * const count = await prisma.musicSheetVersion.count({
     *   where: {
     *     // ... the filter for the MusicSheetVersions we want to count
     *   }
     * })
    **/
    count<T extends MusicSheetVersionCountArgs>(
      args?: Subset<T, MusicSheetVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicSheetVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MusicSheetVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicSheetVersionAggregateArgs>(args: Subset<T, MusicSheetVersionAggregateArgs>): Prisma.PrismaPromise<GetMusicSheetVersionAggregateType<T>>

    /**
     * Group by MusicSheetVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicSheetVersionGroupByArgs} args - Group by arguments.
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
      T extends MusicSheetVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicSheetVersionGroupByArgs['orderBy'] }
        : { orderBy?: MusicSheetVersionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MusicSheetVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicSheetVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MusicSheetVersion model
   */
  readonly fields: MusicSheetVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MusicSheetVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicSheetVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    musicSheet<T extends MusicSheetVersion$musicSheetArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetVersion$musicSheetArgs<ExtArgs>>): Prisma__MusicSheetClient<$Result.GetResult<Prisma.$MusicSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends MusicSheetVersion$userArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetVersion$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends MusicSheetVersion$categoryArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetVersion$categoryArgs<ExtArgs>>): Prisma__MusicSheetCategoryClient<$Result.GetResult<Prisma.$MusicSheetCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    instrument<T extends MusicSheetVersion$instrumentArgs<ExtArgs> = {}>(args?: Subset<T, MusicSheetVersion$instrumentArgs<ExtArgs>>): Prisma__MusicSheetInstrumentClient<$Result.GetResult<Prisma.$MusicSheetInstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MusicSheetVersion model
   */
  interface MusicSheetVersionFieldRefs {
    readonly id: FieldRef<"MusicSheetVersion", 'String'>
    readonly name: FieldRef<"MusicSheetVersion", 'String'>
    readonly file: FieldRef<"MusicSheetVersion", 'String'>
    readonly action: FieldRef<"MusicSheetVersion", 'String'>
    readonly musicSheetId: FieldRef<"MusicSheetVersion", 'String'>
    readonly userId: FieldRef<"MusicSheetVersion", 'String'>
    readonly createdAt: FieldRef<"MusicSheetVersion", 'DateTime'>
    readonly version: FieldRef<"MusicSheetVersion", 'Int'>
    readonly categoryId: FieldRef<"MusicSheetVersion", 'String'>
    readonly instrumentId: FieldRef<"MusicSheetVersion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MusicSheetVersion findUnique
   */
  export type MusicSheetVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetVersion to fetch.
     */
    where: MusicSheetVersionWhereUniqueInput
  }

  /**
   * MusicSheetVersion findUniqueOrThrow
   */
  export type MusicSheetVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetVersion to fetch.
     */
    where: MusicSheetVersionWhereUniqueInput
  }

  /**
   * MusicSheetVersion findFirst
   */
  export type MusicSheetVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetVersion to fetch.
     */
    where?: MusicSheetVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetVersions to fetch.
     */
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheetVersions.
     */
    cursor?: MusicSheetVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheetVersions.
     */
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
  }

  /**
   * MusicSheetVersion findFirstOrThrow
   */
  export type MusicSheetVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetVersion to fetch.
     */
    where?: MusicSheetVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetVersions to fetch.
     */
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MusicSheetVersions.
     */
    cursor?: MusicSheetVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MusicSheetVersions.
     */
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
  }

  /**
   * MusicSheetVersion findMany
   */
  export type MusicSheetVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * Filter, which MusicSheetVersions to fetch.
     */
    where?: MusicSheetVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MusicSheetVersions to fetch.
     */
    orderBy?: MusicSheetVersionOrderByWithRelationInput | MusicSheetVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MusicSheetVersions.
     */
    cursor?: MusicSheetVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MusicSheetVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MusicSheetVersions.
     */
    skip?: number
    distinct?: MusicSheetVersionScalarFieldEnum | MusicSheetVersionScalarFieldEnum[]
  }

  /**
   * MusicSheetVersion create
   */
  export type MusicSheetVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a MusicSheetVersion.
     */
    data: XOR<MusicSheetVersionCreateInput, MusicSheetVersionUncheckedCreateInput>
  }

  /**
   * MusicSheetVersion createMany
   */
  export type MusicSheetVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MusicSheetVersions.
     */
    data: MusicSheetVersionCreateManyInput | MusicSheetVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MusicSheetVersion createManyAndReturn
   */
  export type MusicSheetVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * The data used to create many MusicSheetVersions.
     */
    data: MusicSheetVersionCreateManyInput | MusicSheetVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheetVersion update
   */
  export type MusicSheetVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a MusicSheetVersion.
     */
    data: XOR<MusicSheetVersionUpdateInput, MusicSheetVersionUncheckedUpdateInput>
    /**
     * Choose, which MusicSheetVersion to update.
     */
    where: MusicSheetVersionWhereUniqueInput
  }

  /**
   * MusicSheetVersion updateMany
   */
  export type MusicSheetVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MusicSheetVersions.
     */
    data: XOR<MusicSheetVersionUpdateManyMutationInput, MusicSheetVersionUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheetVersions to update
     */
    where?: MusicSheetVersionWhereInput
    /**
     * Limit how many MusicSheetVersions to update.
     */
    limit?: number
  }

  /**
   * MusicSheetVersion updateManyAndReturn
   */
  export type MusicSheetVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * The data used to update MusicSheetVersions.
     */
    data: XOR<MusicSheetVersionUpdateManyMutationInput, MusicSheetVersionUncheckedUpdateManyInput>
    /**
     * Filter which MusicSheetVersions to update
     */
    where?: MusicSheetVersionWhereInput
    /**
     * Limit how many MusicSheetVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MusicSheetVersion upsert
   */
  export type MusicSheetVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the MusicSheetVersion to update in case it exists.
     */
    where: MusicSheetVersionWhereUniqueInput
    /**
     * In case the MusicSheetVersion found by the `where` argument doesn't exist, create a new MusicSheetVersion with this data.
     */
    create: XOR<MusicSheetVersionCreateInput, MusicSheetVersionUncheckedCreateInput>
    /**
     * In case the MusicSheetVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicSheetVersionUpdateInput, MusicSheetVersionUncheckedUpdateInput>
  }

  /**
   * MusicSheetVersion delete
   */
  export type MusicSheetVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
    /**
     * Filter which MusicSheetVersion to delete.
     */
    where: MusicSheetVersionWhereUniqueInput
  }

  /**
   * MusicSheetVersion deleteMany
   */
  export type MusicSheetVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MusicSheetVersions to delete
     */
    where?: MusicSheetVersionWhereInput
    /**
     * Limit how many MusicSheetVersions to delete.
     */
    limit?: number
  }

  /**
   * MusicSheetVersion.musicSheet
   */
  export type MusicSheetVersion$musicSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheet
     */
    select?: MusicSheetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheet
     */
    omit?: MusicSheetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInclude<ExtArgs> | null
    where?: MusicSheetWhereInput
  }

  /**
   * MusicSheetVersion.user
   */
  export type MusicSheetVersion$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MusicSheetVersion.category
   */
  export type MusicSheetVersion$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetCategory
     */
    select?: MusicSheetCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetCategory
     */
    omit?: MusicSheetCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetCategoryInclude<ExtArgs> | null
    where?: MusicSheetCategoryWhereInput
  }

  /**
   * MusicSheetVersion.instrument
   */
  export type MusicSheetVersion$instrumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetInstrument
     */
    select?: MusicSheetInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetInstrument
     */
    omit?: MusicSheetInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetInstrumentInclude<ExtArgs> | null
    where?: MusicSheetInstrumentWhereInput
  }

  /**
   * MusicSheetVersion without action
   */
  export type MusicSheetVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicSheetVersion
     */
    select?: MusicSheetVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MusicSheetVersion
     */
    omit?: MusicSheetVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicSheetVersionInclude<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MusicSheetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    file: 'file',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId',
    instrumentId: 'instrumentId'
  };

  export type MusicSheetScalarFieldEnum = (typeof MusicSheetScalarFieldEnum)[keyof typeof MusicSheetScalarFieldEnum]


  export const MusicSheetCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MusicSheetCategoryScalarFieldEnum = (typeof MusicSheetCategoryScalarFieldEnum)[keyof typeof MusicSheetCategoryScalarFieldEnum]


  export const MusicSheetInstrumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MusicSheetInstrumentScalarFieldEnum = (typeof MusicSheetInstrumentScalarFieldEnum)[keyof typeof MusicSheetInstrumentScalarFieldEnum]


  export const MusicSheetVersionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    file: 'file',
    action: 'action',
    musicSheetId: 'musicSheetId',
    userId: 'userId',
    createdAt: 'createdAt',
    version: 'version',
    categoryId: 'categoryId',
    instrumentId: 'instrumentId'
  };

  export type MusicSheetVersionScalarFieldEnum = (typeof MusicSheetVersionScalarFieldEnum)[keyof typeof MusicSheetVersionScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    musicSheets?: MusicSheetListRelationFilter
    musicSheetCategories?: MusicSheetCategoryListRelationFilter
    musicSheetInstruments?: MusicSheetInstrumentListRelationFilter
    musicSheetVersions?: MusicSheetVersionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    musicSheets?: MusicSheetOrderByRelationAggregateInput
    musicSheetCategories?: MusicSheetCategoryOrderByRelationAggregateInput
    musicSheetInstruments?: MusicSheetInstrumentOrderByRelationAggregateInput
    musicSheetVersions?: MusicSheetVersionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    musicSheets?: MusicSheetListRelationFilter
    musicSheetCategories?: MusicSheetCategoryListRelationFilter
    musicSheetInstruments?: MusicSheetInstrumentListRelationFilter
    musicSheetVersions?: MusicSheetVersionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MusicSheetWhereInput = {
    AND?: MusicSheetWhereInput | MusicSheetWhereInput[]
    OR?: MusicSheetWhereInput[]
    NOT?: MusicSheetWhereInput | MusicSheetWhereInput[]
    id?: StringFilter<"MusicSheet"> | string
    name?: StringFilter<"MusicSheet"> | string
    file?: StringFilter<"MusicSheet"> | string
    createdAt?: DateTimeFilter<"MusicSheet"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheet"> | Date | string
    userId?: StringFilter<"MusicSheet"> | string
    categoryId?: StringNullableFilter<"MusicSheet"> | string | null
    instrumentId?: StringNullableFilter<"MusicSheet"> | string | null
    versions?: MusicSheetVersionListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<MusicSheetCategoryNullableScalarRelationFilter, MusicSheetCategoryWhereInput> | null
    instrument?: XOR<MusicSheetInstrumentNullableScalarRelationFilter, MusicSheetInstrumentWhereInput> | null
  }

  export type MusicSheetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    instrumentId?: SortOrderInput | SortOrder
    versions?: MusicSheetVersionOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    category?: MusicSheetCategoryOrderByWithRelationInput
    instrument?: MusicSheetInstrumentOrderByWithRelationInput
  }

  export type MusicSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MusicSheetWhereInput | MusicSheetWhereInput[]
    OR?: MusicSheetWhereInput[]
    NOT?: MusicSheetWhereInput | MusicSheetWhereInput[]
    name?: StringFilter<"MusicSheet"> | string
    file?: StringFilter<"MusicSheet"> | string
    createdAt?: DateTimeFilter<"MusicSheet"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheet"> | Date | string
    userId?: StringFilter<"MusicSheet"> | string
    categoryId?: StringNullableFilter<"MusicSheet"> | string | null
    instrumentId?: StringNullableFilter<"MusicSheet"> | string | null
    versions?: MusicSheetVersionListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<MusicSheetCategoryNullableScalarRelationFilter, MusicSheetCategoryWhereInput> | null
    instrument?: XOR<MusicSheetInstrumentNullableScalarRelationFilter, MusicSheetInstrumentWhereInput> | null
  }, "id">

  export type MusicSheetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    instrumentId?: SortOrderInput | SortOrder
    _count?: MusicSheetCountOrderByAggregateInput
    _max?: MusicSheetMaxOrderByAggregateInput
    _min?: MusicSheetMinOrderByAggregateInput
  }

  export type MusicSheetScalarWhereWithAggregatesInput = {
    AND?: MusicSheetScalarWhereWithAggregatesInput | MusicSheetScalarWhereWithAggregatesInput[]
    OR?: MusicSheetScalarWhereWithAggregatesInput[]
    NOT?: MusicSheetScalarWhereWithAggregatesInput | MusicSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MusicSheet"> | string
    name?: StringWithAggregatesFilter<"MusicSheet"> | string
    file?: StringWithAggregatesFilter<"MusicSheet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MusicSheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MusicSheet"> | Date | string
    userId?: StringWithAggregatesFilter<"MusicSheet"> | string
    categoryId?: StringNullableWithAggregatesFilter<"MusicSheet"> | string | null
    instrumentId?: StringNullableWithAggregatesFilter<"MusicSheet"> | string | null
  }

  export type MusicSheetCategoryWhereInput = {
    AND?: MusicSheetCategoryWhereInput | MusicSheetCategoryWhereInput[]
    OR?: MusicSheetCategoryWhereInput[]
    NOT?: MusicSheetCategoryWhereInput | MusicSheetCategoryWhereInput[]
    id?: StringFilter<"MusicSheetCategory"> | string
    name?: StringFilter<"MusicSheetCategory"> | string
    createdAt?: DateTimeFilter<"MusicSheetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheetCategory"> | Date | string
    userId?: StringNullableFilter<"MusicSheetCategory"> | string | null
    musicSheets?: MusicSheetListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    musicSheetVersions?: MusicSheetVersionListRelationFilter
  }

  export type MusicSheetCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    musicSheets?: MusicSheetOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    musicSheetVersions?: MusicSheetVersionOrderByRelationAggregateInput
  }

  export type MusicSheetCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MusicSheetCategoryWhereInput | MusicSheetCategoryWhereInput[]
    OR?: MusicSheetCategoryWhereInput[]
    NOT?: MusicSheetCategoryWhereInput | MusicSheetCategoryWhereInput[]
    name?: StringFilter<"MusicSheetCategory"> | string
    createdAt?: DateTimeFilter<"MusicSheetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheetCategory"> | Date | string
    userId?: StringNullableFilter<"MusicSheetCategory"> | string | null
    musicSheets?: MusicSheetListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    musicSheetVersions?: MusicSheetVersionListRelationFilter
  }, "id">

  export type MusicSheetCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: MusicSheetCategoryCountOrderByAggregateInput
    _max?: MusicSheetCategoryMaxOrderByAggregateInput
    _min?: MusicSheetCategoryMinOrderByAggregateInput
  }

  export type MusicSheetCategoryScalarWhereWithAggregatesInput = {
    AND?: MusicSheetCategoryScalarWhereWithAggregatesInput | MusicSheetCategoryScalarWhereWithAggregatesInput[]
    OR?: MusicSheetCategoryScalarWhereWithAggregatesInput[]
    NOT?: MusicSheetCategoryScalarWhereWithAggregatesInput | MusicSheetCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MusicSheetCategory"> | string
    name?: StringWithAggregatesFilter<"MusicSheetCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MusicSheetCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MusicSheetCategory"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"MusicSheetCategory"> | string | null
  }

  export type MusicSheetInstrumentWhereInput = {
    AND?: MusicSheetInstrumentWhereInput | MusicSheetInstrumentWhereInput[]
    OR?: MusicSheetInstrumentWhereInput[]
    NOT?: MusicSheetInstrumentWhereInput | MusicSheetInstrumentWhereInput[]
    id?: StringFilter<"MusicSheetInstrument"> | string
    name?: StringFilter<"MusicSheetInstrument"> | string
    createdAt?: DateTimeFilter<"MusicSheetInstrument"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheetInstrument"> | Date | string
    userId?: StringNullableFilter<"MusicSheetInstrument"> | string | null
    musicSheets?: MusicSheetListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    musicSheetVersions?: MusicSheetVersionListRelationFilter
  }

  export type MusicSheetInstrumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    musicSheets?: MusicSheetOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    musicSheetVersions?: MusicSheetVersionOrderByRelationAggregateInput
  }

  export type MusicSheetInstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MusicSheetInstrumentWhereInput | MusicSheetInstrumentWhereInput[]
    OR?: MusicSheetInstrumentWhereInput[]
    NOT?: MusicSheetInstrumentWhereInput | MusicSheetInstrumentWhereInput[]
    name?: StringFilter<"MusicSheetInstrument"> | string
    createdAt?: DateTimeFilter<"MusicSheetInstrument"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheetInstrument"> | Date | string
    userId?: StringNullableFilter<"MusicSheetInstrument"> | string | null
    musicSheets?: MusicSheetListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    musicSheetVersions?: MusicSheetVersionListRelationFilter
  }, "id">

  export type MusicSheetInstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: MusicSheetInstrumentCountOrderByAggregateInput
    _max?: MusicSheetInstrumentMaxOrderByAggregateInput
    _min?: MusicSheetInstrumentMinOrderByAggregateInput
  }

  export type MusicSheetInstrumentScalarWhereWithAggregatesInput = {
    AND?: MusicSheetInstrumentScalarWhereWithAggregatesInput | MusicSheetInstrumentScalarWhereWithAggregatesInput[]
    OR?: MusicSheetInstrumentScalarWhereWithAggregatesInput[]
    NOT?: MusicSheetInstrumentScalarWhereWithAggregatesInput | MusicSheetInstrumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MusicSheetInstrument"> | string
    name?: StringWithAggregatesFilter<"MusicSheetInstrument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MusicSheetInstrument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MusicSheetInstrument"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"MusicSheetInstrument"> | string | null
  }

  export type MusicSheetVersionWhereInput = {
    AND?: MusicSheetVersionWhereInput | MusicSheetVersionWhereInput[]
    OR?: MusicSheetVersionWhereInput[]
    NOT?: MusicSheetVersionWhereInput | MusicSheetVersionWhereInput[]
    id?: StringFilter<"MusicSheetVersion"> | string
    name?: StringFilter<"MusicSheetVersion"> | string
    file?: StringFilter<"MusicSheetVersion"> | string
    action?: StringFilter<"MusicSheetVersion"> | string
    musicSheetId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    userId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    createdAt?: DateTimeFilter<"MusicSheetVersion"> | Date | string
    version?: IntFilter<"MusicSheetVersion"> | number
    categoryId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    instrumentId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    musicSheet?: XOR<MusicSheetNullableScalarRelationFilter, MusicSheetWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<MusicSheetCategoryNullableScalarRelationFilter, MusicSheetCategoryWhereInput> | null
    instrument?: XOR<MusicSheetInstrumentNullableScalarRelationFilter, MusicSheetInstrumentWhereInput> | null
  }

  export type MusicSheetVersionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    action?: SortOrder
    musicSheetId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    instrumentId?: SortOrderInput | SortOrder
    musicSheet?: MusicSheetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    category?: MusicSheetCategoryOrderByWithRelationInput
    instrument?: MusicSheetInstrumentOrderByWithRelationInput
  }

  export type MusicSheetVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MusicSheetVersionWhereInput | MusicSheetVersionWhereInput[]
    OR?: MusicSheetVersionWhereInput[]
    NOT?: MusicSheetVersionWhereInput | MusicSheetVersionWhereInput[]
    name?: StringFilter<"MusicSheetVersion"> | string
    file?: StringFilter<"MusicSheetVersion"> | string
    action?: StringFilter<"MusicSheetVersion"> | string
    musicSheetId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    userId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    createdAt?: DateTimeFilter<"MusicSheetVersion"> | Date | string
    version?: IntFilter<"MusicSheetVersion"> | number
    categoryId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    instrumentId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    musicSheet?: XOR<MusicSheetNullableScalarRelationFilter, MusicSheetWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    category?: XOR<MusicSheetCategoryNullableScalarRelationFilter, MusicSheetCategoryWhereInput> | null
    instrument?: XOR<MusicSheetInstrumentNullableScalarRelationFilter, MusicSheetInstrumentWhereInput> | null
  }, "id">

  export type MusicSheetVersionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    action?: SortOrder
    musicSheetId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    instrumentId?: SortOrderInput | SortOrder
    _count?: MusicSheetVersionCountOrderByAggregateInput
    _avg?: MusicSheetVersionAvgOrderByAggregateInput
    _max?: MusicSheetVersionMaxOrderByAggregateInput
    _min?: MusicSheetVersionMinOrderByAggregateInput
    _sum?: MusicSheetVersionSumOrderByAggregateInput
  }

  export type MusicSheetVersionScalarWhereWithAggregatesInput = {
    AND?: MusicSheetVersionScalarWhereWithAggregatesInput | MusicSheetVersionScalarWhereWithAggregatesInput[]
    OR?: MusicSheetVersionScalarWhereWithAggregatesInput[]
    NOT?: MusicSheetVersionScalarWhereWithAggregatesInput | MusicSheetVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MusicSheetVersion"> | string
    name?: StringWithAggregatesFilter<"MusicSheetVersion"> | string
    file?: StringWithAggregatesFilter<"MusicSheetVersion"> | string
    action?: StringWithAggregatesFilter<"MusicSheetVersion"> | string
    musicSheetId?: StringNullableWithAggregatesFilter<"MusicSheetVersion"> | string | null
    userId?: StringNullableWithAggregatesFilter<"MusicSheetVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MusicSheetVersion"> | Date | string
    version?: IntWithAggregatesFilter<"MusicSheetVersion"> | number
    categoryId?: StringNullableWithAggregatesFilter<"MusicSheetVersion"> | string | null
    instrumentId?: StringNullableWithAggregatesFilter<"MusicSheetVersion"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutUserInput
    musicSheetCategories?: MusicSheetCategoryCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutUserInput
    musicSheetCategories?: MusicSheetCategoryUncheckedCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutUserNestedInput
    musicSheetCategories?: MusicSheetCategoryUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutUserNestedInput
    musicSheetCategories?: MusicSheetCategoryUncheckedUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicSheetCreateInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MusicSheetVersionCreateNestedManyWithoutMusicSheetInput
    user?: UserCreateNestedOneWithoutMusicSheetsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetsInput
  }

  export type MusicSheetUncheckedCreateInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    instrumentId?: string | null
    versions?: MusicSheetVersionUncheckedCreateNestedManyWithoutMusicSheetInput
  }

  export type MusicSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MusicSheetVersionUpdateManyWithoutMusicSheetNestedInput
    user?: UserUpdateOneWithoutMusicSheetsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetsNestedInput
  }

  export type MusicSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetNestedInput
  }

  export type MusicSheetCreateManyInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutCategoryInput
    user?: UserCreateNestedOneWithoutMusicSheetCategoriesInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutCategoryInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutCategoryNestedInput
    user?: UserUpdateOneWithoutMusicSheetCategoriesNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutCategoryNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type MusicSheetCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicSheetCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetInstrumentCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutInstrumentInput
    user?: UserCreateNestedOneWithoutMusicSheetInstrumentsInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutInstrumentInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutInstrumentNestedInput
    user?: UserUpdateOneWithoutMusicSheetInstrumentsNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetInstrumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutInstrumentNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetInstrumentCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type MusicSheetInstrumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicSheetInstrumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionCreateInput = {
    id?: string
    name: string
    file: string
    action: string
    createdAt?: Date | string
    version: number
    musicSheet?: MusicSheetCreateNestedOneWithoutVersionsInput
    user?: UserCreateNestedOneWithoutMusicSheetVersionsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetVersionsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetVersionsInput
  }

  export type MusicSheetVersionUncheckedCreateInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    userId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    musicSheet?: MusicSheetUpdateOneWithoutVersionsNestedInput
    user?: UserUpdateOneWithoutMusicSheetVersionsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetVersionsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetVersionsNestedInput
  }

  export type MusicSheetVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionCreateManyInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    userId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
  }

  export type MusicSheetVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type MusicSheetListRelationFilter = {
    every?: MusicSheetWhereInput
    some?: MusicSheetWhereInput
    none?: MusicSheetWhereInput
  }

  export type MusicSheetCategoryListRelationFilter = {
    every?: MusicSheetCategoryWhereInput
    some?: MusicSheetCategoryWhereInput
    none?: MusicSheetCategoryWhereInput
  }

  export type MusicSheetInstrumentListRelationFilter = {
    every?: MusicSheetInstrumentWhereInput
    some?: MusicSheetInstrumentWhereInput
    none?: MusicSheetInstrumentWhereInput
  }

  export type MusicSheetVersionListRelationFilter = {
    every?: MusicSheetVersionWhereInput
    some?: MusicSheetVersionWhereInput
    none?: MusicSheetVersionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MusicSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MusicSheetCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MusicSheetInstrumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MusicSheetVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MusicSheetCategoryNullableScalarRelationFilter = {
    is?: MusicSheetCategoryWhereInput | null
    isNot?: MusicSheetCategoryWhereInput | null
  }

  export type MusicSheetInstrumentNullableScalarRelationFilter = {
    is?: MusicSheetInstrumentWhereInput | null
    isNot?: MusicSheetInstrumentWhereInput | null
  }

  export type MusicSheetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    instrumentId?: SortOrder
  }

  export type MusicSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    instrumentId?: SortOrder
  }

  export type MusicSheetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    instrumentId?: SortOrder
  }

  export type MusicSheetCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MusicSheetCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MusicSheetCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MusicSheetInstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MusicSheetInstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MusicSheetInstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MusicSheetNullableScalarRelationFilter = {
    is?: MusicSheetWhereInput | null
    isNot?: MusicSheetWhereInput | null
  }

  export type MusicSheetVersionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    action?: SortOrder
    musicSheetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    categoryId?: SortOrder
    instrumentId?: SortOrder
  }

  export type MusicSheetVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type MusicSheetVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    action?: SortOrder
    musicSheetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    categoryId?: SortOrder
    instrumentId?: SortOrder
  }

  export type MusicSheetVersionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    action?: SortOrder
    musicSheetId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    version?: SortOrder
    categoryId?: SortOrder
    instrumentId?: SortOrder
  }

  export type MusicSheetVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MusicSheetCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetCreateWithoutUserInput, MusicSheetUncheckedCreateWithoutUserInput> | MusicSheetCreateWithoutUserInput[] | MusicSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutUserInput | MusicSheetCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetCreateManyUserInputEnvelope
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
  }

  export type MusicSheetCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutUserInput, MusicSheetCategoryUncheckedCreateWithoutUserInput> | MusicSheetCategoryCreateWithoutUserInput[] | MusicSheetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutUserInput | MusicSheetCategoryCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetCategoryCreateManyUserInputEnvelope
    connect?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
  }

  export type MusicSheetInstrumentCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutUserInput, MusicSheetInstrumentUncheckedCreateWithoutUserInput> | MusicSheetInstrumentCreateWithoutUserInput[] | MusicSheetInstrumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutUserInput | MusicSheetInstrumentCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetInstrumentCreateManyUserInputEnvelope
    connect?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
  }

  export type MusicSheetVersionCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetVersionCreateWithoutUserInput, MusicSheetVersionUncheckedCreateWithoutUserInput> | MusicSheetVersionCreateWithoutUserInput[] | MusicSheetVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutUserInput | MusicSheetVersionCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetVersionCreateManyUserInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type MusicSheetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetCreateWithoutUserInput, MusicSheetUncheckedCreateWithoutUserInput> | MusicSheetCreateWithoutUserInput[] | MusicSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutUserInput | MusicSheetCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetCreateManyUserInputEnvelope
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
  }

  export type MusicSheetCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutUserInput, MusicSheetCategoryUncheckedCreateWithoutUserInput> | MusicSheetCategoryCreateWithoutUserInput[] | MusicSheetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutUserInput | MusicSheetCategoryCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetCategoryCreateManyUserInputEnvelope
    connect?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
  }

  export type MusicSheetInstrumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutUserInput, MusicSheetInstrumentUncheckedCreateWithoutUserInput> | MusicSheetInstrumentCreateWithoutUserInput[] | MusicSheetInstrumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutUserInput | MusicSheetInstrumentCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetInstrumentCreateManyUserInputEnvelope
    connect?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
  }

  export type MusicSheetVersionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MusicSheetVersionCreateWithoutUserInput, MusicSheetVersionUncheckedCreateWithoutUserInput> | MusicSheetVersionCreateWithoutUserInput[] | MusicSheetVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutUserInput | MusicSheetVersionCreateOrConnectWithoutUserInput[]
    createMany?: MusicSheetVersionCreateManyUserInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
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

  export type MusicSheetUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetCreateWithoutUserInput, MusicSheetUncheckedCreateWithoutUserInput> | MusicSheetCreateWithoutUserInput[] | MusicSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutUserInput | MusicSheetCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetUpsertWithWhereUniqueWithoutUserInput | MusicSheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetCreateManyUserInputEnvelope
    set?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    disconnect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    delete?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    update?: MusicSheetUpdateWithWhereUniqueWithoutUserInput | MusicSheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetUpdateManyWithWhereWithoutUserInput | MusicSheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
  }

  export type MusicSheetCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutUserInput, MusicSheetCategoryUncheckedCreateWithoutUserInput> | MusicSheetCategoryCreateWithoutUserInput[] | MusicSheetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutUserInput | MusicSheetCategoryCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetCategoryUpsertWithWhereUniqueWithoutUserInput | MusicSheetCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetCategoryCreateManyUserInputEnvelope
    set?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    disconnect?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    delete?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    connect?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    update?: MusicSheetCategoryUpdateWithWhereUniqueWithoutUserInput | MusicSheetCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetCategoryUpdateManyWithWhereWithoutUserInput | MusicSheetCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetCategoryScalarWhereInput | MusicSheetCategoryScalarWhereInput[]
  }

  export type MusicSheetInstrumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutUserInput, MusicSheetInstrumentUncheckedCreateWithoutUserInput> | MusicSheetInstrumentCreateWithoutUserInput[] | MusicSheetInstrumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutUserInput | MusicSheetInstrumentCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetInstrumentUpsertWithWhereUniqueWithoutUserInput | MusicSheetInstrumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetInstrumentCreateManyUserInputEnvelope
    set?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    disconnect?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    delete?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    connect?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    update?: MusicSheetInstrumentUpdateWithWhereUniqueWithoutUserInput | MusicSheetInstrumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetInstrumentUpdateManyWithWhereWithoutUserInput | MusicSheetInstrumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetInstrumentScalarWhereInput | MusicSheetInstrumentScalarWhereInput[]
  }

  export type MusicSheetVersionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutUserInput, MusicSheetVersionUncheckedCreateWithoutUserInput> | MusicSheetVersionCreateWithoutUserInput[] | MusicSheetVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutUserInput | MusicSheetVersionCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutUserInput | MusicSheetVersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetVersionCreateManyUserInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutUserInput | MusicSheetVersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutUserInput | MusicSheetVersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetCreateWithoutUserInput, MusicSheetUncheckedCreateWithoutUserInput> | MusicSheetCreateWithoutUserInput[] | MusicSheetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutUserInput | MusicSheetCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetUpsertWithWhereUniqueWithoutUserInput | MusicSheetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetCreateManyUserInputEnvelope
    set?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    disconnect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    delete?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    update?: MusicSheetUpdateWithWhereUniqueWithoutUserInput | MusicSheetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetUpdateManyWithWhereWithoutUserInput | MusicSheetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
  }

  export type MusicSheetCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutUserInput, MusicSheetCategoryUncheckedCreateWithoutUserInput> | MusicSheetCategoryCreateWithoutUserInput[] | MusicSheetCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutUserInput | MusicSheetCategoryCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetCategoryUpsertWithWhereUniqueWithoutUserInput | MusicSheetCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetCategoryCreateManyUserInputEnvelope
    set?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    disconnect?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    delete?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    connect?: MusicSheetCategoryWhereUniqueInput | MusicSheetCategoryWhereUniqueInput[]
    update?: MusicSheetCategoryUpdateWithWhereUniqueWithoutUserInput | MusicSheetCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetCategoryUpdateManyWithWhereWithoutUserInput | MusicSheetCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetCategoryScalarWhereInput | MusicSheetCategoryScalarWhereInput[]
  }

  export type MusicSheetInstrumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutUserInput, MusicSheetInstrumentUncheckedCreateWithoutUserInput> | MusicSheetInstrumentCreateWithoutUserInput[] | MusicSheetInstrumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutUserInput | MusicSheetInstrumentCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetInstrumentUpsertWithWhereUniqueWithoutUserInput | MusicSheetInstrumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetInstrumentCreateManyUserInputEnvelope
    set?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    disconnect?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    delete?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    connect?: MusicSheetInstrumentWhereUniqueInput | MusicSheetInstrumentWhereUniqueInput[]
    update?: MusicSheetInstrumentUpdateWithWhereUniqueWithoutUserInput | MusicSheetInstrumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetInstrumentUpdateManyWithWhereWithoutUserInput | MusicSheetInstrumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetInstrumentScalarWhereInput | MusicSheetInstrumentScalarWhereInput[]
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutUserInput, MusicSheetVersionUncheckedCreateWithoutUserInput> | MusicSheetVersionCreateWithoutUserInput[] | MusicSheetVersionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutUserInput | MusicSheetVersionCreateOrConnectWithoutUserInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutUserInput | MusicSheetVersionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MusicSheetVersionCreateManyUserInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutUserInput | MusicSheetVersionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutUserInput | MusicSheetVersionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetVersionCreateNestedManyWithoutMusicSheetInput = {
    create?: XOR<MusicSheetVersionCreateWithoutMusicSheetInput, MusicSheetVersionUncheckedCreateWithoutMusicSheetInput> | MusicSheetVersionCreateWithoutMusicSheetInput[] | MusicSheetVersionUncheckedCreateWithoutMusicSheetInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutMusicSheetInput | MusicSheetVersionCreateOrConnectWithoutMusicSheetInput[]
    createMany?: MusicSheetVersionCreateManyMusicSheetInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMusicSheetsInput = {
    create?: XOR<UserCreateWithoutMusicSheetsInput, UserUncheckedCreateWithoutMusicSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetsInput
    connect?: UserWhereUniqueInput
  }

  export type MusicSheetCategoryCreateNestedOneWithoutMusicSheetsInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutMusicSheetsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetsInput>
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutMusicSheetsInput
    connect?: MusicSheetCategoryWhereUniqueInput
  }

  export type MusicSheetInstrumentCreateNestedOneWithoutMusicSheetsInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutMusicSheetsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetsInput>
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutMusicSheetsInput
    connect?: MusicSheetInstrumentWhereUniqueInput
  }

  export type MusicSheetVersionUncheckedCreateNestedManyWithoutMusicSheetInput = {
    create?: XOR<MusicSheetVersionCreateWithoutMusicSheetInput, MusicSheetVersionUncheckedCreateWithoutMusicSheetInput> | MusicSheetVersionCreateWithoutMusicSheetInput[] | MusicSheetVersionUncheckedCreateWithoutMusicSheetInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutMusicSheetInput | MusicSheetVersionCreateOrConnectWithoutMusicSheetInput[]
    createMany?: MusicSheetVersionCreateManyMusicSheetInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type MusicSheetVersionUpdateManyWithoutMusicSheetNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutMusicSheetInput, MusicSheetVersionUncheckedCreateWithoutMusicSheetInput> | MusicSheetVersionCreateWithoutMusicSheetInput[] | MusicSheetVersionUncheckedCreateWithoutMusicSheetInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutMusicSheetInput | MusicSheetVersionCreateOrConnectWithoutMusicSheetInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutMusicSheetInput | MusicSheetVersionUpsertWithWhereUniqueWithoutMusicSheetInput[]
    createMany?: MusicSheetVersionCreateManyMusicSheetInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutMusicSheetInput | MusicSheetVersionUpdateWithWhereUniqueWithoutMusicSheetInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutMusicSheetInput | MusicSheetVersionUpdateManyWithWhereWithoutMusicSheetInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutMusicSheetsNestedInput = {
    create?: XOR<UserCreateWithoutMusicSheetsInput, UserUncheckedCreateWithoutMusicSheetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetsInput
    upsert?: UserUpsertWithoutMusicSheetsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMusicSheetsInput, UserUpdateWithoutMusicSheetsInput>, UserUncheckedUpdateWithoutMusicSheetsInput>
  }

  export type MusicSheetCategoryUpdateOneWithoutMusicSheetsNestedInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutMusicSheetsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetsInput>
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutMusicSheetsInput
    upsert?: MusicSheetCategoryUpsertWithoutMusicSheetsInput
    disconnect?: MusicSheetCategoryWhereInput | boolean
    delete?: MusicSheetCategoryWhereInput | boolean
    connect?: MusicSheetCategoryWhereUniqueInput
    update?: XOR<XOR<MusicSheetCategoryUpdateToOneWithWhereWithoutMusicSheetsInput, MusicSheetCategoryUpdateWithoutMusicSheetsInput>, MusicSheetCategoryUncheckedUpdateWithoutMusicSheetsInput>
  }

  export type MusicSheetInstrumentUpdateOneWithoutMusicSheetsNestedInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutMusicSheetsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetsInput>
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutMusicSheetsInput
    upsert?: MusicSheetInstrumentUpsertWithoutMusicSheetsInput
    disconnect?: MusicSheetInstrumentWhereInput | boolean
    delete?: MusicSheetInstrumentWhereInput | boolean
    connect?: MusicSheetInstrumentWhereUniqueInput
    update?: XOR<XOR<MusicSheetInstrumentUpdateToOneWithWhereWithoutMusicSheetsInput, MusicSheetInstrumentUpdateWithoutMusicSheetsInput>, MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetsInput>
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutMusicSheetInput, MusicSheetVersionUncheckedCreateWithoutMusicSheetInput> | MusicSheetVersionCreateWithoutMusicSheetInput[] | MusicSheetVersionUncheckedCreateWithoutMusicSheetInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutMusicSheetInput | MusicSheetVersionCreateOrConnectWithoutMusicSheetInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutMusicSheetInput | MusicSheetVersionUpsertWithWhereUniqueWithoutMusicSheetInput[]
    createMany?: MusicSheetVersionCreateManyMusicSheetInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutMusicSheetInput | MusicSheetVersionUpdateWithWhereUniqueWithoutMusicSheetInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutMusicSheetInput | MusicSheetVersionUpdateManyWithWhereWithoutMusicSheetInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MusicSheetCreateWithoutCategoryInput, MusicSheetUncheckedCreateWithoutCategoryInput> | MusicSheetCreateWithoutCategoryInput[] | MusicSheetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutCategoryInput | MusicSheetCreateOrConnectWithoutCategoryInput[]
    createMany?: MusicSheetCreateManyCategoryInputEnvelope
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMusicSheetCategoriesInput = {
    create?: XOR<UserCreateWithoutMusicSheetCategoriesInput, UserUncheckedCreateWithoutMusicSheetCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type MusicSheetVersionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MusicSheetVersionCreateWithoutCategoryInput, MusicSheetVersionUncheckedCreateWithoutCategoryInput> | MusicSheetVersionCreateWithoutCategoryInput[] | MusicSheetVersionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutCategoryInput | MusicSheetVersionCreateOrConnectWithoutCategoryInput[]
    createMany?: MusicSheetVersionCreateManyCategoryInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type MusicSheetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MusicSheetCreateWithoutCategoryInput, MusicSheetUncheckedCreateWithoutCategoryInput> | MusicSheetCreateWithoutCategoryInput[] | MusicSheetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutCategoryInput | MusicSheetCreateOrConnectWithoutCategoryInput[]
    createMany?: MusicSheetCreateManyCategoryInputEnvelope
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
  }

  export type MusicSheetVersionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MusicSheetVersionCreateWithoutCategoryInput, MusicSheetVersionUncheckedCreateWithoutCategoryInput> | MusicSheetVersionCreateWithoutCategoryInput[] | MusicSheetVersionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutCategoryInput | MusicSheetVersionCreateOrConnectWithoutCategoryInput[]
    createMany?: MusicSheetVersionCreateManyCategoryInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type MusicSheetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MusicSheetCreateWithoutCategoryInput, MusicSheetUncheckedCreateWithoutCategoryInput> | MusicSheetCreateWithoutCategoryInput[] | MusicSheetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutCategoryInput | MusicSheetCreateOrConnectWithoutCategoryInput[]
    upsert?: MusicSheetUpsertWithWhereUniqueWithoutCategoryInput | MusicSheetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MusicSheetCreateManyCategoryInputEnvelope
    set?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    disconnect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    delete?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    update?: MusicSheetUpdateWithWhereUniqueWithoutCategoryInput | MusicSheetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MusicSheetUpdateManyWithWhereWithoutCategoryInput | MusicSheetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
  }

  export type UserUpdateOneWithoutMusicSheetCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutMusicSheetCategoriesInput, UserUncheckedCreateWithoutMusicSheetCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetCategoriesInput
    upsert?: UserUpsertWithoutMusicSheetCategoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMusicSheetCategoriesInput, UserUpdateWithoutMusicSheetCategoriesInput>, UserUncheckedUpdateWithoutMusicSheetCategoriesInput>
  }

  export type MusicSheetVersionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutCategoryInput, MusicSheetVersionUncheckedCreateWithoutCategoryInput> | MusicSheetVersionCreateWithoutCategoryInput[] | MusicSheetVersionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutCategoryInput | MusicSheetVersionCreateOrConnectWithoutCategoryInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutCategoryInput | MusicSheetVersionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MusicSheetVersionCreateManyCategoryInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutCategoryInput | MusicSheetVersionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutCategoryInput | MusicSheetVersionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MusicSheetCreateWithoutCategoryInput, MusicSheetUncheckedCreateWithoutCategoryInput> | MusicSheetCreateWithoutCategoryInput[] | MusicSheetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutCategoryInput | MusicSheetCreateOrConnectWithoutCategoryInput[]
    upsert?: MusicSheetUpsertWithWhereUniqueWithoutCategoryInput | MusicSheetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MusicSheetCreateManyCategoryInputEnvelope
    set?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    disconnect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    delete?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    update?: MusicSheetUpdateWithWhereUniqueWithoutCategoryInput | MusicSheetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MusicSheetUpdateManyWithWhereWithoutCategoryInput | MusicSheetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutCategoryInput, MusicSheetVersionUncheckedCreateWithoutCategoryInput> | MusicSheetVersionCreateWithoutCategoryInput[] | MusicSheetVersionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutCategoryInput | MusicSheetVersionCreateOrConnectWithoutCategoryInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutCategoryInput | MusicSheetVersionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MusicSheetVersionCreateManyCategoryInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutCategoryInput | MusicSheetVersionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutCategoryInput | MusicSheetVersionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<MusicSheetCreateWithoutInstrumentInput, MusicSheetUncheckedCreateWithoutInstrumentInput> | MusicSheetCreateWithoutInstrumentInput[] | MusicSheetUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutInstrumentInput | MusicSheetCreateOrConnectWithoutInstrumentInput[]
    createMany?: MusicSheetCreateManyInstrumentInputEnvelope
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMusicSheetInstrumentsInput = {
    create?: XOR<UserCreateWithoutMusicSheetInstrumentsInput, UserUncheckedCreateWithoutMusicSheetInstrumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetInstrumentsInput
    connect?: UserWhereUniqueInput
  }

  export type MusicSheetVersionCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<MusicSheetVersionCreateWithoutInstrumentInput, MusicSheetVersionUncheckedCreateWithoutInstrumentInput> | MusicSheetVersionCreateWithoutInstrumentInput[] | MusicSheetVersionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutInstrumentInput | MusicSheetVersionCreateOrConnectWithoutInstrumentInput[]
    createMany?: MusicSheetVersionCreateManyInstrumentInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type MusicSheetUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<MusicSheetCreateWithoutInstrumentInput, MusicSheetUncheckedCreateWithoutInstrumentInput> | MusicSheetCreateWithoutInstrumentInput[] | MusicSheetUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutInstrumentInput | MusicSheetCreateOrConnectWithoutInstrumentInput[]
    createMany?: MusicSheetCreateManyInstrumentInputEnvelope
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
  }

  export type MusicSheetVersionUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<MusicSheetVersionCreateWithoutInstrumentInput, MusicSheetVersionUncheckedCreateWithoutInstrumentInput> | MusicSheetVersionCreateWithoutInstrumentInput[] | MusicSheetVersionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutInstrumentInput | MusicSheetVersionCreateOrConnectWithoutInstrumentInput[]
    createMany?: MusicSheetVersionCreateManyInstrumentInputEnvelope
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
  }

  export type MusicSheetUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<MusicSheetCreateWithoutInstrumentInput, MusicSheetUncheckedCreateWithoutInstrumentInput> | MusicSheetCreateWithoutInstrumentInput[] | MusicSheetUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutInstrumentInput | MusicSheetCreateOrConnectWithoutInstrumentInput[]
    upsert?: MusicSheetUpsertWithWhereUniqueWithoutInstrumentInput | MusicSheetUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: MusicSheetCreateManyInstrumentInputEnvelope
    set?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    disconnect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    delete?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    update?: MusicSheetUpdateWithWhereUniqueWithoutInstrumentInput | MusicSheetUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: MusicSheetUpdateManyWithWhereWithoutInstrumentInput | MusicSheetUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
  }

  export type UserUpdateOneWithoutMusicSheetInstrumentsNestedInput = {
    create?: XOR<UserCreateWithoutMusicSheetInstrumentsInput, UserUncheckedCreateWithoutMusicSheetInstrumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetInstrumentsInput
    upsert?: UserUpsertWithoutMusicSheetInstrumentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMusicSheetInstrumentsInput, UserUpdateWithoutMusicSheetInstrumentsInput>, UserUncheckedUpdateWithoutMusicSheetInstrumentsInput>
  }

  export type MusicSheetVersionUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutInstrumentInput, MusicSheetVersionUncheckedCreateWithoutInstrumentInput> | MusicSheetVersionCreateWithoutInstrumentInput[] | MusicSheetVersionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutInstrumentInput | MusicSheetVersionCreateOrConnectWithoutInstrumentInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutInstrumentInput | MusicSheetVersionUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: MusicSheetVersionCreateManyInstrumentInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutInstrumentInput | MusicSheetVersionUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutInstrumentInput | MusicSheetVersionUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<MusicSheetCreateWithoutInstrumentInput, MusicSheetUncheckedCreateWithoutInstrumentInput> | MusicSheetCreateWithoutInstrumentInput[] | MusicSheetUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetCreateOrConnectWithoutInstrumentInput | MusicSheetCreateOrConnectWithoutInstrumentInput[]
    upsert?: MusicSheetUpsertWithWhereUniqueWithoutInstrumentInput | MusicSheetUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: MusicSheetCreateManyInstrumentInputEnvelope
    set?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    disconnect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    delete?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    connect?: MusicSheetWhereUniqueInput | MusicSheetWhereUniqueInput[]
    update?: MusicSheetUpdateWithWhereUniqueWithoutInstrumentInput | MusicSheetUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: MusicSheetUpdateManyWithWhereWithoutInstrumentInput | MusicSheetUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<MusicSheetVersionCreateWithoutInstrumentInput, MusicSheetVersionUncheckedCreateWithoutInstrumentInput> | MusicSheetVersionCreateWithoutInstrumentInput[] | MusicSheetVersionUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: MusicSheetVersionCreateOrConnectWithoutInstrumentInput | MusicSheetVersionCreateOrConnectWithoutInstrumentInput[]
    upsert?: MusicSheetVersionUpsertWithWhereUniqueWithoutInstrumentInput | MusicSheetVersionUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: MusicSheetVersionCreateManyInstrumentInputEnvelope
    set?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    disconnect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    delete?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    connect?: MusicSheetVersionWhereUniqueInput | MusicSheetVersionWhereUniqueInput[]
    update?: MusicSheetVersionUpdateWithWhereUniqueWithoutInstrumentInput | MusicSheetVersionUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: MusicSheetVersionUpdateManyWithWhereWithoutInstrumentInput | MusicSheetVersionUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
  }

  export type MusicSheetCreateNestedOneWithoutVersionsInput = {
    create?: XOR<MusicSheetCreateWithoutVersionsInput, MusicSheetUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: MusicSheetCreateOrConnectWithoutVersionsInput
    connect?: MusicSheetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMusicSheetVersionsInput = {
    create?: XOR<UserCreateWithoutMusicSheetVersionsInput, UserUncheckedCreateWithoutMusicSheetVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetVersionsInput
    connect?: UserWhereUniqueInput
  }

  export type MusicSheetCategoryCreateNestedOneWithoutMusicSheetVersionsInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutMusicSheetVersionsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetVersionsInput>
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutMusicSheetVersionsInput
    connect?: MusicSheetCategoryWhereUniqueInput
  }

  export type MusicSheetInstrumentCreateNestedOneWithoutMusicSheetVersionsInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutMusicSheetVersionsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetVersionsInput>
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutMusicSheetVersionsInput
    connect?: MusicSheetInstrumentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MusicSheetUpdateOneWithoutVersionsNestedInput = {
    create?: XOR<MusicSheetCreateWithoutVersionsInput, MusicSheetUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: MusicSheetCreateOrConnectWithoutVersionsInput
    upsert?: MusicSheetUpsertWithoutVersionsInput
    disconnect?: MusicSheetWhereInput | boolean
    delete?: MusicSheetWhereInput | boolean
    connect?: MusicSheetWhereUniqueInput
    update?: XOR<XOR<MusicSheetUpdateToOneWithWhereWithoutVersionsInput, MusicSheetUpdateWithoutVersionsInput>, MusicSheetUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateOneWithoutMusicSheetVersionsNestedInput = {
    create?: XOR<UserCreateWithoutMusicSheetVersionsInput, UserUncheckedCreateWithoutMusicSheetVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMusicSheetVersionsInput
    upsert?: UserUpsertWithoutMusicSheetVersionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMusicSheetVersionsInput, UserUpdateWithoutMusicSheetVersionsInput>, UserUncheckedUpdateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetCategoryUpdateOneWithoutMusicSheetVersionsNestedInput = {
    create?: XOR<MusicSheetCategoryCreateWithoutMusicSheetVersionsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetVersionsInput>
    connectOrCreate?: MusicSheetCategoryCreateOrConnectWithoutMusicSheetVersionsInput
    upsert?: MusicSheetCategoryUpsertWithoutMusicSheetVersionsInput
    disconnect?: MusicSheetCategoryWhereInput | boolean
    delete?: MusicSheetCategoryWhereInput | boolean
    connect?: MusicSheetCategoryWhereUniqueInput
    update?: XOR<XOR<MusicSheetCategoryUpdateToOneWithWhereWithoutMusicSheetVersionsInput, MusicSheetCategoryUpdateWithoutMusicSheetVersionsInput>, MusicSheetCategoryUncheckedUpdateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetInstrumentUpdateOneWithoutMusicSheetVersionsNestedInput = {
    create?: XOR<MusicSheetInstrumentCreateWithoutMusicSheetVersionsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetVersionsInput>
    connectOrCreate?: MusicSheetInstrumentCreateOrConnectWithoutMusicSheetVersionsInput
    upsert?: MusicSheetInstrumentUpsertWithoutMusicSheetVersionsInput
    disconnect?: MusicSheetInstrumentWhereInput | boolean
    delete?: MusicSheetInstrumentWhereInput | boolean
    connect?: MusicSheetInstrumentWhereUniqueInput
    update?: XOR<XOR<MusicSheetInstrumentUpdateToOneWithWhereWithoutMusicSheetVersionsInput, MusicSheetInstrumentUpdateWithoutMusicSheetVersionsInput>, MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetVersionsInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MusicSheetCreateWithoutUserInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MusicSheetVersionCreateNestedManyWithoutMusicSheetInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetsInput
  }

  export type MusicSheetUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    instrumentId?: string | null
    versions?: MusicSheetVersionUncheckedCreateNestedManyWithoutMusicSheetInput
  }

  export type MusicSheetCreateOrConnectWithoutUserInput = {
    where: MusicSheetWhereUniqueInput
    create: XOR<MusicSheetCreateWithoutUserInput, MusicSheetUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetCreateManyUserInputEnvelope = {
    data: MusicSheetCreateManyUserInput | MusicSheetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MusicSheetCategoryCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutCategoryInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutCategoryInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryCreateOrConnectWithoutUserInput = {
    where: MusicSheetCategoryWhereUniqueInput
    create: XOR<MusicSheetCategoryCreateWithoutUserInput, MusicSheetCategoryUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetCategoryCreateManyUserInputEnvelope = {
    data: MusicSheetCategoryCreateManyUserInput | MusicSheetCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MusicSheetInstrumentCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutInstrumentInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutInstrumentInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentCreateOrConnectWithoutUserInput = {
    where: MusicSheetInstrumentWhereUniqueInput
    create: XOR<MusicSheetInstrumentCreateWithoutUserInput, MusicSheetInstrumentUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetInstrumentCreateManyUserInputEnvelope = {
    data: MusicSheetInstrumentCreateManyUserInput | MusicSheetInstrumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MusicSheetVersionCreateWithoutUserInput = {
    id?: string
    name: string
    file: string
    action: string
    createdAt?: Date | string
    version: number
    musicSheet?: MusicSheetCreateNestedOneWithoutVersionsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetVersionsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetVersionsInput
  }

  export type MusicSheetVersionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetVersionCreateOrConnectWithoutUserInput = {
    where: MusicSheetVersionWhereUniqueInput
    create: XOR<MusicSheetVersionCreateWithoutUserInput, MusicSheetVersionUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetVersionCreateManyUserInputEnvelope = {
    data: MusicSheetVersionCreateManyUserInput | MusicSheetVersionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MusicSheetUpsertWithWhereUniqueWithoutUserInput = {
    where: MusicSheetWhereUniqueInput
    update: XOR<MusicSheetUpdateWithoutUserInput, MusicSheetUncheckedUpdateWithoutUserInput>
    create: XOR<MusicSheetCreateWithoutUserInput, MusicSheetUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetUpdateWithWhereUniqueWithoutUserInput = {
    where: MusicSheetWhereUniqueInput
    data: XOR<MusicSheetUpdateWithoutUserInput, MusicSheetUncheckedUpdateWithoutUserInput>
  }

  export type MusicSheetUpdateManyWithWhereWithoutUserInput = {
    where: MusicSheetScalarWhereInput
    data: XOR<MusicSheetUpdateManyMutationInput, MusicSheetUncheckedUpdateManyWithoutUserInput>
  }

  export type MusicSheetScalarWhereInput = {
    AND?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
    OR?: MusicSheetScalarWhereInput[]
    NOT?: MusicSheetScalarWhereInput | MusicSheetScalarWhereInput[]
    id?: StringFilter<"MusicSheet"> | string
    name?: StringFilter<"MusicSheet"> | string
    file?: StringFilter<"MusicSheet"> | string
    createdAt?: DateTimeFilter<"MusicSheet"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheet"> | Date | string
    userId?: StringFilter<"MusicSheet"> | string
    categoryId?: StringNullableFilter<"MusicSheet"> | string | null
    instrumentId?: StringNullableFilter<"MusicSheet"> | string | null
  }

  export type MusicSheetCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: MusicSheetCategoryWhereUniqueInput
    update: XOR<MusicSheetCategoryUpdateWithoutUserInput, MusicSheetCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<MusicSheetCategoryCreateWithoutUserInput, MusicSheetCategoryUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: MusicSheetCategoryWhereUniqueInput
    data: XOR<MusicSheetCategoryUpdateWithoutUserInput, MusicSheetCategoryUncheckedUpdateWithoutUserInput>
  }

  export type MusicSheetCategoryUpdateManyWithWhereWithoutUserInput = {
    where: MusicSheetCategoryScalarWhereInput
    data: XOR<MusicSheetCategoryUpdateManyMutationInput, MusicSheetCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type MusicSheetCategoryScalarWhereInput = {
    AND?: MusicSheetCategoryScalarWhereInput | MusicSheetCategoryScalarWhereInput[]
    OR?: MusicSheetCategoryScalarWhereInput[]
    NOT?: MusicSheetCategoryScalarWhereInput | MusicSheetCategoryScalarWhereInput[]
    id?: StringFilter<"MusicSheetCategory"> | string
    name?: StringFilter<"MusicSheetCategory"> | string
    createdAt?: DateTimeFilter<"MusicSheetCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheetCategory"> | Date | string
    userId?: StringNullableFilter<"MusicSheetCategory"> | string | null
  }

  export type MusicSheetInstrumentUpsertWithWhereUniqueWithoutUserInput = {
    where: MusicSheetInstrumentWhereUniqueInput
    update: XOR<MusicSheetInstrumentUpdateWithoutUserInput, MusicSheetInstrumentUncheckedUpdateWithoutUserInput>
    create: XOR<MusicSheetInstrumentCreateWithoutUserInput, MusicSheetInstrumentUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetInstrumentUpdateWithWhereUniqueWithoutUserInput = {
    where: MusicSheetInstrumentWhereUniqueInput
    data: XOR<MusicSheetInstrumentUpdateWithoutUserInput, MusicSheetInstrumentUncheckedUpdateWithoutUserInput>
  }

  export type MusicSheetInstrumentUpdateManyWithWhereWithoutUserInput = {
    where: MusicSheetInstrumentScalarWhereInput
    data: XOR<MusicSheetInstrumentUpdateManyMutationInput, MusicSheetInstrumentUncheckedUpdateManyWithoutUserInput>
  }

  export type MusicSheetInstrumentScalarWhereInput = {
    AND?: MusicSheetInstrumentScalarWhereInput | MusicSheetInstrumentScalarWhereInput[]
    OR?: MusicSheetInstrumentScalarWhereInput[]
    NOT?: MusicSheetInstrumentScalarWhereInput | MusicSheetInstrumentScalarWhereInput[]
    id?: StringFilter<"MusicSheetInstrument"> | string
    name?: StringFilter<"MusicSheetInstrument"> | string
    createdAt?: DateTimeFilter<"MusicSheetInstrument"> | Date | string
    updatedAt?: DateTimeFilter<"MusicSheetInstrument"> | Date | string
    userId?: StringNullableFilter<"MusicSheetInstrument"> | string | null
  }

  export type MusicSheetVersionUpsertWithWhereUniqueWithoutUserInput = {
    where: MusicSheetVersionWhereUniqueInput
    update: XOR<MusicSheetVersionUpdateWithoutUserInput, MusicSheetVersionUncheckedUpdateWithoutUserInput>
    create: XOR<MusicSheetVersionCreateWithoutUserInput, MusicSheetVersionUncheckedCreateWithoutUserInput>
  }

  export type MusicSheetVersionUpdateWithWhereUniqueWithoutUserInput = {
    where: MusicSheetVersionWhereUniqueInput
    data: XOR<MusicSheetVersionUpdateWithoutUserInput, MusicSheetVersionUncheckedUpdateWithoutUserInput>
  }

  export type MusicSheetVersionUpdateManyWithWhereWithoutUserInput = {
    where: MusicSheetVersionScalarWhereInput
    data: XOR<MusicSheetVersionUpdateManyMutationInput, MusicSheetVersionUncheckedUpdateManyWithoutUserInput>
  }

  export type MusicSheetVersionScalarWhereInput = {
    AND?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
    OR?: MusicSheetVersionScalarWhereInput[]
    NOT?: MusicSheetVersionScalarWhereInput | MusicSheetVersionScalarWhereInput[]
    id?: StringFilter<"MusicSheetVersion"> | string
    name?: StringFilter<"MusicSheetVersion"> | string
    file?: StringFilter<"MusicSheetVersion"> | string
    action?: StringFilter<"MusicSheetVersion"> | string
    musicSheetId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    userId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    createdAt?: DateTimeFilter<"MusicSheetVersion"> | Date | string
    version?: IntFilter<"MusicSheetVersion"> | number
    categoryId?: StringNullableFilter<"MusicSheetVersion"> | string | null
    instrumentId?: StringNullableFilter<"MusicSheetVersion"> | string | null
  }

  export type MusicSheetVersionCreateWithoutMusicSheetInput = {
    id?: string
    name: string
    file: string
    action: string
    createdAt?: Date | string
    version: number
    user?: UserCreateNestedOneWithoutMusicSheetVersionsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetVersionsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetVersionsInput
  }

  export type MusicSheetVersionUncheckedCreateWithoutMusicSheetInput = {
    id?: string
    name: string
    file: string
    action: string
    userId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetVersionCreateOrConnectWithoutMusicSheetInput = {
    where: MusicSheetVersionWhereUniqueInput
    create: XOR<MusicSheetVersionCreateWithoutMusicSheetInput, MusicSheetVersionUncheckedCreateWithoutMusicSheetInput>
  }

  export type MusicSheetVersionCreateManyMusicSheetInputEnvelope = {
    data: MusicSheetVersionCreateManyMusicSheetInput | MusicSheetVersionCreateManyMusicSheetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMusicSheetsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheetCategories?: MusicSheetCategoryCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMusicSheetsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheetCategories?: MusicSheetCategoryUncheckedCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMusicSheetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMusicSheetsInput, UserUncheckedCreateWithoutMusicSheetsInput>
  }

  export type MusicSheetCategoryCreateWithoutMusicSheetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMusicSheetCategoriesInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryUncheckedCreateWithoutMusicSheetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryCreateOrConnectWithoutMusicSheetsInput = {
    where: MusicSheetCategoryWhereUniqueInput
    create: XOR<MusicSheetCategoryCreateWithoutMusicSheetsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetsInput>
  }

  export type MusicSheetInstrumentCreateWithoutMusicSheetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMusicSheetInstrumentsInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentUncheckedCreateWithoutMusicSheetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentCreateOrConnectWithoutMusicSheetsInput = {
    where: MusicSheetInstrumentWhereUniqueInput
    create: XOR<MusicSheetInstrumentCreateWithoutMusicSheetsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetsInput>
  }

  export type MusicSheetVersionUpsertWithWhereUniqueWithoutMusicSheetInput = {
    where: MusicSheetVersionWhereUniqueInput
    update: XOR<MusicSheetVersionUpdateWithoutMusicSheetInput, MusicSheetVersionUncheckedUpdateWithoutMusicSheetInput>
    create: XOR<MusicSheetVersionCreateWithoutMusicSheetInput, MusicSheetVersionUncheckedCreateWithoutMusicSheetInput>
  }

  export type MusicSheetVersionUpdateWithWhereUniqueWithoutMusicSheetInput = {
    where: MusicSheetVersionWhereUniqueInput
    data: XOR<MusicSheetVersionUpdateWithoutMusicSheetInput, MusicSheetVersionUncheckedUpdateWithoutMusicSheetInput>
  }

  export type MusicSheetVersionUpdateManyWithWhereWithoutMusicSheetInput = {
    where: MusicSheetVersionScalarWhereInput
    data: XOR<MusicSheetVersionUpdateManyMutationInput, MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetInput>
  }

  export type UserUpsertWithoutMusicSheetsInput = {
    update: XOR<UserUpdateWithoutMusicSheetsInput, UserUncheckedUpdateWithoutMusicSheetsInput>
    create: XOR<UserCreateWithoutMusicSheetsInput, UserUncheckedCreateWithoutMusicSheetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMusicSheetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMusicSheetsInput, UserUncheckedUpdateWithoutMusicSheetsInput>
  }

  export type UserUpdateWithoutMusicSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheetCategories?: MusicSheetCategoryUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMusicSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheetCategories?: MusicSheetCategoryUncheckedUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicSheetCategoryUpsertWithoutMusicSheetsInput = {
    update: XOR<MusicSheetCategoryUpdateWithoutMusicSheetsInput, MusicSheetCategoryUncheckedUpdateWithoutMusicSheetsInput>
    create: XOR<MusicSheetCategoryCreateWithoutMusicSheetsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetsInput>
    where?: MusicSheetCategoryWhereInput
  }

  export type MusicSheetCategoryUpdateToOneWithWhereWithoutMusicSheetsInput = {
    where?: MusicSheetCategoryWhereInput
    data: XOR<MusicSheetCategoryUpdateWithoutMusicSheetsInput, MusicSheetCategoryUncheckedUpdateWithoutMusicSheetsInput>
  }

  export type MusicSheetCategoryUpdateWithoutMusicSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMusicSheetCategoriesNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetCategoryUncheckedUpdateWithoutMusicSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetInstrumentUpsertWithoutMusicSheetsInput = {
    update: XOR<MusicSheetInstrumentUpdateWithoutMusicSheetsInput, MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetsInput>
    create: XOR<MusicSheetInstrumentCreateWithoutMusicSheetsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetsInput>
    where?: MusicSheetInstrumentWhereInput
  }

  export type MusicSheetInstrumentUpdateToOneWithWhereWithoutMusicSheetsInput = {
    where?: MusicSheetInstrumentWhereInput
    data: XOR<MusicSheetInstrumentUpdateWithoutMusicSheetsInput, MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetsInput>
  }

  export type MusicSheetInstrumentUpdateWithoutMusicSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMusicSheetInstrumentsNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetCreateWithoutCategoryInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MusicSheetVersionCreateNestedManyWithoutMusicSheetInput
    user?: UserCreateNestedOneWithoutMusicSheetsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetsInput
  }

  export type MusicSheetUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    instrumentId?: string | null
    versions?: MusicSheetVersionUncheckedCreateNestedManyWithoutMusicSheetInput
  }

  export type MusicSheetCreateOrConnectWithoutCategoryInput = {
    where: MusicSheetWhereUniqueInput
    create: XOR<MusicSheetCreateWithoutCategoryInput, MusicSheetUncheckedCreateWithoutCategoryInput>
  }

  export type MusicSheetCreateManyCategoryInputEnvelope = {
    data: MusicSheetCreateManyCategoryInput | MusicSheetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMusicSheetCategoriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMusicSheetCategoriesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMusicSheetCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMusicSheetCategoriesInput, UserUncheckedCreateWithoutMusicSheetCategoriesInput>
  }

  export type MusicSheetVersionCreateWithoutCategoryInput = {
    id?: string
    name: string
    file: string
    action: string
    createdAt?: Date | string
    version: number
    musicSheet?: MusicSheetCreateNestedOneWithoutVersionsInput
    user?: UserCreateNestedOneWithoutMusicSheetVersionsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetVersionsInput
  }

  export type MusicSheetVersionUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    userId?: string | null
    createdAt?: Date | string
    version: number
    instrumentId?: string | null
  }

  export type MusicSheetVersionCreateOrConnectWithoutCategoryInput = {
    where: MusicSheetVersionWhereUniqueInput
    create: XOR<MusicSheetVersionCreateWithoutCategoryInput, MusicSheetVersionUncheckedCreateWithoutCategoryInput>
  }

  export type MusicSheetVersionCreateManyCategoryInputEnvelope = {
    data: MusicSheetVersionCreateManyCategoryInput | MusicSheetVersionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MusicSheetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MusicSheetWhereUniqueInput
    update: XOR<MusicSheetUpdateWithoutCategoryInput, MusicSheetUncheckedUpdateWithoutCategoryInput>
    create: XOR<MusicSheetCreateWithoutCategoryInput, MusicSheetUncheckedCreateWithoutCategoryInput>
  }

  export type MusicSheetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MusicSheetWhereUniqueInput
    data: XOR<MusicSheetUpdateWithoutCategoryInput, MusicSheetUncheckedUpdateWithoutCategoryInput>
  }

  export type MusicSheetUpdateManyWithWhereWithoutCategoryInput = {
    where: MusicSheetScalarWhereInput
    data: XOR<MusicSheetUpdateManyMutationInput, MusicSheetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserUpsertWithoutMusicSheetCategoriesInput = {
    update: XOR<UserUpdateWithoutMusicSheetCategoriesInput, UserUncheckedUpdateWithoutMusicSheetCategoriesInput>
    create: XOR<UserCreateWithoutMusicSheetCategoriesInput, UserUncheckedCreateWithoutMusicSheetCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMusicSheetCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMusicSheetCategoriesInput, UserUncheckedUpdateWithoutMusicSheetCategoriesInput>
  }

  export type UserUpdateWithoutMusicSheetCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMusicSheetCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicSheetVersionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MusicSheetVersionWhereUniqueInput
    update: XOR<MusicSheetVersionUpdateWithoutCategoryInput, MusicSheetVersionUncheckedUpdateWithoutCategoryInput>
    create: XOR<MusicSheetVersionCreateWithoutCategoryInput, MusicSheetVersionUncheckedCreateWithoutCategoryInput>
  }

  export type MusicSheetVersionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MusicSheetVersionWhereUniqueInput
    data: XOR<MusicSheetVersionUpdateWithoutCategoryInput, MusicSheetVersionUncheckedUpdateWithoutCategoryInput>
  }

  export type MusicSheetVersionUpdateManyWithWhereWithoutCategoryInput = {
    where: MusicSheetVersionScalarWhereInput
    data: XOR<MusicSheetVersionUpdateManyMutationInput, MusicSheetVersionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MusicSheetCreateWithoutInstrumentInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: MusicSheetVersionCreateNestedManyWithoutMusicSheetInput
    user?: UserCreateNestedOneWithoutMusicSheetsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetsInput
  }

  export type MusicSheetUncheckedCreateWithoutInstrumentInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    versions?: MusicSheetVersionUncheckedCreateNestedManyWithoutMusicSheetInput
  }

  export type MusicSheetCreateOrConnectWithoutInstrumentInput = {
    where: MusicSheetWhereUniqueInput
    create: XOR<MusicSheetCreateWithoutInstrumentInput, MusicSheetUncheckedCreateWithoutInstrumentInput>
  }

  export type MusicSheetCreateManyInstrumentInputEnvelope = {
    data: MusicSheetCreateManyInstrumentInput | MusicSheetCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMusicSheetInstrumentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutUserInput
    musicSheetCategories?: MusicSheetCategoryCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMusicSheetInstrumentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutUserInput
    musicSheetCategories?: MusicSheetCategoryUncheckedCreateNestedManyWithoutUserInput
    musicSheetVersions?: MusicSheetVersionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMusicSheetInstrumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMusicSheetInstrumentsInput, UserUncheckedCreateWithoutMusicSheetInstrumentsInput>
  }

  export type MusicSheetVersionCreateWithoutInstrumentInput = {
    id?: string
    name: string
    file: string
    action: string
    createdAt?: Date | string
    version: number
    musicSheet?: MusicSheetCreateNestedOneWithoutVersionsInput
    user?: UserCreateNestedOneWithoutMusicSheetVersionsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetVersionsInput
  }

  export type MusicSheetVersionUncheckedCreateWithoutInstrumentInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    userId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
  }

  export type MusicSheetVersionCreateOrConnectWithoutInstrumentInput = {
    where: MusicSheetVersionWhereUniqueInput
    create: XOR<MusicSheetVersionCreateWithoutInstrumentInput, MusicSheetVersionUncheckedCreateWithoutInstrumentInput>
  }

  export type MusicSheetVersionCreateManyInstrumentInputEnvelope = {
    data: MusicSheetVersionCreateManyInstrumentInput | MusicSheetVersionCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type MusicSheetUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: MusicSheetWhereUniqueInput
    update: XOR<MusicSheetUpdateWithoutInstrumentInput, MusicSheetUncheckedUpdateWithoutInstrumentInput>
    create: XOR<MusicSheetCreateWithoutInstrumentInput, MusicSheetUncheckedCreateWithoutInstrumentInput>
  }

  export type MusicSheetUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: MusicSheetWhereUniqueInput
    data: XOR<MusicSheetUpdateWithoutInstrumentInput, MusicSheetUncheckedUpdateWithoutInstrumentInput>
  }

  export type MusicSheetUpdateManyWithWhereWithoutInstrumentInput = {
    where: MusicSheetScalarWhereInput
    data: XOR<MusicSheetUpdateManyMutationInput, MusicSheetUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type UserUpsertWithoutMusicSheetInstrumentsInput = {
    update: XOR<UserUpdateWithoutMusicSheetInstrumentsInput, UserUncheckedUpdateWithoutMusicSheetInstrumentsInput>
    create: XOR<UserCreateWithoutMusicSheetInstrumentsInput, UserUncheckedCreateWithoutMusicSheetInstrumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMusicSheetInstrumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMusicSheetInstrumentsInput, UserUncheckedUpdateWithoutMusicSheetInstrumentsInput>
  }

  export type UserUpdateWithoutMusicSheetInstrumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutUserNestedInput
    musicSheetCategories?: MusicSheetCategoryUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMusicSheetInstrumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutUserNestedInput
    musicSheetCategories?: MusicSheetCategoryUncheckedUpdateManyWithoutUserNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicSheetVersionUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: MusicSheetVersionWhereUniqueInput
    update: XOR<MusicSheetVersionUpdateWithoutInstrumentInput, MusicSheetVersionUncheckedUpdateWithoutInstrumentInput>
    create: XOR<MusicSheetVersionCreateWithoutInstrumentInput, MusicSheetVersionUncheckedCreateWithoutInstrumentInput>
  }

  export type MusicSheetVersionUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: MusicSheetVersionWhereUniqueInput
    data: XOR<MusicSheetVersionUpdateWithoutInstrumentInput, MusicSheetVersionUncheckedUpdateWithoutInstrumentInput>
  }

  export type MusicSheetVersionUpdateManyWithWhereWithoutInstrumentInput = {
    where: MusicSheetVersionScalarWhereInput
    data: XOR<MusicSheetVersionUpdateManyMutationInput, MusicSheetVersionUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type MusicSheetCreateWithoutVersionsInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMusicSheetsInput
    category?: MusicSheetCategoryCreateNestedOneWithoutMusicSheetsInput
    instrument?: MusicSheetInstrumentCreateNestedOneWithoutMusicSheetsInput
  }

  export type MusicSheetUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetCreateOrConnectWithoutVersionsInput = {
    where: MusicSheetWhereUniqueInput
    create: XOR<MusicSheetCreateWithoutVersionsInput, MusicSheetUncheckedCreateWithoutVersionsInput>
  }

  export type UserCreateWithoutMusicSheetVersionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutUserInput
    musicSheetCategories?: MusicSheetCategoryCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMusicSheetVersionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutUserInput
    musicSheetCategories?: MusicSheetCategoryUncheckedCreateNestedManyWithoutUserInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMusicSheetVersionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMusicSheetVersionsInput, UserUncheckedCreateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetCategoryCreateWithoutMusicSheetVersionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutCategoryInput
    user?: UserCreateNestedOneWithoutMusicSheetCategoriesInput
  }

  export type MusicSheetCategoryUncheckedCreateWithoutMusicSheetVersionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MusicSheetCategoryCreateOrConnectWithoutMusicSheetVersionsInput = {
    where: MusicSheetCategoryWhereUniqueInput
    create: XOR<MusicSheetCategoryCreateWithoutMusicSheetVersionsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetInstrumentCreateWithoutMusicSheetVersionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    musicSheets?: MusicSheetCreateNestedManyWithoutInstrumentInput
    user?: UserCreateNestedOneWithoutMusicSheetInstrumentsInput
  }

  export type MusicSheetInstrumentUncheckedCreateWithoutMusicSheetVersionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    musicSheets?: MusicSheetUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type MusicSheetInstrumentCreateOrConnectWithoutMusicSheetVersionsInput = {
    where: MusicSheetInstrumentWhereUniqueInput
    create: XOR<MusicSheetInstrumentCreateWithoutMusicSheetVersionsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetUpsertWithoutVersionsInput = {
    update: XOR<MusicSheetUpdateWithoutVersionsInput, MusicSheetUncheckedUpdateWithoutVersionsInput>
    create: XOR<MusicSheetCreateWithoutVersionsInput, MusicSheetUncheckedCreateWithoutVersionsInput>
    where?: MusicSheetWhereInput
  }

  export type MusicSheetUpdateToOneWithWhereWithoutVersionsInput = {
    where?: MusicSheetWhereInput
    data: XOR<MusicSheetUpdateWithoutVersionsInput, MusicSheetUncheckedUpdateWithoutVersionsInput>
  }

  export type MusicSheetUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMusicSheetsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetsNestedInput
  }

  export type MusicSheetUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutMusicSheetVersionsInput = {
    update: XOR<UserUpdateWithoutMusicSheetVersionsInput, UserUncheckedUpdateWithoutMusicSheetVersionsInput>
    create: XOR<UserCreateWithoutMusicSheetVersionsInput, UserUncheckedCreateWithoutMusicSheetVersionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMusicSheetVersionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMusicSheetVersionsInput, UserUncheckedUpdateWithoutMusicSheetVersionsInput>
  }

  export type UserUpdateWithoutMusicSheetVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutUserNestedInput
    musicSheetCategories?: MusicSheetCategoryUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMusicSheetVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutUserNestedInput
    musicSheetCategories?: MusicSheetCategoryUncheckedUpdateManyWithoutUserNestedInput
    musicSheetInstruments?: MusicSheetInstrumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MusicSheetCategoryUpsertWithoutMusicSheetVersionsInput = {
    update: XOR<MusicSheetCategoryUpdateWithoutMusicSheetVersionsInput, MusicSheetCategoryUncheckedUpdateWithoutMusicSheetVersionsInput>
    create: XOR<MusicSheetCategoryCreateWithoutMusicSheetVersionsInput, MusicSheetCategoryUncheckedCreateWithoutMusicSheetVersionsInput>
    where?: MusicSheetCategoryWhereInput
  }

  export type MusicSheetCategoryUpdateToOneWithWhereWithoutMusicSheetVersionsInput = {
    where?: MusicSheetCategoryWhereInput
    data: XOR<MusicSheetCategoryUpdateWithoutMusicSheetVersionsInput, MusicSheetCategoryUncheckedUpdateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetCategoryUpdateWithoutMusicSheetVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutCategoryNestedInput
    user?: UserUpdateOneWithoutMusicSheetCategoriesNestedInput
  }

  export type MusicSheetCategoryUncheckedUpdateWithoutMusicSheetVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetInstrumentUpsertWithoutMusicSheetVersionsInput = {
    update: XOR<MusicSheetInstrumentUpdateWithoutMusicSheetVersionsInput, MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetVersionsInput>
    create: XOR<MusicSheetInstrumentCreateWithoutMusicSheetVersionsInput, MusicSheetInstrumentUncheckedCreateWithoutMusicSheetVersionsInput>
    where?: MusicSheetInstrumentWhereInput
  }

  export type MusicSheetInstrumentUpdateToOneWithWhereWithoutMusicSheetVersionsInput = {
    where?: MusicSheetInstrumentWhereInput
    data: XOR<MusicSheetInstrumentUpdateWithoutMusicSheetVersionsInput, MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetVersionsInput>
  }

  export type MusicSheetInstrumentUpdateWithoutMusicSheetVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutInstrumentNestedInput
    user?: UserUpdateOneWithoutMusicSheetInstrumentsNestedInput
  }

  export type MusicSheetInstrumentUncheckedUpdateWithoutMusicSheetVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetCreateManyUserInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetCategoryCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MusicSheetInstrumentCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MusicSheetVersionCreateManyUserInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MusicSheetVersionUpdateManyWithoutMusicSheetNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetsNestedInput
  }

  export type MusicSheetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetNestedInput
  }

  export type MusicSheetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetCategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutCategoryNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetCategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutCategoryNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MusicSheetCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicSheetInstrumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUpdateManyWithoutInstrumentNestedInput
    musicSheetVersions?: MusicSheetVersionUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetInstrumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    musicSheets?: MusicSheetUncheckedUpdateManyWithoutInstrumentNestedInput
    musicSheetVersions?: MusicSheetVersionUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type MusicSheetInstrumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MusicSheetVersionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    musicSheet?: MusicSheetUpdateOneWithoutVersionsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetVersionsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetVersionsNestedInput
  }

  export type MusicSheetVersionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionCreateManyMusicSheetInput = {
    id?: string
    name: string
    file: string
    action: string
    userId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
    instrumentId?: string | null
  }

  export type MusicSheetVersionUpdateWithoutMusicSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutMusicSheetVersionsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetVersionsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetVersionsNestedInput
  }

  export type MusicSheetVersionUncheckedUpdateWithoutMusicSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetCreateManyCategoryInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    instrumentId?: string | null
  }

  export type MusicSheetVersionCreateManyCategoryInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    userId?: string | null
    createdAt?: Date | string
    version: number
    instrumentId?: string | null
  }

  export type MusicSheetUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MusicSheetVersionUpdateManyWithoutMusicSheetNestedInput
    user?: UserUpdateOneWithoutMusicSheetsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetsNestedInput
  }

  export type MusicSheetUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetNestedInput
  }

  export type MusicSheetUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    musicSheet?: MusicSheetUpdateOneWithoutVersionsNestedInput
    user?: UserUpdateOneWithoutMusicSheetVersionsNestedInput
    instrument?: MusicSheetInstrumentUpdateOneWithoutMusicSheetVersionsNestedInput
  }

  export type MusicSheetVersionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    instrumentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetCreateManyInstrumentInput = {
    id?: string
    name: string
    file: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    categoryId?: string | null
  }

  export type MusicSheetVersionCreateManyInstrumentInput = {
    id?: string
    name: string
    file: string
    action: string
    musicSheetId?: string | null
    userId?: string | null
    createdAt?: Date | string
    version: number
    categoryId?: string | null
  }

  export type MusicSheetUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: MusicSheetVersionUpdateManyWithoutMusicSheetNestedInput
    user?: UserUpdateOneWithoutMusicSheetsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetsNestedInput
  }

  export type MusicSheetUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: MusicSheetVersionUncheckedUpdateManyWithoutMusicSheetNestedInput
  }

  export type MusicSheetUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    musicSheet?: MusicSheetUpdateOneWithoutVersionsNestedInput
    user?: UserUpdateOneWithoutMusicSheetVersionsNestedInput
    category?: MusicSheetCategoryUpdateOneWithoutMusicSheetVersionsNestedInput
  }

  export type MusicSheetVersionUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicSheetVersionUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    file?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    musicSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    version?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }



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