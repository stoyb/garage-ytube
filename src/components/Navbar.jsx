import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import  logo  from "../utils/logo_garage.png";
import   SearchBar   from "./SearchBar";

const Navbar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{position: 'sticky', background: '#FFF', top: 0, justifyContent: 'space-between'}}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="logo" height={45}/>
        </Link>
        <SearchBar/>
    </Stack>
)

export default Navbar