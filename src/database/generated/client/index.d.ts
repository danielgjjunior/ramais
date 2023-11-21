
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
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Cidades
 * 
 */
export type Cidades = $Result.DefaultSelection<Prisma.$CidadesPayload>
/**
 * Model Estado
 * 
 */
export type Estado = $Result.DefaultSelection<Prisma.$EstadoPayload>
/**
 * Model Funcao_funcionario
 * 
 */
export type Funcao_funcionario = $Result.DefaultSelection<Prisma.$Funcao_funcionarioPayload>
/**
 * Model Setor
 * 
 */
export type Setor = $Result.DefaultSelection<Prisma.$SetorPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funcionarios
 * const funcionarios = await prisma.funcionario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Funcionarios
   * const funcionarios = await prisma.funcionario.findMany()
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
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs>;

  /**
   * `prisma.cidades`: Exposes CRUD operations for the **Cidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cidades
    * const cidades = await prisma.cidades.findMany()
    * ```
    */
  get cidades(): Prisma.CidadesDelegate<ExtArgs>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **Estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.EstadoDelegate<ExtArgs>;

  /**
   * `prisma.funcao_funcionario`: Exposes CRUD operations for the **Funcao_funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcao_funcionarios
    * const funcao_funcionarios = await prisma.funcao_funcionario.findMany()
    * ```
    */
  get funcao_funcionario(): Prisma.Funcao_funcionarioDelegate<ExtArgs>;

  /**
   * `prisma.setor`: Exposes CRUD operations for the **Setor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setors
    * const setors = await prisma.setor.findMany()
    * ```
    */
  get setor(): Prisma.SetorDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.3.1
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
    Funcionario: 'Funcionario',
    Cidades: 'Cidades',
    Estado: 'Estado',
    Funcao_funcionario: 'Funcao_funcionario',
    Setor: 'Setor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'funcionario' | 'cidades' | 'estado' | 'funcao_funcionario' | 'setor'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>,
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Cidades: {
        payload: Prisma.$CidadesPayload<ExtArgs>
        fields: Prisma.CidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CidadesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CidadesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>
          }
          findFirst: {
            args: Prisma.CidadesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CidadesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>
          }
          findMany: {
            args: Prisma.CidadesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>[]
          }
          create: {
            args: Prisma.CidadesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>
          }
          createMany: {
            args: Prisma.CidadesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CidadesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>
          }
          update: {
            args: Prisma.CidadesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>
          }
          deleteMany: {
            args: Prisma.CidadesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CidadesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CidadesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CidadesPayload>
          }
          aggregate: {
            args: Prisma.CidadesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCidades>
          }
          groupBy: {
            args: Prisma.CidadesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CidadesCountArgs<ExtArgs>,
            result: $Utils.Optional<CidadesCountAggregateOutputType> | number
          }
        }
      }
      Estado: {
        payload: Prisma.$EstadoPayload<ExtArgs>
        fields: Prisma.EstadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findFirst: {
            args: Prisma.EstadoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findMany: {
            args: Prisma.EstadoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          create: {
            args: Prisma.EstadoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          createMany: {
            args: Prisma.EstadoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EstadoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          update: {
            args: Prisma.EstadoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EstadoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.EstadoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCountArgs<ExtArgs>,
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      Funcao_funcionario: {
        payload: Prisma.$Funcao_funcionarioPayload<ExtArgs>
        fields: Prisma.Funcao_funcionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Funcao_funcionarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Funcao_funcionarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>
          }
          findFirst: {
            args: Prisma.Funcao_funcionarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Funcao_funcionarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>
          }
          findMany: {
            args: Prisma.Funcao_funcionarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>[]
          }
          create: {
            args: Prisma.Funcao_funcionarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>
          }
          createMany: {
            args: Prisma.Funcao_funcionarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Funcao_funcionarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>
          }
          update: {
            args: Prisma.Funcao_funcionarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>
          }
          deleteMany: {
            args: Prisma.Funcao_funcionarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Funcao_funcionarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Funcao_funcionarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Funcao_funcionarioPayload>
          }
          aggregate: {
            args: Prisma.Funcao_funcionarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFuncao_funcionario>
          }
          groupBy: {
            args: Prisma.Funcao_funcionarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Funcao_funcionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.Funcao_funcionarioCountArgs<ExtArgs>,
            result: $Utils.Optional<Funcao_funcionarioCountAggregateOutputType> | number
          }
        }
      }
      Setor: {
        payload: Prisma.$SetorPayload<ExtArgs>
        fields: Prisma.SetorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SetorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SetorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findFirst: {
            args: Prisma.SetorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SetorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          findMany: {
            args: Prisma.SetorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>[]
          }
          create: {
            args: Prisma.SetorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          createMany: {
            args: Prisma.SetorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SetorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          update: {
            args: Prisma.SetorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          deleteMany: {
            args: Prisma.SetorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SetorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SetorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SetorPayload>
          }
          aggregate: {
            args: Prisma.SetorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSetor>
          }
          groupBy: {
            args: Prisma.SetorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SetorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SetorCountArgs<ExtArgs>,
            result: $Utils.Optional<SetorCountAggregateOutputType> | number
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
   * Count Type CidadesCountOutputType
   */

  export type CidadesCountOutputType = {
    funcionarios: number
  }

  export type CidadesCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | CidadesCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes

  /**
   * CidadesCountOutputType without action
   */
  export type CidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CidadesCountOutputType
     */
    select?: CidadesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CidadesCountOutputType without action
   */
  export type CidadesCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
  }



  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    cidades: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cidades?: boolean | EstadoCountOutputTypeCountCidadesArgs
  }

  // Custom InputTypes

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountCidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CidadesWhereInput
  }



  /**
   * Count Type Funcao_funcionarioCountOutputType
   */

  export type Funcao_funcionarioCountOutputType = {
    funcionarios: number
  }

  export type Funcao_funcionarioCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | Funcao_funcionarioCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes

  /**
   * Funcao_funcionarioCountOutputType without action
   */
  export type Funcao_funcionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionarioCountOutputType
     */
    select?: Funcao_funcionarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Funcao_funcionarioCountOutputType without action
   */
  export type Funcao_funcionarioCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
  }



  /**
   * Count Type SetorCountOutputType
   */

  export type SetorCountOutputType = {
    funcoes: number
  }

  export type SetorCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    funcoes?: boolean | SetorCountOutputTypeCountFuncoesArgs
  }

  // Custom InputTypes

  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SetorCountOutputType
     */
    select?: SetorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SetorCountOutputType without action
   */
  export type SetorCountOutputTypeCountFuncoesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Funcao_funcionarioWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
    cidadeId: number | null
    funcaoId: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
    cidadeId: number | null
    funcaoId: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    cidadeId: number | null
    nome: string | null
    ramal: string | null
    telefone_corporativo: string | null
    funcaoId: number | null
    email: string | null
    Skype: string | null
    telefone_particular: string | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    cidadeId: number | null
    nome: string | null
    ramal: string | null
    telefone_corporativo: string | null
    funcaoId: number | null
    email: string | null
    Skype: string | null
    telefone_particular: string | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    cidadeId: number
    nome: number
    ramal: number
    telefone_corporativo: number
    funcaoId: number
    email: number
    Skype: number
    telefone_particular: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
    cidadeId?: true
    funcaoId?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
    cidadeId?: true
    funcaoId?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    cidadeId?: true
    nome?: true
    ramal?: true
    telefone_corporativo?: true
    funcaoId?: true
    email?: true
    Skype?: true
    telefone_particular?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    cidadeId?: true
    nome?: true
    ramal?: true
    telefone_corporativo?: true
    funcaoId?: true
    email?: true
    Skype?: true
    telefone_particular?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    cidadeId?: true
    nome?: true
    ramal?: true
    telefone_corporativo?: true
    funcaoId?: true
    email?: true
    Skype?: true
    telefone_particular?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    cidadeId: number
    nome: string
    ramal: string
    telefone_corporativo: string
    funcaoId: number
    email: string
    Skype: string
    telefone_particular: string | null
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidadeId?: boolean
    nome?: boolean
    ramal?: boolean
    telefone_corporativo?: boolean
    funcaoId?: boolean
    email?: boolean
    Skype?: boolean
    telefone_particular?: boolean
    cidade?: boolean | CidadesDefaultArgs<ExtArgs>
    funcao?: boolean | Funcao_funcionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
    cidadeId?: boolean
    nome?: boolean
    ramal?: boolean
    telefone_corporativo?: boolean
    funcaoId?: boolean
    email?: boolean
    Skype?: boolean
    telefone_particular?: boolean
  }

  export type FuncionarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cidade?: boolean | CidadesDefaultArgs<ExtArgs>
    funcao?: boolean | Funcao_funcionarioDefaultArgs<ExtArgs>
  }


  export type $FuncionarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      cidade: Prisma.$CidadesPayload<ExtArgs>
      funcao: Prisma.$Funcao_funcionarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      cidadeId: number
      nome: string
      ramal: string
      telefone_corporativo: string
      funcaoId: number
      email: string
      Skype: string
      telefone_particular: string | null
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }


  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FuncionarioFindManyArgs, 'select' | 'include'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FuncionarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Funcionario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FuncionarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FuncionarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
    **/
    create<T extends FuncionarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Funcionarios.
     *     @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     *     @example
     *     // Create many Funcionarios
     *     const funcionario = await prisma.funcionario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FuncionarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
    **/
    delete<T extends FuncionarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FuncionarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FuncionarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FuncionarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
    **/
    upsert<T extends FuncionarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>
    ): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cidade<T extends CidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CidadesDefaultArgs<ExtArgs>>): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    funcao<T extends Funcao_funcionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Funcao_funcionarioDefaultArgs<ExtArgs>>): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Funcionario model
   */ 
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
    readonly cidadeId: FieldRef<"Funcionario", 'Int'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly ramal: FieldRef<"Funcionario", 'String'>
    readonly telefone_corporativo: FieldRef<"Funcionario", 'String'>
    readonly funcaoId: FieldRef<"Funcionario", 'Int'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly Skype: FieldRef<"Funcionario", 'String'>
    readonly telefone_particular: FieldRef<"Funcionario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }


  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }


  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }


  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }


  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }


  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }


  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }


  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
  }


  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }


  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }


  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
  }


  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }



  /**
   * Model Cidades
   */

  export type AggregateCidades = {
    _count: CidadesCountAggregateOutputType | null
    _avg: CidadesAvgAggregateOutputType | null
    _sum: CidadesSumAggregateOutputType | null
    _min: CidadesMinAggregateOutputType | null
    _max: CidadesMaxAggregateOutputType | null
  }

  export type CidadesAvgAggregateOutputType = {
    id: number | null
    estadoId: number | null
  }

  export type CidadesSumAggregateOutputType = {
    id: number | null
    estadoId: number | null
  }

  export type CidadesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    estadoId: number | null
  }

  export type CidadesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    estadoId: number | null
  }

  export type CidadesCountAggregateOutputType = {
    id: number
    nome: number
    estadoId: number
    _all: number
  }


  export type CidadesAvgAggregateInputType = {
    id?: true
    estadoId?: true
  }

  export type CidadesSumAggregateInputType = {
    id?: true
    estadoId?: true
  }

  export type CidadesMinAggregateInputType = {
    id?: true
    nome?: true
    estadoId?: true
  }

  export type CidadesMaxAggregateInputType = {
    id?: true
    nome?: true
    estadoId?: true
  }

  export type CidadesCountAggregateInputType = {
    id?: true
    nome?: true
    estadoId?: true
    _all?: true
  }

  export type CidadesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cidades to aggregate.
     */
    where?: CidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadesOrderByWithRelationInput | CidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cidades
    **/
    _count?: true | CidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CidadesMaxAggregateInputType
  }

  export type GetCidadesAggregateType<T extends CidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateCidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCidades[P]>
      : GetScalarType<T[P], AggregateCidades[P]>
  }




  export type CidadesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CidadesWhereInput
    orderBy?: CidadesOrderByWithAggregationInput | CidadesOrderByWithAggregationInput[]
    by: CidadesScalarFieldEnum[] | CidadesScalarFieldEnum
    having?: CidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CidadesCountAggregateInputType | true
    _avg?: CidadesAvgAggregateInputType
    _sum?: CidadesSumAggregateInputType
    _min?: CidadesMinAggregateInputType
    _max?: CidadesMaxAggregateInputType
  }

  export type CidadesGroupByOutputType = {
    id: number
    nome: string
    estadoId: number
    _count: CidadesCountAggregateOutputType | null
    _avg: CidadesAvgAggregateOutputType | null
    _sum: CidadesSumAggregateOutputType | null
    _min: CidadesMinAggregateOutputType | null
    _max: CidadesMaxAggregateOutputType | null
  }

  type GetCidadesGroupByPayload<T extends CidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CidadesGroupByOutputType[P]>
            : GetScalarType<T[P], CidadesGroupByOutputType[P]>
        }
      >
    >


  export type CidadesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    estadoId?: boolean
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
    funcionarios?: boolean | Cidades$funcionariosArgs<ExtArgs>
    _count?: boolean | CidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidades"]>

  export type CidadesSelectScalar = {
    id?: boolean
    nome?: boolean
    estadoId?: boolean
  }

  export type CidadesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    estado?: boolean | EstadoDefaultArgs<ExtArgs>
    funcionarios?: boolean | Cidades$funcionariosArgs<ExtArgs>
    _count?: boolean | CidadesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CidadesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Cidades"
    objects: {
      estado: Prisma.$EstadoPayload<ExtArgs>
      funcionarios: Prisma.$FuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      estadoId: number
    }, ExtArgs["result"]["cidades"]>
    composites: {}
  }


  type CidadesGetPayload<S extends boolean | null | undefined | CidadesDefaultArgs> = $Result.GetResult<Prisma.$CidadesPayload, S>

  type CidadesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CidadesFindManyArgs, 'select' | 'include'> & {
      select?: CidadesCountAggregateInputType | true
    }

  export interface CidadesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cidades'], meta: { name: 'Cidades' } }
    /**
     * Find zero or one Cidades that matches the filter.
     * @param {CidadesFindUniqueArgs} args - Arguments to find a Cidades
     * @example
     * // Get one Cidades
     * const cidades = await prisma.cidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CidadesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CidadesFindUniqueArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cidades that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CidadesFindUniqueOrThrowArgs} args - Arguments to find a Cidades
     * @example
     * // Get one Cidades
     * const cidades = await prisma.cidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CidadesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CidadesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesFindFirstArgs} args - Arguments to find a Cidades
     * @example
     * // Get one Cidades
     * const cidades = await prisma.cidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CidadesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CidadesFindFirstArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesFindFirstOrThrowArgs} args - Arguments to find a Cidades
     * @example
     * // Get one Cidades
     * const cidades = await prisma.cidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CidadesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CidadesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cidades
     * const cidades = await prisma.cidades.findMany()
     * 
     * // Get first 10 Cidades
     * const cidades = await prisma.cidades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cidadesWithIdOnly = await prisma.cidades.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CidadesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CidadesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cidades.
     * @param {CidadesCreateArgs} args - Arguments to create a Cidades.
     * @example
     * // Create one Cidades
     * const Cidades = await prisma.cidades.create({
     *   data: {
     *     // ... data to create a Cidades
     *   }
     * })
     * 
    **/
    create<T extends CidadesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CidadesCreateArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cidades.
     *     @param {CidadesCreateManyArgs} args - Arguments to create many Cidades.
     *     @example
     *     // Create many Cidades
     *     const cidades = await prisma.cidades.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CidadesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CidadesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cidades.
     * @param {CidadesDeleteArgs} args - Arguments to delete one Cidades.
     * @example
     * // Delete one Cidades
     * const Cidades = await prisma.cidades.delete({
     *   where: {
     *     // ... filter to delete one Cidades
     *   }
     * })
     * 
    **/
    delete<T extends CidadesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CidadesDeleteArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cidades.
     * @param {CidadesUpdateArgs} args - Arguments to update one Cidades.
     * @example
     * // Update one Cidades
     * const cidades = await prisma.cidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CidadesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CidadesUpdateArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cidades.
     * @param {CidadesDeleteManyArgs} args - Arguments to filter Cidades to delete.
     * @example
     * // Delete a few Cidades
     * const { count } = await prisma.cidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CidadesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CidadesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cidades
     * const cidades = await prisma.cidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CidadesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CidadesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cidades.
     * @param {CidadesUpsertArgs} args - Arguments to update or create a Cidades.
     * @example
     * // Update or create a Cidades
     * const cidades = await prisma.cidades.upsert({
     *   create: {
     *     // ... data to create a Cidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cidades we want to update
     *   }
     * })
    **/
    upsert<T extends CidadesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CidadesUpsertArgs<ExtArgs>>
    ): Prisma__CidadesClient<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesCountArgs} args - Arguments to filter Cidades to count.
     * @example
     * // Count the number of Cidades
     * const count = await prisma.cidades.count({
     *   where: {
     *     // ... the filter for the Cidades we want to count
     *   }
     * })
    **/
    count<T extends CidadesCountArgs>(
      args?: Subset<T, CidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CidadesAggregateArgs>(args: Subset<T, CidadesAggregateArgs>): Prisma.PrismaPromise<GetCidadesAggregateType<T>>

    /**
     * Group by Cidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadesGroupByArgs} args - Group by arguments.
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
      T extends CidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CidadesGroupByArgs['orderBy'] }
        : { orderBy?: CidadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cidades model
   */
  readonly fields: CidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CidadesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    estado<T extends EstadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoDefaultArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    funcionarios<T extends Cidades$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, Cidades$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Cidades model
   */ 
  interface CidadesFieldRefs {
    readonly id: FieldRef<"Cidades", 'Int'>
    readonly nome: FieldRef<"Cidades", 'String'>
    readonly estadoId: FieldRef<"Cidades", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Cidades findUnique
   */
  export type CidadesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * Filter, which Cidades to fetch.
     */
    where: CidadesWhereUniqueInput
  }


  /**
   * Cidades findUniqueOrThrow
   */
  export type CidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * Filter, which Cidades to fetch.
     */
    where: CidadesWhereUniqueInput
  }


  /**
   * Cidades findFirst
   */
  export type CidadesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * Filter, which Cidades to fetch.
     */
    where?: CidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadesOrderByWithRelationInput | CidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cidades.
     */
    cursor?: CidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cidades.
     */
    distinct?: CidadesScalarFieldEnum | CidadesScalarFieldEnum[]
  }


  /**
   * Cidades findFirstOrThrow
   */
  export type CidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * Filter, which Cidades to fetch.
     */
    where?: CidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadesOrderByWithRelationInput | CidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cidades.
     */
    cursor?: CidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cidades.
     */
    distinct?: CidadesScalarFieldEnum | CidadesScalarFieldEnum[]
  }


  /**
   * Cidades findMany
   */
  export type CidadesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * Filter, which Cidades to fetch.
     */
    where?: CidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadesOrderByWithRelationInput | CidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cidades.
     */
    cursor?: CidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    distinct?: CidadesScalarFieldEnum | CidadesScalarFieldEnum[]
  }


  /**
   * Cidades create
   */
  export type CidadesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a Cidades.
     */
    data: XOR<CidadesCreateInput, CidadesUncheckedCreateInput>
  }


  /**
   * Cidades createMany
   */
  export type CidadesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cidades.
     */
    data: CidadesCreateManyInput | CidadesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cidades update
   */
  export type CidadesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a Cidades.
     */
    data: XOR<CidadesUpdateInput, CidadesUncheckedUpdateInput>
    /**
     * Choose, which Cidades to update.
     */
    where: CidadesWhereUniqueInput
  }


  /**
   * Cidades updateMany
   */
  export type CidadesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cidades.
     */
    data: XOR<CidadesUpdateManyMutationInput, CidadesUncheckedUpdateManyInput>
    /**
     * Filter which Cidades to update
     */
    where?: CidadesWhereInput
  }


  /**
   * Cidades upsert
   */
  export type CidadesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the Cidades to update in case it exists.
     */
    where: CidadesWhereUniqueInput
    /**
     * In case the Cidades found by the `where` argument doesn't exist, create a new Cidades with this data.
     */
    create: XOR<CidadesCreateInput, CidadesUncheckedCreateInput>
    /**
     * In case the Cidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CidadesUpdateInput, CidadesUncheckedUpdateInput>
  }


  /**
   * Cidades delete
   */
  export type CidadesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    /**
     * Filter which Cidades to delete.
     */
    where: CidadesWhereUniqueInput
  }


  /**
   * Cidades deleteMany
   */
  export type CidadesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cidades to delete
     */
    where?: CidadesWhereInput
  }


  /**
   * Cidades.funcionarios
   */
  export type Cidades$funcionariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    cursor?: FuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }


  /**
   * Cidades without action
   */
  export type CidadesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
  }



  /**
   * Model Estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadoSumAggregateOutputType = {
    id: number | null
  }

  export type EstadoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    abreviacao: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    abreviacao: string | null
  }

  export type EstadoCountAggregateOutputType = {
    id: number
    nome: number
    abreviacao: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    id?: true
  }

  export type EstadoSumAggregateInputType = {
    id?: true
  }

  export type EstadoMinAggregateInputType = {
    id?: true
    nome?: true
    abreviacao?: true
  }

  export type EstadoMaxAggregateInputType = {
    id?: true
    nome?: true
    abreviacao?: true
  }

  export type EstadoCountAggregateInputType = {
    id?: true
    nome?: true
    abreviacao?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado to aggregate.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type EstadoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithAggregationInput | EstadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: EstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id: number
    nome: string
    abreviacao: string
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends EstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    abreviacao?: boolean
    cidades?: boolean | Estado$cidadesArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectScalar = {
    id?: boolean
    nome?: boolean
    abreviacao?: boolean
  }

  export type EstadoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    cidades?: boolean | Estado$cidadesArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EstadoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Estado"
    objects: {
      cidades: Prisma.$CidadesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      abreviacao: string
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }


  type EstadoGetPayload<S extends boolean | null | undefined | EstadoDefaultArgs> = $Result.GetResult<Prisma.$EstadoPayload, S>

  type EstadoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EstadoFindManyArgs, 'select' | 'include'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface EstadoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado'], meta: { name: 'Estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {EstadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EstadoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoFindUniqueArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Estado that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EstadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EstadoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EstadoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindFirstArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EstadoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoWithIdOnly = await prisma.estado.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EstadoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Estado.
     * @param {EstadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
    **/
    create<T extends EstadoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoCreateArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Estados.
     *     @param {EstadoCreateManyArgs} args - Arguments to create many Estados.
     *     @example
     *     // Create many Estados
     *     const estado = await prisma.estado.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EstadoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estado.
     * @param {EstadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
    **/
    delete<T extends EstadoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoDeleteArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Estado.
     * @param {EstadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EstadoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoUpdateArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Estados.
     * @param {EstadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EstadoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstadoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EstadoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estado.
     * @param {EstadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
    **/
    upsert<T extends EstadoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EstadoUpsertArgs<ExtArgs>>
    ): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadoCountArgs>(
      args?: Subset<T, EstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoGroupByArgs} args - Group by arguments.
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
      T extends EstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado model
   */
  readonly fields: EstadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cidades<T extends Estado$cidadesArgs<ExtArgs> = {}>(args?: Subset<T, Estado$cidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadesPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Estado model
   */ 
  interface EstadoFieldRefs {
    readonly id: FieldRef<"Estado", 'Int'>
    readonly nome: FieldRef<"Estado", 'String'>
    readonly abreviacao: FieldRef<"Estado", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Estado findUnique
   */
  export type EstadoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado findUniqueOrThrow
   */
  export type EstadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado findFirst
   */
  export type EstadoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }


  /**
   * Estado findFirstOrThrow
   */
  export type EstadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }


  /**
   * Estado findMany
   */
  export type EstadoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }


  /**
   * Estado create
   */
  export type EstadoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado.
     */
    data: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
  }


  /**
   * Estado createMany
   */
  export type EstadoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Estado update
   */
  export type EstadoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado.
     */
    data: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
    /**
     * Choose, which Estado to update.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado updateMany
   */
  export type EstadoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
  }


  /**
   * Estado upsert
   */
  export type EstadoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado to update in case it exists.
     */
    where: EstadoWhereUniqueInput
    /**
     * In case the Estado found by the `where` argument doesn't exist, create a new Estado with this data.
     */
    create: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
    /**
     * In case the Estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
  }


  /**
   * Estado delete
   */
  export type EstadoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter which Estado to delete.
     */
    where: EstadoWhereUniqueInput
  }


  /**
   * Estado deleteMany
   */
  export type EstadoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadoWhereInput
  }


  /**
   * Estado.cidades
   */
  export type Estado$cidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidades
     */
    select?: CidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CidadesInclude<ExtArgs> | null
    where?: CidadesWhereInput
    orderBy?: CidadesOrderByWithRelationInput | CidadesOrderByWithRelationInput[]
    cursor?: CidadesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CidadesScalarFieldEnum | CidadesScalarFieldEnum[]
  }


  /**
   * Estado without action
   */
  export type EstadoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstadoInclude<ExtArgs> | null
  }



  /**
   * Model Funcao_funcionario
   */

  export type AggregateFuncao_funcionario = {
    _count: Funcao_funcionarioCountAggregateOutputType | null
    _avg: Funcao_funcionarioAvgAggregateOutputType | null
    _sum: Funcao_funcionarioSumAggregateOutputType | null
    _min: Funcao_funcionarioMinAggregateOutputType | null
    _max: Funcao_funcionarioMaxAggregateOutputType | null
  }

  export type Funcao_funcionarioAvgAggregateOutputType = {
    id: number | null
    setorId: number | null
  }

  export type Funcao_funcionarioSumAggregateOutputType = {
    id: number | null
    setorId: number | null
  }

  export type Funcao_funcionarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    setorId: number | null
    descricao: string | null
  }

  export type Funcao_funcionarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    setorId: number | null
    descricao: string | null
  }

  export type Funcao_funcionarioCountAggregateOutputType = {
    id: number
    nome: number
    setorId: number
    descricao: number
    _all: number
  }


  export type Funcao_funcionarioAvgAggregateInputType = {
    id?: true
    setorId?: true
  }

  export type Funcao_funcionarioSumAggregateInputType = {
    id?: true
    setorId?: true
  }

  export type Funcao_funcionarioMinAggregateInputType = {
    id?: true
    nome?: true
    setorId?: true
    descricao?: true
  }

  export type Funcao_funcionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    setorId?: true
    descricao?: true
  }

  export type Funcao_funcionarioCountAggregateInputType = {
    id?: true
    nome?: true
    setorId?: true
    descricao?: true
    _all?: true
  }

  export type Funcao_funcionarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcao_funcionario to aggregate.
     */
    where?: Funcao_funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcao_funcionarios to fetch.
     */
    orderBy?: Funcao_funcionarioOrderByWithRelationInput | Funcao_funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Funcao_funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcao_funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcao_funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcao_funcionarios
    **/
    _count?: true | Funcao_funcionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Funcao_funcionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Funcao_funcionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Funcao_funcionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Funcao_funcionarioMaxAggregateInputType
  }

  export type GetFuncao_funcionarioAggregateType<T extends Funcao_funcionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncao_funcionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncao_funcionario[P]>
      : GetScalarType<T[P], AggregateFuncao_funcionario[P]>
  }




  export type Funcao_funcionarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Funcao_funcionarioWhereInput
    orderBy?: Funcao_funcionarioOrderByWithAggregationInput | Funcao_funcionarioOrderByWithAggregationInput[]
    by: Funcao_funcionarioScalarFieldEnum[] | Funcao_funcionarioScalarFieldEnum
    having?: Funcao_funcionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Funcao_funcionarioCountAggregateInputType | true
    _avg?: Funcao_funcionarioAvgAggregateInputType
    _sum?: Funcao_funcionarioSumAggregateInputType
    _min?: Funcao_funcionarioMinAggregateInputType
    _max?: Funcao_funcionarioMaxAggregateInputType
  }

  export type Funcao_funcionarioGroupByOutputType = {
    id: number
    nome: string
    setorId: number
    descricao: string
    _count: Funcao_funcionarioCountAggregateOutputType | null
    _avg: Funcao_funcionarioAvgAggregateOutputType | null
    _sum: Funcao_funcionarioSumAggregateOutputType | null
    _min: Funcao_funcionarioMinAggregateOutputType | null
    _max: Funcao_funcionarioMaxAggregateOutputType | null
  }

  type GetFuncao_funcionarioGroupByPayload<T extends Funcao_funcionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Funcao_funcionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Funcao_funcionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Funcao_funcionarioGroupByOutputType[P]>
            : GetScalarType<T[P], Funcao_funcionarioGroupByOutputType[P]>
        }
      >
    >


  export type Funcao_funcionarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    setorId?: boolean
    descricao?: boolean
    setor?: boolean | SetorDefaultArgs<ExtArgs>
    funcionarios?: boolean | Funcao_funcionario$funcionariosArgs<ExtArgs>
    _count?: boolean | Funcao_funcionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcao_funcionario"]>

  export type Funcao_funcionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    setorId?: boolean
    descricao?: boolean
  }

  export type Funcao_funcionarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    setor?: boolean | SetorDefaultArgs<ExtArgs>
    funcionarios?: boolean | Funcao_funcionario$funcionariosArgs<ExtArgs>
    _count?: boolean | Funcao_funcionarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Funcao_funcionarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Funcao_funcionario"
    objects: {
      setor: Prisma.$SetorPayload<ExtArgs>
      funcionarios: Prisma.$FuncionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      setorId: number
      descricao: string
    }, ExtArgs["result"]["funcao_funcionario"]>
    composites: {}
  }


  type Funcao_funcionarioGetPayload<S extends boolean | null | undefined | Funcao_funcionarioDefaultArgs> = $Result.GetResult<Prisma.$Funcao_funcionarioPayload, S>

  type Funcao_funcionarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Funcao_funcionarioFindManyArgs, 'select' | 'include'> & {
      select?: Funcao_funcionarioCountAggregateInputType | true
    }

  export interface Funcao_funcionarioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcao_funcionario'], meta: { name: 'Funcao_funcionario' } }
    /**
     * Find zero or one Funcao_funcionario that matches the filter.
     * @param {Funcao_funcionarioFindUniqueArgs} args - Arguments to find a Funcao_funcionario
     * @example
     * // Get one Funcao_funcionario
     * const funcao_funcionario = await prisma.funcao_funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Funcao_funcionarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Funcao_funcionarioFindUniqueArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Funcao_funcionario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Funcao_funcionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcao_funcionario
     * @example
     * // Get one Funcao_funcionario
     * const funcao_funcionario = await prisma.funcao_funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Funcao_funcionarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Funcao_funcionarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Funcao_funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioFindFirstArgs} args - Arguments to find a Funcao_funcionario
     * @example
     * // Get one Funcao_funcionario
     * const funcao_funcionario = await prisma.funcao_funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Funcao_funcionarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Funcao_funcionarioFindFirstArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Funcao_funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioFindFirstOrThrowArgs} args - Arguments to find a Funcao_funcionario
     * @example
     * // Get one Funcao_funcionario
     * const funcao_funcionario = await prisma.funcao_funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Funcao_funcionarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Funcao_funcionarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Funcao_funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcao_funcionarios
     * const funcao_funcionarios = await prisma.funcao_funcionario.findMany()
     * 
     * // Get first 10 Funcao_funcionarios
     * const funcao_funcionarios = await prisma.funcao_funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcao_funcionarioWithIdOnly = await prisma.funcao_funcionario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Funcao_funcionarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Funcao_funcionarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Funcao_funcionario.
     * @param {Funcao_funcionarioCreateArgs} args - Arguments to create a Funcao_funcionario.
     * @example
     * // Create one Funcao_funcionario
     * const Funcao_funcionario = await prisma.funcao_funcionario.create({
     *   data: {
     *     // ... data to create a Funcao_funcionario
     *   }
     * })
     * 
    **/
    create<T extends Funcao_funcionarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Funcao_funcionarioCreateArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Funcao_funcionarios.
     *     @param {Funcao_funcionarioCreateManyArgs} args - Arguments to create many Funcao_funcionarios.
     *     @example
     *     // Create many Funcao_funcionarios
     *     const funcao_funcionario = await prisma.funcao_funcionario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Funcao_funcionarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Funcao_funcionarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcao_funcionario.
     * @param {Funcao_funcionarioDeleteArgs} args - Arguments to delete one Funcao_funcionario.
     * @example
     * // Delete one Funcao_funcionario
     * const Funcao_funcionario = await prisma.funcao_funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcao_funcionario
     *   }
     * })
     * 
    **/
    delete<T extends Funcao_funcionarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Funcao_funcionarioDeleteArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Funcao_funcionario.
     * @param {Funcao_funcionarioUpdateArgs} args - Arguments to update one Funcao_funcionario.
     * @example
     * // Update one Funcao_funcionario
     * const funcao_funcionario = await prisma.funcao_funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Funcao_funcionarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Funcao_funcionarioUpdateArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Funcao_funcionarios.
     * @param {Funcao_funcionarioDeleteManyArgs} args - Arguments to filter Funcao_funcionarios to delete.
     * @example
     * // Delete a few Funcao_funcionarios
     * const { count } = await prisma.funcao_funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Funcao_funcionarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Funcao_funcionarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcao_funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcao_funcionarios
     * const funcao_funcionario = await prisma.funcao_funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Funcao_funcionarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Funcao_funcionarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcao_funcionario.
     * @param {Funcao_funcionarioUpsertArgs} args - Arguments to update or create a Funcao_funcionario.
     * @example
     * // Update or create a Funcao_funcionario
     * const funcao_funcionario = await prisma.funcao_funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcao_funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcao_funcionario we want to update
     *   }
     * })
    **/
    upsert<T extends Funcao_funcionarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Funcao_funcionarioUpsertArgs<ExtArgs>>
    ): Prisma__Funcao_funcionarioClient<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Funcao_funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioCountArgs} args - Arguments to filter Funcao_funcionarios to count.
     * @example
     * // Count the number of Funcao_funcionarios
     * const count = await prisma.funcao_funcionario.count({
     *   where: {
     *     // ... the filter for the Funcao_funcionarios we want to count
     *   }
     * })
    **/
    count<T extends Funcao_funcionarioCountArgs>(
      args?: Subset<T, Funcao_funcionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Funcao_funcionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcao_funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Funcao_funcionarioAggregateArgs>(args: Subset<T, Funcao_funcionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncao_funcionarioAggregateType<T>>

    /**
     * Group by Funcao_funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Funcao_funcionarioGroupByArgs} args - Group by arguments.
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
      T extends Funcao_funcionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Funcao_funcionarioGroupByArgs['orderBy'] }
        : { orderBy?: Funcao_funcionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Funcao_funcionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncao_funcionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcao_funcionario model
   */
  readonly fields: Funcao_funcionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcao_funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Funcao_funcionarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    setor<T extends SetorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SetorDefaultArgs<ExtArgs>>): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    funcionarios<T extends Funcao_funcionario$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, Funcao_funcionario$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Funcao_funcionario model
   */ 
  interface Funcao_funcionarioFieldRefs {
    readonly id: FieldRef<"Funcao_funcionario", 'Int'>
    readonly nome: FieldRef<"Funcao_funcionario", 'String'>
    readonly setorId: FieldRef<"Funcao_funcionario", 'Int'>
    readonly descricao: FieldRef<"Funcao_funcionario", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Funcao_funcionario findUnique
   */
  export type Funcao_funcionarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcao_funcionario to fetch.
     */
    where: Funcao_funcionarioWhereUniqueInput
  }


  /**
   * Funcao_funcionario findUniqueOrThrow
   */
  export type Funcao_funcionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcao_funcionario to fetch.
     */
    where: Funcao_funcionarioWhereUniqueInput
  }


  /**
   * Funcao_funcionario findFirst
   */
  export type Funcao_funcionarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcao_funcionario to fetch.
     */
    where?: Funcao_funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcao_funcionarios to fetch.
     */
    orderBy?: Funcao_funcionarioOrderByWithRelationInput | Funcao_funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcao_funcionarios.
     */
    cursor?: Funcao_funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcao_funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcao_funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcao_funcionarios.
     */
    distinct?: Funcao_funcionarioScalarFieldEnum | Funcao_funcionarioScalarFieldEnum[]
  }


  /**
   * Funcao_funcionario findFirstOrThrow
   */
  export type Funcao_funcionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcao_funcionario to fetch.
     */
    where?: Funcao_funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcao_funcionarios to fetch.
     */
    orderBy?: Funcao_funcionarioOrderByWithRelationInput | Funcao_funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcao_funcionarios.
     */
    cursor?: Funcao_funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcao_funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcao_funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcao_funcionarios.
     */
    distinct?: Funcao_funcionarioScalarFieldEnum | Funcao_funcionarioScalarFieldEnum[]
  }


  /**
   * Funcao_funcionario findMany
   */
  export type Funcao_funcionarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcao_funcionarios to fetch.
     */
    where?: Funcao_funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcao_funcionarios to fetch.
     */
    orderBy?: Funcao_funcionarioOrderByWithRelationInput | Funcao_funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcao_funcionarios.
     */
    cursor?: Funcao_funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcao_funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcao_funcionarios.
     */
    skip?: number
    distinct?: Funcao_funcionarioScalarFieldEnum | Funcao_funcionarioScalarFieldEnum[]
  }


  /**
   * Funcao_funcionario create
   */
  export type Funcao_funcionarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcao_funcionario.
     */
    data: XOR<Funcao_funcionarioCreateInput, Funcao_funcionarioUncheckedCreateInput>
  }


  /**
   * Funcao_funcionario createMany
   */
  export type Funcao_funcionarioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcao_funcionarios.
     */
    data: Funcao_funcionarioCreateManyInput | Funcao_funcionarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Funcao_funcionario update
   */
  export type Funcao_funcionarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcao_funcionario.
     */
    data: XOR<Funcao_funcionarioUpdateInput, Funcao_funcionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcao_funcionario to update.
     */
    where: Funcao_funcionarioWhereUniqueInput
  }


  /**
   * Funcao_funcionario updateMany
   */
  export type Funcao_funcionarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcao_funcionarios.
     */
    data: XOR<Funcao_funcionarioUpdateManyMutationInput, Funcao_funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcao_funcionarios to update
     */
    where?: Funcao_funcionarioWhereInput
  }


  /**
   * Funcao_funcionario upsert
   */
  export type Funcao_funcionarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcao_funcionario to update in case it exists.
     */
    where: Funcao_funcionarioWhereUniqueInput
    /**
     * In case the Funcao_funcionario found by the `where` argument doesn't exist, create a new Funcao_funcionario with this data.
     */
    create: XOR<Funcao_funcionarioCreateInput, Funcao_funcionarioUncheckedCreateInput>
    /**
     * In case the Funcao_funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Funcao_funcionarioUpdateInput, Funcao_funcionarioUncheckedUpdateInput>
  }


  /**
   * Funcao_funcionario delete
   */
  export type Funcao_funcionarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcao_funcionario to delete.
     */
    where: Funcao_funcionarioWhereUniqueInput
  }


  /**
   * Funcao_funcionario deleteMany
   */
  export type Funcao_funcionarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcao_funcionarios to delete
     */
    where?: Funcao_funcionarioWhereInput
  }


  /**
   * Funcao_funcionario.funcionarios
   */
  export type Funcao_funcionario$funcionariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    cursor?: FuncionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }


  /**
   * Funcao_funcionario without action
   */
  export type Funcao_funcionarioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
  }



  /**
   * Model Setor
   */

  export type AggregateSetor = {
    _count: SetorCountAggregateOutputType | null
    _avg: SetorAvgAggregateOutputType | null
    _sum: SetorSumAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  export type SetorAvgAggregateOutputType = {
    id: number | null
  }

  export type SetorSumAggregateOutputType = {
    id: number | null
  }

  export type SetorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type SetorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type SetorCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type SetorAvgAggregateInputType = {
    id?: true
  }

  export type SetorSumAggregateInputType = {
    id?: true
  }

  export type SetorMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type SetorMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type SetorCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type SetorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setor to aggregate.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Setors
    **/
    _count?: true | SetorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetorMaxAggregateInputType
  }

  export type GetSetorAggregateType<T extends SetorAggregateArgs> = {
        [P in keyof T & keyof AggregateSetor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetor[P]>
      : GetScalarType<T[P], AggregateSetor[P]>
  }




  export type SetorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SetorWhereInput
    orderBy?: SetorOrderByWithAggregationInput | SetorOrderByWithAggregationInput[]
    by: SetorScalarFieldEnum[] | SetorScalarFieldEnum
    having?: SetorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetorCountAggregateInputType | true
    _avg?: SetorAvgAggregateInputType
    _sum?: SetorSumAggregateInputType
    _min?: SetorMinAggregateInputType
    _max?: SetorMaxAggregateInputType
  }

  export type SetorGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    _count: SetorCountAggregateOutputType | null
    _avg: SetorAvgAggregateOutputType | null
    _sum: SetorSumAggregateOutputType | null
    _min: SetorMinAggregateOutputType | null
    _max: SetorMaxAggregateOutputType | null
  }

  type GetSetorGroupByPayload<T extends SetorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetorGroupByOutputType[P]>
            : GetScalarType<T[P], SetorGroupByOutputType[P]>
        }
      >
    >


  export type SetorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    funcoes?: boolean | Setor$funcoesArgs<ExtArgs>
    _count?: boolean | SetorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["setor"]>

  export type SetorSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type SetorInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    funcoes?: boolean | Setor$funcoesArgs<ExtArgs>
    _count?: boolean | SetorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SetorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Setor"
    objects: {
      funcoes: Prisma.$Funcao_funcionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      descricao: string
    }, ExtArgs["result"]["setor"]>
    composites: {}
  }


  type SetorGetPayload<S extends boolean | null | undefined | SetorDefaultArgs> = $Result.GetResult<Prisma.$SetorPayload, S>

  type SetorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SetorFindManyArgs, 'select' | 'include'> & {
      select?: SetorCountAggregateInputType | true
    }

  export interface SetorDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setor'], meta: { name: 'Setor' } }
    /**
     * Find zero or one Setor that matches the filter.
     * @param {SetorFindUniqueArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SetorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SetorFindUniqueArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Setor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SetorFindUniqueOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SetorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SetorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Setor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SetorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SetorFindFirstArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Setor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindFirstOrThrowArgs} args - Arguments to find a Setor
     * @example
     * // Get one Setor
     * const setor = await prisma.setor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SetorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SetorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Setors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setors
     * const setors = await prisma.setor.findMany()
     * 
     * // Get first 10 Setors
     * const setors = await prisma.setor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setorWithIdOnly = await prisma.setor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SetorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Setor.
     * @param {SetorCreateArgs} args - Arguments to create a Setor.
     * @example
     * // Create one Setor
     * const Setor = await prisma.setor.create({
     *   data: {
     *     // ... data to create a Setor
     *   }
     * })
     * 
    **/
    create<T extends SetorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SetorCreateArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Setors.
     *     @param {SetorCreateManyArgs} args - Arguments to create many Setors.
     *     @example
     *     // Create many Setors
     *     const setor = await prisma.setor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SetorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setor.
     * @param {SetorDeleteArgs} args - Arguments to delete one Setor.
     * @example
     * // Delete one Setor
     * const Setor = await prisma.setor.delete({
     *   where: {
     *     // ... filter to delete one Setor
     *   }
     * })
     * 
    **/
    delete<T extends SetorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SetorDeleteArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Setor.
     * @param {SetorUpdateArgs} args - Arguments to update one Setor.
     * @example
     * // Update one Setor
     * const setor = await prisma.setor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SetorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SetorUpdateArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Setors.
     * @param {SetorDeleteManyArgs} args - Arguments to filter Setors to delete.
     * @example
     * // Delete a few Setors
     * const { count } = await prisma.setor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SetorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SetorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setors
     * const setor = await prisma.setor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SetorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SetorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setor.
     * @param {SetorUpsertArgs} args - Arguments to update or create a Setor.
     * @example
     * // Update or create a Setor
     * const setor = await prisma.setor.upsert({
     *   create: {
     *     // ... data to create a Setor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setor we want to update
     *   }
     * })
    **/
    upsert<T extends SetorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SetorUpsertArgs<ExtArgs>>
    ): Prisma__SetorClient<$Result.GetResult<Prisma.$SetorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorCountArgs} args - Arguments to filter Setors to count.
     * @example
     * // Count the number of Setors
     * const count = await prisma.setor.count({
     *   where: {
     *     // ... the filter for the Setors we want to count
     *   }
     * })
    **/
    count<T extends SetorCountArgs>(
      args?: Subset<T, SetorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetorAggregateArgs>(args: Subset<T, SetorAggregateArgs>): Prisma.PrismaPromise<GetSetorAggregateType<T>>

    /**
     * Group by Setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetorGroupByArgs} args - Group by arguments.
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
      T extends SetorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SetorGroupByArgs['orderBy'] }
        : { orderBy?: SetorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SetorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setor model
   */
  readonly fields: SetorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SetorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    funcoes<T extends Setor$funcoesArgs<ExtArgs> = {}>(args?: Subset<T, Setor$funcoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Funcao_funcionarioPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Setor model
   */ 
  interface SetorFieldRefs {
    readonly id: FieldRef<"Setor", 'Int'>
    readonly nome: FieldRef<"Setor", 'String'>
    readonly descricao: FieldRef<"Setor", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Setor findUnique
   */
  export type SetorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }


  /**
   * Setor findUniqueOrThrow
   */
  export type SetorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where: SetorWhereUniqueInput
  }


  /**
   * Setor findFirst
   */
  export type SetorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }


  /**
   * Setor findFirstOrThrow
   */
  export type SetorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setor to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Setors.
     */
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }


  /**
   * Setor findMany
   */
  export type SetorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter, which Setors to fetch.
     */
    where?: SetorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Setors to fetch.
     */
    orderBy?: SetorOrderByWithRelationInput | SetorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Setors.
     */
    cursor?: SetorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Setors.
     */
    skip?: number
    distinct?: SetorScalarFieldEnum | SetorScalarFieldEnum[]
  }


  /**
   * Setor create
   */
  export type SetorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to create a Setor.
     */
    data: XOR<SetorCreateInput, SetorUncheckedCreateInput>
  }


  /**
   * Setor createMany
   */
  export type SetorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Setors.
     */
    data: SetorCreateManyInput | SetorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Setor update
   */
  export type SetorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The data needed to update a Setor.
     */
    data: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
    /**
     * Choose, which Setor to update.
     */
    where: SetorWhereUniqueInput
  }


  /**
   * Setor updateMany
   */
  export type SetorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Setors.
     */
    data: XOR<SetorUpdateManyMutationInput, SetorUncheckedUpdateManyInput>
    /**
     * Filter which Setors to update
     */
    where?: SetorWhereInput
  }


  /**
   * Setor upsert
   */
  export type SetorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * The filter to search for the Setor to update in case it exists.
     */
    where: SetorWhereUniqueInput
    /**
     * In case the Setor found by the `where` argument doesn't exist, create a new Setor with this data.
     */
    create: XOR<SetorCreateInput, SetorUncheckedCreateInput>
    /**
     * In case the Setor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SetorUpdateInput, SetorUncheckedUpdateInput>
  }


  /**
   * Setor delete
   */
  export type SetorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
    /**
     * Filter which Setor to delete.
     */
    where: SetorWhereUniqueInput
  }


  /**
   * Setor deleteMany
   */
  export type SetorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setors to delete
     */
    where?: SetorWhereInput
  }


  /**
   * Setor.funcoes
   */
  export type Setor$funcoesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcao_funcionario
     */
    select?: Funcao_funcionarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Funcao_funcionarioInclude<ExtArgs> | null
    where?: Funcao_funcionarioWhereInput
    orderBy?: Funcao_funcionarioOrderByWithRelationInput | Funcao_funcionarioOrderByWithRelationInput[]
    cursor?: Funcao_funcionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Funcao_funcionarioScalarFieldEnum | Funcao_funcionarioScalarFieldEnum[]
  }


  /**
   * Setor without action
   */
  export type SetorDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setor
     */
    select?: SetorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SetorInclude<ExtArgs> | null
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


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    cidadeId: 'cidadeId',
    nome: 'nome',
    ramal: 'ramal',
    telefone_corporativo: 'telefone_corporativo',
    funcaoId: 'funcaoId',
    email: 'email',
    Skype: 'Skype',
    telefone_particular: 'telefone_particular'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const CidadesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    estadoId: 'estadoId'
  };

  export type CidadesScalarFieldEnum = (typeof CidadesScalarFieldEnum)[keyof typeof CidadesScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    abreviacao: 'abreviacao'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const Funcao_funcionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    setorId: 'setorId',
    descricao: 'descricao'
  };

  export type Funcao_funcionarioScalarFieldEnum = (typeof Funcao_funcionarioScalarFieldEnum)[keyof typeof Funcao_funcionarioScalarFieldEnum]


  export const SetorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type SetorScalarFieldEnum = (typeof SetorScalarFieldEnum)[keyof typeof SetorScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    cidadeId?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    ramal?: StringFilter<"Funcionario"> | string
    telefone_corporativo?: StringFilter<"Funcionario"> | string
    funcaoId?: IntFilter<"Funcionario"> | number
    email?: StringFilter<"Funcionario"> | string
    Skype?: StringFilter<"Funcionario"> | string
    telefone_particular?: StringNullableFilter<"Funcionario"> | string | null
    cidade?: XOR<CidadesRelationFilter, CidadesWhereInput>
    funcao?: XOR<Funcao_funcionarioRelationFilter, Funcao_funcionarioWhereInput>
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    nome?: SortOrder
    ramal?: SortOrder
    telefone_corporativo?: SortOrder
    funcaoId?: SortOrder
    email?: SortOrder
    Skype?: SortOrder
    telefone_particular?: SortOrderInput | SortOrder
    cidade?: CidadesOrderByWithRelationInput
    funcao?: Funcao_funcionarioOrderByWithRelationInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    cidadeId?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    ramal?: StringFilter<"Funcionario"> | string
    telefone_corporativo?: StringFilter<"Funcionario"> | string
    funcaoId?: IntFilter<"Funcionario"> | number
    email?: StringFilter<"Funcionario"> | string
    Skype?: StringFilter<"Funcionario"> | string
    telefone_particular?: StringNullableFilter<"Funcionario"> | string | null
    cidade?: XOR<CidadesRelationFilter, CidadesWhereInput>
    funcao?: XOR<Funcao_funcionarioRelationFilter, Funcao_funcionarioWhereInput>
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    nome?: SortOrder
    ramal?: SortOrder
    telefone_corporativo?: SortOrder
    funcaoId?: SortOrder
    email?: SortOrder
    Skype?: SortOrder
    telefone_particular?: SortOrderInput | SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
    cidadeId?: IntWithAggregatesFilter<"Funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    ramal?: StringWithAggregatesFilter<"Funcionario"> | string
    telefone_corporativo?: StringWithAggregatesFilter<"Funcionario"> | string
    funcaoId?: IntWithAggregatesFilter<"Funcionario"> | number
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    Skype?: StringWithAggregatesFilter<"Funcionario"> | string
    telefone_particular?: StringNullableWithAggregatesFilter<"Funcionario"> | string | null
  }

  export type CidadesWhereInput = {
    AND?: CidadesWhereInput | CidadesWhereInput[]
    OR?: CidadesWhereInput[]
    NOT?: CidadesWhereInput | CidadesWhereInput[]
    id?: IntFilter<"Cidades"> | number
    nome?: StringFilter<"Cidades"> | string
    estadoId?: IntFilter<"Cidades"> | number
    estado?: XOR<EstadoRelationFilter, EstadoWhereInput>
    funcionarios?: FuncionarioListRelationFilter
  }

  export type CidadesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    estadoId?: SortOrder
    estado?: EstadoOrderByWithRelationInput
    funcionarios?: FuncionarioOrderByRelationAggregateInput
  }

  export type CidadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CidadesWhereInput | CidadesWhereInput[]
    OR?: CidadesWhereInput[]
    NOT?: CidadesWhereInput | CidadesWhereInput[]
    nome?: StringFilter<"Cidades"> | string
    estadoId?: IntFilter<"Cidades"> | number
    estado?: XOR<EstadoRelationFilter, EstadoWhereInput>
    funcionarios?: FuncionarioListRelationFilter
  }, "id">

  export type CidadesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    estadoId?: SortOrder
    _count?: CidadesCountOrderByAggregateInput
    _avg?: CidadesAvgOrderByAggregateInput
    _max?: CidadesMaxOrderByAggregateInput
    _min?: CidadesMinOrderByAggregateInput
    _sum?: CidadesSumOrderByAggregateInput
  }

  export type CidadesScalarWhereWithAggregatesInput = {
    AND?: CidadesScalarWhereWithAggregatesInput | CidadesScalarWhereWithAggregatesInput[]
    OR?: CidadesScalarWhereWithAggregatesInput[]
    NOT?: CidadesScalarWhereWithAggregatesInput | CidadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cidades"> | number
    nome?: StringWithAggregatesFilter<"Cidades"> | string
    estadoId?: IntWithAggregatesFilter<"Cidades"> | number
  }

  export type EstadoWhereInput = {
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    id?: IntFilter<"Estado"> | number
    nome?: StringFilter<"Estado"> | string
    abreviacao?: StringFilter<"Estado"> | string
    cidades?: CidadesListRelationFilter
  }

  export type EstadoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
    cidades?: CidadesOrderByRelationAggregateInput
  }

  export type EstadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    nome?: StringFilter<"Estado"> | string
    abreviacao?: StringFilter<"Estado"> | string
    cidades?: CidadesListRelationFilter
  }, "id">

  export type EstadoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
    _count?: EstadoCountOrderByAggregateInput
    _avg?: EstadoAvgOrderByAggregateInput
    _max?: EstadoMaxOrderByAggregateInput
    _min?: EstadoMinOrderByAggregateInput
    _sum?: EstadoSumOrderByAggregateInput
  }

  export type EstadoScalarWhereWithAggregatesInput = {
    AND?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    OR?: EstadoScalarWhereWithAggregatesInput[]
    NOT?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estado"> | number
    nome?: StringWithAggregatesFilter<"Estado"> | string
    abreviacao?: StringWithAggregatesFilter<"Estado"> | string
  }

  export type Funcao_funcionarioWhereInput = {
    AND?: Funcao_funcionarioWhereInput | Funcao_funcionarioWhereInput[]
    OR?: Funcao_funcionarioWhereInput[]
    NOT?: Funcao_funcionarioWhereInput | Funcao_funcionarioWhereInput[]
    id?: IntFilter<"Funcao_funcionario"> | number
    nome?: StringFilter<"Funcao_funcionario"> | string
    setorId?: IntFilter<"Funcao_funcionario"> | number
    descricao?: StringFilter<"Funcao_funcionario"> | string
    setor?: XOR<SetorRelationFilter, SetorWhereInput>
    funcionarios?: FuncionarioListRelationFilter
  }

  export type Funcao_funcionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    setorId?: SortOrder
    descricao?: SortOrder
    setor?: SetorOrderByWithRelationInput
    funcionarios?: FuncionarioOrderByRelationAggregateInput
  }

  export type Funcao_funcionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Funcao_funcionarioWhereInput | Funcao_funcionarioWhereInput[]
    OR?: Funcao_funcionarioWhereInput[]
    NOT?: Funcao_funcionarioWhereInput | Funcao_funcionarioWhereInput[]
    nome?: StringFilter<"Funcao_funcionario"> | string
    setorId?: IntFilter<"Funcao_funcionario"> | number
    descricao?: StringFilter<"Funcao_funcionario"> | string
    setor?: XOR<SetorRelationFilter, SetorWhereInput>
    funcionarios?: FuncionarioListRelationFilter
  }, "id">

  export type Funcao_funcionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    setorId?: SortOrder
    descricao?: SortOrder
    _count?: Funcao_funcionarioCountOrderByAggregateInput
    _avg?: Funcao_funcionarioAvgOrderByAggregateInput
    _max?: Funcao_funcionarioMaxOrderByAggregateInput
    _min?: Funcao_funcionarioMinOrderByAggregateInput
    _sum?: Funcao_funcionarioSumOrderByAggregateInput
  }

  export type Funcao_funcionarioScalarWhereWithAggregatesInput = {
    AND?: Funcao_funcionarioScalarWhereWithAggregatesInput | Funcao_funcionarioScalarWhereWithAggregatesInput[]
    OR?: Funcao_funcionarioScalarWhereWithAggregatesInput[]
    NOT?: Funcao_funcionarioScalarWhereWithAggregatesInput | Funcao_funcionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcao_funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcao_funcionario"> | string
    setorId?: IntWithAggregatesFilter<"Funcao_funcionario"> | number
    descricao?: StringWithAggregatesFilter<"Funcao_funcionario"> | string
  }

  export type SetorWhereInput = {
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    id?: IntFilter<"Setor"> | number
    nome?: StringFilter<"Setor"> | string
    descricao?: StringFilter<"Setor"> | string
    funcoes?: Funcao_funcionarioListRelationFilter
  }

  export type SetorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    funcoes?: Funcao_funcionarioOrderByRelationAggregateInput
  }

  export type SetorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SetorWhereInput | SetorWhereInput[]
    OR?: SetorWhereInput[]
    NOT?: SetorWhereInput | SetorWhereInput[]
    nome?: StringFilter<"Setor"> | string
    descricao?: StringFilter<"Setor"> | string
    funcoes?: Funcao_funcionarioListRelationFilter
  }, "id">

  export type SetorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: SetorCountOrderByAggregateInput
    _avg?: SetorAvgOrderByAggregateInput
    _max?: SetorMaxOrderByAggregateInput
    _min?: SetorMinOrderByAggregateInput
    _sum?: SetorSumOrderByAggregateInput
  }

  export type SetorScalarWhereWithAggregatesInput = {
    AND?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    OR?: SetorScalarWhereWithAggregatesInput[]
    NOT?: SetorScalarWhereWithAggregatesInput | SetorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setor"> | number
    nome?: StringWithAggregatesFilter<"Setor"> | string
    descricao?: StringWithAggregatesFilter<"Setor"> | string
  }

  export type FuncionarioCreateInput = {
    nome: string
    ramal: string
    telefone_corporativo: string
    email: string
    Skype: string
    telefone_particular?: string | null
    cidade: CidadesCreateNestedOneWithoutFuncionariosInput
    funcao: Funcao_funcionarioCreateNestedOneWithoutFuncionariosInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: number
    cidadeId: number
    nome: string
    ramal: string
    telefone_corporativo: string
    funcaoId: number
    email: string
    Skype: string
    telefone_particular?: string | null
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: CidadesUpdateOneRequiredWithoutFuncionariosNestedInput
    funcao?: Funcao_funcionarioUpdateOneRequiredWithoutFuncionariosNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadeId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    funcaoId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FuncionarioCreateManyInput = {
    id?: number
    cidadeId: number
    nome: string
    ramal: string
    telefone_corporativo: string
    funcaoId: number
    email: string
    Skype: string
    telefone_particular?: string | null
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadeId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    funcaoId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CidadesCreateInput = {
    nome: string
    estado: EstadoCreateNestedOneWithoutCidadesInput
    funcionarios?: FuncionarioCreateNestedManyWithoutCidadeInput
  }

  export type CidadesUncheckedCreateInput = {
    id?: number
    nome: string
    estadoId: number
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutCidadeInput
  }

  export type CidadesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    estado?: EstadoUpdateOneRequiredWithoutCidadesNestedInput
    funcionarios?: FuncionarioUpdateManyWithoutCidadeNestedInput
  }

  export type CidadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estadoId?: IntFieldUpdateOperationsInput | number
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutCidadeNestedInput
  }

  export type CidadesCreateManyInput = {
    id?: number
    nome: string
    estadoId: number
  }

  export type CidadesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CidadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estadoId?: IntFieldUpdateOperationsInput | number
  }

  export type EstadoCreateInput = {
    nome: string
    abreviacao: string
    cidades?: CidadesCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUncheckedCreateInput = {
    id?: number
    nome: string
    abreviacao: string
    cidades?: CidadesUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
    cidades?: CidadesUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
    cidades?: CidadesUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoCreateManyInput = {
    id?: number
    nome: string
    abreviacao: string
  }

  export type EstadoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type Funcao_funcionarioCreateInput = {
    nome: string
    descricao: string
    setor: SetorCreateNestedOneWithoutFuncoesInput
    funcionarios?: FuncionarioCreateNestedManyWithoutFuncaoInput
  }

  export type Funcao_funcionarioUncheckedCreateInput = {
    id?: number
    nome: string
    setorId: number
    descricao: string
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutFuncaoInput
  }

  export type Funcao_funcionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    setor?: SetorUpdateOneRequiredWithoutFuncoesNestedInput
    funcionarios?: FuncionarioUpdateManyWithoutFuncaoNestedInput
  }

  export type Funcao_funcionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    setorId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutFuncaoNestedInput
  }

  export type Funcao_funcionarioCreateManyInput = {
    id?: number
    nome: string
    setorId: number
    descricao: string
  }

  export type Funcao_funcionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type Funcao_funcionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    setorId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type SetorCreateInput = {
    nome: string
    descricao: string
    funcoes?: Funcao_funcionarioCreateNestedManyWithoutSetorInput
  }

  export type SetorUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    funcoes?: Funcao_funcionarioUncheckedCreateNestedManyWithoutSetorInput
  }

  export type SetorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    funcoes?: Funcao_funcionarioUpdateManyWithoutSetorNestedInput
  }

  export type SetorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    funcoes?: Funcao_funcionarioUncheckedUpdateManyWithoutSetorNestedInput
  }

  export type SetorCreateManyInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type SetorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
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

  export type CidadesRelationFilter = {
    is?: CidadesWhereInput
    isNot?: CidadesWhereInput
  }

  export type Funcao_funcionarioRelationFilter = {
    is?: Funcao_funcionarioWhereInput
    isNot?: Funcao_funcionarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    nome?: SortOrder
    ramal?: SortOrder
    telefone_corporativo?: SortOrder
    funcaoId?: SortOrder
    email?: SortOrder
    Skype?: SortOrder
    telefone_particular?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    funcaoId?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    nome?: SortOrder
    ramal?: SortOrder
    telefone_corporativo?: SortOrder
    funcaoId?: SortOrder
    email?: SortOrder
    Skype?: SortOrder
    telefone_particular?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    nome?: SortOrder
    ramal?: SortOrder
    telefone_corporativo?: SortOrder
    funcaoId?: SortOrder
    email?: SortOrder
    Skype?: SortOrder
    telefone_particular?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
    cidadeId?: SortOrder
    funcaoId?: SortOrder
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

  export type EstadoRelationFilter = {
    is?: EstadoWhereInput
    isNot?: EstadoWhereInput
  }

  export type FuncionarioListRelationFilter = {
    every?: FuncionarioWhereInput
    some?: FuncionarioWhereInput
    none?: FuncionarioWhereInput
  }

  export type FuncionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CidadesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    estadoId?: SortOrder
  }

  export type CidadesAvgOrderByAggregateInput = {
    id?: SortOrder
    estadoId?: SortOrder
  }

  export type CidadesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    estadoId?: SortOrder
  }

  export type CidadesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    estadoId?: SortOrder
  }

  export type CidadesSumOrderByAggregateInput = {
    id?: SortOrder
    estadoId?: SortOrder
  }

  export type CidadesListRelationFilter = {
    every?: CidadesWhereInput
    some?: CidadesWhereInput
    none?: CidadesWhereInput
  }

  export type CidadesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
  }

  export type EstadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
  }

  export type EstadoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    abreviacao?: SortOrder
  }

  export type EstadoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetorRelationFilter = {
    is?: SetorWhereInput
    isNot?: SetorWhereInput
  }

  export type Funcao_funcionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    setorId?: SortOrder
    descricao?: SortOrder
  }

  export type Funcao_funcionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    setorId?: SortOrder
  }

  export type Funcao_funcionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    setorId?: SortOrder
    descricao?: SortOrder
  }

  export type Funcao_funcionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    setorId?: SortOrder
    descricao?: SortOrder
  }

  export type Funcao_funcionarioSumOrderByAggregateInput = {
    id?: SortOrder
    setorId?: SortOrder
  }

  export type Funcao_funcionarioListRelationFilter = {
    every?: Funcao_funcionarioWhereInput
    some?: Funcao_funcionarioWhereInput
    none?: Funcao_funcionarioWhereInput
  }

  export type Funcao_funcionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SetorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type SetorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SetorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type SetorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type SetorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CidadesCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<CidadesCreateWithoutFuncionariosInput, CidadesUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: CidadesCreateOrConnectWithoutFuncionariosInput
    connect?: CidadesWhereUniqueInput
  }

  export type Funcao_funcionarioCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<Funcao_funcionarioCreateWithoutFuncionariosInput, Funcao_funcionarioUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: Funcao_funcionarioCreateOrConnectWithoutFuncionariosInput
    connect?: Funcao_funcionarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CidadesUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<CidadesCreateWithoutFuncionariosInput, CidadesUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: CidadesCreateOrConnectWithoutFuncionariosInput
    upsert?: CidadesUpsertWithoutFuncionariosInput
    connect?: CidadesWhereUniqueInput
    update?: XOR<XOR<CidadesUpdateToOneWithWhereWithoutFuncionariosInput, CidadesUpdateWithoutFuncionariosInput>, CidadesUncheckedUpdateWithoutFuncionariosInput>
  }

  export type Funcao_funcionarioUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<Funcao_funcionarioCreateWithoutFuncionariosInput, Funcao_funcionarioUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: Funcao_funcionarioCreateOrConnectWithoutFuncionariosInput
    upsert?: Funcao_funcionarioUpsertWithoutFuncionariosInput
    connect?: Funcao_funcionarioWhereUniqueInput
    update?: XOR<XOR<Funcao_funcionarioUpdateToOneWithWhereWithoutFuncionariosInput, Funcao_funcionarioUpdateWithoutFuncionariosInput>, Funcao_funcionarioUncheckedUpdateWithoutFuncionariosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstadoCreateNestedOneWithoutCidadesInput = {
    create?: XOR<EstadoCreateWithoutCidadesInput, EstadoUncheckedCreateWithoutCidadesInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutCidadesInput
    connect?: EstadoWhereUniqueInput
  }

  export type FuncionarioCreateNestedManyWithoutCidadeInput = {
    create?: XOR<FuncionarioCreateWithoutCidadeInput, FuncionarioUncheckedCreateWithoutCidadeInput> | FuncionarioCreateWithoutCidadeInput[] | FuncionarioUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCidadeInput | FuncionarioCreateOrConnectWithoutCidadeInput[]
    createMany?: FuncionarioCreateManyCidadeInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedManyWithoutCidadeInput = {
    create?: XOR<FuncionarioCreateWithoutCidadeInput, FuncionarioUncheckedCreateWithoutCidadeInput> | FuncionarioCreateWithoutCidadeInput[] | FuncionarioUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCidadeInput | FuncionarioCreateOrConnectWithoutCidadeInput[]
    createMany?: FuncionarioCreateManyCidadeInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type EstadoUpdateOneRequiredWithoutCidadesNestedInput = {
    create?: XOR<EstadoCreateWithoutCidadesInput, EstadoUncheckedCreateWithoutCidadesInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutCidadesInput
    upsert?: EstadoUpsertWithoutCidadesInput
    connect?: EstadoWhereUniqueInput
    update?: XOR<XOR<EstadoUpdateToOneWithWhereWithoutCidadesInput, EstadoUpdateWithoutCidadesInput>, EstadoUncheckedUpdateWithoutCidadesInput>
  }

  export type FuncionarioUpdateManyWithoutCidadeNestedInput = {
    create?: XOR<FuncionarioCreateWithoutCidadeInput, FuncionarioUncheckedCreateWithoutCidadeInput> | FuncionarioCreateWithoutCidadeInput[] | FuncionarioUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCidadeInput | FuncionarioCreateOrConnectWithoutCidadeInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutCidadeInput | FuncionarioUpsertWithWhereUniqueWithoutCidadeInput[]
    createMany?: FuncionarioCreateManyCidadeInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutCidadeInput | FuncionarioUpdateWithWhereUniqueWithoutCidadeInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutCidadeInput | FuncionarioUpdateManyWithWhereWithoutCidadeInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type FuncionarioUncheckedUpdateManyWithoutCidadeNestedInput = {
    create?: XOR<FuncionarioCreateWithoutCidadeInput, FuncionarioUncheckedCreateWithoutCidadeInput> | FuncionarioCreateWithoutCidadeInput[] | FuncionarioUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutCidadeInput | FuncionarioCreateOrConnectWithoutCidadeInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutCidadeInput | FuncionarioUpsertWithWhereUniqueWithoutCidadeInput[]
    createMany?: FuncionarioCreateManyCidadeInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutCidadeInput | FuncionarioUpdateWithWhereUniqueWithoutCidadeInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutCidadeInput | FuncionarioUpdateManyWithWhereWithoutCidadeInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type CidadesCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CidadesCreateWithoutEstadoInput, CidadesUncheckedCreateWithoutEstadoInput> | CidadesCreateWithoutEstadoInput[] | CidadesUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadesCreateOrConnectWithoutEstadoInput | CidadesCreateOrConnectWithoutEstadoInput[]
    createMany?: CidadesCreateManyEstadoInputEnvelope
    connect?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
  }

  export type CidadesUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CidadesCreateWithoutEstadoInput, CidadesUncheckedCreateWithoutEstadoInput> | CidadesCreateWithoutEstadoInput[] | CidadesUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadesCreateOrConnectWithoutEstadoInput | CidadesCreateOrConnectWithoutEstadoInput[]
    createMany?: CidadesCreateManyEstadoInputEnvelope
    connect?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
  }

  export type CidadesUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CidadesCreateWithoutEstadoInput, CidadesUncheckedCreateWithoutEstadoInput> | CidadesCreateWithoutEstadoInput[] | CidadesUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadesCreateOrConnectWithoutEstadoInput | CidadesCreateOrConnectWithoutEstadoInput[]
    upsert?: CidadesUpsertWithWhereUniqueWithoutEstadoInput | CidadesUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CidadesCreateManyEstadoInputEnvelope
    set?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    disconnect?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    delete?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    connect?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    update?: CidadesUpdateWithWhereUniqueWithoutEstadoInput | CidadesUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CidadesUpdateManyWithWhereWithoutEstadoInput | CidadesUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CidadesScalarWhereInput | CidadesScalarWhereInput[]
  }

  export type CidadesUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CidadesCreateWithoutEstadoInput, CidadesUncheckedCreateWithoutEstadoInput> | CidadesCreateWithoutEstadoInput[] | CidadesUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadesCreateOrConnectWithoutEstadoInput | CidadesCreateOrConnectWithoutEstadoInput[]
    upsert?: CidadesUpsertWithWhereUniqueWithoutEstadoInput | CidadesUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CidadesCreateManyEstadoInputEnvelope
    set?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    disconnect?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    delete?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    connect?: CidadesWhereUniqueInput | CidadesWhereUniqueInput[]
    update?: CidadesUpdateWithWhereUniqueWithoutEstadoInput | CidadesUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CidadesUpdateManyWithWhereWithoutEstadoInput | CidadesUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CidadesScalarWhereInput | CidadesScalarWhereInput[]
  }

  export type SetorCreateNestedOneWithoutFuncoesInput = {
    create?: XOR<SetorCreateWithoutFuncoesInput, SetorUncheckedCreateWithoutFuncoesInput>
    connectOrCreate?: SetorCreateOrConnectWithoutFuncoesInput
    connect?: SetorWhereUniqueInput
  }

  export type FuncionarioCreateNestedManyWithoutFuncaoInput = {
    create?: XOR<FuncionarioCreateWithoutFuncaoInput, FuncionarioUncheckedCreateWithoutFuncaoInput> | FuncionarioCreateWithoutFuncaoInput[] | FuncionarioUncheckedCreateWithoutFuncaoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutFuncaoInput | FuncionarioCreateOrConnectWithoutFuncaoInput[]
    createMany?: FuncionarioCreateManyFuncaoInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type FuncionarioUncheckedCreateNestedManyWithoutFuncaoInput = {
    create?: XOR<FuncionarioCreateWithoutFuncaoInput, FuncionarioUncheckedCreateWithoutFuncaoInput> | FuncionarioCreateWithoutFuncaoInput[] | FuncionarioUncheckedCreateWithoutFuncaoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutFuncaoInput | FuncionarioCreateOrConnectWithoutFuncaoInput[]
    createMany?: FuncionarioCreateManyFuncaoInputEnvelope
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
  }

  export type SetorUpdateOneRequiredWithoutFuncoesNestedInput = {
    create?: XOR<SetorCreateWithoutFuncoesInput, SetorUncheckedCreateWithoutFuncoesInput>
    connectOrCreate?: SetorCreateOrConnectWithoutFuncoesInput
    upsert?: SetorUpsertWithoutFuncoesInput
    connect?: SetorWhereUniqueInput
    update?: XOR<XOR<SetorUpdateToOneWithWhereWithoutFuncoesInput, SetorUpdateWithoutFuncoesInput>, SetorUncheckedUpdateWithoutFuncoesInput>
  }

  export type FuncionarioUpdateManyWithoutFuncaoNestedInput = {
    create?: XOR<FuncionarioCreateWithoutFuncaoInput, FuncionarioUncheckedCreateWithoutFuncaoInput> | FuncionarioCreateWithoutFuncaoInput[] | FuncionarioUncheckedCreateWithoutFuncaoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutFuncaoInput | FuncionarioCreateOrConnectWithoutFuncaoInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutFuncaoInput | FuncionarioUpsertWithWhereUniqueWithoutFuncaoInput[]
    createMany?: FuncionarioCreateManyFuncaoInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutFuncaoInput | FuncionarioUpdateWithWhereUniqueWithoutFuncaoInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutFuncaoInput | FuncionarioUpdateManyWithWhereWithoutFuncaoInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type FuncionarioUncheckedUpdateManyWithoutFuncaoNestedInput = {
    create?: XOR<FuncionarioCreateWithoutFuncaoInput, FuncionarioUncheckedCreateWithoutFuncaoInput> | FuncionarioCreateWithoutFuncaoInput[] | FuncionarioUncheckedCreateWithoutFuncaoInput[]
    connectOrCreate?: FuncionarioCreateOrConnectWithoutFuncaoInput | FuncionarioCreateOrConnectWithoutFuncaoInput[]
    upsert?: FuncionarioUpsertWithWhereUniqueWithoutFuncaoInput | FuncionarioUpsertWithWhereUniqueWithoutFuncaoInput[]
    createMany?: FuncionarioCreateManyFuncaoInputEnvelope
    set?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    disconnect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    delete?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    connect?: FuncionarioWhereUniqueInput | FuncionarioWhereUniqueInput[]
    update?: FuncionarioUpdateWithWhereUniqueWithoutFuncaoInput | FuncionarioUpdateWithWhereUniqueWithoutFuncaoInput[]
    updateMany?: FuncionarioUpdateManyWithWhereWithoutFuncaoInput | FuncionarioUpdateManyWithWhereWithoutFuncaoInput[]
    deleteMany?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
  }

  export type Funcao_funcionarioCreateNestedManyWithoutSetorInput = {
    create?: XOR<Funcao_funcionarioCreateWithoutSetorInput, Funcao_funcionarioUncheckedCreateWithoutSetorInput> | Funcao_funcionarioCreateWithoutSetorInput[] | Funcao_funcionarioUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: Funcao_funcionarioCreateOrConnectWithoutSetorInput | Funcao_funcionarioCreateOrConnectWithoutSetorInput[]
    createMany?: Funcao_funcionarioCreateManySetorInputEnvelope
    connect?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
  }

  export type Funcao_funcionarioUncheckedCreateNestedManyWithoutSetorInput = {
    create?: XOR<Funcao_funcionarioCreateWithoutSetorInput, Funcao_funcionarioUncheckedCreateWithoutSetorInput> | Funcao_funcionarioCreateWithoutSetorInput[] | Funcao_funcionarioUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: Funcao_funcionarioCreateOrConnectWithoutSetorInput | Funcao_funcionarioCreateOrConnectWithoutSetorInput[]
    createMany?: Funcao_funcionarioCreateManySetorInputEnvelope
    connect?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
  }

  export type Funcao_funcionarioUpdateManyWithoutSetorNestedInput = {
    create?: XOR<Funcao_funcionarioCreateWithoutSetorInput, Funcao_funcionarioUncheckedCreateWithoutSetorInput> | Funcao_funcionarioCreateWithoutSetorInput[] | Funcao_funcionarioUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: Funcao_funcionarioCreateOrConnectWithoutSetorInput | Funcao_funcionarioCreateOrConnectWithoutSetorInput[]
    upsert?: Funcao_funcionarioUpsertWithWhereUniqueWithoutSetorInput | Funcao_funcionarioUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: Funcao_funcionarioCreateManySetorInputEnvelope
    set?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    disconnect?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    delete?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    connect?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    update?: Funcao_funcionarioUpdateWithWhereUniqueWithoutSetorInput | Funcao_funcionarioUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: Funcao_funcionarioUpdateManyWithWhereWithoutSetorInput | Funcao_funcionarioUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: Funcao_funcionarioScalarWhereInput | Funcao_funcionarioScalarWhereInput[]
  }

  export type Funcao_funcionarioUncheckedUpdateManyWithoutSetorNestedInput = {
    create?: XOR<Funcao_funcionarioCreateWithoutSetorInput, Funcao_funcionarioUncheckedCreateWithoutSetorInput> | Funcao_funcionarioCreateWithoutSetorInput[] | Funcao_funcionarioUncheckedCreateWithoutSetorInput[]
    connectOrCreate?: Funcao_funcionarioCreateOrConnectWithoutSetorInput | Funcao_funcionarioCreateOrConnectWithoutSetorInput[]
    upsert?: Funcao_funcionarioUpsertWithWhereUniqueWithoutSetorInput | Funcao_funcionarioUpsertWithWhereUniqueWithoutSetorInput[]
    createMany?: Funcao_funcionarioCreateManySetorInputEnvelope
    set?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    disconnect?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    delete?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    connect?: Funcao_funcionarioWhereUniqueInput | Funcao_funcionarioWhereUniqueInput[]
    update?: Funcao_funcionarioUpdateWithWhereUniqueWithoutSetorInput | Funcao_funcionarioUpdateWithWhereUniqueWithoutSetorInput[]
    updateMany?: Funcao_funcionarioUpdateManyWithWhereWithoutSetorInput | Funcao_funcionarioUpdateManyWithWhereWithoutSetorInput[]
    deleteMany?: Funcao_funcionarioScalarWhereInput | Funcao_funcionarioScalarWhereInput[]
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

  export type CidadesCreateWithoutFuncionariosInput = {
    nome: string
    estado: EstadoCreateNestedOneWithoutCidadesInput
  }

  export type CidadesUncheckedCreateWithoutFuncionariosInput = {
    id?: number
    nome: string
    estadoId: number
  }

  export type CidadesCreateOrConnectWithoutFuncionariosInput = {
    where: CidadesWhereUniqueInput
    create: XOR<CidadesCreateWithoutFuncionariosInput, CidadesUncheckedCreateWithoutFuncionariosInput>
  }

  export type Funcao_funcionarioCreateWithoutFuncionariosInput = {
    nome: string
    descricao: string
    setor: SetorCreateNestedOneWithoutFuncoesInput
  }

  export type Funcao_funcionarioUncheckedCreateWithoutFuncionariosInput = {
    id?: number
    nome: string
    setorId: number
    descricao: string
  }

  export type Funcao_funcionarioCreateOrConnectWithoutFuncionariosInput = {
    where: Funcao_funcionarioWhereUniqueInput
    create: XOR<Funcao_funcionarioCreateWithoutFuncionariosInput, Funcao_funcionarioUncheckedCreateWithoutFuncionariosInput>
  }

  export type CidadesUpsertWithoutFuncionariosInput = {
    update: XOR<CidadesUpdateWithoutFuncionariosInput, CidadesUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<CidadesCreateWithoutFuncionariosInput, CidadesUncheckedCreateWithoutFuncionariosInput>
    where?: CidadesWhereInput
  }

  export type CidadesUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: CidadesWhereInput
    data: XOR<CidadesUpdateWithoutFuncionariosInput, CidadesUncheckedUpdateWithoutFuncionariosInput>
  }

  export type CidadesUpdateWithoutFuncionariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    estado?: EstadoUpdateOneRequiredWithoutCidadesNestedInput
  }

  export type CidadesUncheckedUpdateWithoutFuncionariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estadoId?: IntFieldUpdateOperationsInput | number
  }

  export type Funcao_funcionarioUpsertWithoutFuncionariosInput = {
    update: XOR<Funcao_funcionarioUpdateWithoutFuncionariosInput, Funcao_funcionarioUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<Funcao_funcionarioCreateWithoutFuncionariosInput, Funcao_funcionarioUncheckedCreateWithoutFuncionariosInput>
    where?: Funcao_funcionarioWhereInput
  }

  export type Funcao_funcionarioUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: Funcao_funcionarioWhereInput
    data: XOR<Funcao_funcionarioUpdateWithoutFuncionariosInput, Funcao_funcionarioUncheckedUpdateWithoutFuncionariosInput>
  }

  export type Funcao_funcionarioUpdateWithoutFuncionariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    setor?: SetorUpdateOneRequiredWithoutFuncoesNestedInput
  }

  export type Funcao_funcionarioUncheckedUpdateWithoutFuncionariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    setorId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoCreateWithoutCidadesInput = {
    nome: string
    abreviacao: string
  }

  export type EstadoUncheckedCreateWithoutCidadesInput = {
    id?: number
    nome: string
    abreviacao: string
  }

  export type EstadoCreateOrConnectWithoutCidadesInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutCidadesInput, EstadoUncheckedCreateWithoutCidadesInput>
  }

  export type FuncionarioCreateWithoutCidadeInput = {
    nome: string
    ramal: string
    telefone_corporativo: string
    email: string
    Skype: string
    telefone_particular?: string | null
    funcao: Funcao_funcionarioCreateNestedOneWithoutFuncionariosInput
  }

  export type FuncionarioUncheckedCreateWithoutCidadeInput = {
    id?: number
    nome: string
    ramal: string
    telefone_corporativo: string
    funcaoId: number
    email: string
    Skype: string
    telefone_particular?: string | null
  }

  export type FuncionarioCreateOrConnectWithoutCidadeInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutCidadeInput, FuncionarioUncheckedCreateWithoutCidadeInput>
  }

  export type FuncionarioCreateManyCidadeInputEnvelope = {
    data: FuncionarioCreateManyCidadeInput | FuncionarioCreateManyCidadeInput[]
    skipDuplicates?: boolean
  }

  export type EstadoUpsertWithoutCidadesInput = {
    update: XOR<EstadoUpdateWithoutCidadesInput, EstadoUncheckedUpdateWithoutCidadesInput>
    create: XOR<EstadoCreateWithoutCidadesInput, EstadoUncheckedCreateWithoutCidadesInput>
    where?: EstadoWhereInput
  }

  export type EstadoUpdateToOneWithWhereWithoutCidadesInput = {
    where?: EstadoWhereInput
    data: XOR<EstadoUpdateWithoutCidadesInput, EstadoUncheckedUpdateWithoutCidadesInput>
  }

  export type EstadoUpdateWithoutCidadesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateWithoutCidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    abreviacao?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUpsertWithWhereUniqueWithoutCidadeInput = {
    where: FuncionarioWhereUniqueInput
    update: XOR<FuncionarioUpdateWithoutCidadeInput, FuncionarioUncheckedUpdateWithoutCidadeInput>
    create: XOR<FuncionarioCreateWithoutCidadeInput, FuncionarioUncheckedCreateWithoutCidadeInput>
  }

  export type FuncionarioUpdateWithWhereUniqueWithoutCidadeInput = {
    where: FuncionarioWhereUniqueInput
    data: XOR<FuncionarioUpdateWithoutCidadeInput, FuncionarioUncheckedUpdateWithoutCidadeInput>
  }

  export type FuncionarioUpdateManyWithWhereWithoutCidadeInput = {
    where: FuncionarioScalarWhereInput
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyWithoutCidadeInput>
  }

  export type FuncionarioScalarWhereInput = {
    AND?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    OR?: FuncionarioScalarWhereInput[]
    NOT?: FuncionarioScalarWhereInput | FuncionarioScalarWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    cidadeId?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    ramal?: StringFilter<"Funcionario"> | string
    telefone_corporativo?: StringFilter<"Funcionario"> | string
    funcaoId?: IntFilter<"Funcionario"> | number
    email?: StringFilter<"Funcionario"> | string
    Skype?: StringFilter<"Funcionario"> | string
    telefone_particular?: StringNullableFilter<"Funcionario"> | string | null
  }

  export type CidadesCreateWithoutEstadoInput = {
    nome: string
    funcionarios?: FuncionarioCreateNestedManyWithoutCidadeInput
  }

  export type CidadesUncheckedCreateWithoutEstadoInput = {
    id?: number
    nome: string
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutCidadeInput
  }

  export type CidadesCreateOrConnectWithoutEstadoInput = {
    where: CidadesWhereUniqueInput
    create: XOR<CidadesCreateWithoutEstadoInput, CidadesUncheckedCreateWithoutEstadoInput>
  }

  export type CidadesCreateManyEstadoInputEnvelope = {
    data: CidadesCreateManyEstadoInput | CidadesCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type CidadesUpsertWithWhereUniqueWithoutEstadoInput = {
    where: CidadesWhereUniqueInput
    update: XOR<CidadesUpdateWithoutEstadoInput, CidadesUncheckedUpdateWithoutEstadoInput>
    create: XOR<CidadesCreateWithoutEstadoInput, CidadesUncheckedCreateWithoutEstadoInput>
  }

  export type CidadesUpdateWithWhereUniqueWithoutEstadoInput = {
    where: CidadesWhereUniqueInput
    data: XOR<CidadesUpdateWithoutEstadoInput, CidadesUncheckedUpdateWithoutEstadoInput>
  }

  export type CidadesUpdateManyWithWhereWithoutEstadoInput = {
    where: CidadesScalarWhereInput
    data: XOR<CidadesUpdateManyMutationInput, CidadesUncheckedUpdateManyWithoutEstadoInput>
  }

  export type CidadesScalarWhereInput = {
    AND?: CidadesScalarWhereInput | CidadesScalarWhereInput[]
    OR?: CidadesScalarWhereInput[]
    NOT?: CidadesScalarWhereInput | CidadesScalarWhereInput[]
    id?: IntFilter<"Cidades"> | number
    nome?: StringFilter<"Cidades"> | string
    estadoId?: IntFilter<"Cidades"> | number
  }

  export type SetorCreateWithoutFuncoesInput = {
    nome: string
    descricao: string
  }

  export type SetorUncheckedCreateWithoutFuncoesInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type SetorCreateOrConnectWithoutFuncoesInput = {
    where: SetorWhereUniqueInput
    create: XOR<SetorCreateWithoutFuncoesInput, SetorUncheckedCreateWithoutFuncoesInput>
  }

  export type FuncionarioCreateWithoutFuncaoInput = {
    nome: string
    ramal: string
    telefone_corporativo: string
    email: string
    Skype: string
    telefone_particular?: string | null
    cidade: CidadesCreateNestedOneWithoutFuncionariosInput
  }

  export type FuncionarioUncheckedCreateWithoutFuncaoInput = {
    id?: number
    cidadeId: number
    nome: string
    ramal: string
    telefone_corporativo: string
    email: string
    Skype: string
    telefone_particular?: string | null
  }

  export type FuncionarioCreateOrConnectWithoutFuncaoInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutFuncaoInput, FuncionarioUncheckedCreateWithoutFuncaoInput>
  }

  export type FuncionarioCreateManyFuncaoInputEnvelope = {
    data: FuncionarioCreateManyFuncaoInput | FuncionarioCreateManyFuncaoInput[]
    skipDuplicates?: boolean
  }

  export type SetorUpsertWithoutFuncoesInput = {
    update: XOR<SetorUpdateWithoutFuncoesInput, SetorUncheckedUpdateWithoutFuncoesInput>
    create: XOR<SetorCreateWithoutFuncoesInput, SetorUncheckedCreateWithoutFuncoesInput>
    where?: SetorWhereInput
  }

  export type SetorUpdateToOneWithWhereWithoutFuncoesInput = {
    where?: SetorWhereInput
    data: XOR<SetorUpdateWithoutFuncoesInput, SetorUncheckedUpdateWithoutFuncoesInput>
  }

  export type SetorUpdateWithoutFuncoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type SetorUncheckedUpdateWithoutFuncoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioUpsertWithWhereUniqueWithoutFuncaoInput = {
    where: FuncionarioWhereUniqueInput
    update: XOR<FuncionarioUpdateWithoutFuncaoInput, FuncionarioUncheckedUpdateWithoutFuncaoInput>
    create: XOR<FuncionarioCreateWithoutFuncaoInput, FuncionarioUncheckedCreateWithoutFuncaoInput>
  }

  export type FuncionarioUpdateWithWhereUniqueWithoutFuncaoInput = {
    where: FuncionarioWhereUniqueInput
    data: XOR<FuncionarioUpdateWithoutFuncaoInput, FuncionarioUncheckedUpdateWithoutFuncaoInput>
  }

  export type FuncionarioUpdateManyWithWhereWithoutFuncaoInput = {
    where: FuncionarioScalarWhereInput
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyWithoutFuncaoInput>
  }

  export type Funcao_funcionarioCreateWithoutSetorInput = {
    nome: string
    descricao: string
    funcionarios?: FuncionarioCreateNestedManyWithoutFuncaoInput
  }

  export type Funcao_funcionarioUncheckedCreateWithoutSetorInput = {
    id?: number
    nome: string
    descricao: string
    funcionarios?: FuncionarioUncheckedCreateNestedManyWithoutFuncaoInput
  }

  export type Funcao_funcionarioCreateOrConnectWithoutSetorInput = {
    where: Funcao_funcionarioWhereUniqueInput
    create: XOR<Funcao_funcionarioCreateWithoutSetorInput, Funcao_funcionarioUncheckedCreateWithoutSetorInput>
  }

  export type Funcao_funcionarioCreateManySetorInputEnvelope = {
    data: Funcao_funcionarioCreateManySetorInput | Funcao_funcionarioCreateManySetorInput[]
    skipDuplicates?: boolean
  }

  export type Funcao_funcionarioUpsertWithWhereUniqueWithoutSetorInput = {
    where: Funcao_funcionarioWhereUniqueInput
    update: XOR<Funcao_funcionarioUpdateWithoutSetorInput, Funcao_funcionarioUncheckedUpdateWithoutSetorInput>
    create: XOR<Funcao_funcionarioCreateWithoutSetorInput, Funcao_funcionarioUncheckedCreateWithoutSetorInput>
  }

  export type Funcao_funcionarioUpdateWithWhereUniqueWithoutSetorInput = {
    where: Funcao_funcionarioWhereUniqueInput
    data: XOR<Funcao_funcionarioUpdateWithoutSetorInput, Funcao_funcionarioUncheckedUpdateWithoutSetorInput>
  }

  export type Funcao_funcionarioUpdateManyWithWhereWithoutSetorInput = {
    where: Funcao_funcionarioScalarWhereInput
    data: XOR<Funcao_funcionarioUpdateManyMutationInput, Funcao_funcionarioUncheckedUpdateManyWithoutSetorInput>
  }

  export type Funcao_funcionarioScalarWhereInput = {
    AND?: Funcao_funcionarioScalarWhereInput | Funcao_funcionarioScalarWhereInput[]
    OR?: Funcao_funcionarioScalarWhereInput[]
    NOT?: Funcao_funcionarioScalarWhereInput | Funcao_funcionarioScalarWhereInput[]
    id?: IntFilter<"Funcao_funcionario"> | number
    nome?: StringFilter<"Funcao_funcionario"> | string
    setorId?: IntFilter<"Funcao_funcionario"> | number
    descricao?: StringFilter<"Funcao_funcionario"> | string
  }

  export type FuncionarioCreateManyCidadeInput = {
    id?: number
    nome: string
    ramal: string
    telefone_corporativo: string
    funcaoId: number
    email: string
    Skype: string
    telefone_particular?: string | null
  }

  export type FuncionarioUpdateWithoutCidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
    funcao?: Funcao_funcionarioUpdateOneRequiredWithoutFuncionariosNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutCidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    funcaoId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FuncionarioUncheckedUpdateManyWithoutCidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    funcaoId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CidadesCreateManyEstadoInput = {
    id?: number
    nome: string
  }

  export type CidadesUpdateWithoutEstadoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    funcionarios?: FuncionarioUpdateManyWithoutCidadeNestedInput
  }

  export type CidadesUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutCidadeNestedInput
  }

  export type CidadesUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionarioCreateManyFuncaoInput = {
    id?: number
    cidadeId: number
    nome: string
    ramal: string
    telefone_corporativo: string
    email: string
    Skype: string
    telefone_particular?: string | null
  }

  export type FuncionarioUpdateWithoutFuncaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: CidadesUpdateOneRequiredWithoutFuncionariosNestedInput
  }

  export type FuncionarioUncheckedUpdateWithoutFuncaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadeId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FuncionarioUncheckedUpdateManyWithoutFuncaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadeId?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ramal?: StringFieldUpdateOperationsInput | string
    telefone_corporativo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Skype?: StringFieldUpdateOperationsInput | string
    telefone_particular?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Funcao_funcionarioCreateManySetorInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type Funcao_funcionarioUpdateWithoutSetorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    funcionarios?: FuncionarioUpdateManyWithoutFuncaoNestedInput
  }

  export type Funcao_funcionarioUncheckedUpdateWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    funcionarios?: FuncionarioUncheckedUpdateManyWithoutFuncaoNestedInput
  }

  export type Funcao_funcionarioUncheckedUpdateManyWithoutSetorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CidadesCountOutputTypeDefaultArgs instead
     */
    export type CidadesCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CidadesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoCountOutputTypeDefaultArgs instead
     */
    export type EstadoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EstadoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Funcao_funcionarioCountOutputTypeDefaultArgs instead
     */
    export type Funcao_funcionarioCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Funcao_funcionarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SetorCountOutputTypeDefaultArgs instead
     */
    export type SetorCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SetorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FuncionarioDefaultArgs instead
     */
    export type FuncionarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FuncionarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CidadesDefaultArgs instead
     */
    export type CidadesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CidadesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstadoDefaultArgs instead
     */
    export type EstadoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EstadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Funcao_funcionarioDefaultArgs instead
     */
    export type Funcao_funcionarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Funcao_funcionarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SetorDefaultArgs instead
     */
    export type SetorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SetorDefaultArgs<ExtArgs>

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