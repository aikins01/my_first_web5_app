import { Web5 } from "@web5/api";
import { webcrypto } from "node:crypto";

if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: aikinsDid } = await Web5.connect()
  .then((result) => {
    console.log(result.did);
    console.log(result.web5);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("web5", web5);

console.log({ web5, aikinsDid });
