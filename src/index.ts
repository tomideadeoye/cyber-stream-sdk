import { Base, Movies } from "./movies";
import { applyMixins } from "./utils";

class TomideStreams extends Base {}
interface TomideStreams extends Movies {}

applyMixins(TomideStreams, [Movies]);

const client = new TomideStreams();

console.log(client.getRandomMovies());

export default TomideStreams;
