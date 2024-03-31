import { Base } from "./base";
import { Movies } from "./movies";
import { applyMixins } from "./utils";

// Define the Stream class which extends Base and implements Movies
class TomideStreams extends Base {}
interface TomideStreams extends Movies {}

// Add the methods and properties of Movies class to Streams using applyMixins
applyMixins(TomideStreams, [Movies]);

export default TomideStreams;
