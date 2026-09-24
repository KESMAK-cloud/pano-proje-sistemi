
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
 * Model Dokuman
 * 
 */
export type Dokuman = $Result.DefaultSelection<Prisma.$DokumanPayload>
/**
 * Model Kullanici
 * 
 */
export type Kullanici = $Result.DefaultSelection<Prisma.$KullaniciPayload>
/**
 * Model Pano
 * 
 */
export type Pano = $Result.DefaultSelection<Prisma.$PanoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dokumen
 * const dokumen = await prisma.dokuman.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Dokumen
   * const dokumen = await prisma.dokuman.findMany()
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
   * `prisma.dokuman`: Exposes CRUD operations for the **Dokuman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dokumen
    * const dokumen = await prisma.dokuman.findMany()
    * ```
    */
  get dokuman(): Prisma.DokumanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kullanici`: Exposes CRUD operations for the **Kullanici** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kullanicis
    * const kullanicis = await prisma.kullanici.findMany()
    * ```
    */
  get kullanici(): Prisma.KullaniciDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pano`: Exposes CRUD operations for the **Pano** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Panos
    * const panos = await prisma.pano.findMany()
    * ```
    */
  get pano(): Prisma.PanoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Dokuman: 'Dokuman',
    Kullanici: 'Kullanici',
    Pano: 'Pano'
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
      modelProps: "dokuman" | "kullanici" | "pano"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dokuman: {
        payload: Prisma.$DokumanPayload<ExtArgs>
        fields: Prisma.DokumanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DokumanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DokumanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>
          }
          findFirst: {
            args: Prisma.DokumanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DokumanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>
          }
          findMany: {
            args: Prisma.DokumanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>[]
          }
          create: {
            args: Prisma.DokumanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>
          }
          createMany: {
            args: Prisma.DokumanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DokumanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>[]
          }
          delete: {
            args: Prisma.DokumanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>
          }
          update: {
            args: Prisma.DokumanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>
          }
          deleteMany: {
            args: Prisma.DokumanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DokumanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DokumanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>[]
          }
          upsert: {
            args: Prisma.DokumanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DokumanPayload>
          }
          aggregate: {
            args: Prisma.DokumanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDokuman>
          }
          groupBy: {
            args: Prisma.DokumanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DokumanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DokumanCountArgs<ExtArgs>
            result: $Utils.Optional<DokumanCountAggregateOutputType> | number
          }
        }
      }
      Kullanici: {
        payload: Prisma.$KullaniciPayload<ExtArgs>
        fields: Prisma.KullaniciFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KullaniciFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KullaniciFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>
          }
          findFirst: {
            args: Prisma.KullaniciFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KullaniciFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>
          }
          findMany: {
            args: Prisma.KullaniciFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>[]
          }
          create: {
            args: Prisma.KullaniciCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>
          }
          createMany: {
            args: Prisma.KullaniciCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KullaniciCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>[]
          }
          delete: {
            args: Prisma.KullaniciDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>
          }
          update: {
            args: Prisma.KullaniciUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>
          }
          deleteMany: {
            args: Prisma.KullaniciDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KullaniciUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KullaniciUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>[]
          }
          upsert: {
            args: Prisma.KullaniciUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KullaniciPayload>
          }
          aggregate: {
            args: Prisma.KullaniciAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKullanici>
          }
          groupBy: {
            args: Prisma.KullaniciGroupByArgs<ExtArgs>
            result: $Utils.Optional<KullaniciGroupByOutputType>[]
          }
          count: {
            args: Prisma.KullaniciCountArgs<ExtArgs>
            result: $Utils.Optional<KullaniciCountAggregateOutputType> | number
          }
        }
      }
      Pano: {
        payload: Prisma.$PanoPayload<ExtArgs>
        fields: Prisma.PanoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>
          }
          findFirst: {
            args: Prisma.PanoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>
          }
          findMany: {
            args: Prisma.PanoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>[]
          }
          create: {
            args: Prisma.PanoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>
          }
          createMany: {
            args: Prisma.PanoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PanoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>[]
          }
          delete: {
            args: Prisma.PanoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>
          }
          update: {
            args: Prisma.PanoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>
          }
          deleteMany: {
            args: Prisma.PanoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PanoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>[]
          }
          upsert: {
            args: Prisma.PanoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanoPayload>
          }
          aggregate: {
            args: Prisma.PanoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePano>
          }
          groupBy: {
            args: Prisma.PanoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanoCountArgs<ExtArgs>
            result: $Utils.Optional<PanoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    dokuman?: DokumanOmit
    kullanici?: KullaniciOmit
    pano?: PanoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PanoCountOutputType
   */

  export type PanoCountOutputType = {
    Dokuman: number
  }

  export type PanoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dokuman?: boolean | PanoCountOutputTypeCountDokumanArgs
  }

  // Custom InputTypes
  /**
   * PanoCountOutputType without action
   */
  export type PanoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanoCountOutputType
     */
    select?: PanoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PanoCountOutputType without action
   */
  export type PanoCountOutputTypeCountDokumanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dokuman
   */

  export type AggregateDokuman = {
    _count: DokumanCountAggregateOutputType | null
    _avg: DokumanAvgAggregateOutputType | null
    _sum: DokumanSumAggregateOutputType | null
    _min: DokumanMinAggregateOutputType | null
    _max: DokumanMaxAggregateOutputType | null
  }

  export type DokumanAvgAggregateOutputType = {
    id: number | null
    panoId: number | null
  }

  export type DokumanSumAggregateOutputType = {
    id: number | null
    panoId: number | null
  }

  export type DokumanMinAggregateOutputType = {
    id: number | null
    panoId: number | null
    dokumanAdi: string | null
    dosyaAdi: string | null
    dosyaYolu: string | null
    revizyon: string | null
    aciklama: string | null
    aktif: boolean | null
    yuklemeTarihi: Date | null
  }

  export type DokumanMaxAggregateOutputType = {
    id: number | null
    panoId: number | null
    dokumanAdi: string | null
    dosyaAdi: string | null
    dosyaYolu: string | null
    revizyon: string | null
    aciklama: string | null
    aktif: boolean | null
    yuklemeTarihi: Date | null
  }

  export type DokumanCountAggregateOutputType = {
    id: number
    panoId: number
    dokumanAdi: number
    dosyaAdi: number
    dosyaYolu: number
    revizyon: number
    aciklama: number
    aktif: number
    yuklemeTarihi: number
    _all: number
  }


  export type DokumanAvgAggregateInputType = {
    id?: true
    panoId?: true
  }

  export type DokumanSumAggregateInputType = {
    id?: true
    panoId?: true
  }

  export type DokumanMinAggregateInputType = {
    id?: true
    panoId?: true
    dokumanAdi?: true
    dosyaAdi?: true
    dosyaYolu?: true
    revizyon?: true
    aciklama?: true
    aktif?: true
    yuklemeTarihi?: true
  }

  export type DokumanMaxAggregateInputType = {
    id?: true
    panoId?: true
    dokumanAdi?: true
    dosyaAdi?: true
    dosyaYolu?: true
    revizyon?: true
    aciklama?: true
    aktif?: true
    yuklemeTarihi?: true
  }

  export type DokumanCountAggregateInputType = {
    id?: true
    panoId?: true
    dokumanAdi?: true
    dosyaAdi?: true
    dosyaYolu?: true
    revizyon?: true
    aciklama?: true
    aktif?: true
    yuklemeTarihi?: true
    _all?: true
  }

  export type DokumanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokuman to aggregate.
     */
    where?: DokumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumanOrderByWithRelationInput | DokumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DokumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dokumen
    **/
    _count?: true | DokumanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DokumanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DokumanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DokumanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DokumanMaxAggregateInputType
  }

  export type GetDokumanAggregateType<T extends DokumanAggregateArgs> = {
        [P in keyof T & keyof AggregateDokuman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDokuman[P]>
      : GetScalarType<T[P], AggregateDokuman[P]>
  }




  export type DokumanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DokumanWhereInput
    orderBy?: DokumanOrderByWithAggregationInput | DokumanOrderByWithAggregationInput[]
    by: DokumanScalarFieldEnum[] | DokumanScalarFieldEnum
    having?: DokumanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DokumanCountAggregateInputType | true
    _avg?: DokumanAvgAggregateInputType
    _sum?: DokumanSumAggregateInputType
    _min?: DokumanMinAggregateInputType
    _max?: DokumanMaxAggregateInputType
  }

  export type DokumanGroupByOutputType = {
    id: number
    panoId: number
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon: string | null
    aciklama: string | null
    aktif: boolean
    yuklemeTarihi: Date
    _count: DokumanCountAggregateOutputType | null
    _avg: DokumanAvgAggregateOutputType | null
    _sum: DokumanSumAggregateOutputType | null
    _min: DokumanMinAggregateOutputType | null
    _max: DokumanMaxAggregateOutputType | null
  }

  type GetDokumanGroupByPayload<T extends DokumanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DokumanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DokumanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DokumanGroupByOutputType[P]>
            : GetScalarType<T[P], DokumanGroupByOutputType[P]>
        }
      >
    >


  export type DokumanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panoId?: boolean
    dokumanAdi?: boolean
    dosyaAdi?: boolean
    dosyaYolu?: boolean
    revizyon?: boolean
    aciklama?: boolean
    aktif?: boolean
    yuklemeTarihi?: boolean
    Pano?: boolean | PanoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokuman"]>

  export type DokumanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panoId?: boolean
    dokumanAdi?: boolean
    dosyaAdi?: boolean
    dosyaYolu?: boolean
    revizyon?: boolean
    aciklama?: boolean
    aktif?: boolean
    yuklemeTarihi?: boolean
    Pano?: boolean | PanoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokuman"]>

  export type DokumanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panoId?: boolean
    dokumanAdi?: boolean
    dosyaAdi?: boolean
    dosyaYolu?: boolean
    revizyon?: boolean
    aciklama?: boolean
    aktif?: boolean
    yuklemeTarihi?: boolean
    Pano?: boolean | PanoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dokuman"]>

  export type DokumanSelectScalar = {
    id?: boolean
    panoId?: boolean
    dokumanAdi?: boolean
    dosyaAdi?: boolean
    dosyaYolu?: boolean
    revizyon?: boolean
    aciklama?: boolean
    aktif?: boolean
    yuklemeTarihi?: boolean
  }

  export type DokumanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "panoId" | "dokumanAdi" | "dosyaAdi" | "dosyaYolu" | "revizyon" | "aciklama" | "aktif" | "yuklemeTarihi", ExtArgs["result"]["dokuman"]>
  export type DokumanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pano?: boolean | PanoDefaultArgs<ExtArgs>
  }
  export type DokumanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pano?: boolean | PanoDefaultArgs<ExtArgs>
  }
  export type DokumanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pano?: boolean | PanoDefaultArgs<ExtArgs>
  }

  export type $DokumanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dokuman"
    objects: {
      Pano: Prisma.$PanoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      panoId: number
      dokumanAdi: string
      dosyaAdi: string
      dosyaYolu: string
      revizyon: string | null
      aciklama: string | null
      aktif: boolean
      yuklemeTarihi: Date
    }, ExtArgs["result"]["dokuman"]>
    composites: {}
  }

  type DokumanGetPayload<S extends boolean | null | undefined | DokumanDefaultArgs> = $Result.GetResult<Prisma.$DokumanPayload, S>

  type DokumanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DokumanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DokumanCountAggregateInputType | true
    }

  export interface DokumanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dokuman'], meta: { name: 'Dokuman' } }
    /**
     * Find zero or one Dokuman that matches the filter.
     * @param {DokumanFindUniqueArgs} args - Arguments to find a Dokuman
     * @example
     * // Get one Dokuman
     * const dokuman = await prisma.dokuman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DokumanFindUniqueArgs>(args: SelectSubset<T, DokumanFindUniqueArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dokuman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DokumanFindUniqueOrThrowArgs} args - Arguments to find a Dokuman
     * @example
     * // Get one Dokuman
     * const dokuman = await prisma.dokuman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DokumanFindUniqueOrThrowArgs>(args: SelectSubset<T, DokumanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokuman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanFindFirstArgs} args - Arguments to find a Dokuman
     * @example
     * // Get one Dokuman
     * const dokuman = await prisma.dokuman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DokumanFindFirstArgs>(args?: SelectSubset<T, DokumanFindFirstArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dokuman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanFindFirstOrThrowArgs} args - Arguments to find a Dokuman
     * @example
     * // Get one Dokuman
     * const dokuman = await prisma.dokuman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DokumanFindFirstOrThrowArgs>(args?: SelectSubset<T, DokumanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dokumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dokumen
     * const dokumen = await prisma.dokuman.findMany()
     * 
     * // Get first 10 Dokumen
     * const dokumen = await prisma.dokuman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dokumanWithIdOnly = await prisma.dokuman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DokumanFindManyArgs>(args?: SelectSubset<T, DokumanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dokuman.
     * @param {DokumanCreateArgs} args - Arguments to create a Dokuman.
     * @example
     * // Create one Dokuman
     * const Dokuman = await prisma.dokuman.create({
     *   data: {
     *     // ... data to create a Dokuman
     *   }
     * })
     * 
     */
    create<T extends DokumanCreateArgs>(args: SelectSubset<T, DokumanCreateArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dokumen.
     * @param {DokumanCreateManyArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokuman = await prisma.dokuman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DokumanCreateManyArgs>(args?: SelectSubset<T, DokumanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dokumen and returns the data saved in the database.
     * @param {DokumanCreateManyAndReturnArgs} args - Arguments to create many Dokumen.
     * @example
     * // Create many Dokumen
     * const dokuman = await prisma.dokuman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dokumen and only return the `id`
     * const dokumanWithIdOnly = await prisma.dokuman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DokumanCreateManyAndReturnArgs>(args?: SelectSubset<T, DokumanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dokuman.
     * @param {DokumanDeleteArgs} args - Arguments to delete one Dokuman.
     * @example
     * // Delete one Dokuman
     * const Dokuman = await prisma.dokuman.delete({
     *   where: {
     *     // ... filter to delete one Dokuman
     *   }
     * })
     * 
     */
    delete<T extends DokumanDeleteArgs>(args: SelectSubset<T, DokumanDeleteArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dokuman.
     * @param {DokumanUpdateArgs} args - Arguments to update one Dokuman.
     * @example
     * // Update one Dokuman
     * const dokuman = await prisma.dokuman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DokumanUpdateArgs>(args: SelectSubset<T, DokumanUpdateArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dokumen.
     * @param {DokumanDeleteManyArgs} args - Arguments to filter Dokumen to delete.
     * @example
     * // Delete a few Dokumen
     * const { count } = await prisma.dokuman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DokumanDeleteManyArgs>(args?: SelectSubset<T, DokumanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dokumen
     * const dokuman = await prisma.dokuman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DokumanUpdateManyArgs>(args: SelectSubset<T, DokumanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dokumen and returns the data updated in the database.
     * @param {DokumanUpdateManyAndReturnArgs} args - Arguments to update many Dokumen.
     * @example
     * // Update many Dokumen
     * const dokuman = await prisma.dokuman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dokumen and only return the `id`
     * const dokumanWithIdOnly = await prisma.dokuman.updateManyAndReturn({
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
    updateManyAndReturn<T extends DokumanUpdateManyAndReturnArgs>(args: SelectSubset<T, DokumanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dokuman.
     * @param {DokumanUpsertArgs} args - Arguments to update or create a Dokuman.
     * @example
     * // Update or create a Dokuman
     * const dokuman = await prisma.dokuman.upsert({
     *   create: {
     *     // ... data to create a Dokuman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dokuman we want to update
     *   }
     * })
     */
    upsert<T extends DokumanUpsertArgs>(args: SelectSubset<T, DokumanUpsertArgs<ExtArgs>>): Prisma__DokumanClient<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dokumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanCountArgs} args - Arguments to filter Dokumen to count.
     * @example
     * // Count the number of Dokumen
     * const count = await prisma.dokuman.count({
     *   where: {
     *     // ... the filter for the Dokumen we want to count
     *   }
     * })
    **/
    count<T extends DokumanCountArgs>(
      args?: Subset<T, DokumanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DokumanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dokuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DokumanAggregateArgs>(args: Subset<T, DokumanAggregateArgs>): Prisma.PrismaPromise<GetDokumanAggregateType<T>>

    /**
     * Group by Dokuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DokumanGroupByArgs} args - Group by arguments.
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
      T extends DokumanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DokumanGroupByArgs['orderBy'] }
        : { orderBy?: DokumanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DokumanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDokumanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dokuman model
   */
  readonly fields: DokumanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dokuman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DokumanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pano<T extends PanoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PanoDefaultArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dokuman model
   */
  interface DokumanFieldRefs {
    readonly id: FieldRef<"Dokuman", 'Int'>
    readonly panoId: FieldRef<"Dokuman", 'Int'>
    readonly dokumanAdi: FieldRef<"Dokuman", 'String'>
    readonly dosyaAdi: FieldRef<"Dokuman", 'String'>
    readonly dosyaYolu: FieldRef<"Dokuman", 'String'>
    readonly revizyon: FieldRef<"Dokuman", 'String'>
    readonly aciklama: FieldRef<"Dokuman", 'String'>
    readonly aktif: FieldRef<"Dokuman", 'Boolean'>
    readonly yuklemeTarihi: FieldRef<"Dokuman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dokuman findUnique
   */
  export type DokumanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * Filter, which Dokuman to fetch.
     */
    where: DokumanWhereUniqueInput
  }

  /**
   * Dokuman findUniqueOrThrow
   */
  export type DokumanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * Filter, which Dokuman to fetch.
     */
    where: DokumanWhereUniqueInput
  }

  /**
   * Dokuman findFirst
   */
  export type DokumanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * Filter, which Dokuman to fetch.
     */
    where?: DokumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumanOrderByWithRelationInput | DokumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokumen.
     */
    cursor?: DokumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokumen.
     */
    distinct?: DokumanScalarFieldEnum | DokumanScalarFieldEnum[]
  }

  /**
   * Dokuman findFirstOrThrow
   */
  export type DokumanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * Filter, which Dokuman to fetch.
     */
    where?: DokumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumanOrderByWithRelationInput | DokumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dokumen.
     */
    cursor?: DokumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dokumen.
     */
    distinct?: DokumanScalarFieldEnum | DokumanScalarFieldEnum[]
  }

  /**
   * Dokuman findMany
   */
  export type DokumanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * Filter, which Dokumen to fetch.
     */
    where?: DokumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dokumen to fetch.
     */
    orderBy?: DokumanOrderByWithRelationInput | DokumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dokumen.
     */
    cursor?: DokumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dokumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dokumen.
     */
    skip?: number
    distinct?: DokumanScalarFieldEnum | DokumanScalarFieldEnum[]
  }

  /**
   * Dokuman create
   */
  export type DokumanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * The data needed to create a Dokuman.
     */
    data: XOR<DokumanCreateInput, DokumanUncheckedCreateInput>
  }

  /**
   * Dokuman createMany
   */
  export type DokumanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dokumen.
     */
    data: DokumanCreateManyInput | DokumanCreateManyInput[]
  }

  /**
   * Dokuman createManyAndReturn
   */
  export type DokumanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * The data used to create many Dokumen.
     */
    data: DokumanCreateManyInput | DokumanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dokuman update
   */
  export type DokumanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * The data needed to update a Dokuman.
     */
    data: XOR<DokumanUpdateInput, DokumanUncheckedUpdateInput>
    /**
     * Choose, which Dokuman to update.
     */
    where: DokumanWhereUniqueInput
  }

  /**
   * Dokuman updateMany
   */
  export type DokumanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dokumen.
     */
    data: XOR<DokumanUpdateManyMutationInput, DokumanUncheckedUpdateManyInput>
    /**
     * Filter which Dokumen to update
     */
    where?: DokumanWhereInput
    /**
     * Limit how many Dokumen to update.
     */
    limit?: number
  }

  /**
   * Dokuman updateManyAndReturn
   */
  export type DokumanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * The data used to update Dokumen.
     */
    data: XOR<DokumanUpdateManyMutationInput, DokumanUncheckedUpdateManyInput>
    /**
     * Filter which Dokumen to update
     */
    where?: DokumanWhereInput
    /**
     * Limit how many Dokumen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dokuman upsert
   */
  export type DokumanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * The filter to search for the Dokuman to update in case it exists.
     */
    where: DokumanWhereUniqueInput
    /**
     * In case the Dokuman found by the `where` argument doesn't exist, create a new Dokuman with this data.
     */
    create: XOR<DokumanCreateInput, DokumanUncheckedCreateInput>
    /**
     * In case the Dokuman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DokumanUpdateInput, DokumanUncheckedUpdateInput>
  }

  /**
   * Dokuman delete
   */
  export type DokumanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    /**
     * Filter which Dokuman to delete.
     */
    where: DokumanWhereUniqueInput
  }

  /**
   * Dokuman deleteMany
   */
  export type DokumanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dokumen to delete
     */
    where?: DokumanWhereInput
    /**
     * Limit how many Dokumen to delete.
     */
    limit?: number
  }

  /**
   * Dokuman without action
   */
  export type DokumanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
  }


  /**
   * Model Kullanici
   */

  export type AggregateKullanici = {
    _count: KullaniciCountAggregateOutputType | null
    _avg: KullaniciAvgAggregateOutputType | null
    _sum: KullaniciSumAggregateOutputType | null
    _min: KullaniciMinAggregateOutputType | null
    _max: KullaniciMaxAggregateOutputType | null
  }

  export type KullaniciAvgAggregateOutputType = {
    id: number | null
  }

  export type KullaniciSumAggregateOutputType = {
    id: number | null
  }

  export type KullaniciMinAggregateOutputType = {
    id: number | null
    kullaniciAdi: string | null
    sifreHash: string | null
    adSoyad: string | null
    aktif: boolean | null
    olusturmaTarihi: Date | null
  }

  export type KullaniciMaxAggregateOutputType = {
    id: number | null
    kullaniciAdi: string | null
    sifreHash: string | null
    adSoyad: string | null
    aktif: boolean | null
    olusturmaTarihi: Date | null
  }

  export type KullaniciCountAggregateOutputType = {
    id: number
    kullaniciAdi: number
    sifreHash: number
    adSoyad: number
    aktif: number
    olusturmaTarihi: number
    _all: number
  }


  export type KullaniciAvgAggregateInputType = {
    id?: true
  }

  export type KullaniciSumAggregateInputType = {
    id?: true
  }

  export type KullaniciMinAggregateInputType = {
    id?: true
    kullaniciAdi?: true
    sifreHash?: true
    adSoyad?: true
    aktif?: true
    olusturmaTarihi?: true
  }

  export type KullaniciMaxAggregateInputType = {
    id?: true
    kullaniciAdi?: true
    sifreHash?: true
    adSoyad?: true
    aktif?: true
    olusturmaTarihi?: true
  }

  export type KullaniciCountAggregateInputType = {
    id?: true
    kullaniciAdi?: true
    sifreHash?: true
    adSoyad?: true
    aktif?: true
    olusturmaTarihi?: true
    _all?: true
  }

  export type KullaniciAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kullanici to aggregate.
     */
    where?: KullaniciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kullanicis to fetch.
     */
    orderBy?: KullaniciOrderByWithRelationInput | KullaniciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KullaniciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kullanicis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kullanicis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kullanicis
    **/
    _count?: true | KullaniciCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KullaniciAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KullaniciSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KullaniciMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KullaniciMaxAggregateInputType
  }

  export type GetKullaniciAggregateType<T extends KullaniciAggregateArgs> = {
        [P in keyof T & keyof AggregateKullanici]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKullanici[P]>
      : GetScalarType<T[P], AggregateKullanici[P]>
  }




  export type KullaniciGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KullaniciWhereInput
    orderBy?: KullaniciOrderByWithAggregationInput | KullaniciOrderByWithAggregationInput[]
    by: KullaniciScalarFieldEnum[] | KullaniciScalarFieldEnum
    having?: KullaniciScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KullaniciCountAggregateInputType | true
    _avg?: KullaniciAvgAggregateInputType
    _sum?: KullaniciSumAggregateInputType
    _min?: KullaniciMinAggregateInputType
    _max?: KullaniciMaxAggregateInputType
  }

  export type KullaniciGroupByOutputType = {
    id: number
    kullaniciAdi: string
    sifreHash: string
    adSoyad: string | null
    aktif: boolean
    olusturmaTarihi: Date
    _count: KullaniciCountAggregateOutputType | null
    _avg: KullaniciAvgAggregateOutputType | null
    _sum: KullaniciSumAggregateOutputType | null
    _min: KullaniciMinAggregateOutputType | null
    _max: KullaniciMaxAggregateOutputType | null
  }

  type GetKullaniciGroupByPayload<T extends KullaniciGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KullaniciGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KullaniciGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KullaniciGroupByOutputType[P]>
            : GetScalarType<T[P], KullaniciGroupByOutputType[P]>
        }
      >
    >


  export type KullaniciSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kullaniciAdi?: boolean
    sifreHash?: boolean
    adSoyad?: boolean
    aktif?: boolean
    olusturmaTarihi?: boolean
  }, ExtArgs["result"]["kullanici"]>

  export type KullaniciSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kullaniciAdi?: boolean
    sifreHash?: boolean
    adSoyad?: boolean
    aktif?: boolean
    olusturmaTarihi?: boolean
  }, ExtArgs["result"]["kullanici"]>

  export type KullaniciSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kullaniciAdi?: boolean
    sifreHash?: boolean
    adSoyad?: boolean
    aktif?: boolean
    olusturmaTarihi?: boolean
  }, ExtArgs["result"]["kullanici"]>

  export type KullaniciSelectScalar = {
    id?: boolean
    kullaniciAdi?: boolean
    sifreHash?: boolean
    adSoyad?: boolean
    aktif?: boolean
    olusturmaTarihi?: boolean
  }

  export type KullaniciOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kullaniciAdi" | "sifreHash" | "adSoyad" | "aktif" | "olusturmaTarihi", ExtArgs["result"]["kullanici"]>

  export type $KullaniciPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kullanici"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kullaniciAdi: string
      sifreHash: string
      adSoyad: string | null
      aktif: boolean
      olusturmaTarihi: Date
    }, ExtArgs["result"]["kullanici"]>
    composites: {}
  }

  type KullaniciGetPayload<S extends boolean | null | undefined | KullaniciDefaultArgs> = $Result.GetResult<Prisma.$KullaniciPayload, S>

  type KullaniciCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KullaniciFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KullaniciCountAggregateInputType | true
    }

  export interface KullaniciDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kullanici'], meta: { name: 'Kullanici' } }
    /**
     * Find zero or one Kullanici that matches the filter.
     * @param {KullaniciFindUniqueArgs} args - Arguments to find a Kullanici
     * @example
     * // Get one Kullanici
     * const kullanici = await prisma.kullanici.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KullaniciFindUniqueArgs>(args: SelectSubset<T, KullaniciFindUniqueArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kullanici that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KullaniciFindUniqueOrThrowArgs} args - Arguments to find a Kullanici
     * @example
     * // Get one Kullanici
     * const kullanici = await prisma.kullanici.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KullaniciFindUniqueOrThrowArgs>(args: SelectSubset<T, KullaniciFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kullanici that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciFindFirstArgs} args - Arguments to find a Kullanici
     * @example
     * // Get one Kullanici
     * const kullanici = await prisma.kullanici.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KullaniciFindFirstArgs>(args?: SelectSubset<T, KullaniciFindFirstArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kullanici that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciFindFirstOrThrowArgs} args - Arguments to find a Kullanici
     * @example
     * // Get one Kullanici
     * const kullanici = await prisma.kullanici.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KullaniciFindFirstOrThrowArgs>(args?: SelectSubset<T, KullaniciFindFirstOrThrowArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kullanicis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kullanicis
     * const kullanicis = await prisma.kullanici.findMany()
     * 
     * // Get first 10 Kullanicis
     * const kullanicis = await prisma.kullanici.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kullaniciWithIdOnly = await prisma.kullanici.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KullaniciFindManyArgs>(args?: SelectSubset<T, KullaniciFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kullanici.
     * @param {KullaniciCreateArgs} args - Arguments to create a Kullanici.
     * @example
     * // Create one Kullanici
     * const Kullanici = await prisma.kullanici.create({
     *   data: {
     *     // ... data to create a Kullanici
     *   }
     * })
     * 
     */
    create<T extends KullaniciCreateArgs>(args: SelectSubset<T, KullaniciCreateArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kullanicis.
     * @param {KullaniciCreateManyArgs} args - Arguments to create many Kullanicis.
     * @example
     * // Create many Kullanicis
     * const kullanici = await prisma.kullanici.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KullaniciCreateManyArgs>(args?: SelectSubset<T, KullaniciCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kullanicis and returns the data saved in the database.
     * @param {KullaniciCreateManyAndReturnArgs} args - Arguments to create many Kullanicis.
     * @example
     * // Create many Kullanicis
     * const kullanici = await prisma.kullanici.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kullanicis and only return the `id`
     * const kullaniciWithIdOnly = await prisma.kullanici.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KullaniciCreateManyAndReturnArgs>(args?: SelectSubset<T, KullaniciCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kullanici.
     * @param {KullaniciDeleteArgs} args - Arguments to delete one Kullanici.
     * @example
     * // Delete one Kullanici
     * const Kullanici = await prisma.kullanici.delete({
     *   where: {
     *     // ... filter to delete one Kullanici
     *   }
     * })
     * 
     */
    delete<T extends KullaniciDeleteArgs>(args: SelectSubset<T, KullaniciDeleteArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kullanici.
     * @param {KullaniciUpdateArgs} args - Arguments to update one Kullanici.
     * @example
     * // Update one Kullanici
     * const kullanici = await prisma.kullanici.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KullaniciUpdateArgs>(args: SelectSubset<T, KullaniciUpdateArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kullanicis.
     * @param {KullaniciDeleteManyArgs} args - Arguments to filter Kullanicis to delete.
     * @example
     * // Delete a few Kullanicis
     * const { count } = await prisma.kullanici.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KullaniciDeleteManyArgs>(args?: SelectSubset<T, KullaniciDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kullanicis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kullanicis
     * const kullanici = await prisma.kullanici.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KullaniciUpdateManyArgs>(args: SelectSubset<T, KullaniciUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kullanicis and returns the data updated in the database.
     * @param {KullaniciUpdateManyAndReturnArgs} args - Arguments to update many Kullanicis.
     * @example
     * // Update many Kullanicis
     * const kullanici = await prisma.kullanici.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kullanicis and only return the `id`
     * const kullaniciWithIdOnly = await prisma.kullanici.updateManyAndReturn({
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
    updateManyAndReturn<T extends KullaniciUpdateManyAndReturnArgs>(args: SelectSubset<T, KullaniciUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kullanici.
     * @param {KullaniciUpsertArgs} args - Arguments to update or create a Kullanici.
     * @example
     * // Update or create a Kullanici
     * const kullanici = await prisma.kullanici.upsert({
     *   create: {
     *     // ... data to create a Kullanici
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kullanici we want to update
     *   }
     * })
     */
    upsert<T extends KullaniciUpsertArgs>(args: SelectSubset<T, KullaniciUpsertArgs<ExtArgs>>): Prisma__KullaniciClient<$Result.GetResult<Prisma.$KullaniciPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kullanicis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciCountArgs} args - Arguments to filter Kullanicis to count.
     * @example
     * // Count the number of Kullanicis
     * const count = await prisma.kullanici.count({
     *   where: {
     *     // ... the filter for the Kullanicis we want to count
     *   }
     * })
    **/
    count<T extends KullaniciCountArgs>(
      args?: Subset<T, KullaniciCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KullaniciCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kullanici.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KullaniciAggregateArgs>(args: Subset<T, KullaniciAggregateArgs>): Prisma.PrismaPromise<GetKullaniciAggregateType<T>>

    /**
     * Group by Kullanici.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KullaniciGroupByArgs} args - Group by arguments.
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
      T extends KullaniciGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KullaniciGroupByArgs['orderBy'] }
        : { orderBy?: KullaniciGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KullaniciGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKullaniciGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kullanici model
   */
  readonly fields: KullaniciFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kullanici.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KullaniciClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Kullanici model
   */
  interface KullaniciFieldRefs {
    readonly id: FieldRef<"Kullanici", 'Int'>
    readonly kullaniciAdi: FieldRef<"Kullanici", 'String'>
    readonly sifreHash: FieldRef<"Kullanici", 'String'>
    readonly adSoyad: FieldRef<"Kullanici", 'String'>
    readonly aktif: FieldRef<"Kullanici", 'Boolean'>
    readonly olusturmaTarihi: FieldRef<"Kullanici", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kullanici findUnique
   */
  export type KullaniciFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * Filter, which Kullanici to fetch.
     */
    where: KullaniciWhereUniqueInput
  }

  /**
   * Kullanici findUniqueOrThrow
   */
  export type KullaniciFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * Filter, which Kullanici to fetch.
     */
    where: KullaniciWhereUniqueInput
  }

  /**
   * Kullanici findFirst
   */
  export type KullaniciFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * Filter, which Kullanici to fetch.
     */
    where?: KullaniciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kullanicis to fetch.
     */
    orderBy?: KullaniciOrderByWithRelationInput | KullaniciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kullanicis.
     */
    cursor?: KullaniciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kullanicis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kullanicis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kullanicis.
     */
    distinct?: KullaniciScalarFieldEnum | KullaniciScalarFieldEnum[]
  }

  /**
   * Kullanici findFirstOrThrow
   */
  export type KullaniciFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * Filter, which Kullanici to fetch.
     */
    where?: KullaniciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kullanicis to fetch.
     */
    orderBy?: KullaniciOrderByWithRelationInput | KullaniciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kullanicis.
     */
    cursor?: KullaniciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kullanicis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kullanicis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kullanicis.
     */
    distinct?: KullaniciScalarFieldEnum | KullaniciScalarFieldEnum[]
  }

  /**
   * Kullanici findMany
   */
  export type KullaniciFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * Filter, which Kullanicis to fetch.
     */
    where?: KullaniciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kullanicis to fetch.
     */
    orderBy?: KullaniciOrderByWithRelationInput | KullaniciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kullanicis.
     */
    cursor?: KullaniciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kullanicis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kullanicis.
     */
    skip?: number
    distinct?: KullaniciScalarFieldEnum | KullaniciScalarFieldEnum[]
  }

  /**
   * Kullanici create
   */
  export type KullaniciCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * The data needed to create a Kullanici.
     */
    data: XOR<KullaniciCreateInput, KullaniciUncheckedCreateInput>
  }

  /**
   * Kullanici createMany
   */
  export type KullaniciCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kullanicis.
     */
    data: KullaniciCreateManyInput | KullaniciCreateManyInput[]
  }

  /**
   * Kullanici createManyAndReturn
   */
  export type KullaniciCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * The data used to create many Kullanicis.
     */
    data: KullaniciCreateManyInput | KullaniciCreateManyInput[]
  }

  /**
   * Kullanici update
   */
  export type KullaniciUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * The data needed to update a Kullanici.
     */
    data: XOR<KullaniciUpdateInput, KullaniciUncheckedUpdateInput>
    /**
     * Choose, which Kullanici to update.
     */
    where: KullaniciWhereUniqueInput
  }

  /**
   * Kullanici updateMany
   */
  export type KullaniciUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kullanicis.
     */
    data: XOR<KullaniciUpdateManyMutationInput, KullaniciUncheckedUpdateManyInput>
    /**
     * Filter which Kullanicis to update
     */
    where?: KullaniciWhereInput
    /**
     * Limit how many Kullanicis to update.
     */
    limit?: number
  }

  /**
   * Kullanici updateManyAndReturn
   */
  export type KullaniciUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * The data used to update Kullanicis.
     */
    data: XOR<KullaniciUpdateManyMutationInput, KullaniciUncheckedUpdateManyInput>
    /**
     * Filter which Kullanicis to update
     */
    where?: KullaniciWhereInput
    /**
     * Limit how many Kullanicis to update.
     */
    limit?: number
  }

  /**
   * Kullanici upsert
   */
  export type KullaniciUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * The filter to search for the Kullanici to update in case it exists.
     */
    where: KullaniciWhereUniqueInput
    /**
     * In case the Kullanici found by the `where` argument doesn't exist, create a new Kullanici with this data.
     */
    create: XOR<KullaniciCreateInput, KullaniciUncheckedCreateInput>
    /**
     * In case the Kullanici was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KullaniciUpdateInput, KullaniciUncheckedUpdateInput>
  }

  /**
   * Kullanici delete
   */
  export type KullaniciDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
    /**
     * Filter which Kullanici to delete.
     */
    where: KullaniciWhereUniqueInput
  }

  /**
   * Kullanici deleteMany
   */
  export type KullaniciDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kullanicis to delete
     */
    where?: KullaniciWhereInput
    /**
     * Limit how many Kullanicis to delete.
     */
    limit?: number
  }

  /**
   * Kullanici without action
   */
  export type KullaniciDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kullanici
     */
    select?: KullaniciSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kullanici
     */
    omit?: KullaniciOmit<ExtArgs> | null
  }


  /**
   * Model Pano
   */

  export type AggregatePano = {
    _count: PanoCountAggregateOutputType | null
    _avg: PanoAvgAggregateOutputType | null
    _sum: PanoSumAggregateOutputType | null
    _min: PanoMinAggregateOutputType | null
    _max: PanoMaxAggregateOutputType | null
  }

  export type PanoAvgAggregateOutputType = {
    id: number | null
  }

  export type PanoSumAggregateOutputType = {
    id: number | null
  }

  export type PanoMinAggregateOutputType = {
    id: number | null
    panoNo: string | null
    panoAdi: string | null
    makineHat: string | null
    projeNo: string | null
    aciklama: string | null
    qrKod: string | null
    olusturmaTarihi: Date | null
    guncellemeTarihi: Date | null
  }

  export type PanoMaxAggregateOutputType = {
    id: number | null
    panoNo: string | null
    panoAdi: string | null
    makineHat: string | null
    projeNo: string | null
    aciklama: string | null
    qrKod: string | null
    olusturmaTarihi: Date | null
    guncellemeTarihi: Date | null
  }

  export type PanoCountAggregateOutputType = {
    id: number
    panoNo: number
    panoAdi: number
    makineHat: number
    projeNo: number
    aciklama: number
    qrKod: number
    olusturmaTarihi: number
    guncellemeTarihi: number
    _all: number
  }


  export type PanoAvgAggregateInputType = {
    id?: true
  }

  export type PanoSumAggregateInputType = {
    id?: true
  }

  export type PanoMinAggregateInputType = {
    id?: true
    panoNo?: true
    panoAdi?: true
    makineHat?: true
    projeNo?: true
    aciklama?: true
    qrKod?: true
    olusturmaTarihi?: true
    guncellemeTarihi?: true
  }

  export type PanoMaxAggregateInputType = {
    id?: true
    panoNo?: true
    panoAdi?: true
    makineHat?: true
    projeNo?: true
    aciklama?: true
    qrKod?: true
    olusturmaTarihi?: true
    guncellemeTarihi?: true
  }

  export type PanoCountAggregateInputType = {
    id?: true
    panoNo?: true
    panoAdi?: true
    makineHat?: true
    projeNo?: true
    aciklama?: true
    qrKod?: true
    olusturmaTarihi?: true
    guncellemeTarihi?: true
    _all?: true
  }

  export type PanoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pano to aggregate.
     */
    where?: PanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panos to fetch.
     */
    orderBy?: PanoOrderByWithRelationInput | PanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Panos
    **/
    _count?: true | PanoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanoMaxAggregateInputType
  }

  export type GetPanoAggregateType<T extends PanoAggregateArgs> = {
        [P in keyof T & keyof AggregatePano]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePano[P]>
      : GetScalarType<T[P], AggregatePano[P]>
  }




  export type PanoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanoWhereInput
    orderBy?: PanoOrderByWithAggregationInput | PanoOrderByWithAggregationInput[]
    by: PanoScalarFieldEnum[] | PanoScalarFieldEnum
    having?: PanoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanoCountAggregateInputType | true
    _avg?: PanoAvgAggregateInputType
    _sum?: PanoSumAggregateInputType
    _min?: PanoMinAggregateInputType
    _max?: PanoMaxAggregateInputType
  }

  export type PanoGroupByOutputType = {
    id: number
    panoNo: string
    panoAdi: string
    makineHat: string | null
    projeNo: string | null
    aciklama: string | null
    qrKod: string
    olusturmaTarihi: Date
    guncellemeTarihi: Date
    _count: PanoCountAggregateOutputType | null
    _avg: PanoAvgAggregateOutputType | null
    _sum: PanoSumAggregateOutputType | null
    _min: PanoMinAggregateOutputType | null
    _max: PanoMaxAggregateOutputType | null
  }

  type GetPanoGroupByPayload<T extends PanoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanoGroupByOutputType[P]>
            : GetScalarType<T[P], PanoGroupByOutputType[P]>
        }
      >
    >


  export type PanoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panoNo?: boolean
    panoAdi?: boolean
    makineHat?: boolean
    projeNo?: boolean
    aciklama?: boolean
    qrKod?: boolean
    olusturmaTarihi?: boolean
    guncellemeTarihi?: boolean
    Dokuman?: boolean | Pano$DokumanArgs<ExtArgs>
    _count?: boolean | PanoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pano"]>

  export type PanoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panoNo?: boolean
    panoAdi?: boolean
    makineHat?: boolean
    projeNo?: boolean
    aciklama?: boolean
    qrKod?: boolean
    olusturmaTarihi?: boolean
    guncellemeTarihi?: boolean
  }, ExtArgs["result"]["pano"]>

  export type PanoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panoNo?: boolean
    panoAdi?: boolean
    makineHat?: boolean
    projeNo?: boolean
    aciklama?: boolean
    qrKod?: boolean
    olusturmaTarihi?: boolean
    guncellemeTarihi?: boolean
  }, ExtArgs["result"]["pano"]>

  export type PanoSelectScalar = {
    id?: boolean
    panoNo?: boolean
    panoAdi?: boolean
    makineHat?: boolean
    projeNo?: boolean
    aciklama?: boolean
    qrKod?: boolean
    olusturmaTarihi?: boolean
    guncellemeTarihi?: boolean
  }

  export type PanoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "panoNo" | "panoAdi" | "makineHat" | "projeNo" | "aciklama" | "qrKod" | "olusturmaTarihi" | "guncellemeTarihi", ExtArgs["result"]["pano"]>
  export type PanoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dokuman?: boolean | Pano$DokumanArgs<ExtArgs>
    _count?: boolean | PanoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PanoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PanoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PanoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pano"
    objects: {
      Dokuman: Prisma.$DokumanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      panoNo: string
      panoAdi: string
      makineHat: string | null
      projeNo: string | null
      aciklama: string | null
      qrKod: string
      olusturmaTarihi: Date
      guncellemeTarihi: Date
    }, ExtArgs["result"]["pano"]>
    composites: {}
  }

  type PanoGetPayload<S extends boolean | null | undefined | PanoDefaultArgs> = $Result.GetResult<Prisma.$PanoPayload, S>

  type PanoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanoCountAggregateInputType | true
    }

  export interface PanoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pano'], meta: { name: 'Pano' } }
    /**
     * Find zero or one Pano that matches the filter.
     * @param {PanoFindUniqueArgs} args - Arguments to find a Pano
     * @example
     * // Get one Pano
     * const pano = await prisma.pano.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanoFindUniqueArgs>(args: SelectSubset<T, PanoFindUniqueArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pano that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanoFindUniqueOrThrowArgs} args - Arguments to find a Pano
     * @example
     * // Get one Pano
     * const pano = await prisma.pano.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanoFindUniqueOrThrowArgs>(args: SelectSubset<T, PanoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pano that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoFindFirstArgs} args - Arguments to find a Pano
     * @example
     * // Get one Pano
     * const pano = await prisma.pano.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanoFindFirstArgs>(args?: SelectSubset<T, PanoFindFirstArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pano that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoFindFirstOrThrowArgs} args - Arguments to find a Pano
     * @example
     * // Get one Pano
     * const pano = await prisma.pano.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanoFindFirstOrThrowArgs>(args?: SelectSubset<T, PanoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Panos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Panos
     * const panos = await prisma.pano.findMany()
     * 
     * // Get first 10 Panos
     * const panos = await prisma.pano.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panoWithIdOnly = await prisma.pano.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanoFindManyArgs>(args?: SelectSubset<T, PanoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pano.
     * @param {PanoCreateArgs} args - Arguments to create a Pano.
     * @example
     * // Create one Pano
     * const Pano = await prisma.pano.create({
     *   data: {
     *     // ... data to create a Pano
     *   }
     * })
     * 
     */
    create<T extends PanoCreateArgs>(args: SelectSubset<T, PanoCreateArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Panos.
     * @param {PanoCreateManyArgs} args - Arguments to create many Panos.
     * @example
     * // Create many Panos
     * const pano = await prisma.pano.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanoCreateManyArgs>(args?: SelectSubset<T, PanoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Panos and returns the data saved in the database.
     * @param {PanoCreateManyAndReturnArgs} args - Arguments to create many Panos.
     * @example
     * // Create many Panos
     * const pano = await prisma.pano.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Panos and only return the `id`
     * const panoWithIdOnly = await prisma.pano.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PanoCreateManyAndReturnArgs>(args?: SelectSubset<T, PanoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pano.
     * @param {PanoDeleteArgs} args - Arguments to delete one Pano.
     * @example
     * // Delete one Pano
     * const Pano = await prisma.pano.delete({
     *   where: {
     *     // ... filter to delete one Pano
     *   }
     * })
     * 
     */
    delete<T extends PanoDeleteArgs>(args: SelectSubset<T, PanoDeleteArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pano.
     * @param {PanoUpdateArgs} args - Arguments to update one Pano.
     * @example
     * // Update one Pano
     * const pano = await prisma.pano.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanoUpdateArgs>(args: SelectSubset<T, PanoUpdateArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Panos.
     * @param {PanoDeleteManyArgs} args - Arguments to filter Panos to delete.
     * @example
     * // Delete a few Panos
     * const { count } = await prisma.pano.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanoDeleteManyArgs>(args?: SelectSubset<T, PanoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Panos
     * const pano = await prisma.pano.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanoUpdateManyArgs>(args: SelectSubset<T, PanoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panos and returns the data updated in the database.
     * @param {PanoUpdateManyAndReturnArgs} args - Arguments to update many Panos.
     * @example
     * // Update many Panos
     * const pano = await prisma.pano.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Panos and only return the `id`
     * const panoWithIdOnly = await prisma.pano.updateManyAndReturn({
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
    updateManyAndReturn<T extends PanoUpdateManyAndReturnArgs>(args: SelectSubset<T, PanoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pano.
     * @param {PanoUpsertArgs} args - Arguments to update or create a Pano.
     * @example
     * // Update or create a Pano
     * const pano = await prisma.pano.upsert({
     *   create: {
     *     // ... data to create a Pano
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pano we want to update
     *   }
     * })
     */
    upsert<T extends PanoUpsertArgs>(args: SelectSubset<T, PanoUpsertArgs<ExtArgs>>): Prisma__PanoClient<$Result.GetResult<Prisma.$PanoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Panos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoCountArgs} args - Arguments to filter Panos to count.
     * @example
     * // Count the number of Panos
     * const count = await prisma.pano.count({
     *   where: {
     *     // ... the filter for the Panos we want to count
     *   }
     * })
    **/
    count<T extends PanoCountArgs>(
      args?: Subset<T, PanoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PanoAggregateArgs>(args: Subset<T, PanoAggregateArgs>): Prisma.PrismaPromise<GetPanoAggregateType<T>>

    /**
     * Group by Pano.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanoGroupByArgs} args - Group by arguments.
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
      T extends PanoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanoGroupByArgs['orderBy'] }
        : { orderBy?: PanoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PanoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pano model
   */
  readonly fields: PanoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pano.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dokuman<T extends Pano$DokumanArgs<ExtArgs> = {}>(args?: Subset<T, Pano$DokumanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DokumanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pano model
   */
  interface PanoFieldRefs {
    readonly id: FieldRef<"Pano", 'Int'>
    readonly panoNo: FieldRef<"Pano", 'String'>
    readonly panoAdi: FieldRef<"Pano", 'String'>
    readonly makineHat: FieldRef<"Pano", 'String'>
    readonly projeNo: FieldRef<"Pano", 'String'>
    readonly aciklama: FieldRef<"Pano", 'String'>
    readonly qrKod: FieldRef<"Pano", 'String'>
    readonly olusturmaTarihi: FieldRef<"Pano", 'DateTime'>
    readonly guncellemeTarihi: FieldRef<"Pano", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pano findUnique
   */
  export type PanoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * Filter, which Pano to fetch.
     */
    where: PanoWhereUniqueInput
  }

  /**
   * Pano findUniqueOrThrow
   */
  export type PanoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * Filter, which Pano to fetch.
     */
    where: PanoWhereUniqueInput
  }

  /**
   * Pano findFirst
   */
  export type PanoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * Filter, which Pano to fetch.
     */
    where?: PanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panos to fetch.
     */
    orderBy?: PanoOrderByWithRelationInput | PanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panos.
     */
    cursor?: PanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panos.
     */
    distinct?: PanoScalarFieldEnum | PanoScalarFieldEnum[]
  }

  /**
   * Pano findFirstOrThrow
   */
  export type PanoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * Filter, which Pano to fetch.
     */
    where?: PanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panos to fetch.
     */
    orderBy?: PanoOrderByWithRelationInput | PanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panos.
     */
    cursor?: PanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panos.
     */
    distinct?: PanoScalarFieldEnum | PanoScalarFieldEnum[]
  }

  /**
   * Pano findMany
   */
  export type PanoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * Filter, which Panos to fetch.
     */
    where?: PanoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panos to fetch.
     */
    orderBy?: PanoOrderByWithRelationInput | PanoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Panos.
     */
    cursor?: PanoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panos.
     */
    skip?: number
    distinct?: PanoScalarFieldEnum | PanoScalarFieldEnum[]
  }

  /**
   * Pano create
   */
  export type PanoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pano.
     */
    data: XOR<PanoCreateInput, PanoUncheckedCreateInput>
  }

  /**
   * Pano createMany
   */
  export type PanoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Panos.
     */
    data: PanoCreateManyInput | PanoCreateManyInput[]
  }

  /**
   * Pano createManyAndReturn
   */
  export type PanoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * The data used to create many Panos.
     */
    data: PanoCreateManyInput | PanoCreateManyInput[]
  }

  /**
   * Pano update
   */
  export type PanoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pano.
     */
    data: XOR<PanoUpdateInput, PanoUncheckedUpdateInput>
    /**
     * Choose, which Pano to update.
     */
    where: PanoWhereUniqueInput
  }

  /**
   * Pano updateMany
   */
  export type PanoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Panos.
     */
    data: XOR<PanoUpdateManyMutationInput, PanoUncheckedUpdateManyInput>
    /**
     * Filter which Panos to update
     */
    where?: PanoWhereInput
    /**
     * Limit how many Panos to update.
     */
    limit?: number
  }

  /**
   * Pano updateManyAndReturn
   */
  export type PanoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * The data used to update Panos.
     */
    data: XOR<PanoUpdateManyMutationInput, PanoUncheckedUpdateManyInput>
    /**
     * Filter which Panos to update
     */
    where?: PanoWhereInput
    /**
     * Limit how many Panos to update.
     */
    limit?: number
  }

  /**
   * Pano upsert
   */
  export type PanoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pano to update in case it exists.
     */
    where: PanoWhereUniqueInput
    /**
     * In case the Pano found by the `where` argument doesn't exist, create a new Pano with this data.
     */
    create: XOR<PanoCreateInput, PanoUncheckedCreateInput>
    /**
     * In case the Pano was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanoUpdateInput, PanoUncheckedUpdateInput>
  }

  /**
   * Pano delete
   */
  export type PanoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
    /**
     * Filter which Pano to delete.
     */
    where: PanoWhereUniqueInput
  }

  /**
   * Pano deleteMany
   */
  export type PanoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panos to delete
     */
    where?: PanoWhereInput
    /**
     * Limit how many Panos to delete.
     */
    limit?: number
  }

  /**
   * Pano.Dokuman
   */
  export type Pano$DokumanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dokuman
     */
    select?: DokumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dokuman
     */
    omit?: DokumanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DokumanInclude<ExtArgs> | null
    where?: DokumanWhereInput
    orderBy?: DokumanOrderByWithRelationInput | DokumanOrderByWithRelationInput[]
    cursor?: DokumanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DokumanScalarFieldEnum | DokumanScalarFieldEnum[]
  }

  /**
   * Pano without action
   */
  export type PanoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pano
     */
    select?: PanoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pano
     */
    omit?: PanoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DokumanScalarFieldEnum: {
    id: 'id',
    panoId: 'panoId',
    dokumanAdi: 'dokumanAdi',
    dosyaAdi: 'dosyaAdi',
    dosyaYolu: 'dosyaYolu',
    revizyon: 'revizyon',
    aciklama: 'aciklama',
    aktif: 'aktif',
    yuklemeTarihi: 'yuklemeTarihi'
  };

  export type DokumanScalarFieldEnum = (typeof DokumanScalarFieldEnum)[keyof typeof DokumanScalarFieldEnum]


  export const KullaniciScalarFieldEnum: {
    id: 'id',
    kullaniciAdi: 'kullaniciAdi',
    sifreHash: 'sifreHash',
    adSoyad: 'adSoyad',
    aktif: 'aktif',
    olusturmaTarihi: 'olusturmaTarihi'
  };

  export type KullaniciScalarFieldEnum = (typeof KullaniciScalarFieldEnum)[keyof typeof KullaniciScalarFieldEnum]


  export const PanoScalarFieldEnum: {
    id: 'id',
    panoNo: 'panoNo',
    panoAdi: 'panoAdi',
    makineHat: 'makineHat',
    projeNo: 'projeNo',
    aciklama: 'aciklama',
    qrKod: 'qrKod',
    olusturmaTarihi: 'olusturmaTarihi',
    guncellemeTarihi: 'guncellemeTarihi'
  };

  export type PanoScalarFieldEnum = (typeof PanoScalarFieldEnum)[keyof typeof PanoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DokumanWhereInput = {
    AND?: DokumanWhereInput | DokumanWhereInput[]
    OR?: DokumanWhereInput[]
    NOT?: DokumanWhereInput | DokumanWhereInput[]
    id?: IntFilter<"Dokuman"> | number
    panoId?: IntFilter<"Dokuman"> | number
    dokumanAdi?: StringFilter<"Dokuman"> | string
    dosyaAdi?: StringFilter<"Dokuman"> | string
    dosyaYolu?: StringFilter<"Dokuman"> | string
    revizyon?: StringNullableFilter<"Dokuman"> | string | null
    aciklama?: StringNullableFilter<"Dokuman"> | string | null
    aktif?: BoolFilter<"Dokuman"> | boolean
    yuklemeTarihi?: DateTimeFilter<"Dokuman"> | Date | string
    Pano?: XOR<PanoScalarRelationFilter, PanoWhereInput>
  }

  export type DokumanOrderByWithRelationInput = {
    id?: SortOrder
    panoId?: SortOrder
    dokumanAdi?: SortOrder
    dosyaAdi?: SortOrder
    dosyaYolu?: SortOrder
    revizyon?: SortOrderInput | SortOrder
    aciklama?: SortOrderInput | SortOrder
    aktif?: SortOrder
    yuklemeTarihi?: SortOrder
    Pano?: PanoOrderByWithRelationInput
  }

  export type DokumanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DokumanWhereInput | DokumanWhereInput[]
    OR?: DokumanWhereInput[]
    NOT?: DokumanWhereInput | DokumanWhereInput[]
    panoId?: IntFilter<"Dokuman"> | number
    dokumanAdi?: StringFilter<"Dokuman"> | string
    dosyaAdi?: StringFilter<"Dokuman"> | string
    dosyaYolu?: StringFilter<"Dokuman"> | string
    revizyon?: StringNullableFilter<"Dokuman"> | string | null
    aciklama?: StringNullableFilter<"Dokuman"> | string | null
    aktif?: BoolFilter<"Dokuman"> | boolean
    yuklemeTarihi?: DateTimeFilter<"Dokuman"> | Date | string
    Pano?: XOR<PanoScalarRelationFilter, PanoWhereInput>
  }, "id">

  export type DokumanOrderByWithAggregationInput = {
    id?: SortOrder
    panoId?: SortOrder
    dokumanAdi?: SortOrder
    dosyaAdi?: SortOrder
    dosyaYolu?: SortOrder
    revizyon?: SortOrderInput | SortOrder
    aciklama?: SortOrderInput | SortOrder
    aktif?: SortOrder
    yuklemeTarihi?: SortOrder
    _count?: DokumanCountOrderByAggregateInput
    _avg?: DokumanAvgOrderByAggregateInput
    _max?: DokumanMaxOrderByAggregateInput
    _min?: DokumanMinOrderByAggregateInput
    _sum?: DokumanSumOrderByAggregateInput
  }

  export type DokumanScalarWhereWithAggregatesInput = {
    AND?: DokumanScalarWhereWithAggregatesInput | DokumanScalarWhereWithAggregatesInput[]
    OR?: DokumanScalarWhereWithAggregatesInput[]
    NOT?: DokumanScalarWhereWithAggregatesInput | DokumanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dokuman"> | number
    panoId?: IntWithAggregatesFilter<"Dokuman"> | number
    dokumanAdi?: StringWithAggregatesFilter<"Dokuman"> | string
    dosyaAdi?: StringWithAggregatesFilter<"Dokuman"> | string
    dosyaYolu?: StringWithAggregatesFilter<"Dokuman"> | string
    revizyon?: StringNullableWithAggregatesFilter<"Dokuman"> | string | null
    aciklama?: StringNullableWithAggregatesFilter<"Dokuman"> | string | null
    aktif?: BoolWithAggregatesFilter<"Dokuman"> | boolean
    yuklemeTarihi?: DateTimeWithAggregatesFilter<"Dokuman"> | Date | string
  }

  export type KullaniciWhereInput = {
    AND?: KullaniciWhereInput | KullaniciWhereInput[]
    OR?: KullaniciWhereInput[]
    NOT?: KullaniciWhereInput | KullaniciWhereInput[]
    id?: IntFilter<"Kullanici"> | number
    kullaniciAdi?: StringFilter<"Kullanici"> | string
    sifreHash?: StringFilter<"Kullanici"> | string
    adSoyad?: StringNullableFilter<"Kullanici"> | string | null
    aktif?: BoolFilter<"Kullanici"> | boolean
    olusturmaTarihi?: DateTimeFilter<"Kullanici"> | Date | string
  }

  export type KullaniciOrderByWithRelationInput = {
    id?: SortOrder
    kullaniciAdi?: SortOrder
    sifreHash?: SortOrder
    adSoyad?: SortOrderInput | SortOrder
    aktif?: SortOrder
    olusturmaTarihi?: SortOrder
  }

  export type KullaniciWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kullaniciAdi?: string
    AND?: KullaniciWhereInput | KullaniciWhereInput[]
    OR?: KullaniciWhereInput[]
    NOT?: KullaniciWhereInput | KullaniciWhereInput[]
    sifreHash?: StringFilter<"Kullanici"> | string
    adSoyad?: StringNullableFilter<"Kullanici"> | string | null
    aktif?: BoolFilter<"Kullanici"> | boolean
    olusturmaTarihi?: DateTimeFilter<"Kullanici"> | Date | string
  }, "id" | "kullaniciAdi">

  export type KullaniciOrderByWithAggregationInput = {
    id?: SortOrder
    kullaniciAdi?: SortOrder
    sifreHash?: SortOrder
    adSoyad?: SortOrderInput | SortOrder
    aktif?: SortOrder
    olusturmaTarihi?: SortOrder
    _count?: KullaniciCountOrderByAggregateInput
    _avg?: KullaniciAvgOrderByAggregateInput
    _max?: KullaniciMaxOrderByAggregateInput
    _min?: KullaniciMinOrderByAggregateInput
    _sum?: KullaniciSumOrderByAggregateInput
  }

  export type KullaniciScalarWhereWithAggregatesInput = {
    AND?: KullaniciScalarWhereWithAggregatesInput | KullaniciScalarWhereWithAggregatesInput[]
    OR?: KullaniciScalarWhereWithAggregatesInput[]
    NOT?: KullaniciScalarWhereWithAggregatesInput | KullaniciScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kullanici"> | number
    kullaniciAdi?: StringWithAggregatesFilter<"Kullanici"> | string
    sifreHash?: StringWithAggregatesFilter<"Kullanici"> | string
    adSoyad?: StringNullableWithAggregatesFilter<"Kullanici"> | string | null
    aktif?: BoolWithAggregatesFilter<"Kullanici"> | boolean
    olusturmaTarihi?: DateTimeWithAggregatesFilter<"Kullanici"> | Date | string
  }

  export type PanoWhereInput = {
    AND?: PanoWhereInput | PanoWhereInput[]
    OR?: PanoWhereInput[]
    NOT?: PanoWhereInput | PanoWhereInput[]
    id?: IntFilter<"Pano"> | number
    panoNo?: StringFilter<"Pano"> | string
    panoAdi?: StringFilter<"Pano"> | string
    makineHat?: StringNullableFilter<"Pano"> | string | null
    projeNo?: StringNullableFilter<"Pano"> | string | null
    aciklama?: StringNullableFilter<"Pano"> | string | null
    qrKod?: StringFilter<"Pano"> | string
    olusturmaTarihi?: DateTimeFilter<"Pano"> | Date | string
    guncellemeTarihi?: DateTimeFilter<"Pano"> | Date | string
    Dokuman?: DokumanListRelationFilter
  }

  export type PanoOrderByWithRelationInput = {
    id?: SortOrder
    panoNo?: SortOrder
    panoAdi?: SortOrder
    makineHat?: SortOrderInput | SortOrder
    projeNo?: SortOrderInput | SortOrder
    aciklama?: SortOrderInput | SortOrder
    qrKod?: SortOrder
    olusturmaTarihi?: SortOrder
    guncellemeTarihi?: SortOrder
    Dokuman?: DokumanOrderByRelationAggregateInput
  }

  export type PanoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    panoNo?: string
    qrKod?: string
    AND?: PanoWhereInput | PanoWhereInput[]
    OR?: PanoWhereInput[]
    NOT?: PanoWhereInput | PanoWhereInput[]
    panoAdi?: StringFilter<"Pano"> | string
    makineHat?: StringNullableFilter<"Pano"> | string | null
    projeNo?: StringNullableFilter<"Pano"> | string | null
    aciklama?: StringNullableFilter<"Pano"> | string | null
    olusturmaTarihi?: DateTimeFilter<"Pano"> | Date | string
    guncellemeTarihi?: DateTimeFilter<"Pano"> | Date | string
    Dokuman?: DokumanListRelationFilter
  }, "id" | "panoNo" | "qrKod">

  export type PanoOrderByWithAggregationInput = {
    id?: SortOrder
    panoNo?: SortOrder
    panoAdi?: SortOrder
    makineHat?: SortOrderInput | SortOrder
    projeNo?: SortOrderInput | SortOrder
    aciklama?: SortOrderInput | SortOrder
    qrKod?: SortOrder
    olusturmaTarihi?: SortOrder
    guncellemeTarihi?: SortOrder
    _count?: PanoCountOrderByAggregateInput
    _avg?: PanoAvgOrderByAggregateInput
    _max?: PanoMaxOrderByAggregateInput
    _min?: PanoMinOrderByAggregateInput
    _sum?: PanoSumOrderByAggregateInput
  }

  export type PanoScalarWhereWithAggregatesInput = {
    AND?: PanoScalarWhereWithAggregatesInput | PanoScalarWhereWithAggregatesInput[]
    OR?: PanoScalarWhereWithAggregatesInput[]
    NOT?: PanoScalarWhereWithAggregatesInput | PanoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pano"> | number
    panoNo?: StringWithAggregatesFilter<"Pano"> | string
    panoAdi?: StringWithAggregatesFilter<"Pano"> | string
    makineHat?: StringNullableWithAggregatesFilter<"Pano"> | string | null
    projeNo?: StringNullableWithAggregatesFilter<"Pano"> | string | null
    aciklama?: StringNullableWithAggregatesFilter<"Pano"> | string | null
    qrKod?: StringWithAggregatesFilter<"Pano"> | string
    olusturmaTarihi?: DateTimeWithAggregatesFilter<"Pano"> | Date | string
    guncellemeTarihi?: DateTimeWithAggregatesFilter<"Pano"> | Date | string
  }

  export type DokumanCreateInput = {
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon?: string | null
    aciklama?: string | null
    aktif?: boolean
    yuklemeTarihi?: Date | string
    Pano: PanoCreateNestedOneWithoutDokumanInput
  }

  export type DokumanUncheckedCreateInput = {
    id?: number
    panoId: number
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon?: string | null
    aciklama?: string | null
    aktif?: boolean
    yuklemeTarihi?: Date | string
  }

  export type DokumanUpdateInput = {
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    Pano?: PanoUpdateOneRequiredWithoutDokumanNestedInput
  }

  export type DokumanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    panoId?: IntFieldUpdateOperationsInput | number
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumanCreateManyInput = {
    id?: number
    panoId: number
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon?: string | null
    aciklama?: string | null
    aktif?: boolean
    yuklemeTarihi?: Date | string
  }

  export type DokumanUpdateManyMutationInput = {
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    panoId?: IntFieldUpdateOperationsInput | number
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KullaniciCreateInput = {
    kullaniciAdi: string
    sifreHash: string
    adSoyad?: string | null
    aktif?: boolean
    olusturmaTarihi?: Date | string
  }

  export type KullaniciUncheckedCreateInput = {
    id?: number
    kullaniciAdi: string
    sifreHash: string
    adSoyad?: string | null
    aktif?: boolean
    olusturmaTarihi?: Date | string
  }

  export type KullaniciUpdateInput = {
    kullaniciAdi?: StringFieldUpdateOperationsInput | string
    sifreHash?: StringFieldUpdateOperationsInput | string
    adSoyad?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KullaniciUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kullaniciAdi?: StringFieldUpdateOperationsInput | string
    sifreHash?: StringFieldUpdateOperationsInput | string
    adSoyad?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KullaniciCreateManyInput = {
    id?: number
    kullaniciAdi: string
    sifreHash: string
    adSoyad?: string | null
    aktif?: boolean
    olusturmaTarihi?: Date | string
  }

  export type KullaniciUpdateManyMutationInput = {
    kullaniciAdi?: StringFieldUpdateOperationsInput | string
    sifreHash?: StringFieldUpdateOperationsInput | string
    adSoyad?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KullaniciUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kullaniciAdi?: StringFieldUpdateOperationsInput | string
    sifreHash?: StringFieldUpdateOperationsInput | string
    adSoyad?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanoCreateInput = {
    panoNo: string
    panoAdi: string
    makineHat?: string | null
    projeNo?: string | null
    aciklama?: string | null
    qrKod: string
    olusturmaTarihi?: Date | string
    guncellemeTarihi: Date | string
    Dokuman?: DokumanCreateNestedManyWithoutPanoInput
  }

  export type PanoUncheckedCreateInput = {
    id?: number
    panoNo: string
    panoAdi: string
    makineHat?: string | null
    projeNo?: string | null
    aciklama?: string | null
    qrKod: string
    olusturmaTarihi?: Date | string
    guncellemeTarihi: Date | string
    Dokuman?: DokumanUncheckedCreateNestedManyWithoutPanoInput
  }

  export type PanoUpdateInput = {
    panoNo?: StringFieldUpdateOperationsInput | string
    panoAdi?: StringFieldUpdateOperationsInput | string
    makineHat?: NullableStringFieldUpdateOperationsInput | string | null
    projeNo?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    qrKod?: StringFieldUpdateOperationsInput | string
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    guncellemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    Dokuman?: DokumanUpdateManyWithoutPanoNestedInput
  }

  export type PanoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    panoNo?: StringFieldUpdateOperationsInput | string
    panoAdi?: StringFieldUpdateOperationsInput | string
    makineHat?: NullableStringFieldUpdateOperationsInput | string | null
    projeNo?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    qrKod?: StringFieldUpdateOperationsInput | string
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    guncellemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    Dokuman?: DokumanUncheckedUpdateManyWithoutPanoNestedInput
  }

  export type PanoCreateManyInput = {
    id?: number
    panoNo: string
    panoAdi: string
    makineHat?: string | null
    projeNo?: string | null
    aciklama?: string | null
    qrKod: string
    olusturmaTarihi?: Date | string
    guncellemeTarihi: Date | string
  }

  export type PanoUpdateManyMutationInput = {
    panoNo?: StringFieldUpdateOperationsInput | string
    panoAdi?: StringFieldUpdateOperationsInput | string
    makineHat?: NullableStringFieldUpdateOperationsInput | string | null
    projeNo?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    qrKod?: StringFieldUpdateOperationsInput | string
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    guncellemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    panoNo?: StringFieldUpdateOperationsInput | string
    panoAdi?: StringFieldUpdateOperationsInput | string
    makineHat?: NullableStringFieldUpdateOperationsInput | string | null
    projeNo?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    qrKod?: StringFieldUpdateOperationsInput | string
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    guncellemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PanoScalarRelationFilter = {
    is?: PanoWhereInput
    isNot?: PanoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DokumanCountOrderByAggregateInput = {
    id?: SortOrder
    panoId?: SortOrder
    dokumanAdi?: SortOrder
    dosyaAdi?: SortOrder
    dosyaYolu?: SortOrder
    revizyon?: SortOrder
    aciklama?: SortOrder
    aktif?: SortOrder
    yuklemeTarihi?: SortOrder
  }

  export type DokumanAvgOrderByAggregateInput = {
    id?: SortOrder
    panoId?: SortOrder
  }

  export type DokumanMaxOrderByAggregateInput = {
    id?: SortOrder
    panoId?: SortOrder
    dokumanAdi?: SortOrder
    dosyaAdi?: SortOrder
    dosyaYolu?: SortOrder
    revizyon?: SortOrder
    aciklama?: SortOrder
    aktif?: SortOrder
    yuklemeTarihi?: SortOrder
  }

  export type DokumanMinOrderByAggregateInput = {
    id?: SortOrder
    panoId?: SortOrder
    dokumanAdi?: SortOrder
    dosyaAdi?: SortOrder
    dosyaYolu?: SortOrder
    revizyon?: SortOrder
    aciklama?: SortOrder
    aktif?: SortOrder
    yuklemeTarihi?: SortOrder
  }

  export type DokumanSumOrderByAggregateInput = {
    id?: SortOrder
    panoId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KullaniciCountOrderByAggregateInput = {
    id?: SortOrder
    kullaniciAdi?: SortOrder
    sifreHash?: SortOrder
    adSoyad?: SortOrder
    aktif?: SortOrder
    olusturmaTarihi?: SortOrder
  }

  export type KullaniciAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KullaniciMaxOrderByAggregateInput = {
    id?: SortOrder
    kullaniciAdi?: SortOrder
    sifreHash?: SortOrder
    adSoyad?: SortOrder
    aktif?: SortOrder
    olusturmaTarihi?: SortOrder
  }

  export type KullaniciMinOrderByAggregateInput = {
    id?: SortOrder
    kullaniciAdi?: SortOrder
    sifreHash?: SortOrder
    adSoyad?: SortOrder
    aktif?: SortOrder
    olusturmaTarihi?: SortOrder
  }

  export type KullaniciSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DokumanListRelationFilter = {
    every?: DokumanWhereInput
    some?: DokumanWhereInput
    none?: DokumanWhereInput
  }

  export type DokumanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanoCountOrderByAggregateInput = {
    id?: SortOrder
    panoNo?: SortOrder
    panoAdi?: SortOrder
    makineHat?: SortOrder
    projeNo?: SortOrder
    aciklama?: SortOrder
    qrKod?: SortOrder
    olusturmaTarihi?: SortOrder
    guncellemeTarihi?: SortOrder
  }

  export type PanoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PanoMaxOrderByAggregateInput = {
    id?: SortOrder
    panoNo?: SortOrder
    panoAdi?: SortOrder
    makineHat?: SortOrder
    projeNo?: SortOrder
    aciklama?: SortOrder
    qrKod?: SortOrder
    olusturmaTarihi?: SortOrder
    guncellemeTarihi?: SortOrder
  }

  export type PanoMinOrderByAggregateInput = {
    id?: SortOrder
    panoNo?: SortOrder
    panoAdi?: SortOrder
    makineHat?: SortOrder
    projeNo?: SortOrder
    aciklama?: SortOrder
    qrKod?: SortOrder
    olusturmaTarihi?: SortOrder
    guncellemeTarihi?: SortOrder
  }

  export type PanoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PanoCreateNestedOneWithoutDokumanInput = {
    create?: XOR<PanoCreateWithoutDokumanInput, PanoUncheckedCreateWithoutDokumanInput>
    connectOrCreate?: PanoCreateOrConnectWithoutDokumanInput
    connect?: PanoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PanoUpdateOneRequiredWithoutDokumanNestedInput = {
    create?: XOR<PanoCreateWithoutDokumanInput, PanoUncheckedCreateWithoutDokumanInput>
    connectOrCreate?: PanoCreateOrConnectWithoutDokumanInput
    upsert?: PanoUpsertWithoutDokumanInput
    connect?: PanoWhereUniqueInput
    update?: XOR<XOR<PanoUpdateToOneWithWhereWithoutDokumanInput, PanoUpdateWithoutDokumanInput>, PanoUncheckedUpdateWithoutDokumanInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DokumanCreateNestedManyWithoutPanoInput = {
    create?: XOR<DokumanCreateWithoutPanoInput, DokumanUncheckedCreateWithoutPanoInput> | DokumanCreateWithoutPanoInput[] | DokumanUncheckedCreateWithoutPanoInput[]
    connectOrCreate?: DokumanCreateOrConnectWithoutPanoInput | DokumanCreateOrConnectWithoutPanoInput[]
    createMany?: DokumanCreateManyPanoInputEnvelope
    connect?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
  }

  export type DokumanUncheckedCreateNestedManyWithoutPanoInput = {
    create?: XOR<DokumanCreateWithoutPanoInput, DokumanUncheckedCreateWithoutPanoInput> | DokumanCreateWithoutPanoInput[] | DokumanUncheckedCreateWithoutPanoInput[]
    connectOrCreate?: DokumanCreateOrConnectWithoutPanoInput | DokumanCreateOrConnectWithoutPanoInput[]
    createMany?: DokumanCreateManyPanoInputEnvelope
    connect?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
  }

  export type DokumanUpdateManyWithoutPanoNestedInput = {
    create?: XOR<DokumanCreateWithoutPanoInput, DokumanUncheckedCreateWithoutPanoInput> | DokumanCreateWithoutPanoInput[] | DokumanUncheckedCreateWithoutPanoInput[]
    connectOrCreate?: DokumanCreateOrConnectWithoutPanoInput | DokumanCreateOrConnectWithoutPanoInput[]
    upsert?: DokumanUpsertWithWhereUniqueWithoutPanoInput | DokumanUpsertWithWhereUniqueWithoutPanoInput[]
    createMany?: DokumanCreateManyPanoInputEnvelope
    set?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    disconnect?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    delete?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    connect?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    update?: DokumanUpdateWithWhereUniqueWithoutPanoInput | DokumanUpdateWithWhereUniqueWithoutPanoInput[]
    updateMany?: DokumanUpdateManyWithWhereWithoutPanoInput | DokumanUpdateManyWithWhereWithoutPanoInput[]
    deleteMany?: DokumanScalarWhereInput | DokumanScalarWhereInput[]
  }

  export type DokumanUncheckedUpdateManyWithoutPanoNestedInput = {
    create?: XOR<DokumanCreateWithoutPanoInput, DokumanUncheckedCreateWithoutPanoInput> | DokumanCreateWithoutPanoInput[] | DokumanUncheckedCreateWithoutPanoInput[]
    connectOrCreate?: DokumanCreateOrConnectWithoutPanoInput | DokumanCreateOrConnectWithoutPanoInput[]
    upsert?: DokumanUpsertWithWhereUniqueWithoutPanoInput | DokumanUpsertWithWhereUniqueWithoutPanoInput[]
    createMany?: DokumanCreateManyPanoInputEnvelope
    set?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    disconnect?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    delete?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    connect?: DokumanWhereUniqueInput | DokumanWhereUniqueInput[]
    update?: DokumanUpdateWithWhereUniqueWithoutPanoInput | DokumanUpdateWithWhereUniqueWithoutPanoInput[]
    updateMany?: DokumanUpdateManyWithWhereWithoutPanoInput | DokumanUpdateManyWithWhereWithoutPanoInput[]
    deleteMany?: DokumanScalarWhereInput | DokumanScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PanoCreateWithoutDokumanInput = {
    panoNo: string
    panoAdi: string
    makineHat?: string | null
    projeNo?: string | null
    aciklama?: string | null
    qrKod: string
    olusturmaTarihi?: Date | string
    guncellemeTarihi: Date | string
  }

  export type PanoUncheckedCreateWithoutDokumanInput = {
    id?: number
    panoNo: string
    panoAdi: string
    makineHat?: string | null
    projeNo?: string | null
    aciklama?: string | null
    qrKod: string
    olusturmaTarihi?: Date | string
    guncellemeTarihi: Date | string
  }

  export type PanoCreateOrConnectWithoutDokumanInput = {
    where: PanoWhereUniqueInput
    create: XOR<PanoCreateWithoutDokumanInput, PanoUncheckedCreateWithoutDokumanInput>
  }

  export type PanoUpsertWithoutDokumanInput = {
    update: XOR<PanoUpdateWithoutDokumanInput, PanoUncheckedUpdateWithoutDokumanInput>
    create: XOR<PanoCreateWithoutDokumanInput, PanoUncheckedCreateWithoutDokumanInput>
    where?: PanoWhereInput
  }

  export type PanoUpdateToOneWithWhereWithoutDokumanInput = {
    where?: PanoWhereInput
    data: XOR<PanoUpdateWithoutDokumanInput, PanoUncheckedUpdateWithoutDokumanInput>
  }

  export type PanoUpdateWithoutDokumanInput = {
    panoNo?: StringFieldUpdateOperationsInput | string
    panoAdi?: StringFieldUpdateOperationsInput | string
    makineHat?: NullableStringFieldUpdateOperationsInput | string | null
    projeNo?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    qrKod?: StringFieldUpdateOperationsInput | string
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    guncellemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanoUncheckedUpdateWithoutDokumanInput = {
    id?: IntFieldUpdateOperationsInput | number
    panoNo?: StringFieldUpdateOperationsInput | string
    panoAdi?: StringFieldUpdateOperationsInput | string
    makineHat?: NullableStringFieldUpdateOperationsInput | string | null
    projeNo?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    qrKod?: StringFieldUpdateOperationsInput | string
    olusturmaTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
    guncellemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumanCreateWithoutPanoInput = {
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon?: string | null
    aciklama?: string | null
    aktif?: boolean
    yuklemeTarihi?: Date | string
  }

  export type DokumanUncheckedCreateWithoutPanoInput = {
    id?: number
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon?: string | null
    aciklama?: string | null
    aktif?: boolean
    yuklemeTarihi?: Date | string
  }

  export type DokumanCreateOrConnectWithoutPanoInput = {
    where: DokumanWhereUniqueInput
    create: XOR<DokumanCreateWithoutPanoInput, DokumanUncheckedCreateWithoutPanoInput>
  }

  export type DokumanCreateManyPanoInputEnvelope = {
    data: DokumanCreateManyPanoInput | DokumanCreateManyPanoInput[]
  }

  export type DokumanUpsertWithWhereUniqueWithoutPanoInput = {
    where: DokumanWhereUniqueInput
    update: XOR<DokumanUpdateWithoutPanoInput, DokumanUncheckedUpdateWithoutPanoInput>
    create: XOR<DokumanCreateWithoutPanoInput, DokumanUncheckedCreateWithoutPanoInput>
  }

  export type DokumanUpdateWithWhereUniqueWithoutPanoInput = {
    where: DokumanWhereUniqueInput
    data: XOR<DokumanUpdateWithoutPanoInput, DokumanUncheckedUpdateWithoutPanoInput>
  }

  export type DokumanUpdateManyWithWhereWithoutPanoInput = {
    where: DokumanScalarWhereInput
    data: XOR<DokumanUpdateManyMutationInput, DokumanUncheckedUpdateManyWithoutPanoInput>
  }

  export type DokumanScalarWhereInput = {
    AND?: DokumanScalarWhereInput | DokumanScalarWhereInput[]
    OR?: DokumanScalarWhereInput[]
    NOT?: DokumanScalarWhereInput | DokumanScalarWhereInput[]
    id?: IntFilter<"Dokuman"> | number
    panoId?: IntFilter<"Dokuman"> | number
    dokumanAdi?: StringFilter<"Dokuman"> | string
    dosyaAdi?: StringFilter<"Dokuman"> | string
    dosyaYolu?: StringFilter<"Dokuman"> | string
    revizyon?: StringNullableFilter<"Dokuman"> | string | null
    aciklama?: StringNullableFilter<"Dokuman"> | string | null
    aktif?: BoolFilter<"Dokuman"> | boolean
    yuklemeTarihi?: DateTimeFilter<"Dokuman"> | Date | string
  }

  export type DokumanCreateManyPanoInput = {
    id?: number
    dokumanAdi: string
    dosyaAdi: string
    dosyaYolu: string
    revizyon?: string | null
    aciklama?: string | null
    aktif?: boolean
    yuklemeTarihi?: Date | string
  }

  export type DokumanUpdateWithoutPanoInput = {
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumanUncheckedUpdateWithoutPanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DokumanUncheckedUpdateManyWithoutPanoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dokumanAdi?: StringFieldUpdateOperationsInput | string
    dosyaAdi?: StringFieldUpdateOperationsInput | string
    dosyaYolu?: StringFieldUpdateOperationsInput | string
    revizyon?: NullableStringFieldUpdateOperationsInput | string | null
    aciklama?: NullableStringFieldUpdateOperationsInput | string | null
    aktif?: BoolFieldUpdateOperationsInput | boolean
    yuklemeTarihi?: DateTimeFieldUpdateOperationsInput | Date | string
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