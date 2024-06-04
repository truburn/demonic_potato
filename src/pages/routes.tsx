import { createBrowserRouter, redirect } from "react-router-dom";
import { Page } from "@layout/Page";
import { AddBook } from "@pages/AddBook";
import { AddRecipe } from "@pages/AddRecipe";
import { Book } from "@pages/Book";
import { ErrorPage } from "@pages/ErrorPage";
import { Library } from "@pages/Library";
import { PageNotFound } from "@pages/PageNotFound";
import { Recipe } from "@pages/Recipe";
import { RecipeList } from "@pages/RecipeList";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Page />,
    children: [
      {
        index: true,
        loader: () => redirect("/library"),
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "recipes",
        element: <RecipeList />,
      },
      {
        path: "book",
        children: [
          {
            index: true,
            loader: () => redirect("/library"),
          },
          {
            path: "add",
            element: <AddBook />,
          },
          {
            path: ":bookID",
            element: <Book />,
            children: [
              {
                path: "edit",
                element: <AddBook />,
              },
            ],
          },
        ],
      },
      {
        path: "recipe",
        children: [
          {
            index: true,
            loader: () => redirect("/recipes"),
          },
          {
            path: "add",
            element: <AddRecipe />,
          },
          {
            path: ":recipeID",
            element: <Recipe />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default routes;
