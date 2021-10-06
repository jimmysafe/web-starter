import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  updateTodo?: Maybe<Todo>;
};

export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: "Query";
  /** Get a user by id */
  user?: Maybe<User>;
  /** Get all users */
  users?: Maybe<Array<Maybe<User>>>;
  /** Get all todos */
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type Todo = {
  __typename?: "Todo";
  id?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  done?: Maybe<Scalars["Boolean"]>;
};

export type UpdateTodoInput = {
  id?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  done?: Maybe<Scalars["Boolean"]>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type GetTodosQueryVariables = Exact<{ [key: string]: never }>;

export type GetTodosQuery = { __typename?: "Query" } & {
  todos?: Maybe<
    Array<
      Maybe<{ __typename?: "Todo" } & Pick<Todo, "id" | "description" | "done">>
    >
  >;
};

export const GetTodosDocument = gql`
  query GetTodos {
    todos {
      id
      description
      done
    }
  }
`;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(
    GetTodosDocument,
    options
  );
}
export function useGetTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTodosQuery,
    GetTodosQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(
    GetTodosDocument,
    options
  );
}
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<
  typeof useGetTodosLazyQuery
>;
export type GetTodosQueryResult = Apollo.QueryResult<
  GetTodosQuery,
  GetTodosQueryVariables
>;
