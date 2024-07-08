"use client";
import { Page } from "@layout/Page";
import { Book } from "@pages/Book";
import { EditBook } from "@pages/EditBook";
import { EditRecipe } from "@pages/EditRecipe";
import { ErrorPage } from "@pages/ErrorPage";
import { Library } from "@pages/Library";
import { PageNotFound } from "@pages/PageNotFound";
import { Recipe } from "@pages/Recipe";
import { RecipeList } from "@pages/RecipeList";
import { reduceBookProps } from "@utils/bookTransformers";
import { generateClient } from "aws-amplify/data";
import { createBrowserRouter, redirect } from "react-router-dom";
import type { Schema } from "../../amplify/data/resource";
import { INITIAL_BOOK_FORM_VALUES } from "@components/BookForm";

const client = generateClient<Schema>();

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
            loader: async ({ params }) => {
              if (!params.bookID) {
                return null;
              }

              const { data } = await client.models.Book.get({
                bookID: params.bookID,
              });

              if (data) {
                return reduceBookProps(data as any);
              }

              return INITIAL_BOOK_FORM_VALUES;
            },
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
