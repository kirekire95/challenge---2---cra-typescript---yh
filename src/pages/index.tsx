import { lazy } from "react";

const Home = lazy(() => import("./home"));
const NotFoundPage = lazy(() => import("./404"));

export { Home, NotFoundPage };
