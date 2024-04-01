import { Base, Movies } from "./movies";
import { applyMixins } from "./utils";

class TomideStreams extends Base {}
interface TomideStreams extends Movies {}

applyMixins(TomideStreams, [Movies]);

export default TomideStreams;
