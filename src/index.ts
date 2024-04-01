import { Base, Movies } from "./movies";
import { applyMixins } from "./utils";

class TomideStreams extends Base {}
interface TomideStreams extends Movies {}

applyMixins(TomideStreams, [Movies]);

const client = new TomideStreams();

const getRandomMovies = () => client.getRandomMovies();

getRandomMovies();

export default TomideStreams;
