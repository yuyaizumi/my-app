import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledConponents";

export const App = () => {
    return(
        <div>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
        </div>
    );
};