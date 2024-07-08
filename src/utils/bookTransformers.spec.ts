import {
  reduceBookProps,
  reduceBookResponse,
  sortRecipesByPage,
} from "@utils/bookTransformers";
import bookResponseData from "@tests/testData/book-response-data.json";
import bookProps from "@tests/testData/book-props.json";
import { BookProps, BookResponse } from "@pages/Book";
import { RecipeProps } from "@pages/Recipe";

describe("bookTransformers", () => {
  it("converts a response from the API into the frontend type", () => {
    const actual = reduceBookProps(bookResponseData as BookResponse);
    expect(actual).toStrictEqual(bookProps);
  });

  it("converts a frontend book into the API response type", () => {
    const actual = reduceBookResponse(bookProps as BookProps);
    expect(actual).toStrictEqual(bookResponseData);
  });
});

describe("sortRecipesByPage", () => {
  it("sorts a list of recipes by page number", () => {
    const { recipes: recipesResponse } = bookResponseData;
    const recipes: RecipeProps[] = [];
    const randomIDs: number[] = [];
    for (let i = 0; randomIDs.length < recipesResponse.length; i++) {
      const randomIdx = Math.floor(Math.random() * recipesResponse.length);
      if (!randomIDs.includes(randomIdx)) {
        randomIDs.push(randomIdx);
        recipes.push(recipesResponse[randomIdx]);
      }
    }
    const actual = sortRecipesByPage(recipes);
    expect(actual).toStrictEqual(bookResponseData.recipes);
  });
});
