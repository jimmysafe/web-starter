import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export function useGetTodosQuery(
  options: Omit<Urql.UseQueryArgs<GetTodosQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetTodosQuery>({ query: GetTodosDocument, ...options });
}
