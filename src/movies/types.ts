export interface MovieDescription {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
}

export interface MoviesApiResponse {
  ok: boolean;
  description: MovieDescription[];
  error_code: number;
}

export interface Movie {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
  fake: Fake;
  storyLine: StoryLine;
}
interface StoryLine {
  id: string;
  summaries: Summaries;
  outlines: PrimaryVideos;
  synopses: PrimaryVideos;
  storylineKeywords: Images;
  taglines: Images;
  genres: Genres;
  certificate?: any;
  parentsGuide: ParentsGuide;
  __typename: string;
}
interface ParentsGuide {
  guideItems: Videos;
  __typename: string;
}
interface Summaries {
  edges: Edge4[];
  __typename: string;
}
interface Edge4 {
  node: Node4;
  __typename: string;
}
interface Node4 {
  plotText: PlotText;
  experimental_translatedPlotText?: any;
  author?: any;
  __typename: string;
}
interface PlotText {
  plaidHtml: string;
  __typename: string;
}
interface Fake {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
}
interface Main {
  id: string;
  wins: Videos;
  nominations: Videos;
  prestigiousAwardSummary?: any;
  ratingsSummary: RatingsSummary2;
  episodes?: any;
  videos: Videos;
  videoStrip: PrimaryVideos;
  titleMainImages: Images;
  productionStatus: ProductionStatus;
  primaryImage?: any;
  imageUploadLink: PlotContributionLink;
  titleType: TitleType2;
  cast: Cast;
  creators: any[];
  directors: Director[];
  writers: Director[];
  isAdult: boolean;
  moreLikeThisTitles: PrimaryVideos;
  triviaTotal: Videos;
  trivia: PrimaryVideos;
  goofsTotal: Videos;
  goofs: PrimaryVideos;
  quotesTotal: Videos;
  quotes: PrimaryVideos;
  crazyCredits: PrimaryVideos;
  alternateVersions: Images;
  connections: PrimaryVideos;
  soundtrack: PrimaryVideos;
  titleText: TitleText;
  originalTitleText: TitleText;
  releaseYear: ReleaseYear2;
  reviews: Videos;
  featuredReviews: PrimaryVideos;
  canRate: CanRate;
  iframeAddReviewLink: PlotContributionLink;
  topQuestions: Images;
  faqs: Images;
  releaseDate: ReleaseDate2;
  countriesOfOrigin: CountriesOfOrigin2;
  detailsExternalLinks: Images;
  spokenLanguages: SpokenLanguages;
  akas: PrimaryVideos;
  filmingLocations: Images;
  production: Production;
  companies: Videos;
  productionBudget?: any;
  lifetimeGross?: any;
  openingWeekendGross?: any;
  worldwideGross?: any;
  technicalSpecifications: TechnicalSpecifications;
  runtime: Runtime2;
  series?: any;
  canHaveEpisodes: boolean;
  contributionQuestions: ContributionQuestions;
  __typename: string;
}
interface ContributionQuestions {
  contributionLink: PlotContributionLink;
  edges: any[];
  __typename: string;
}
interface Runtime2 {
  seconds: number;
  __typename: string;
}
interface TechnicalSpecifications {
  soundMixes: SoundMixes;
  aspectRatios: SoundMixes;
  colorations: Colorations;
  __typename: string;
}
interface Colorations {
  items: Item[];
  __typename: string;
}
interface Item {
  conceptId: string;
  text: string;
  attributes: any[];
  __typename: string;
}
interface SoundMixes {
  items: any[];
  __typename: string;
}
interface SpokenLanguages {
  spokenLanguages: CurrentProductionStage[];
  __typename: string;
}
interface CountriesOfOrigin2 {
  countries: CurrentProductionStage[];
  __typename: string;
}
interface ReleaseDate2 {
  day: number;
  month: number;
  year: number;
  country: CurrentProductionStage;
  __typename: string;
}
interface ReleaseYear2 {
  year: number;
  __typename: string;
}
interface Director {
  totalCredits: number;
  category: TitleText;
  credits: Credit[];
  __typename: string;
}
interface Cast {
  edges: Edge3[];
  __typename: string;
}
interface Edge3 {
  node: Node3;
  __typename: string;
}
interface Node3 {
  name: Name2;
  attributes?: any;
  category: Language;
  characters?: any;
  episodeCredits: EpisodeCredits;
  __typename: string;
}
interface EpisodeCredits {
  total: number;
  yearRange?: any;
  __typename: string;
}
interface Name2 {
  id: string;
  nameText: TitleText;
  primaryImage?: any;
  __typename: string;
}
interface TitleType2 {
  id: string;
  canHaveEpisodes: boolean;
  __typename: string;
}
interface RatingsSummary2 {
  topRanking?: any;
  __typename: string;
}
interface Top {
  id: string;
  productionStatus: ProductionStatus;
  canHaveEpisodes: boolean;
  series?: any;
  titleText: TitleText;
  titleType: TitleType;
  originalTitleText: TitleText;
  certificate?: any;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  canRate: CanRate;
  ratingsSummary: RatingsSummary;
  meterRanking?: any;
  primaryImage?: any;
  images: Images;
  videos: Videos;
  primaryVideos: PrimaryVideos;
  externalLinks: Videos;
  metacritic?: any;
  keywords: Images;
  genres: Genres;
  plot: Plot;
  plotContributionLink: PlotContributionLink;
  credits: Videos;
  principalCredits: PrincipalCredit[];
  reviews: Videos;
  criticReviewsTotal: Videos;
  triviaTotal: Videos;
  engagementStatistics?: any;
  subNavCredits: Videos;
  subNavReviews: Videos;
  subNavTrivia: Videos;
  subNavFaqs: Videos;
  subNavTopQuestions: Videos;
  titleGenres: TitleGenres;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle: any[];
  directorsPageTitle: DirectorsPageTitle[];
  countriesOfOrigin: CountriesOfOrigin;
  production: Production;
  featuredReviews: PrimaryVideos;
  __typename: string;
}
interface Production {
  edges: Edge2[];
  __typename: string;
}
interface Edge2 {
  node: Node2;
  __typename: string;
}
interface Node2 {
  company: Company;
  __typename: string;
}
interface Company {
  id: string;
  companyText: TitleText;
  __typename: string;
}
interface CountriesOfOrigin {
  countries: Language[];
  __typename: string;
}
interface DirectorsPageTitle {
  credits: Node[];
  __typename: string;
}
interface CastPageTitle {
  edges: Edge[];
  __typename: string;
}
interface Edge {
  node: Node;
  __typename: string;
}
interface Node {
  name: Name;
  __typename: string;
}
interface Meta {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
}
interface TitleGenres {
  genres: Genre[];
  __typename: string;
}
interface Genre {
  genre: TitleText;
  __typename: string;
}
interface PrincipalCredit {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Credit[];
  __typename: string;
}
interface Credit {
  name: Name;
  attributes?: any;
  __typename: string;
}
interface Name {
  nameText: TitleText;
  id: string;
  __typename: string;
}
interface PlotContributionLink {
  url: string;
  __typename: string;
}
interface Plot {
  plotText: Value;
  language: Language;
  __typename: string;
}
interface Language {
  id: string;
  __typename: string;
}
interface Genres {
  genres: CurrentProductionStage[];
  __typename: string;
}
interface PrimaryVideos {
  edges: any[];
  __typename: string;
}
interface Videos {
  total: number;
  __typename: string;
}
interface Images {
  total: number;
  edges: any[];
  __typename: string;
}
interface RatingsSummary {
  aggregateRating?: any;
  voteCount: number;
  __typename: string;
}
interface CanRate {
  isRatable: boolean;
  __typename: string;
}
interface Runtime {
  seconds: number;
  displayableProperty: DisplayableProperty;
  __typename: string;
}
interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}
interface ReleaseYear {
  year: number;
  endYear?: any;
  __typename: string;
}
interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: string;
}
interface Category {
  value: string;
  __typename: string;
}
interface DisplayableProperty {
  value: Value;
  __typename: string;
}
interface Value {
  plainText: string;
  __typename: string;
}
interface TitleText {
  text: string;
  __typename: string;
}
interface ProductionStatus {
  currentProductionStage: CurrentProductionStage;
  productionStatusHistory: ProductionStatusHistory[];
  restriction?: any;
  __typename: string;
}
interface ProductionStatusHistory {
  status: CurrentProductionStage;
  __typename: string;
}
interface CurrentProductionStage {
  id: string;
  text: string;
  __typename: string;
}
interface Short {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  description: string;
  genre: string[];
  datePublished: string;
  actor: Actor[];
  director: Actor[];
  creator: Creator[];
  duration: string;
}
interface Creator {
  "@type": string;
  url: string;
  name?: string;
}
interface Actor {
  "@type": string;
  url: string;
  name: string;
}
