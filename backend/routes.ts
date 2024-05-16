import { getInstanceRouter } from "xpresser";
/**
 * $.router - XpresserRouter
 */
const router = getInstanceRouter();

/**
 * Name in routes is optional.
 * if action of controller name is === to route name,
 * You can use the .actionAsName() function,
 * As seen in about route
 */
router.get("/", "App@index").name("index");
router.get("/about", "App@about").actionAsName();
