import { SitesHttpRequest, SitesHttpResponse } from "@yext/pages/*";
import { fetch, getRuntime } from "@yext/pages/util";

export default async function test(
    request: SitesHttpRequest
  ): Promise<SitesHttpResponse> {
    const { method, pathParams, body } = request;
  
    switch (method) {
      case "GET":
        let response = {
            yextpublic: (`${YEXT_PUBLIC_LOCATION_ENTITY_ID}`),
            nonyextpublic: (`${LOCATION_ENTITY_ID}`),
            method: method,
            pathParams: pathParams,
            body: body
        };
        return { 
            body: `${JSON.stringify(response)}`,
            headers: {},
            statusCode: 200
        }
      default:
        return { body: "Method not allowed", headers: {}, statusCode: 405 };
    }
}