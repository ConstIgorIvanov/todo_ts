import React from "react";
import { useQuery } from "@apollo/client";
import { ITodo } from "../types/data";
import { IMission } from "../types/data";
import { GET_TODO } from "../query/getTodo";

const useTodo = () => {
  const [qtodo, setTodo] = React.useState<ITodo[]>([]);
  const { data, loading } = useQuery(GET_TODO, {
    variables: {
      limit: 5,
    },
  });

  React.useEffect(() => {
    if (!loading) {
      setTodo(
        data.missions.map((obj: IMission) => {
          return {
            id: obj.id,
            title: obj.name,
            completed: false,
          };
        })
      );
    }
  }, [data]);

  return [qtodo];
};

export default useTodo;
