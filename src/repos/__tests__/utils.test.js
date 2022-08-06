import { rawRepos, repos } from "../../test-utils/mocks";
import * as Utils from "../utils";

describe("Repos Utils", () => {
  describe("isRepoInFavourites", () => {
    const favouriteRepoIds = [2, 4, 5, 6, 7];
    const repoId = 123;

    describe("when repo is in favourited", () => {
      const favouriteRepoIdsIncludingRepo = [...favouriteRepoIds, repoId];

      it("returns true", () => {
        expect(
          Utils.isRepoInFavourites(repoId, favouriteRepoIdsIncludingRepo)
        ).toBe(true);
      });
    });

    describe("when repo is NOT in favourited", () => {
      it("returns false", () => {
        expect(Utils.isRepoInFavourites(repoId, favouriteRepoIds)).toBe(false);
      });
    });

    describe("when favouriteRepoIds is undefined", () => {
      it("returns false", () => {
        expect(Utils.isRepoInFavourites(repoId, undefined)).toBe(false);
      });
    });

    describe("when favouriteRepoIds is empty array", () => {
      it("returns false", () => {
        expect(Utils.isRepoInFavourites(repoId, [])).toBe(false);
      });
    });
  });

  describe("enhanceRepos", () => {
    it("enhances repos", () => {
      const favouriteRepoIds = [rawRepos[1].id];

      const result = Utils.enhanceRepos(rawRepos, favouriteRepoIds);

      expect(result[0].id).toBe(1);
      expect(result[0].isFavourited).toBe(false);
      expect(result[1].id).toBe(2);
      expect(result[1].isFavourited).toBe(true);
    });
  });

  describe("filterRepos", () => {
    describe("when showOnlyFavourites filter is true", () => {
      const filters = {
        showOnlyFavourites: true,
      };

      it("filters out the not favourite ones", () => {
        const result = Utils.filterRepos(repos, filters);
        expect(result).toHaveLength(1);
        expect(result[0].isFavourited).toBe(true);
      });
    });

    describe("when showOnlyFavourites filter is falsy", () => {
      const filters = {
        showOnlyFavourites: false,
      };

      it("returns all repos", () => {
        const result = Utils.filterRepos(repos, filters);
        expect(result).toHaveLength(2);
        expect(result[0].isFavourited).toBe(false);
        expect(result[1].isFavourited).toBe(true);
      });
    });
  });
});
