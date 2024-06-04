import { createBrowserRouter, redirect } from "react-router-dom";
import { Page } from "@layout/Page";
import { EditBook } from "@pages/EditBook";
import { EditRecipe } from "@pages/EditRecipe";
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
            path: "edit/:bookID?",
            element: <EditBook />,
          },
          {
            path: ":bookID",
            element: <Book />,
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
            path: "edit/:recipeID?",
            element: <EditRecipe />,
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
