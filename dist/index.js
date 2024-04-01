var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/movies/types.ts
function convertToMovieDescription(rawData) {
  return rawData.map((data) => {
    var _a, _b, _c;
    return {
      "#TITLE": data.l,
      "#YEAR": data.y || 0,
      "#IMDB_ID": data.id,
      "#RANK": data.rank,
      "#ACTORS": data.s,
      "#AKA": data.q || "",
      "#IMDB_URL": `https://www.imdb.com/title/${data.id}`,
      "#IMG_POSTER": (_a = data == null ? void 0 : data.i) == null ? void 0 : _a.imageUrl,
      photo_width: (_b = data.i) == null ? void 0 : _b.width,
      photo_height: (_c = data.i) == null ? void 0 : _c.height
    };
  });
}

// src/movies/index.ts
var Base = class {
  constructor() {
    this.baseUrl = "https://search.imdbot.workers.dev/";
    this.fallbackUrl = "https://v2.sg.media-imdb.com/suggestion/h/";
  }
  async request(query, retry = true) {
    const url = `${this.baseUrl}?${query}`;
    const response = await fetch(url);
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      return data;
    } else if (response.status === 429) {
      console.log("429 Too Many Requests: Switching to fallback URL");
      console.log(`Requesting from fallback URL: ${this.fallbackUrl}?${query}`);
      const url2 = this.fallbackUrl + encodeURIComponent(query.replace("q=", "")) + ".json";
      const response2 = await fetch(url2);
      if (response2.ok) {
        const data = await response2.json();
        const totalMovies = convertToMovieDescription(data["d"]);
        const description = totalMovies.filter((movie) => movie["#IMG_POSTER"]);
        return {
          ok: true,
          description,
          error_code: 0
        };
      }
    } else {
      throw new Error(response.statusText);
    }
  }
};
var Movies = class extends Base {
  async getRandomMovies() {
    let uniqueMovies = /* @__PURE__ */ new Map();
    while (uniqueMovies.size < 10) {
      const randomLetter = String.fromCharCode(
        97 + Math.floor(Math.random() * 26)
      );
      const { description } = await this.request(
        `q=${randomLetter}`
      );
      description.forEach((movie) => {
        uniqueMovies.set(movie["#IMDB_ID"], movie);
      });
    }
    const shuffledMovies = Array.from(uniqueMovies.values()).sort(
      () => 0.5 - Math.random()
    );
    console.log("shuffledMovies: ", shuffledMovies);
    return shuffledMovies.slice(0, 10);
  }
  // Get Movie from API using the ID
  async getMovieById(id) {
    const movie = await this.request(`tt=${id}`);
    return movie;
  }
  // Search for movies by title or keywords
  async searchMovies(query) {
    const { description } = await this.request(
      `q=${encodeURIComponent(query)}`
    );
    return description;
  }
};

// src/utils.ts
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}

// src/index.ts
var TomideStreams = class extends Base {
};
applyMixins(TomideStreams, [Movies]);
var client = new TomideStreams();
var getRandomMovies = () => client.getRandomMovies();
getRandomMovies();
var src_default = TomideStreams;
