import { gql } from "@apollo/client";

export const GET_TODO = gql`
  query missions($limit: Int!) {
    missions(limit: $limit) {
      id
      name
    }
  }
`;
